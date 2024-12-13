import "./styles.css";
import "./normalize.css";
import "./assets/images/logo.svg";

function toggleVisibility(element: HTMLElement) {
  element.classList.toggle("hide");
  element.classList.toggle("show");
}

const welcomeMessage : HTMLElement | null = document.querySelector(".container");
document.addEventListener("DOMContentLoaded", () : void => {
  if (welcomeMessage) toggleVisibility(welcomeMessage);
});