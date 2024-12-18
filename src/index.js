"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./styles.css");
require("./normalize.css");
require("./assets/images/logo.svg");
const magenta_svg_1 = __importDefault(require("./assets/images/magenta.svg"));
const cyan_svg_1 = __importDefault(require("./assets/images/cyan.svg"));
const yellow_svg_1 = __importDefault(require("./assets/images/yellow.svg"));
const black_svg_1 = __importDefault(require("./assets/images/black.svg"));
const navElements = document.querySelectorAll(".nav-element");
const logoImg = document.querySelector("#logo-img");
const colorMap = {
    magenta: magenta_svg_1.default,
    cyan: cyan_svg_1.default,
    yellow: yellow_svg_1.default,
    black: black_svg_1.default,
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
