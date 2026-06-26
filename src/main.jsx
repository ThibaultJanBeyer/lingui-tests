import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import App from "./App.jsx";
import { defaultLocale, dynamicActivate } from "./i18n.js";
import "./index.css";

await dynamicActivate(defaultLocale);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nProvider i18n={i18n}>
      <App />
    </I18nProvider>
  </StrictMode>
);
