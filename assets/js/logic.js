const modeToggle = document.getElementById("modeToggle"); // Setting DOM variables
const darkModeMoon = document.getElementById("darkModeSelect");
const modeSelectCSS = document.getElementById("modeSelectCSS");
let modeSelect = "dark"; // Setting working variable, default is dark

function init() { // Runs on page load, retrieves the current mode selection from local storage
    const storedModeSelect = localStorage.getItem('modeSelection'); // and makes the appropriate changes
    if (storedModeSelect == "dark"){
        document.getElementById("lightModeSelect").style.display = 'none';
        document.getElementById("darkModeSelect").style.display = 'inline-block';
        modeSelectCSS.setAttribute("href", "./assets/css/styles.css");
    } else {
        document.getElementById("lightModeSelect").style.display = 'inline-block';
        document.getElementById("darkModeSelect").style.display = 'none';
        modeSelectCSS.setAttribute("href", "./assets/css/styles-light.css");
    }
};

modeToggle.addEventListener("change", () => { // Changes the 
  if (modeSelect == "dark") {
    modeSelect = "light";
    document.getElementById("lightModeSelect").style.display = 'inline-block';
    document.getElementById("darkModeSelect").style.display = 'none';
    modeSelectCSS.setAttribute("href", "./assets/css/styles-light.css");
} else {
    modeSelect = "dark";
    document.getElementById("lightModeSelect").style.display = 'none';
    document.getElementById("darkModeSelect").style.display = 'inline-block';
    modeSelectCSS.setAttribute("href", "./assets/css/styles.css");
  }
    localStorage.setItem('modeSelection', modeSelect);
});

init();