// alert("Test");
let html = [];
loadBundesliga2024();

function loadBundesliga2024() {
  fetch("https://api.openligadb.de/getbltable/bl1/2024")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      html = [];

      json.forEach((i) => {
        if (
          i.teamName == "1. FC Heidenheim 1846" ||
          i.teamName == "Werder Bremen"
        ) {
          html.push(
            `<div class="h-35.5 border-2 m-5 p-5 bg-white" data-teamId="${i.teamInfoId}">
               ${i.teamName}
               <div class='h-12.5 w-12.5 mb-8' ><img src="${i.teamIconUrl}" referrerpolicy="no-referrer"></div>
             </div>`
            // referrerpolicy="no-referrer" macht es möglich auf i.imgur Photos zuzugreifen die "forbidden" sind. Mann kann auch stattdessen im link "localhost:" nutzen statt 127.0.0.1
          );
        } else {
          html.push(
            `<div class="h-30 border-2 m-5 p-5 bg-white" data-teamId="${i.teamInfoId}">
               ${i.teamName}
               <div class='h-12.5 w-12.5'><img src="${i.teamIconUrl}" referrerpolicy="no-referrer"></div>
             </div>`
            // referrerpolicy="no-referrer" macht es möglich auf i.imgur Photos zuzugreifen die "forbidden" sind. Mann kann auch stattdessen im link "localhost:" nutzen statt 127.0.0.1
          );
        }
      });

      document.getElementById("table").innerHTML = html.join("");
      console.log(html);
    });
}
document.getElementById("table").addEventListener("click", (event) => {
  // Test Methode
  // let tableDiv = document.getElementById("table");

  // tableDiv.addEventListener("click", function (event) {
  //   let clickedDiv = event.target;

  //   if (clickedDiv && clickedDiv.hasAttribute("data-teamId")) {
  //     let teamId = clickedDiv.getAttribute("data-teamId");
  //     alert("click: " + teamId);
  //   }
  // });

  //Bessere Methode
  // alert("click:" + ("event", event.target.getAttribute("data-teamId")));

  let selectedTeamId = event.target.getAttribute("data-teamId");
  console.log("selectedTeamId:", selectedTeamId);
  getNextMatchForTeam(selectedTeamId);
});

function getNextMatchForTeam(teamId) {
  fetch(`https://api.openligadb.de/getnextmatchbyleagueteam/4741/${teamId}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      html = [];
      html += `
        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-2">
            <img src="${json.team1.teamIconUrl}" referrerpolicy="no-referrer" class="h-12.5 w-12.5">
            <div class="text-lg">${json.team1.teamName}</div>
          </div>
          <div class="text-xl">vs.</div>
          <div class="flex items-center space-x-2">
            <img src="${json.team2.teamIconUrl}" referrerpolicy="no-referrer" class="h-12.5 w-12.5">
            <div class="text-lg">${json.team2.teamName}</div>
          </div>
        </div>
      `;
      // referrerpolicy="no-referrer" macht das auf i.imgur Photos zugegriefen wird die "forbidden" sind. Mann kann auch stattdessen im link "localhost:" nutzen statt 127.0.0.1
      // space von tailwind kann man sich einfach vorsellen wie "gap" in css, x oder y für die achse und dann der Wert etc.
      document.getElementById("nextMatch").innerHTML = html;
      document.getElementById("Zeitpunkt").innerHTML =
        "Match Zeitpunkt: " + json.matchDateTime;
      document.getElementById("Timezone").innerHTML =
        "Timezone: " + json.timeZoneID;
    });
}
