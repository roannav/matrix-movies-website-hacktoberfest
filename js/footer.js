 const footer = document.getElementById("footer");
footer.innerHTML = `
<div class="note-footer">
<h6>Note:</h6>
<br>
&nbsp;&nbsp;<a href="website-credits.html">Website Credits</a>&nbsp;&nbsp;
Contributions from anyone to this website are welcome!
<br><br>
&nbsp;&nbsp;Please see the <a href="https://github.com/roannav/matrix-movies-website-hacktoberfest">Matrix Movies Website GitHub Repo</a>.
<br><br>
&nbsp;&nbsp;This website is licensed under the terms of the MIT license.
<br><br>
&nbsp;&nbsp;By using this site, you agree to the <a href="terms-of-use.html">Terms of Use</a> and <a href="privacy-policy.html">Privacy Policy</a>.
</div>
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
  