"use strict";

let teams = [
    { code: "", name: "Select a team", plays: "" }, // Default option
    { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
    { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
    { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
    { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" }
];

// Function to initialize the dropdown with team options
function initialize() {
    const selectElement = document.getElementById('dropdown'); // Find the dropdown elemen

    selectElement.innerHTML = "";
    teams.forEach(function (team) { // Loop through the teams
        let option = new Option(team.name, team.code); // Create an option for each team
        selectElement.appendChild(option); // Add the option to the dropdown
    });
}

// Function to display the selected team info
function showTeamInfo(event) {
    event.preventDefault();
    let selectedTeamCode = document.getElementById('dropdown').value; // Find the selected team's code
    let selectedTeam = teams.find(team => team.code === selectedTeamCode); // Find the team object based on the code

    if (selectedTeam) { // If a team is selected
        let teamInfoElement = document.getElementById('teamInfo'); // Show the team's name and location
        teamInfoElement.textContent = ` You selected the ${selectedTeam.name} (${selectedTeam.code}) who play in ${selectedTeam.plays}`;
    } else {
        alert('Please select a team.'); // If no team is selected, alert the user
    }
}

// Initialize the page when it loads
window.onload = function () {
    initialize();
    initEventHandlers();
};

function initEventHandlers() {
    // document.getElementById('submitButton').addEventListener('click', showTeamInfo); // Add an event listener to the button
    document.getElementById("footballForm").addEventListener("submit", function(event) {
        showTeamInfo(event);
    });
}
