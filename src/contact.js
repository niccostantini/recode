import { raw_languages } from "./language-handling";
import email from "./assets/images/email.png";
import github from "./assets/images/github.png";
import instagram from "./assets/images/instagram.png";
const SocialData = {
    email: "costantiniccolo@gmail.com",
    github: "https://github.com/niccostantini",
    instagram: "https://www.instagram.com/the_niccolo/"
};
const SocialIcons = {
    email,
    github,
    instagram
};
/**
 * Populates the main content of the home page with the specified language.
 *
 * @param {string} lang - The language code to use for populating the content.
 */
export default function populate(lang) {
    const main = document.querySelector("main");
    main.innerHTML = "";
    const langData = raw_languages[lang] || raw_languages["en"];
    const content = langData.Contact;
    const title = document.createElement("h1");
    title.textContent = content.title;
    main.appendChild(title);
    const description = document.createElement("p");
    description.textContent = content.content;
    main.appendChild(description);
    //function that writes the social icons with link
    for (const social in SocialData) {
        const div = document.createElement("div");
        div.classList.add("social-icon");
        const icon = document.createElement("img");
        icon.src = SocialIcons[social];
        icon.alt = social;
        icon.classList.add("icon");
        div.appendChild(icon);
        const link = document.createElement("a");
        link.textContent = SocialData[social];
        link.href = SocialData[social];
        link.target = "_blank";
        div.appendChild(link);
        main.appendChild(div);
    }
}
