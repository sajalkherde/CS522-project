import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },
  {
    path: "/watchPattern",
    name: "watchPattern",
    // route level code-splitting
    // this generates a separate chunk (watchPattern.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(
        /* webpackChunkName: "watchPattern" */ "../views/watchPatternView.vue"
      );
    },
  },
  {
    path: "/social",
    name: "social",
    // route level code-splitting
    // this generates a separate chunk (social.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "social" */ "../views/socialView.vue");
    },
  },
  {
    path: "/currentSession",
    name: "currentSession",
    // route level code-splitting
    // this generates a separate chunk (currentSession.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(
        /* webpackChunkName: "currentSession" */ "../views/currentSessionView.vue"
      );
    },
  },
  {
    path: "/progress",
    name: "progress",
    // route level code-splitting
    // this generates a separate chunk (progress.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(
        /* webpackChunkName: "progress" */ "../views/progressView.vue"
      );
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;