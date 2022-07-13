<template>
  <div class="container max-w-3xl mx-auto mt-40">
    <div class="h-60 mb-8">
      <div class="w-52 h-52 mx-auto mb-4">
        <icon-custom-vitecamp class="w-52 h-52"></icon-custom-vitecamp>
      </div>
    </div>
    <div class="text-center text-md">
      <h1 class="font-serif font-bold text-4xl mb-8">
        {{ t("home.hello") }} , {{ t("home.welcome") }} Vitecamp
      </h1>
      <p class="mb-10">
        <template v-for="(item, index) in featureList" :key="index">
          <a :href="item.href" target="_blank">{{ item.name }}</a>
          <template v-if="!item.isEnd"> | </template>
        </template>
      </p>
    </div>
    <n-button type="primary" @click="appStore.changeCount(++count)">
      pinia ： {{ count }}
    </n-button>
    <n-button type="primary" @click="toggleLocales"> 切换语言 </n-button>
  </div>
</template>

<script setup lang="ts">
import { useMessage } from "naive-ui";
import { storeToRefs } from "pinia";
import { useAppStore } from "@/store";

const appStore = useAppStore();
const message = useMessage();
const { t, availableLocales, locale } = useI18n();
message.info("I don't know why nobody told you how to unfold your love", {
  keepAliveOnHover: true,
});

const { count } = storeToRefs(appStore);

const toggleLocales = () => {
  const locales = availableLocales;
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
  appStore.toggleLocale(locale.value);
};

const featureList = [
  {
    name: "Vite2",
    href: "https://github.com/vitejs/vite",
  },
  {
    name: "Vue3",
    href: "https://v3.cn.vuejs.org/",
  },
  {
    name: "TypeScript",
    href: "https://github.com/microsoft/TypeScript",
  },
  {
    name: "Element Plus",
    href: "https://element-plus.gitee.io/zh-CN/",
  },
  {
    name: "Vue Router 4",
    href: "https://router.vuejs.org/zh/",
  },
  {
    name: "Pinia",
    href: "https://pinia.vuejs.org/",
  },
  {
    name: "icones",
    href: "https://icones.netlify.app/",
  },
  {
    name: "Windi CSS",
    href: "https://github.com/windicss/windicss",
  },
  {
    name: "Axios",
    href: "https://axios-http.com/",
  },
  {
    name: "I18n",
    href: "https://github.com/intlify/vite-plugin-vue-i18n",
  },
  {
    name: "Prettier",
    href: "https://github.com/prettier/prettier",
  },
  {
    name: "ESLint",
    href: "https://github.com/eslint/eslint",
  },
  {
    name: "Airbnb Style",
    href: "https://github.com/airbnb/javascript",
  },
  {
    name: "Husky",
    href: "https://github.com/typicode/husky",
  },
  {
    name: "VueUse",
    href: "https://github.com/vueuse/vueuse",
  },
  {
    name: "Markdown",
    href: "https://github.com/antfu/vite-plugin-md",
  },
  {
    name: "NProgress",
    href: "https://github.com/rstacruz/nprogress",
    isEnd: true,
  },
];
</script>

<style lang="scss" scoped></style>
