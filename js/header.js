const header = document.getElementById("header");
header.innerHTML = `
  <h1>THE MATRIX MOVIES WEBSITE</h1>
  <!-- <h6>A Hacktoberfest Project for Beginners</h6> -->
`;

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
