import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import svgLoader from "vite-svg-loader";
import legacy from "@vitejs/plugin-legacy";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import {
  NaiveUiResolver,
  VueUseComponentsResolver,
} from "unplugin-vue-components/resolvers";
import WindiCSS from "vite-plugin-windicss";
import ViteFonts from "vite-plugin-fonts";
const defaultClasses = "prose prose-sm m-auto text-left";

export default () => {
  return [
    vue(),
    vueJsx(),
    svgLoader(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    AutoImport({
      dts: "./src/auto-imports.d.ts",
      imports: ["vue", "pinia", "vue-router", "vue-i18n", , "@vueuse/core"],
      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: true, // Default `false`
        filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      resolvers: [],
    }),
    Components({
      dts: "./src/components.d.ts",
      extensions: ["vue", "md"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      // imports 指定组件所在位置，默认为 src/components; 有需要也可以加上 view 目录
      dirs: ["src/components/"],
      resolvers: [
        NaiveUiResolver(),
        IconsResolver(),
        VueUseComponentsResolver(),
      ],
      directoryAsNamespace: true,
    }),
    Icons({
      compiler: "vue3",
      autoInstall: true,
    }),
    ViteFonts({
      custom: {
        families: [
          {
            name: "Open Sans",
            local: "Open Sans",
            src: "src/assets/fonts/Open-Sans/*.woff2",
          },
          {
            name: "Montserrat",
            local: "Montserrat",
            src: "src/assets/fonts/Montserrat/*.woff2",
          },
          {
            name: "Fira Sans",
            local: "Fira Sans",
            src: "src/assets/fonts/Fira-Sans/*.woff2",
          },
        ],
        display: "auto",
        preload: true,
      },
    }),
    WindiCSS({
      safelist: defaultClasses,
    }),
  ];
};
