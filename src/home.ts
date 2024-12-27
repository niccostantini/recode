import { raw_languages } from "./language-handling";

/**
 * Populates the main content of the home page with the specified language.
 *
 * @param {string} lang - The language code to use for populating the content.
 */
const populate = (lang: string): void => {

  const main = document.querySelector<HTMLElement>("main") as HTMLElement;
  main.innerHTML = "";

  const langData = raw_languages[lang] || raw_languages["en"];
  const content = langData.Main;
  const logo = "ReCode";

  const subTitle = document.createElement("h4") as HTMLHeadingElement;
  subTitle.textContent = content;
  main.appendChild(subTitle);

  const title = document.createElement("h1") as HTMLHeadingElement;
  title.textContent = "";
  main.appendChild(title);

  if (main) {
    let i = 0;

    // Add a new span element every 300ms
    setInterval(() => {
      if (i < logo.length) {
        const span = document.createElement("span") as HTMLSpanElement;
        span.textContent = logo[i];
        if (logo[i] === "R" || logo[i] === "C") { // Accent color of "R" and "C" to match the color of the links
          span.style.color = "var(--link-color)";
        }
        title.appendChild(span);
        i++;
      }
    }, 300);
  };
}

export default populate;