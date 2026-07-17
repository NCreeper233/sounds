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
];

const gridContainer = document.getElementById("audioGrid");
const allAudioElements = [];

function renderAudioCards(dataArray) {
    dataArray.forEach(item => {
        const card = document.createElement("div");
        card.className = "audio-card";

        const dateEl = document.createElement("div");
        dateEl.className = "card-date";
        dateEl.textContent = item.date;

        const audioEl = document.createElement("audio");
        audioEl.controls = true;
        audioEl.src = item.src;

        allAudioElements.push(audioEl);

        card.appendChild(dateEl);
        card.appendChild(audioEl);

        gridContainer.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderAudioCards(audioDataList);

    document.getElementById("playAllBtn").addEventListener("click", () => {
        allAudioElements.forEach(audio => {
            audio.currentTime = 0;
            audio.play();
        });
    });
});
