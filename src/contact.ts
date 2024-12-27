import { raw_languages } from "./language-handling";
import email from "./assets/images/email.png";
import github from "./assets/images/github.png";
import instagram from "./assets/images/instagram.png";

interface SocialData {
  [key: string]: string;
  email: string;
  github: string;
  instagram: string;
}

const SocialData: SocialData = {
  email: "costantiniccolo@gmail.com",
  github: "https://github.com/niccostantini",
  instagram: "https://www.instagram.com/the_niccolo/"
}

const SocialIcons: Record<string, any> = {
  email,
  github,
  instagram
};

/**
 * Populates the main content of the home page with the specified language.
 *
 * @param {string} lang - The language code to use for populating the content.
 */
export default function populate(lang: string): void {
  const main = document.querySelector<HTMLElement>("main") as HTMLElement;
  main.innerHTML = "";

  const langData = raw_languages[lang] || raw_languages["en"];
  const content = langData.Contact;

  const title = document.createElement("h1") as HTMLHeadingElement;
  title.textContent = content.title;
  main.appendChild(title);

  const description = document.createElement("p") as HTMLParagraphElement;
  description.textContent = content.content;
  main.appendChild(description);

  //function that writes the social icons with link
  for (const social in SocialData) {
    const div = document.createElement("div") as HTMLDivElement;
    div.classList.add("social-icon");
    const icon = document.createElement("img") as HTMLImageElement;
    icon.src = SocialIcons[social];
    icon.alt = social;
    icon.classList.add("icon");
    div.appendChild(icon);
    const link = document.createElement("a") as HTMLAnchorElement;
    link.textContent = SocialData[social];
    link.href = SocialData[social];
    link.target = "_blank";
    div.appendChild(link);
    main.appendChild(div);
  }

}