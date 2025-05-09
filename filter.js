export const filters = {
    name: "",
    playerNumber: "",
    playingTime: ""
}

const resetFilters = () => {
    filters.name = "";
    filters.playerNumber = "";
    filters.playingTime = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.getElementById("name");
    const playersElement = document.getElementById("player-number");
    const playingTimeElement = document.getElementById("playing-time");

    nameElement.addEventListener("input", (event) => {
        filters.name = event.target.value;
    });

    playersElement.addEventListener("input", (event) => {
        filters.playerNumber = event.target.value;
    });

    playingTimeElement.addEventListener("input", (event) => {
        filters.playingTime = event.target.value;
    });
});