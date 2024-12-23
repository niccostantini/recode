import React, { useEffect, useRef, useState } from 'react';
import "./About.css";
import { raw_languages } from "./language-handling";
let translation = raw_languages.en.About;
function About() {
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
    // Listen for changes on the radio inputs
    const handleChange = (event) => {
        const target = event.target;
        if (target.name === "lang") {
            setLanguage(target.value);
            let title = raw_languages[target.value].About.philosophy[0];
        }
    };
    let title = raw_languages[language].About.philosophy[0];
    let philosophyText = raw_languages[language].About.philosophy[1];
    let whatIDoTitle = raw_languages[language].About.what_i_do.title;
    let whatIDoCodingHeading = raw_languages[language].About.what_i_do.coding[0];
    let whatIDoCodingText = raw_languages[language].About.what_i_do.coding[1];
    let whatIDoDesignHeading = raw_languages[language].About.what_i_do.design[0];
    let whatIDoDesignText = raw_languages[language].About.what_i_do.design[1];
    let whatIDoSewingHeading = raw_languages[language].About.what_i_do.sewing[0];
    let whatIDoSewingText = raw_languages[language].About.what_i_do.sewing[1];
    let journeyTitle = raw_languages[language].About.journey[0];
    let journeyFirstParagraph = raw_languages[language].About.journey[1];
    let journeySecondParagraph = raw_languages[language].About.journey[2];
    let journeyThirdParagraph = raw_languages[language].About.journey[3];
    useEffect(() => {
        // Find your language-switch <form> in the DOM (from template.html)
        const form = document.getElementById("language-switch");
        if (!form)
            return;
        form.addEventListener("change", handleChange);
        return () => {
            form.removeEventListener("change", handleChange);
        };
    }, []);
    return (React.createElement("div", { id: "container" },
        React.createElement("div", { className: language == "ar" ? "paragraph ar" : "paragraph" },
            React.createElement("h2", { ref: headingRef }, title),
            React.createElement("p", null, philosophyText)),
        React.createElement("div", { className: language == "ar" ? "paragraph ar" : "paragraph" },
            React.createElement("h2", null, whatIDoTitle),
            React.createElement("p", null,
                React.createElement("strong", null, whatIDoCodingHeading),
                ": ",
                whatIDoCodingText),
            React.createElement("p", null,
                React.createElement("strong", null, whatIDoDesignHeading),
                ": ",
                whatIDoDesignText),
            React.createElement("p", null,
                React.createElement("strong", null, whatIDoSewingHeading),
                ": ",
                whatIDoSewingText)),
        React.createElement("div", { className: language == "ar" ? "paragraph ar" : "paragraph" },
            React.createElement("h2", null, journeyTitle),
            React.createElement("p", null, journeyFirstParagraph),
            React.createElement("p", null, journeySecondParagraph),
            React.createElement("p", null, journeyThirdParagraph))));
}
export default About;
