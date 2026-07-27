/**
 * 千音雅集 - 音频数据源
 * 每条记录包含录制时间戳和音频文件路径
 * src 路径相对于 index.html 所在目录
 */
const audioDataList = [
    { date: "2026年7月12日 星期日 23:27", src: "sounds/Desktop 2026.07.13 - 08.09.10.01.ogg" },
    { date: "2026年7月13日 星期一 14:55", src: "sounds/Desktop 2026.07.13 - 15.38.16.02.ogg" },
    { date: "2026年7月13日 星期一 14:55", src: "sounds/Desktop 2026.07.13 - 15.38.28.03.ogg" },
    { date: "2026年7月13日 星期一 17:05", src: "sounds/Desktop 2026.07.13 - 17.49.55.04.ogg" },
    { date: "2026年7月13日 星期一 17:17", src: "sounds/Desktop 2026.07.13 - 17.50.33.05.ogg" },
    { date: "2026年7月13日 星期一 19:12", src: "sounds/Desktop 2026.07.13 - 19.13.00.06.ogg" },
    { date: "2026年7月14日 星期二 14:01", src: "sounds/Desktop 2026.07.14 - 14.01.38.01.ogg" },
    { date: "2026年7月14日 星期二 14:04", src: "sounds/Desktop 2026.07.14 - 14.04.41.02.ogg" },
    { date: "2026年7月14日 星期二 22:34", src: "sounds/Desktop 2026.07.15 - 07.41.27.02.ogg" },
    { date: "2026年7月15日 星期三 16:33", src: "sounds/Desktop 2026.07.15 - 17.29.39.06.ogg" },
    { date: "2026年7月15日 星期三 17:23", src: "sounds/Desktop 2026.07.15 - 17.29.49.07.ogg" },
    { date: "2026年7月15日 星期三 17:28", src: "sounds/Desktop 2026.07.15 - 17.29.58.08.ogg" },
    { date: "2026年7月15日 星期三 22:22", src: "sounds/Desktop 2026.07.16 - 14.30.57.01.ogg" },
    { date: "2026年7月16日 星期四 13:40", src: "sounds/Desktop 2026.07.16 - 14.31.11.02.ogg" },
    { date: "2026年7月16日 星期四 14:15", src: "sounds/Desktop 2026.07.16 - 14.31.20.03.ogg" },
    { date: "2026年7月17日 星期五 11:40", src: "sounds/Desktop 2026.07.17 - 11.46.12.02.ogg" },
    { date: "2026年7月17日 星期五 14:31", src: "sounds/Desktop 2026.07.17 - 17.23.20.03.ogg" },
    { date: "2026年7月17日 星期五 17:18", src: "sounds/Desktop 2026.07.17 - 17.23.32.04.ogg" },
    { date: "2026年7月17日 星期五 17:22", src: "sounds/Desktop 2026.07.17 - 17.23.43.05.ogg" },
    { date: "2026年7月18日 星期六 19:18", src: "sounds/Desktop 2026.07.18 - 19.19.38.05.ogg" },
    { date: "2026年7月19日 星期日 11:37", src: "sounds/Desktop 2026.07.19 - 11.38.57.01.ogg" },
    { date: "2026年7月19日 星期日 11:51", src: "sounds/Desktop 2026.07.19 - 11.53.45.02.ogg" },
    { date: "2026年7月19日 星期日 11:53", src: "sounds/Desktop 2026.07.19 - 11.53.52.03.ogg" },
    { date: "2026年7月19日 星期日 13:21", src: "sounds/Desktop 2026.07.19 - 13.22.01.04.ogg" },
    { date: "2026年7月19日 星期日 13:23", src: "sounds/Desktop 2026.07.19 - 13.24.57.05.ogg" },
    { date: "2026年7月20日 星期一 16:58", src: "sounds/Desktop 2026.07.21 - 12.26.17.03.ogg" },
    { date: "2026年7月20日 星期一 17:00", src: "sounds/Desktop 2026.07.21 - 12.26.29.04.ogg" },
    { date: "2026年7月22日 星期三 13:35", src: "sounds/Desktop 2026.07.23 - 15.32.22.01.ogg" },
    { date: "2026年7月22日 星期三 13:56", src: "sounds/Desktop 2026.07.23 - 15.32.35.02.ogg" },
    { date: "2026年7月23日 星期四 15:31", src: "sounds/Desktop 2026.07.23 - 15.32.47.03.ogg" },
    { date: "2026年7月25日 星期六 16:03", src: "sounds/Desktop 2026.07.25 - 17.06.16.04.ogg" },
    { date: "2026年7月25日 星期六 16:09", src: "sounds/Desktop 2026.07.25 - 17.06.28.05.ogg" },
    { date: "2026年7月25日 星期六 16:28", src: "sounds/Desktop 2026.07.25 - 17.06.38.06.ogg" },
    { date: "2026年7月26日 星期日 22:23", src: "sounds/Desktop 2026.07.27 - 20.37.07.03.ogg" },
    { date: "2026年7月26日 星期日 23:10", src: "sounds/Desktop 2026.07.27 - 20.37.21.04.ogg" },
    { date: "2026年7月27日 星期一 15:08", src: "sounds/Desktop 2026.07.27 - 20.37.47.05.ogg" },
    { date: "2026年7月27日 星期一 16:42", src: "sounds/Desktop 2026.07.27 - 20.38.01.06.ogg" },
    { date: "2026年7月27日 星期一 16:43", src: "sounds/Desktop 2026.07.27 - 20.38.09.07.ogg" },
    { date: "2026年7月27日 星期一 16:44", src: "sounds/Desktop 2026.07.27 - 20.38.22.08.ogg" },
    { date: "2026年7月27日 星期一 17:11", src: "sounds/Desktop 2026.07.27 - 20.38.32.09.ogg" },
];

