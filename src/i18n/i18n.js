import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./resources";

const savedLanguage = localStorage.getItem("language");
const browserLanguage = navigator.language?.startsWith("th") ? "th" : "en";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage || browserLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  returnObjects: true,
});

i18n.on("languageChanged", (language) => {
  localStorage.setItem("language", language);
  document.documentElement.lang = language;
});

document.documentElement.lang = i18n.language;

export default i18n;
