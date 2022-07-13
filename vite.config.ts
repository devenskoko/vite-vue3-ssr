import { defineConfig, loadEnv } from "vite";
import { getEnvConfig } from "./.env-config";
import { viteDefine, setupVitePlugins, createViteProxy } from "./build";
import { getRootPath, getSrcPath } from "./build/utils";
// https://vitejs.dev/config/
export default defineConfig((env) => {
  // env 环境变量
  const viteEnv = loadEnv(env.mode, process.cwd()) as ImportMetaEnv;

  const rootPath = getRootPath();
  const srcPath = getSrcPath();

  const isOpenProxy = viteEnv.VITE_HTTP_PROXY === "true";
  const envConfig = getEnvConfig(viteEnv);

  return {
    base: viteEnv.VITE_BASE_URL,
    // 插件
    plugins: [setupVitePlugins(viteEnv)],
    // 别名设置
    resolve: {
      alias: {
        "~": rootPath,
        "@": srcPath,
      },
    },
    define: viteDefine,
    // 服务设置
    server: {
      host: "0.0.0.0",
      port: 8000,
      open: true,
      proxy: createViteProxy(isOpenProxy, envConfig),
    },
    build: {
      minify: "terser",
      brotliSize: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 2000,
      sourcemap: env.mode === "development",
      // 在生产环境移除console.log
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
        output: {
          // 去掉注释内容
          comments: true,
        },
      },
      assetsDir: "static/assets",
      // 静态资源打包到dist下的不同目录
      rollupOptions: {
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]",
          manualChunks: {
            vue: ["vue", "vue-router", "pinia"],
            naiveUi: ["naive-ui"],
            vueI18n: ["vue-i18n"],
            lodash: ["lodash-es"],
          },
        },
      },
    },
  };
});
