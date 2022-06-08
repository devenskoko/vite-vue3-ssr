import { defineStore } from "pinia";

const useAppStore = defineStore({
  // 这里的id必须为唯一ID
  id: "app",
  state: () => {
    return {
      locale: "zh-CN",
      count: 0,
    };
  },
  // 等同于vuex的getter
  getters: {
    getLocale: (state: { locale: string }) => state.locale,
  },
  // pinia 放弃了 mutations 只使用 actions
  actions: {
    // actions可以用async做成异步形式
    toggleLocale(type: string) {
      this.locale = type;
      localStorage.locale = type;
    },
    changeCount(count: number) {
      this.count = count;
    },
  },
});

// eslint-disable-next-line import/prefer-default-export
export { useAppStore };
