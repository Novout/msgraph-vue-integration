import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useStore } from "@/use/store";

const syncHome = () => import("@/views/Home.vue");
const syncEmail = () => import("@/views/Email.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: syncHome
  },
  {
    path: "/email",
    name: "Email",
    component: syncEmail,
    // basic route navigation guard
    beforeEnter(to, from, next) {
      // check vuex store authenticated //
      if (useStore().state.auth.isAuthenticated) {
        next();
      } else {
        // return home route with no authenticated
        next({
          name: "Home"
        });
      }
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
