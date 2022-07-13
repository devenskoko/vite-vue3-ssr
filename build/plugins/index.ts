import type { PluginOption } from "vite";
import vue from "./vue";
import html from "./html";
import unplugin from "./unplugin";
import visualizer from "./visualizer";
import compress from "./compress";
import unocss from "./unocss";
/**
 * vite插件
 * @param viteEnv - 环境变量配置
 */
export function setupVitePlugins(
  viteEnv: ImportMetaEnv
): (PluginOption | PluginOption[])[] {
  const plugins = [...vue, html(viteEnv), ...unplugin(), unocss];

  if (viteEnv.VITE_VISUALIZER === "true") {
    plugins.push(visualizer);
  }
  if (viteEnv.VITE_COMPRESS === "true") {
    plugins.push(compress(viteEnv));
  }

  return plugins;
}
