import { createApp } from "vue";
import { setupAssets } from "./plugins";
import { setupI18n } from "./i18n";
import { setupStore } from "./store";
import { setupRouter } from "./router";
import App from "./App.vue";

async function setupApp() {
  // import assets: js、css
  setupAssets();

  const app = createApp(App);

  // store plugin: pinia
  setupStore(app);

  setupI18n(app);

  // vue router
  await setupRouter(app);

  // mount app
  app.mount("#app");
}

setupApp();
