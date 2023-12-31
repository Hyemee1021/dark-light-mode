const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

//Dark or Light Images
function imageMode(color) {
  image1.src = `img/undraw_conceptual_idea_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_proud_coder_${color}.svg`;
}

function toggleDarkLightMode(isLight) {
  nav.style.backgroundColor = isLight
    ? "rgb(0 0 0 /50%)"
    : "rgb(255 255 255 /50%)";
  textBox.style.backgroundColor = isLight
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0 / 50%)";
}
// Dark Mode Style
function darkMode() {
  toggleIcon.children[0].textContent = "Dark Mode";

  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");

  imageMode("dark");
}

// light Mode Style
function lightMode() {
  toggleIcon.children[0].textContent = "Light Mode";

  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");

  imageMode("light");
}

//SwitchTheme
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");

    localStorage.setItem("theme", "dark");

    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");

    localStorage.setItem("theme", "light");

    lightMode();
  }
}

//Event Listener
toggleSwitch.addEventListener("change", switchTheme);

//Check local storage for Theme
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("dark-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    darkMode();
  }
}
