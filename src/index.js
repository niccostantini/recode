// Import styles
import "./styles.css";
import "./normalize.css";
// Import images
import "./assets/images/arrow.gif";
import "./assets/images/logo.svg";
import "./assets/images/language.svg";
import magenta from "./assets/images/magenta.svg";
import cyan from "./assets/images/cyan.svg";
import yellow from "./assets/images/yellow.svg";
import black from "./assets/images/black.svg";
// Import components
import { raw_languages } from "./language-handling";
import About from "./about";
import Home from "./home";
import Projects from "./projects";
import Contact from "./contact";
const navElements = document.querySelectorAll(".nav-element");
const logoImg = document.querySelector("#logo-img");
const colorMap = {
    magenta,
    cyan,
    yellow,
    black,
};
const componentMap = {
    About,
    Home,
    Projects,
    Contact
};
const checkColor = (navElement) => {
    if (navElement.classList.contains("magenta"))
        return "magenta";
    else if (navElement.classList.contains("cyan"))
        return "cyan";
    else if (navElement.classList.contains("yellow"))
        return "yellow";
    else if (navElement.classList.contains("black"))
        return "black";
    else
        return "black";
};
const backdrop = document.querySelector(".backdrop");
const languageInstructions = document.querySelector("#language-instructions");
document.addEventListener("click", () => {
    backdrop.classList.add("fade-out");
    languageInstructions.classList.add("fade-out");
    setTimeout(() => {
        backdrop.style.display = "none";
        languageInstructions.style.display = "none";
    }, 550);
});
/********** ************/
/** LANGUAGE SELECTION */
/********** ************/
const languageSwitchRadio = document.querySelector(".language-switch-radio");
/** LANG MENU SHOW/HIDE **/
languageSwitchRadio === null || languageSwitchRadio === void 0 ? void 0 : languageSwitchRadio.addEventListener("mouseover", () => {
    languageSwitchRadio.classList.remove("hide");
    languageSwitchRadio.classList.add("expand");
});
languageSwitchRadio === null || languageSwitchRadio === void 0 ? void 0 : languageSwitchRadio.addEventListener("mouseout", () => {
    languageSwitchRadio.classList.remove("expand");
    languageSwitchRadio.classList.add("hide");
});
let language = "en"; /** DEFAULT LANGUAGE */
// Get the user's language
function getUserLang() {
    language = navigator.language.split('-')[0]; // Get the language code (e.g., 'en' from 'en-US')
}
// Highlight the selected language radio button
function highlightSelectedLanguage() {
    const selectedLanguageRadio = document.querySelector(`input[id="${language}-radio"]`);
    if (selectedLanguageRadio) {
        selectedLanguageRadio.checked = true;
    }
}
// Populate the navigation bar with the selected language
function populateNavBar() {
    const langData = raw_languages[language] || raw_languages["en"]; // Default to English if the user's language is not available
    const navMenu = langData.navMenu;
    document.querySelector("#Home-link").textContent = navMenu.home;
    document.querySelector("#About-link").textContent = navMenu.about;
    document.querySelector("#Projects-link").textContent = navMenu.projects;
    document.querySelector("#Contact-link").textContent = navMenu.contact;
}
// Choose the language
function getAndSetLanguage() {
    getUserLang();
    populateNavBar();
    highlightSelectedLanguage();
}
// Change the language
function changeLanguage(lang) {
    language = lang;
    console.log(lang + " " + language);
    populateNavBar();
    highlightSelectedLanguage();
}
// Event listener for the language radio buttons
const languageForm = document.querySelector("#language-switch");
languageForm === null || languageForm === void 0 ? void 0 : languageForm.addEventListener("change", (e) => {
    var _a;
    const target = e.target;
    changeLanguage(target.value); // Change the language based on the selected radio button
    populateNavBar();
    const activeComponent = (_a = document.querySelector(".active + a")) === null || _a === void 0 ? void 0 : _a.id.split("-")[0]; //get Home || About || Projects || Contact
    if (activeComponent) {
        componentMap[activeComponent](language); // Populate the main content with the selected language
    }
});
// Set the language
getAndSetLanguage();
/********** *************/
/** COLOR DROP HANDLING */
/********** *************/
// for each nav element check the color and set the background image
navElements.forEach((navElement) => {
    const color = checkColor(navElement);
    const bgImg = navElement.querySelector(".bg-img");
    // Set the background image based on the color
    if (bgImg) {
        bgImg.style.backgroundImage = `url(${colorMap[color]})`;
        document.addEventListener("DOMContentLoaded", () => {
            var _a, _b;
            (_a = document.querySelector("#home-link")) === null || _a === void 0 ? void 0 : _a.classList.add("active");
            (_b = document.querySelector("#home-link")) === null || _b === void 0 ? void 0 : _b.classList.add("fade-in");
        });
        // Add event listeners for the hover effect - mousein
        navElement.addEventListener("mouseover", () => {
            bgImg.classList.remove("fade-out");
            bgImg.classList.add("fade-in");
        });
        // Add event listeners for the hover effect - mouseout
        navElement.addEventListener("mouseout", () => {
            if (!bgImg.classList.contains("active")) {
                bgImg.classList.add("fade-out");
            }
        });
        // Add event listeners for the click effect
        navElement.addEventListener("click", (e) => {
            var _a;
            // Remove the active class from all the background images and add the fade-out class
            document.querySelectorAll(".bg-img.active").forEach((img) => {
                img.classList.remove("active");
                img.classList.add("fade-out");
            });
            // Add the active class to the clicked background image
            // Remove the fade-out class and add the
            // fade-in class to the clicked background image
            bgImg.classList.add("active");
            logoImg === null || logoImg === void 0 ? void 0 : logoImg.classList.remove("magnify");
            logoImg === null || logoImg === void 0 ? void 0 : logoImg.classList.add("shrink");
            const anchorId = (_a = navElement.querySelector("a")) === null || _a === void 0 ? void 0 : _a.id;
            const linkedPage = anchorId.split("-")[0];
            componentMap[linkedPage](language);
        });
    }
});
// Add event listener for the logo image to magnify it when clicked
logoImg === null || logoImg === void 0 ? void 0 : logoImg.addEventListener("click", (e) => {
    logoImg === null || logoImg === void 0 ? void 0 : logoImg.classList.add("magnify");
    logoImg === null || logoImg === void 0 ? void 0 : logoImg.classList.remove("shrink");
});
