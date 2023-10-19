// castArray is defined in cast.js and contains info about all
// the actors in the movie
//
// crewArray is defined in crew.js and contains info about
// each crew member of the movie

let txt = "";
castArray.forEach((row) => {
  txt +=
    "<p><span class='cast-role'>" +
    row[2] +
    "</span></p>";
});
const castRows = document.getElementById("rol-cast");
castRows.innerHTML = txt;

txt = "";
castArray.forEach((row) => {
  txt +=
    "<p><span class='cast-name'>" +
    row[1].toUpperCase() +
    "</span></p>";
});
const castRows2 = document.getElementById("name-act");
castRows2.innerHTML = txt;

txt = "";
crewArray.forEach((row) => {
  console.log(row);
  txt +=
    "<p><span class='crew-role'>" +
    row[1] +
    "</span></p>";
});
const crewRows = document.getElementById("rol-crew");
crewRows.innerHTML = txt;

txt = "";
crewArray.forEach((row) => {
  console.log(row);
  txt +=
    "<p><span class='crew-name'>" +
    row[0].toUpperCase() +
    "</span></p>";
});
const crewRows2 = document.getElementById("name-crew");
crewRows2.innerHTML = txt;