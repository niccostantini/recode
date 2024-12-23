import React, { useEffect, useRef, useState } from 'react';
import "./Main.css";
import { raw_languages } from "./language-handling";
function writeReCode(element) {
    // Early return if no element
    if (!element)
        return;
    const text = "ReCode";
    element.textContent = ""; // Clear existing text
    // Which characters should be highlighted?
    const highlightChars = ["R", "C"];
    // Helper to create a <span> with optional highlighting
    const createSpan = (char) => {
        const span = document.createElement("span");
        span.textContent = char;
        if (highlightChars.includes(char)) {
            span.style.color = "var(--link-color)";
        }
        else {
            span.style.color = "var(--text-color)";
        }
        return span;
    };
    // Animate character-by-character
    text.split("").forEach((char, index) => {
        setTimeout(() => {
            const span = createSpan(char);
            element.appendChild(span);
        }, index * 300);
    });
}
function Main() {
    var _a;
    const headingRef = useRef(null);
    const getLanguage = () => {
        // Get the language based on the selection in #language_switch
        const form = document.querySelector("#language-switch");
        if (!form)
            return "en";
        const lang = new FormData(form).get("lang");
        return lang ? lang.toString() : "en";
    };
    // Track the user’s selected language
    const [language, setLanguage] = useState(getLanguage());
    let translation = ((_a = raw_languages[language]) === null || _a === void 0 ? void 0 : _a.Main) || raw_languages.en.Main;
    useEffect(() => {
        // Run the ReCode animation on <h1> after component mounts
        writeReCode(headingRef.current);
        // Find your language-switch <form> in the DOM (from template.html)
        const form = document.getElementById("language-switch");
        if (!form)
            return;
        // Listen for changes on the radio inputs
        const handleChange = (event) => {
            const target = event.target;
            if (target.name === "lang") {
                setLanguage(target.value);
                translation = raw_languages[target.value].Main;
            }
        };
        form.addEventListener("change", handleChange);
        return () => {
            form.removeEventListener("change", handleChange);
        };
    }, []);
    return (React.createElement("div", { id: "container" },
        React.createElement("h4", null, translation),
        React.createElement("h1", { ref: headingRef })));
}
export default Main;
