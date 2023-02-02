import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from './languages/en.json';
import nl from './languages/nl.json';

const resources = {
    en: { translation: en},
    nl: { translation: nl}
}

export const defaultLanguage = "en";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng : defaultLanguage,
        interpolation: {
            escapeValue: false,
        },
    });

const t = function(title: string) { return i18n.t(title).toString();};

export default t;