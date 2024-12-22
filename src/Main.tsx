import React, {useEffect, useRef, useState} from 'react';
import "./Main.css";
import "./normalize.css";
import "./styles.css"

import { raw_languages } from "./language-handling";

function writeReCode(element: HTMLElement | null) {
  // Early return if no element
  if (!element) return;

  const text = "ReCode";
  element.textContent = ""; // Clear existing text

  // Which characters should be highlighted?
  const highlightChars = ["R", "C"];

  // Helper to create a <span> with optional highlighting
  const createSpan = (char: string) => {
    const span = document.createElement("span");
    span.textContent = char;
    if (highlightChars.includes(char)) {
      span.style.color = "blue";
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

let translation: string = raw_languages.en.Main;

function Main() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Track the user’s selected language
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    // Run the ReCode animation on <h1> after component mounts
    writeReCode(headingRef.current);

    // Find your language-switch <form> in the DOM (from template.html)
    const form = document.getElementById("language-switch");
    if (!form) return;

    // Listen for changes on the radio inputs
    const handleChange = (event: Event) => {
      const target = event.target as HTMLInputElement;
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

  return (
    <div id="container">
      {/* Render the text based on the selected language */}
      <h4>{translation}</h4>

      <h1 ref={headingRef}></h1>
    </div>
  );
}

export default Main;