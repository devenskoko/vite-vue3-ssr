import { createI18n } from "vue-i18n";
// vue router
import { createPinia } from "pinia";
import createRouter from "@/router/index";
// pinia
import App from "./App.vue";
import { isPromise } from "./utils";

import "virtual:fonts.css";
import "virtual:windi.css";
import "virtual:windi-devtools";
import "@/assets/styles/index.scss";
import messages from "./i18n-message";

const i18n = createI18n({
  locale: localStorage.locale || "zh-CN",
  fallbackLocale: "en",
  messages,
});

const app = createApp(App);
const router = createRouter();
const store = createPinia();
app.use(router).use(store);

app.use(i18n);

const meta = document.createElement("meta");
meta.name = "naive-ui-style";
document.head.appendChild(meta);

if (window.__INITIAL_STATE__) {
  store.state.value = window.__INITIAL_STATE__;
}
router.isReady().then(() => {
  app.mount("#app", true);
});
