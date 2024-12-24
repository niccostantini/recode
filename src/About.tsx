import React, {useEffect, useRef, useState} from 'react';
import "./About.css";
import { raw_languages } from "./language-handling";

function About() {
  const headingRef = useRef<HTMLHeadingElement>(null);

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
  let journeyParagraphs = new Array(raw_languages[language].About.journey[1],
                                               raw_languages[language].About.journey[2],
                                               raw_languages[language].About.journey[3]);

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
    <div id="container">
      {/* Render the text based on the selected language */}

      <div className={language == "ar" ? "paragraph ar" : "paragraph"}>
        <h2 ref={headingRef}>{title}</h2>
        <p>{philosophyText}</p>
      </div>

      <div className={language == "ar" ? "paragraph ar" : "paragraph"}>
        <h2>{whatIDoTitle}</h2>
        <p>
          <strong>{whatIDoCodingHeading}</strong>: {whatIDoCodingText}
        </p>
        <p>
          <strong>{whatIDoDesignHeading}</strong>: {whatIDoDesignText}
        </p>
        <p>
          <strong>{whatIDoSewingHeading}</strong>: {whatIDoSewingText}
        </p>
      </div>

      <div className={language == "ar" ? "paragraph ar" : "paragraph"}>
        <h2>{journeyTitle}</h2>
        {journeyParagraphs.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>

    </div>
    );
}

export default About;