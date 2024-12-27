import { raw_languages, WhatIDo } from "./language-handling";

const main = document.querySelector<HTMLDivElement>("main");

/**
 * Populates the main content of the home page with the specified language.
 *
 * @param {string} lang - The language code to use for populating the content.
 */
const populate = (lang: string): void => {
  const langData = raw_languages[lang] || raw_languages["en"];
  const about = langData.About;

  const philosophy = about.philosophy;
  const what_i_do = about.what_i_do;
  const journey = about.journey;

  if (main) {
    main.innerHTML = "";
    main?.appendChild(createPhilosophySection(philosophy));
    main?.appendChild(createWhatIDoSection(what_i_do));
    main?.appendChild(createJourneySection(journey));
  } else {
    console.error(`<main> is null`);
  }
}

function createPhilosophySection(philosophy: string[]): HTMLDivElement {
  const section = document.createElement("div");
  section.classList.add("section");
  section.id = "philosophy";

  const title = document.createElement("h2");
  title.textContent = philosophy[0];

  const content = document.createElement("p");
  content.textContent = philosophy[1];

  section.appendChild(title);
  section.appendChild(content);

  return section;
}

function createWhatIDoSection(what_i_do: WhatIDo): HTMLDivElement {
  const section = document.createElement("div");
  section.classList.add("section");
  section.id = "what-i-do";

  const title = document.createElement("h2");
  title.textContent = what_i_do.title;

  section.appendChild(title);

  type TopicKey = 'coding' | 'design' | 'sewing';
  const topics: TopicKey[] = ['coding', 'design', 'sewing'];
  for (const topic of topics) {
    const title = what_i_do[topic][0];
    const content = what_i_do[topic][1];

    const div = document.createElement("div");
    div.classList.add(topic);

    const h3 = document.createElement("h3");
    h3.textContent = title;
    const paragraph = document.createElement("p");
    paragraph.textContent = content;

    div.appendChild(h3);
    div.appendChild(paragraph);
    section.appendChild(div);
  }

  return section;
}

function createJourneySection(journey: string[]): HTMLDivElement {
  const section = document.createElement("div");
  section.classList.add("section");
  section.id = "journey";

  for (const paragraph of journey) {
    //if the index is [0] create h2 element
    if (journey.indexOf(paragraph) === 0) {
      const h2 = document.createElement("h2");
      h2.textContent = paragraph;
      section.appendChild(h2);
    } else { //otherwise create p element
      const p = document.createElement("p");
      p.textContent = paragraph;
      section.appendChild(p);
    }
  }

  return section;
}

export default populate;