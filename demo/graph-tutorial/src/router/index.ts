import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useStore } from "@/use/store";

const SyncHome = () => import("@/views/Home.vue");
const SyncEmail = () => import("@/views/Email.vue");
const SyncNotFound = () => import("@/views/NotFound.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: SyncHome
  },
  {
    path: "/email",
    name: "Email",
    component: SyncEmail,
    // basic route navigation guard
    beforeEnter(to, from, next) {
      // check vuex store authenticated
      if (useStore().state.auth.isAuthenticated) {
        // continue next route
        next();
      }

      // redirect to Home route
      next({
        name: "Home"
      });
    }
  },
  {
    path: "/:catchAll(.*)",
    component: SyncNotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
