import DefineOptions from "unplugin-vue-define-options/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import {
  NaiveUiResolver,
  VueUseComponentsResolver,
} from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";
// import legacy from "@vitejs/plugin-legacy";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import ViteFonts from "vite-plugin-fonts";
import { getSrcPath } from "../utils";

const srcPath = getSrcPath();

const customIconPath = `${srcPath}/assets/svg`;

export default () => {
  return [
    DefineOptions(),
    // legacy({
    //   targets: ["defaults", "not IE 11"],
    // }),

    AutoImport({
      dts: "./src/auto-imports.d.ts",
      imports: ["vue", "pinia", "vue-router", "vue-i18n", "@vueuse/core"],
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
        IconsResolver({
          customCollections: ["custom"],
          prefix: "icon",
        }),
        VueUseComponentsResolver(),
      ],
    }),
    Icons({
      compiler: "vue3",
      customCollections: {
        custom: FileSystemIconLoader(customIconPath),
      },
      scale: 1,
      autoInstall: true,
      defaultClass: "inline-block",
    }),
    ViteFonts({
      custom: {
        families: [
          {
            name: "Montserrat",
            local: "Montserrat",
            src: `src/assets/fonts/Montserrat/*.woff2`,
          },
        ],
        display: "auto",
        preload: false,
      },
    }),
  ];
};
