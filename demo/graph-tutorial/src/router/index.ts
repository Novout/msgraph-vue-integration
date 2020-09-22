import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Email from "@/views/Email.vue";
import { useStore } from "@/use/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/email",
    name: "Email",
    component: Email,
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
