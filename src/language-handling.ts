// Define the type for the language data structure
interface NavMenu {
  home: string;
  about: string;
  projects: string;
  contact: string;
}

interface LanguageData {
  navMenu: NavMenu;
  Main: string;
}

const raw_languages: Record<string, LanguageData> = {
  en: {
    navMenu: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact"
    },
    Main: "it looks like you landed on"
  },
  fr: {
    navMenu: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      contact: "Contact"
    },
    Main: "il semble que vous ayez atterri sur"
  },
  it: {
    navMenu: {
      home: "Home",
      about: "Chi sono",
      projects: "Progetti",
      contact: "Contatti"
    },
    Main: "sembra che tu sia atterratə su"
  },
  es: {
    navMenu: {
      home: "Inicio",
      about: "Quien soy",
      projects: "Proyectos",
      contact: "Contactos"
    },
    Main: "parece que has aterrizado en"
  },
  ar: {
    navMenu: {
      home: "الرئيسية",
      about: "من أنا",
      projects: "مشاريع",
      contact: "اتصلوا بي"
    },
    Main: "يبدو أنك هبطت على"
  }
};

export { NavMenu, LanguageData, raw_languages };