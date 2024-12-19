import "./styles.css";
import "./normalize.css";
import "./assets/images/logo.svg";
import magenta from "./assets/images/magenta.svg";
import cyan from "./assets/images/cyan.svg";
import yellow from "./assets/images/yellow.svg";
import black from "./assets/images/black.svg";
const navElements = document.querySelectorAll(".nav-element");
const logoImg = document.querySelector("#logo-img");
const colorMap = {
    magenta,
    cyan,
    yellow,
    black,
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
navElements.forEach((navElement) => {
    const color = checkColor(navElement);
    console.log(color);
    const bgImg = navElement.querySelector(".bg-img");
    if (bgImg) {
        bgImg.style.backgroundImage = `url(${colorMap[color]})`;
        document.addEventListener("DOMContentLoaded", () => {
            var _a, _b;
            (_a = document.querySelector("#home-link")) === null || _a === void 0 ? void 0 : _a.classList.add("active");
            (_b = document.querySelector("#home-link")) === null || _b === void 0 ? void 0 : _b.classList.add("fade-in");
        });
        navElement.addEventListener("mouseover", () => {
            bgImg.classList.remove("fade-out");
            bgImg.classList.add("fade-in");
        });
        navElement.addEventListener("mouseout", () => {
            if (!bgImg.classList.contains("active")) {
                bgImg.classList.add("fade-out");
            }
        });
        navElement.addEventListener("click", (e) => {
            document.querySelectorAll(".bg-img.active").forEach((img) => {
                img.classList.remove("active");
                img.classList.add("fade-out");
            });
            bgImg.classList.add("active");
            logoImg === null || logoImg === void 0 ? void 0 : logoImg.classList.add("shrink");
        });
    }
});
