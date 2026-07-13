const audioDataList = [
    { date: "2026年7月12日 星期日 23:27", src: "sounds/Desktop 2026.07.13 - 08.09.10.01.mp3" },
];

const gridContainer = document.getElementById("audioGrid");

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

        card.appendChild(dateEl);
        card.appendChild(audioEl);

        gridContainer.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderAudioCards(audioDataList);
});