const MILESTONES = [
    { threshold: 500, title: "大丨成丨至丨雅" },
    { threshold: 450, title: "凤丨箫丨声丨动" },
    { threshold: 400, title: "金丨石丨丝丨竹" },
    { threshold: 350, title: "八丨音丨和丨鸣" },
    { threshold: 300, title: "天丨籁丨之丨音" },
    { threshold: 250, title: "高丨山丨流丨水" },
    { threshold: 200, title: "余丨音丨绕丨梁" },
    { threshold: 150, title: "渐丨入丨佳丨境" },
    { threshold: 100, title: "大丨雅丨之丨堂" },
    { threshold: 50,  title: "初丨窥丨门丨径" },
    { threshold: 0,   title: "空丨谷丨足丨音" },
];

function getStage(count) {
    for (const m of MILESTONES) {
        if (count >= m.threshold) return m.title;
    }
    return "空丨谷丨足丨音";
}

/**
 * DOM 就绪后初始化页面
 * - 渲染音频卡片网格
 * - 绑定"全部播放"事件
 * - 绑定"全部倒放"事件
 */
document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("audioGrid");
    const audioElements = [];               // 收集所有 <audio> 元素，供正放/暂停使用

    /**
     * 根据数据源渲染音频卡片
     * 每个卡片包含：日期标签 + <audio controls> 播放器
     */
    function renderAudioCards(dataArray) {
        dataArray.forEach(item => {
            const card = document.createElement("div");
            card.className = "audio-card";

            const dateEl = document.createElement("div");
            dateEl.className = "card-date";
            dateEl.textContent = item.date;

            const audioEl = document.createElement("audio");
            audioEl.controls = true;          // 显示浏览器原生控制条
            audioEl.src = item.src;

            audioElements.push(audioEl);

            card.appendChild(dateEl);
            card.appendChild(audioEl);

            gridContainer.appendChild(card);
        });
    }

    renderAudioCards(audioDataList);

    {
        const n = audioDataList.length;
        if (n > 0) {
            const parts = audioDataList[n - 1].date.split(" ");
            document.getElementById("startBtn").textContent =
                `截至${parts[0]} ${parts[2]}，已收录${n}条雅音`;
        }
    }

    document.getElementById("stageDisplay").textContent =
        getStage(audioDataList.length);

    /* ---------- kk 物理 ---------- */
    (function initKK() {
        const el = document.getElementById('kk');
        const inner = document.getElementById('kk-inner');

        function syncMouth() {
            const anyPlaying = audioElements.some(a => !a.paused);
            document.querySelectorAll('.kk-inner').forEach(el => {
                el.classList.toggle('kk-open', anyPlaying);
            });
        }

        function onPlay() {
            syncMouth();
            for (const ks of kkStates) {
                if (ks.body) {
                    M.Body.setVelocity(ks.body, {
                        x: ks.body.velocity.x + (Math.random() - 0.5) * 3,
                        y: Math.max(ks.body.velocity.y - 5, -10)
                    });
                }
            }
        }
        function onStop() { syncMouth(); }

        audioElements.forEach(a => {
            a.addEventListener('play', onPlay);
            a.addEventListener('ended', onStop);
            a.addEventListener('pause', onStop);
        });

        /* ----- Matter.js（页面坐标系） ----- */
        const M = Matter;
        const engine = M.Engine.create({ gravity: { x: 0, y: 0.8 } });
        let body, mouseConstraint, mouse;
        const barStates = [];
        const kkStates = [{ el, inner, isOriginal: true }];
        const BW = 180, BH = 14;
        let started = false;

        function docH() {
            return Math.max(
                document.documentElement.scrollHeight,
                document.body.scrollHeight,
                window.innerHeight + 200
            );
        }

        function rebuild() {
            if (!started) return;
            document.querySelectorAll('.glass-bar').forEach(el => el.remove());
            document.querySelectorAll('.kk-clone').forEach(el => el.remove());
            M.World.clear(engine.world, false);

            const iw = window.innerWidth, dh = docH();
            const w = parseInt(getComputedStyle(el).width) || 100;
            const h = w;
            const floorY = dh;

            const clonePositions = [];
            for (let i = 1; i < kkStates.length; i++) {
                const ks = kkStates[i];
                if (ks.body) clonePositions.push({ x: ks.body.position.x, y: ks.body.position.y });
            }
            kkStates.length = 1;
            kkStates[0].body = null;

            const initY = Math.min(window.scrollY + 80, floorY - 60);
            body = M.Bodies.rectangle(iw - 74, initY, w, h, {
                restitution: 0.55, friction: 0.08, frictionAir: 0.015,
                density: 0.002, chamfer: { radius: 8 }
            });
            kkStates[0].body = body;

            const wo = { isStatic: true, restitution: 0.4, friction: 0.3 };
            const ground = M.Bodies.rectangle(iw / 2, floorY + 35, iw * 2, 70, wo);
            const left   = M.Bodies.rectangle(-35, dh / 2, 70, dh * 2, wo);
            const right  = M.Bodies.rectangle(iw + 35, dh / 2, 70, dh * 2, wo);
            M.World.add(engine.world, [body, ground, left, right]);

            for (const p of clonePositions) addKKClone(p.x, p.y);

            for (const s of barStates) {
                const b = M.Bodies.rectangle(s.x, s.y, BW, BH, {
                    isStatic: true, restitution: 0.3, friction: 0.2, chamfer: { radius: 6 }
                });
                M.World.add(engine.world, b);
                s.body = b;
                const dom = document.createElement('div');
                dom.className = 'glass-bar';
                dom.style.left = (s.x - BW / 2) + 'px';
                dom.style.top = (s.y - BH / 2) + 'px';
                document.body.appendChild(dom);
                s.el = dom;
            }

            mouse = M.Mouse.create(document.body);
            mouseConstraint = M.MouseConstraint.create(engine, {
                mouse, constraint: { stiffness: 0.15, render: { visible: false } }
            });
            M.World.add(engine.world, mouseConstraint);
        }

        function addBarAt(px, py) {
            const s = { x: px, y: py };
            barStates.push(s);
            const b = M.Bodies.rectangle(px, py, BW, BH, {
                isStatic: true, restitution: 0.3, friction: 0.2, chamfer: { radius: 6 }
            });
            M.World.add(engine.world, b);
            s.body = b;
            const dom = document.createElement('div');
            dom.className = 'glass-bar';
            dom.style.left = (px - BW / 2) + 'px';
            dom.style.top = (py - BH / 2) + 'px';
            document.body.appendChild(dom);
            s.el = dom;
        }

        function addKKClone(x, y) {
            const iw = window.innerWidth, dh = docH();
            const w = parseInt(getComputedStyle(el).width) || 100;
            const h = w;
            const b = M.Bodies.rectangle(x, y, w, h, {
                restitution: 0.55, friction: 0.08, frictionAir: 0.015,
                density: 0.002, chamfer: { radius: 8 }
            });
            M.World.add(engine.world, b);
            const cloneOuter = el.cloneNode(true);
            cloneOuter.removeAttribute('id');
            cloneOuter.className = 'kk kk-clone';
            cloneOuter.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
            const cloneInner = cloneOuter.querySelector('.kk-inner');
            cloneInner.classList.toggle('kk-open', Math.random() < 0.5);
            document.body.appendChild(cloneOuter);
            const ks = { body: b, el: cloneOuter, inner: cloneInner, isOriginal: false };
            kkStates.push(ks);
            return ks;
        }

        let painting = false, paintX = 0, paintY = 0;
        const PAINT_GAP = 40;
        document.addEventListener('contextmenu', e => e.preventDefault());
        document.addEventListener('mousedown', e => {
            if (e.button !== 2) return;
            for (const ks of kkStates) {
                if (ks.body && ks.el) {
                    const r = ks.el.getBoundingClientRect();
                    if (e.pageX >= r.left + window.scrollX && e.pageX <= r.right + window.scrollX &&
                        e.pageY >= r.top + window.scrollY && e.pageY <= r.bottom + window.scrollY) {
                        addKKClone(ks.body.position.x, ks.body.position.y);
                        return;
                    }
                }
            }
            painting = true; paintX = e.pageX; paintY = e.pageY;
            addBarAt(e.pageX, e.pageY);
        });
        document.addEventListener('mousemove', e => {
            if (!painting) return;
            if ((e.pageX - paintX) ** 2 + (e.pageY - paintY) ** 2 >= PAINT_GAP ** 2) {
                addBarAt(e.pageX, e.pageY);
                paintX = e.pageX; paintY = e.pageY;
            }
        });
        document.addEventListener('mouseup', e => {
            if (e.button === 2) painting = false;
        });

        let rt;
        window.addEventListener('resize', () => {
            clearTimeout(rt); rt = setTimeout(rebuild, 150);
        });
        function loop() {
            M.Engine.update(engine, 1000 / 60);
            for (const ks of kkStates) {
                if (ks.body && ks.el) {
                    ks.el.style.transform =
                        `translate(${ks.body.position.x - ks.el.offsetWidth / 2}px,${ks.body.position.y - ks.el.offsetHeight / 2}px) rotate(${ks.body.angle}rad)`;
                }
            }
            requestAnimationFrame(loop);
        }

        document.getElementById('startBtn').addEventListener('click', function start() {
            started = true;
            el.style.display = 'block';
            barStates.push({ x: window.innerWidth - 100, y: window.scrollY + window.innerHeight - 180 });
            rebuild();
            loop();
            const n = audioDataList.length;
            if (n > 0) {
                const parts = audioDataList[n - 1].date.split(" ");
                this.textContent = `截至${parts[0]} ${parts[2]}，已收录${n}条雅音`;
            }
            this.style.cursor = 'default';
            this.style.pointerEvents = 'none';
        });
    })();

    /* =========================================================
       倒放相关状态
       decodedCache : 缓存已反转的 AudioBuffer，避免重复网络请求
       reverseSources: 当前正在播放的倒放源，用于停止倒放
       reverseCtx    : 全局复用的 AudioContext
       ========================================================= */
    const decodedCache = new Map();
    let reverseSources = [];
    let reverseCtx = null;

    /**
     * 停止所有正在播放的倒放音频
     * 遍历 reverseSources 对每个 BufferSource 调用 stop()
     * 清空数组以便重新开始
     */
    function stopReverse() {
        reverseSources.forEach(s => { try { s.stop(); } catch (_) {} });
        reverseSources = [];
    }

    /* -------------------- 全部正放 -------------------- */
    document.getElementById("playAllBtn").addEventListener("click", () => {
        stopReverse();                          // 互斥：正放前先停止倒放
        audioElements.forEach(audio => {
            audio.currentTime = 0;              // 从头开始
            audio.play();
        });
    });

    /* -------------------- 全部倒放 -------------------- */
    document.getElementById("reverseAllBtn").addEventListener("click", async () => {
        stopReverse();                          // 互斥：倒放前先停止上一次倒放
        audioElements.forEach(audio => { audio.pause(); audio.currentTime = 0; });  // 停止正放

        // 延迟创建 AudioContext，避免页面加载时无用户交互被浏览器阻止
        if (!reverseCtx) {
            reverseCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        // 多数浏览器要求 AudioContext 在用户手势后 resume
        if (reverseCtx.state === "suspended") await reverseCtx.resume();

        /**
         * 并发处理所有音频文件
         * 每个任务：查缓存 → fetch → decode → Array.prototype.reverse.call() → play
         */
        const tasks = audioDataList.map(async item => {
            try {
                let buf;

                // 缓存命中则跳过网络请求和解码
                if (decodedCache.has(item.src)) {
                    buf = decodedCache.get(item.src);
                } else {
                    // 1. 以二进制形式获取音频文件
                    const res = await fetch(item.src);
                    const raw = await res.arrayBuffer();

                    // 2. 解码 OGG → PCM 浮点样本
                    buf = await reverseCtx.decodeAudioData(raw);

                    // 3. 反转每个声道的时间轴数据
                    //    Float32Array 是 AudioBuffer 内部数据的视图，
                    //    Array.prototype.reverse.call() 将其原地颠倒，
                    //    第一个样本变最后一个，从而实现倒放
                    for (let ch = 0; ch < buf.numberOfChannels; ch++) {
                        Array.prototype.reverse.call(buf.getChannelData(ch));
                    }

                    // 4. 存入缓存，下次点击直接使用
                    decodedCache.set(item.src, buf);
                }

                // 5. 创建音频源节点并播放
                const src = reverseCtx.createBufferSource();
                src.buffer = buf;
                src.connect(reverseCtx.destination);
                src.start();
                reverseSources.push(src);       // 记录以便 stopReverse 能停止它
            } catch (e) {
                console.error("倒放失败:", item.src, e);
            }
        });

        // 等待所有音频加载→解码→反转→播放完成
        await Promise.all(tasks);
    });

});
