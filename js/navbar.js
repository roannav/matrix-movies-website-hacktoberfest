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
    <li><a href="gallery.html">Photo Gallery</a></li>
    <li><a href="wallpapers.html">Wallpapers</a></li>
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


// Language translations
const translations = {
  en: {
    welcome: "Welcome to our Movie Website!",
    description: "Explore a vast collection of movies and enjoy!"
  },
  es: {
    welcome: "¡Bienvenido a nuestro sitio web de películas!",
    description: "¡Explora una amplia colección de películas y disfruta!"
  }
};

// Function to change language
function changeLanguage(lang) {
  const elements = document.querySelectorAll('[data-translate]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}
