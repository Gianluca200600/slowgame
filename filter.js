export const filters = {
	name: "",
	description: "",
	minPlayerNumber: 0,
	maxPlayerNumber: 0,
	playingTime: ""
}

const resetFilters = () => {
	filters.name = "";
	filters.description = "";
	filters.minPlayerNumber = 0;
	filters.maxPlayerNumber
	filters.playingTime = "";
}

const nameElement = document.getElementById("name");
const minPlayersElement = document.getElementById("min-player-number");
const maxPlayersElement = document.getElementById("max-player-number");
const playingTimeElement = document.getElementById("playing-time");

nameElement.addEventListener("input", (event) => {
	filters.name = event.target.value;
});

minPlayersElement.addEventListener("input", (event) => {
	filters.minPlayerNumber = event.target.value;
});

maxPlayersElement.addEventListener("input", (event) => {
	filters.maxPlayerNumber = event.target.value;
});

playingTimeElement.addEventListener("input", (event) => {
	filters.playingTime = event.target.value;
});