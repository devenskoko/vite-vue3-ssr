import type { App } from "vue";
import { createI18n } from "vue-i18n";
import messages from "./i18n-message";

/** setup vue i18n  */
export function setupI18n(app: App) {
  const i18n = createI18n({
    locale: localStorage.locale || "zh-CN",
    fallbackLocale: "en",
    messages,
  });
  app.use(i18n);
}
