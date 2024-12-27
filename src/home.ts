import {raw_languages } from "./language-handling";

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
    setInterval(() => {
      if (i < logo.length) {

        const span = document.createElement("span") as HTMLSpanElement;
        span.textContent = logo[i];
        if (logo[i] === "R" || logo[i] === "C") {
          span.style.color = "var(--link-color)";
        }
        title.appendChild(span);
        i++;
      }
    }, 300);
  };
}

export default populate;