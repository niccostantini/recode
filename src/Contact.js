import React, { useEffect, useState } from 'react';
function Contact() {
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
        }
    };
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
    return (React.createElement("div", null,
        React.createElement("h1", null, "Get in touch"),
        React.createElement("p", null, "This is rendered inside the <main> element.")));
}
export default Contact;
