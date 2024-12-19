// Define the type for the language data structure
interface NavMenu {
  home: string;
  about: string;
  projects: string;
  contact: string;
}

interface LanguageData {
  navMenu: NavMenu;
}

const raw_languages: Record<string, LanguageData> = {
  en: {
    navMenu: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact"
    }
  },
  fr: {
    navMenu: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      contact: "Contact"
    }
  },
  it: {
    navMenu: {
      home: "Home",
      about: "Chi sono",
      projects: "Progetti",
      contact: "Contatti"
    }
  },
  es: {
    navMenu: {
      home: "Inicio",
      about: "Quien soy",
      projects: "Proyectos",
      contact: "Contactos"
    }
  },
  ar: {
    navMenu: {
      home: "الرئيسية",
      about: "من نحن",
      projects: "مشاريع",
      contact: "اتصلوا بي"
    }
  }
};

export { NavMenu, LanguageData, raw_languages };