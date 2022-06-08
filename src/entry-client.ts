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

router.beforeResolve((to, from, next) => {
  let diffed = false;
  const { matched } = router.resolve(to);
  const prevMatched = router.resolve(from).matched;

  if (from && !from.name) {
    return next();
  }
  const activated = matched.filter((c, i) => {
    return diffed || (diffed = prevMatched[i] !== c);
  });
  if (!activated.length) {
    return next();
  }
  const matchedComponents: any = [];
  matched.map((route) => {
    matchedComponents.push(...Object.values(route.components));
  });
  const asyncDataFuncs = matchedComponents.map((component: any) => {
    const asyncData = component.asyncData || null;
    if (asyncData) {
      const config = {
        store,
        route: to,
      };
      if (isPromise(asyncData) === false) {
        return Promise.resolve(asyncData(config));
      }
      return asyncData(config);
    }
  });
  try {
    Promise.all(asyncDataFuncs).then(() => {
      next();
    });
  } catch (err) {
    next(err as any);
  }
});

if (window.__INITIAL_STATE__) {
  store.state.value = window.__INITIAL_STATE__;
}
router.isReady().then(() => {
  app.mount("#app", true);
});
