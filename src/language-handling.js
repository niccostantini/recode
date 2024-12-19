function getUserLang() {
    return navigator.language;
}
function chooseLanguage() {
    const lang = getUserLang();
    switch (lang) {
        case "en":
            console.log("hi");
        case "fr":
            console.log("salut");
    }
}
export { chooseLanguage };
