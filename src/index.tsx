import React, { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import 'boxicons';

import Main from './Main';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

import "./styles.css";
import "./normalize.css";
import "./assets/images/logo.svg";
import "./assets/images/language.svg";
import magenta from "./assets/images/magenta.svg";
import cyan from "./assets/images/cyan.svg";
import yellow from "./assets/images/yellow.svg";
import black from "./assets/images/black.svg";
import { raw_languages } from "./language-handling";


const navElements: NodeListOf<HTMLLIElement> = document.querySelectorAll(".nav-element");
const logoImg: HTMLImageElement | null = document.querySelector("#logo-img");

// Map the color to the background image
const colorMap: Record<string, string> = {
  magenta,
  cyan,
  yellow,
  black,
};

// Map the background image ID to the component
const componentMap: Record<string, React.ComponentType<any>> = {
  Main,
  About,
  Projects,
  Contact
};

function MyComponent({ bgImgId }: { bgImgId: string }) {
  // Look up the component in the map
  const SelectedComponent = componentMap[bgImgId];

  if (!SelectedComponent) {
    return <div>Unknown component ID: {bgImgId}</div>;
  }

  // Render the matched component
  return <SelectedComponent />;
}

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

// Get the user's language
function getUserLang(): void {
  language = navigator.language.split('-')[0]; // Get the language code (e.g., 'en' from 'en-US')
}

// Highlight the selected language radio button
function highlightSelectedLanguage(): void {
  const selectedLanguageRadio = document.querySelector<HTMLInputElement>(`input[id="${language}-radio"]`);
  if (selectedLanguageRadio) {
    selectedLanguageRadio.checked = true;
  }
}

// Populate the navigation bar with the selected language
function populateNavBar(): void {
  const langData = raw_languages[language] || raw_languages["en"]; // Default to English if the user's language is not available

  const navMenu = langData.navMenu;

  document.querySelector<HTMLAnchorElement>("#home-link")!.textContent = navMenu.home;
  document.querySelector<HTMLAnchorElement>("#about-link")!.textContent = navMenu.about;
  document.querySelector<HTMLAnchorElement>("#projects-link")!.textContent = navMenu.projects;
  document.querySelector<HTMLAnchorElement>("#contact-link")!.textContent = navMenu.contact;
}

// Populate the <main> element with the selected language
function populateMain(): void {
  const main = document.querySelector<HTMLDivElement>("main");
}

// Choose the language
function getAndSetLanguage(): void {
  getUserLang();
  populateNavBar();
  highlightSelectedLanguage();
}

// Change the language
function changeLanguage(lang: string): void {
  language = lang;
  console.log(lang + " " + language)
  populateNavBar();
  highlightSelectedLanguage();
}

// Event listener for the language radio buttons
const languageForm = document.querySelector<HTMLFormElement>("#language-switch");
languageForm?.addEventListener("change", (e: Event) => {
  const target = e.target as HTMLInputElement;
  changeLanguage(target.value); // Change the language based on the selected radio button
  populateNavBar();
});

// Set the language
getAndSetLanguage();

/********** *************/
/** COLOR DROP HANDLING */
/********** *************/
// for each nav element check the color and set the background image
navElements.forEach((navElement) => {

  const color: string = checkColor(navElement);

  const bgImg: HTMLDivElement | null = navElement.querySelector<HTMLDivElement>(".bg-img")

  // Set the background image based on the color
  if (bgImg) {
    bgImg.style.backgroundImage = `url(${colorMap[color]})`;

    document.addEventListener("DOMContentLoaded", () => {
      document.querySelector<HTMLDivElement>("#home-link")?.classList.add("active");
      document.querySelector<HTMLDivElement>("#home-link")?.classList.add("fade-in");
    })

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
    navElement.addEventListener("click", (e: MouseEvent) => {
      // Remove the active class from all the background images and add the fade-out class
      document.querySelectorAll(".bg-img.active").forEach((img) => {
        img.classList.remove("active");
        img.classList.add("fade-out");
      });
      // Add the active class to the clicked background image
      // Remove the fade-out class and add the
      // fade-in class to the clicked background image
      bgImg.classList.add("active");
      logoImg?.classList.remove("magnify");
      logoImg?.classList.add("shrink")

      //Use React to render the component that corresponds to the clicked nav link
      if (bgImg) root.render(<MyComponent bgImgId={bgImg.id} />)
      else throw new Error("Could not find the background image element!");
    });
  }
});

document.querySelector("#logo-img")?.addEventListener("click", (e) => {
  root.render(<MyComponent bgImgId={"Main"} />)
  document.querySelectorAll(".bg-img.active").forEach((img) => {
    img.classList.remove("active");
    img.classList.add("fade-out");
  });
  logoImg?.classList.remove("shrink");
  logoImg?.classList.add("magnify");
});

const rootElement = document.querySelector('main');
if (!rootElement) {
  throw new Error("Could not find 'main' element to mount to!");
}
const root = createRoot(rootElement);

root.render(<Main />);