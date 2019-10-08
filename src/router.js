import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { findLast } from "./utils/utils";
import { check, isLogin } from "./utils/auth";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "主页",
      // redirect: "/",
      menu: true,
      meta: {
        icon: "dashboard",
        title: "仪表盘",
        authority: ["user"]
      },
      component: () =>
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        import(/* webpackChunkName: "layout" */ "./layouts/BasicLayout"),
      children: [
        {
          path: "/home/child",
          name: "主页的下一级",
          // auth: true,
          // redirect: "/",
          menu: true,
          meta: {
            icon: "edit",
            title: "仪表盘"
          }
        }
      ]
    },
    {
      path: "/user",
      name: "用户中心",
      menu: true,
      meta: {
        icon: "edit",
        title: "用户中心",
        authority: ["user"]
      },
      component: () =>
        import(/* webpackChunkName: "layout" */ "./layouts/UserLayout"),
      children: [
        {
          path: "login",
          name: "login",
          component: () =>
            import(/* webpackChunkName: "user" */ "./views/User/Login")
        },
        {
          path: "register",
          name: "register",
          component: () =>
            import(/* webpackChunkName: "user" */ "./views/User/Register")
        }
      ]
    },
    {
      path: "/form",
      name: "自定义表单",
      menu: true,
      meta: {
        icon: "edit",
        title: "自定义表单",
        authority: ["user"]
      },
      component: () =>
        import(/* webpackChunkName: "layout" */ "./views/Form/Form.vue")
    }
    // {
    //   path: "/403",
    //   name: "403"
    // },
    // {
    //   path: "*",
    //   name: "404"
    // }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start();
  }
  const record = findLast(
    to.matched,
    record => record.meta && record.meta.authority
  );
  if (record && record.meta && !check(record.meta.authority)) {
    if (!isLogin() && to.path !== "/user/login") {
      next({
        path: "/user/login"
      });
    } else if (to.path !== "/403") {
      next({
        path: "/403"
      });
    }
    NProgress.done();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
