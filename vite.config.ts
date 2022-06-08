import { UserConfig } from "vite";
import { resolve } from "path";

import presets from "./presets/presets";

export default ({ command }) => {
  const config: UserConfig = {
    // 插件
    plugins: [presets()],
    // 别名设置
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"), // 把 @ 指向到 src 目录去
      },
    },
    // 服务设置
    server: {
      port: 80, // 端口号
    },
    css: {
      preprocessorOptions: {
        // 全局引入了 scss 的文件
        scss: {
          additionalData: `
      @import "@/assets/styles/variables.scss";
    `,
          javascriptEnabled: true,
        },
      },
    },
  };

  return config;
};
