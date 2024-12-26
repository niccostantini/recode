import React, { useEffect, useState } from 'react';
import "./Contact.css";

function Contact() {

  const getLanguage: () => string = (): string => {
    // Get the language based on the selection in #language_switch
    const form: HTMLFormElement = document.querySelector("#language-switch") as HTMLFormElement;
    if (!form) return "en";
    const lang: FormDataEntryValue | null = new FormData(form).get("lang");
    return lang ? lang.toString() : "en";
  }

  // Track the user’s selected language
  const [language, setLanguage] = useState(getLanguage());

  // Listen for changes on the radio inputs
  const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.name === "lang") {
      setLanguage(target.value);
    }
  };

  useEffect(() => {
    // Find your language-switch <form> in the DOM (from template.html)
    const form = document.getElementById("language-switch");
    if (!form) return;

    form.addEventListener("change", handleChange);
    return () => {
      form.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div>
      <h1>Get in touch</h1>
      <p>This is rendered inside the &lt;main&gt; element.</p>
    </div>
  );
}

export default Contact;