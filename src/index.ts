import "./styles.css";
import "./normalize.css";
import "./assets/images/logo.svg";
import magenta from "./assets/images/magenta.svg";
import cyan from "./assets/images/cyan.svg";
import yellow from "./assets/images/yellow.svg";
import black from "./assets/images/black.svg";
import { raw_languages, NavMenu, LanguageData } from "./language-handling";


const navElements: NodeListOf<HTMLLIElement> = document.querySelectorAll(".nav-element");
const logoImg: HTMLImageElement | null = document.querySelector("#logo-img");

const colorMap: Record<string, string> = {
  magenta,
  cyan,
  yellow,
  black,
};

const checkColor = (navElement: HTMLLIElement) => {
  if (navElement.classList.contains("magenta")) return "magenta";
  else if (navElement.classList.contains("cyan")) return "cyan";
  else if (navElement.classList.contains("yellow")) return "yellow";
  else if (navElement.classList.contains("black")) return "black";
  else return "black";
}

/********** ************/
/** LANGUAGE SELECTION */
/********** ************/
const languageSwitchRadio: HTMLDivElement | null = document.querySelector(".language-switch-radio");

/** LANG MENU SHOW/HIDE **/
languageSwitchRadio?.addEventListener("mouseover", () => {
  languageSwitchRadio.classList.remove("hide");
  languageSwitchRadio.classList.add("expand");
});

languageSwitchRadio?.addEventListener("mouseout", () => {
  languageSwitchRadio.classList.remove("expand");
  languageSwitchRadio.classList.add("hide");
});


let language: string = "en"; //DEFAULT LANGUAGE

function getUserLang(): void {
  language = navigator.language.split('-')[0]; // Get the language code (e.g., 'en' from 'en-US')
}

function highlightSelectedLanguage(): void {
  const selectedLanguageRadio = document.querySelector<HTMLInputElement>(`input[id="${language}-radio"]`);
  if (selectedLanguageRadio) {
    selectedLanguageRadio.checked = true;
  }
}

function populateNavBar(): void {
  const langData = raw_languages[language] || raw_languages["en"]; // Default to English if the user's language is not available

  const navMenu = langData.navMenu;

  document.querySelector<HTMLAnchorElement>("#home-link")!.textContent = navMenu.home;
  document.querySelector<HTMLAnchorElement>("#about-link")!.textContent = navMenu.about;
  document.querySelector<HTMLAnchorElement>("#projects-link")!.textContent = navMenu.projects;
  document.querySelector<HTMLAnchorElement>("#contact-link")!.textContent = navMenu.contact;
}

function getAndSetLanguage(): void {
  getUserLang();
  populateNavBar();
}

function changeLanguage(lang: string): void {
  language = lang;
  console.log(lang + " " + language)
  populateNavBar();
  highlightSelectedLanguage();
}

const languageForm = document.querySelector<HTMLFormElement>("#language-switch");
languageForm?.addEventListener("change", (e: Event) => {
  const target = e.target as HTMLInputElement;
  changeLanguage(target.value); // Change the language based on the selected radio button
  populateNavBar();
});

getAndSetLanguage();

/********** *************/
/** COLOR DROP HANDLING */
// for each nav element check the color and set the background image
navElements.forEach((navElement) => {

  const color: string = checkColor(navElement);
  console.log(color);

  const bgImg: HTMLDivElement | null = navElement.querySelector<HTMLDivElement>(".bg-img")

  if (bgImg) {
    bgImg.style.backgroundImage = `url(${colorMap[color]})`;

    document.addEventListener("DOMContentLoaded", () => {
      document.querySelector<HTMLDivElement>("#home-link")?.classList.add("active");
      document.querySelector<HTMLDivElement>("#home-link")?.classList.add("fade-in");
    })

    navElement.addEventListener("mouseover", () => {
      bgImg.classList.remove("fade-out");

      bgImg.classList.add("fade-in");
    });
    navElement.addEventListener("mouseout", () => {
      if (!bgImg.classList.contains("active")) {
        bgImg.classList.add("fade-out");
      }
    });

    navElement.addEventListener("click", (e: MouseEvent) => {
      document.querySelectorAll(".bg-img.active").forEach((img) => {
        img.classList.remove("active");
        img.classList.add("fade-out");
      });
      bgImg.classList.add("active");
      logoImg?.classList.add("shrink")
    });
  }

});