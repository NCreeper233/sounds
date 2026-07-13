const audioDataList = [
    { date: "2026年7月12日 星期日 23:27", src: "sounds/Desktop 2026.07.13 - 08.09.10.01.mp3" },
    { date: "2026年7月13日 星期一 14:55", src: "sounds/Desktop 2026.07.13 - 15.38.16.02.mp3" },
    { date: "2026年7月13日 星期一 14:55", src: "sounds/Desktop 2026.07.13 - 15.38.28.03.mp3" },
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
