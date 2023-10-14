const navbar = document.getElementById("navbar");
navbar.innerHTML = `
<div class="nav" id="navid">
<a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
<ul class="navbar-container">
    <li><a href="characters.html">Characters</a></li>
    <li><a href="plot.html">Plot</a></li>
    <li><a href="scenes.html">Favourite Scenes</a></li>
    <li><a href="cast-crew.html">Cast & Crew</a></li>
    <li><a href="reviews.html">Reviews</a></li>
    <li><a href="games.html">Games</a></li>      
  </ul>
</div>

  
`;
function myFunction() {
  var x = document.getElementById("navid");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}