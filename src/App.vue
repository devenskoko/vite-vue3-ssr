<script setup lang="ts">
import { enUS, dateEnUS, eo, dateEo } from "naive-ui";
import { useAppStore } from "./store";

const appStore = useAppStore();
if (!localStorage.locale) {
  appStore.toggleLocale("en");
}
const locale = localStorage.locale === "en" ? enUS : eo;
const dateLocale = localStorage.locale === "en" ? dateEnUS : dateEo;
</script>

<template>
  <div class="m-5">
    <n-config-provider
      :locale="locale"
      :date-locale="dateLocale"
      class="h-full font-serif"
    >
      <naive-provider>
        <router-view />
      </naive-provider>
    </n-config-provider>
  </div>
</template>
