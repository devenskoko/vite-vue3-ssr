import moment from "moment";

/** 项目构建时间 */
const PROJECT_BUILD_TIME = JSON.stringify(
  moment().format("YYYY-MM-DD HH:mm:ss")
);

export const viteDefine = {
  PROJECT_BUILD_TIME,
  __INTLIFY_PROD_DEVTOOLS__: false,
  __VUE_I18N_FULL_INSTALL__: true,
  __VUE_I18N_LEGACY_API__: true,
};
