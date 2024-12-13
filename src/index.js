"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./styles.css");
require("./normalize.css");
require("./assets/images/logo.svg");
function toggleVisibility(element) {
    element.classList.toggle("hide");
    element.classList.toggle("show");
}
const welcomeMessage = document.querySelector(".container");
document.addEventListener("DOMContentLoaded", () => {
    if (welcomeMessage)
        toggleVisibility(welcomeMessage);
});
