/**
 * env环境类型
 * - dev: 开发环境
 * - test: 测试环境
 * - prod: 生产环境
 */
type EnvType = "dev" | "test" | "prod";

/** env环境配置 */
interface EnvConfig {
  /** 后端的请求地址 */
  url: string;
  /** 代理标识, 用于拦截地址转发代理(如："/api"，这个和后端路径有无 "/api" 路径没有任何关系) */
  proxy: string;
}

interface ImportMetaEnv {
  /** 项目基本地址 */
  readonly VITE_BASE_URL: string;
  /** 项目名称 */
  readonly VITE_APP_NAME: string;
  /** 项目标题 */
  readonly VITE_APP_TITLE: string;
  /** 项目描述 */
  readonly VITE_APP_DESC: string;
  /** vite环境类型 */
  readonly VITE_ENV_TYPE?: EnvType;
  /** 开启请求代理 */
  readonly VITE_HTTP_PROXY?: "true" | "false";
  /** 是否开启打包文件大小结果分析 */
  readonly VITE_VISUALIZER?: "true" | "false";
  /** 是否开启打包压缩 */
  readonly VITE_COMPRESS?: "true" | "false";
  /** 压缩算法类型 */
  readonly VITE_COMPRESS_TYPE?:
    | "gzip"
    | "brotliCompress"
    | "deflate"
    | "deflateRaw";
  /** hash路由模式 */
  readonly VITE_HASH_ROUTE?: "true" | "false";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
