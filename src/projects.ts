import { raw_languages, Project } from "./language-handling";
import "./projects.css"

/**
 * Creates a div element for a project.
 *
 * @param {Project} project - The project data to create the div for.
 * @returns {HTMLDivElement} The created div element.
 */
function createProjectDiv(project: Project): HTMLDivElement {

  const div = document.createElement("div") as HTMLDivElement;
  div.classList.add("project");
  div.classList.add(project.title.toLowerCase().replace(/\s/g, "-"));

  const header = document.createElement("div") as HTMLDivElement;
  header.classList.add("header");
  div.appendChild(header);

  const title = document.createElement("h2") as HTMLHeadingElement;
  title.textContent = project.title;
  header.appendChild(title);

  const link = document.createElement("a") as HTMLAnchorElement;
  link.textContent = project.link;
  link.href = project.link;
  link.target = "_blank";
  header.appendChild(link);

  const content = document.createElement("div") as HTMLDivElement;
  content.classList.add("content");
  div.appendChild(content);

  const anchor = document.createElement("a") as HTMLAnchorElement;
  anchor.href = project.link;
  anchor.target = "_blank";
  anchor.textContent = "";
  content.appendChild(anchor);

  const image = document.createElement("img") as HTMLImageElement;
  image.src = project.image;
  image.alt = project.title;
  image.width = 200;
  anchor.appendChild(image);

  const description = document.createElement("div") as HTMLDivElement;
  description.classList.add("description");
  for (const paragraph of project.description) {
    const p = document.createElement("p") as HTMLParagraphElement;
    p.textContent = paragraph;
    description.appendChild(p);
  }
  content.appendChild(description);

  div.appendChild(content);
  return div;
}

/**
 * Populates the main content of the home page with the specified language.
 *
 * @param {string} lang - The language code to use for populating the content.
 */
export default function populate(lang: string): void {
  const main = document.querySelector<HTMLElement>("main") as HTMLElement;
  main.innerHTML = "";

  const langData = raw_languages[lang] || raw_languages["en"];
  const portfolio = langData.Portfolio;

  const portfolioContainer = document.createElement("div") as HTMLDivElement;
  portfolioContainer.classList.add("portfolio-container");

  for (const project of portfolio) {
    portfolioContainer.appendChild(createProjectDiv(project));
  }

  main.appendChild(portfolioContainer);

};