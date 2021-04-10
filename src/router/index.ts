import Home from "@/views/Home.vue";
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    component: Home,
    name: "Home",
    path: "/",
  },
  {
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
    name: "About",
    path: "/about",
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
