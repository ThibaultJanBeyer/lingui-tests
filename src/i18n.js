import { i18n } from "@lingui/core";

export const locales = {
  en: "English",
  de: "Deutsch",
  ja: "日本語",
  pseudo: "Pseudo",
};

export const defaultLocale = "en";

export const dynamicActivate = async (locale) => {
  const { messages } = await import(`./locales/${locale}/messages.po`);
  i18n.load(locale, messages);
  i18n.activate(locale);
};
