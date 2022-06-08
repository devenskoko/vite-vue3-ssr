import { createRouter, createMemoryHistory, RouteRecordRaw } from "vue-router";
// import NProgress from "nprogress";
import exceptionRoutes from "@/router/route.exception";
import asyncRoutes from "@/router/route.async";
import commonRoutes from "@/router/route.common";

const routes: Array<RouteRecordRaw> = [
  // 无鉴权的业务路由 ex:登录
  ...commonRoutes,
  // 带鉴权的业务路由
  ...asyncRoutes,
  // 异常页必须放在路由匹配规则的最后
  ...exceptionRoutes,
];

// eslint-disable-next-line func-names
export default function () {
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  });

  return router;
}
