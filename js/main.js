const audioDataList = [
    { date: "XXXX年XX月XX日 星期X XX:XX", src: "sounds/65.mp3" },
    { date: "XXXX年XX月XX日 星期X XX:XX", src: "sounds/202607051140.mp3" },
    { date: "XXXX年XX月XX日 星期X XX:XX", src: "sounds/202607022242.mp3" },
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
