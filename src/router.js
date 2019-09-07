import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "主页",
      auth: true,
      // redirect: "/",
      menu: true,
      meta: {
        icon: "dashboard",
        title: "仪表盘"
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
          auth: true,
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
        title: "用户中心"
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
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
