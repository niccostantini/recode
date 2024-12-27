import { raw_languages } from "./language-handling";
/**
 * Populates the main content of the home page with the specified language.
 *
 * @param {string} lang - The language code to use for populating the content.
 */
const populate = (lang) => {
    const main = document.querySelector("main");
    main.innerHTML = "";
    const langData = raw_languages[lang] || raw_languages["en"];
    const content = langData.Main;
    const logo = "ReCode";
    const subTitle = document.createElement("h4");
    subTitle.textContent = content;
    main.appendChild(subTitle);
    const title = document.createElement("h1");
    title.textContent = "";
    main.appendChild(title);
    if (main) {
        let i = 0;
        // Add a new span element every 300ms
        setInterval(() => {
            if (i < logo.length) {
                const span = document.createElement("span");
                span.textContent = logo[i];
                if (logo[i] === "R" || logo[i] === "C") { // Accent color of "R" and "C" to match the color of the links
                    span.style.color = "var(--link-color)";
                }
                title.appendChild(span);
                i++;
            }
        }, 300);
    }
    ;
};
export default populate;
