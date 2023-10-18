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
    "</span><span class='cast-name'>" +
    row[1].toUpperCase() +
    "</span></p>";
});
const castRows = document.getElementById("cast-rows");
castRows.innerHTML = txt;

txt = "";
crewArray.forEach((row) => {
  console.log(row);
  txt +=
    "<p><span class='crew-role'>" +
    row[1] +
    "</span><span class='crew-name'>" +
    row[0].toUpperCase() +
    "</span></p>";
});
const crewRows = document.getElementById("crew-rows");
crewRows.innerHTML = txt;
