import os
import subprocess
import shutil
import datetime
import json


CONFIG_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "config.json")
JS_FILE = r"G:\Web\Sound\js\main.js"

CN_DIGITS = {"零": 0, "一": 1, "二": 2, "三": 3, "四": 4,
             "五": 5, "六": 6, "七": 7, "八": 8, "九": 9}


def parse_cn_number(s):
    """将中文数字（如"二十三"）转换为整数"""
    s = s.strip()
    if not s:
        return 0
    if "十" not in s:
        if len(s) == 1 and s in CN_DIGITS:
            return CN_DIGITS[s]
        if s.startswith("十"):
            return 10 + parse_cn_number(s[1:])
        result = 0
        for c in s:
            if c in CN_DIGITS:
                result = result * 10 + CN_DIGITS[c]
        return result
    parts = s.split("十", 1)
    before, after = parts[0], parts[1]
    before_val = CN_DIGITS.get(before, 0) if before else 1
    after_val = parse_cn_number(after) if after else 0
    return before_val * 10 + after_val


def parse_time(text):
    """将"十四点三十分"格式转为"14:30"格式"""
    text = text.strip()
    if "点" in text:
        parts = text.split("点", 1)
        hour = parse_cn_number(parts[0]) if parts[0] else 0
        minute = parse_cn_number(parts[1]) if len(parts) > 1 and parts[1] else 0
        return f"{hour:02d}:{minute:02d}"
    return text


def load_config():
    """读取 config.json 配置文件"""
    with open(CONFIG_FILE, "r", encoding="utf-8") as f:
        return json.load(f)


def get_duration(filepath):
    """通过 ffprobe 获取音视频时长，返回 MM:SS 格式字符串"""
    result = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration",
         "-of", "default=noprint_wrappers=1:nokey=1", filepath],
        capture_output=True, text=True
    )
    if result.returncode != 0:
        return "??:??"
    secs = float(result.stdout.strip())
    m, s = divmod(int(secs), 60)
    return f"{m:02d}:{s:02d}"


def find_mp4_files(videos_dir):
    """扫描 videos_dir，返回所有 .mp4 文件排序后的列表"""
    files = [f for f in os.listdir(videos_dir) if f.lower().endswith(".mp4")]
    files.sort()
    return files


def convert_to_ogg(mp4_files, videos_dir):
    """调用 ffmpeg 将 mp4 文件逐一声道转为 ogg（libvorbis），返回成功转换的文件名列表"""
    converted = []
    for i, mp4 in enumerate(mp4_files, 1):
        name = os.path.splitext(mp4)[0]
        ogg_name = name + ".ogg"
        src = os.path.join(videos_dir, mp4)
        dst = os.path.join(videos_dir, ogg_name)
        print(f"[{i}/{len(mp4_files)}] 转换中: {mp4} -> {ogg_name}")
        result = subprocess.run(
            ["ffmpeg", "-y", "-i", src, "-vn", "-acodec", "libvorbis", dst],
            capture_output=True,
        )
        if result.returncode != 0:
            print(f"  转换失败: {result.stderr.decode('utf-8', errors='replace')}")
            continue
        converted.append(ogg_name)
        print(f"  转换完成")
    return converted


def delete_mp4(mp4_files, videos_dir):
    """逐个删除已转换的 mp4 源文件"""
    for mp4 in mp4_files:
        path = os.path.join(videos_dir, mp4)
        os.remove(path)
        print(f"已删除: {mp4}")


def move_ogg(ogg_files, videos_dir, sounds_dir):
    """将 ogg 文件从 videos_dir 移动到 sounds 目录"""
    for ogg in ogg_files:
        src = os.path.join(videos_dir, ogg)
        dst = os.path.join(sounds_dir, ogg)
        shutil.move(src, dst)
        print(f"已移动: {ogg} -> sounds/")


