<script setup lang="ts">
import { enUS, dateEnUS, eo, dateEo, NDateLocale } from "naive-ui";
import { onBeforeMount } from "vue";
import { useAppStore } from "@/store/app";

const appStore = useAppStore();

let locale: any;
let dateLocale: NDateLocale;

onBeforeMount(() => {
  if (!localStorage.locale) {
    appStore.toggleLocale("en");
  }
  locale = localStorage.locale === "en" ? enUS : eo;
  dateLocale = localStorage.locale === "en" ? dateEnUS : dateEo;
});
</script>

<template>
  <div class="m-5">
    <n-config-provider
      :locale="locale"
      :date-locale="dateLocale"
      preflight-style-disabled
    >
      <n-message-provider>
        <router-view></router-view>
      </n-message-provider>
    </n-config-provider>
  </div>
</template>
