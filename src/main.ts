import { createI18n } from "vue-i18n";
// vue router
import router from "@/router/index";
// pinia
import store from "@/store";
import App from "./App.vue";

import "virtual:fonts.css";
import "virtual:windi.css";
// Devtools: https://windicss.org/integrations/vite.html#design-in-devtools
import "virtual:windi-devtools";
import "@/assets/styles/index.scss";
import messages from "./i18n-message";

const i18n = createI18n({
  locale: localStorage.locale || "zh-CN",
  fallbackLocale: "en",
  messages,
});

const app = createApp(App);

app.use(router).use(store);

app.use(i18n);

const meta = document.createElement("meta");
meta.name = "naive-ui-style";
document.head.appendChild(meta);
app.mount("#app");
