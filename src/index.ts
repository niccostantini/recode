import "./styles.css";
import "./normalize.css";
import "./assets/images/logo.svg";
import magenta from "./assets/images/magenta.svg";
import cyan from "./assets/images/cyan.svg";
import yellow from "./assets/images/yellow.svg";
import black from "./assets/images/black.svg";

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

/** LANG MENU SHOW/HIDE **/
languageSwitchRadio?.addEventListener("mouseover", () => {
  languageSwitchRadio.classList.remove("hide");
  languageSwitchRadio.classList.add("expand");
});

languageSwitchRadio?.addEventListener("mouseout", () => {
  languageSwitchRadio.classList.remove("expand");
  languageSwitchRadio.classList.add("hide");
});
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