def get_date_info(ogg_files, year, month):
    """逐一询问用户每个 ogg 的日期和时间，返回 (完整日期字符串, 文件名) 列表"""
    entries = []
    for ogg in ogg_files:
        print(f"\n--- 为文件设置日期: {ogg} ---")
        while True:
            day = input("请输入日 (如 17): ").strip()
            try:
                valid_day = int(day)
                datetime.date(year, month, valid_day)
                break
            except ValueError:
                print("  日期无效，请重新输入")
        while True:
            raw = input("请输入时间 (如 14:30): ").strip()
            time_str = parse_time(raw)
            try:
                h, m = time_str.split(":")
                h, m = int(h), int(m)
                if 0 <= h <= 23 and 0 <= m <= 59:
                    break
                print("  时间无效（小时0-23，分钟0-59），请重新输入")
            except ValueError:
                print("  时间格式无效，请重新输入")
        weekday_full = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"][datetime.date(year, month, valid_day).weekday()]
        date_str = f"{year}年{month}月{day}日 {weekday_full} {time_str}"
        entries.append((date_str, ogg))
        print(f"  已记录: {date_str} -> sounds/{ogg}")
    return entries


def edit_js(entries):
    """将新记录以 JS 数组元素格式插入 main.js 的 audioDataList 末尾（第一个 ]; 之前）"""
    with open(JS_FILE, "r", encoding="utf-8") as f:
        content = f.read()

    new_lines = []
    for date_str, ogg in entries:
        line = f'    {{ date: "{date_str}", src: "sounds/{ogg}" }},'
        new_lines.append(line)

    insert_text = "\n".join(new_lines) + "\n"
    content = content.replace("];", insert_text + "];", 1)

    with open(JS_FILE, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"\n已更新 main.js，新增 {len(entries)} 条记录")


def git_deploy(sounds_dir):
    """在项目根目录依次执行 git add / commit / push，完成部署"""
    git_dir = os.path.dirname(sounds_dir)
    commands = [
        ("git add .", "暂存所有文件"),
        ('git commit -m "commit"', "提交更改"),
        ("git push -u origin main", "推送到远程"),
    ]
    for cmd, desc in commands:
        print(f"\n执行: {cmd}")
        result = subprocess.run(cmd, shell=True, capture_output=True, cwd=git_dir)
        if result.returncode != 0:
            print(f"  失败: {result.stderr.decode('utf-8', errors='replace')}")
        else:
            output = result.stdout.decode("utf-8", errors="replace").strip()
            if output:
                print(f"  {output}")
            print(f"  {desc} 完成")


def main():
    """主流程：读取配置 → 查找 MP4 → 显示文件及时长 → 转 OGG → 删源文件 → 移动 → 输入日期 → 更新 JS → Git 部署"""
    config = load_config()
    videos_dir = config["videos_dir"]
    sounds_dir = config["sounds_dir"]
    year = config["year"]
    month = config["month"]

    print("=" * 50)
    print("千音雅集音频转换及修改提交工具")
    print("=" * 50)

    mp4_files = find_mp4_files(videos_dir)

    if not mp4_files:
        print("Desktop 文件夹中没有找到 mp4 文件，跳过转换步骤")
    else:
        print(f"\n找到 {len(mp4_files)} 个 mp4 文件:")
        for f in mp4_files:
            fpath = os.path.join(videos_dir, f)
            dur = get_duration(fpath)
            print(f"  - {f} ({dur})")

        print(f"\n{'=' * 50}")
        print("步骤1: 转换 mp4 为 ogg")
        converted = convert_to_ogg(mp4_files, videos_dir)
        if not converted:
            print("没有文件成功转换，退出")
            return

        print(f"\n{'=' * 50}")
        print("步骤2: 删除 mp4 文件")
        delete_mp4(mp4_files, videos_dir)

        print(f"\n{'=' * 50}")
        print("步骤3: 移动 ogg 到 sounds 目录")
        move_ogg(converted, videos_dir, sounds_dir)

        print(f"\n{'=' * 50}")
        print("步骤4: 输入日期信息")
        entries = get_date_info(converted, year, month)

        print(f"\n{'=' * 50}")
        print("步骤5: 编辑 main.js")
        edit_js(entries)

    print(f"\n{'=' * 50}")
    print("步骤6: Git 部署")
    git_deploy(sounds_dir)

    print(f"\n{'=' * 50}")
    print("全部完成!")
    input("\n按任意键退出...")


if __name__ == "__main__":
    main()
