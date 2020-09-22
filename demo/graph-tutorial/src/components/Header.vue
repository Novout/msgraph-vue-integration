<template>
  <header
    class="flex w-screen justify-between items-center px-4 sm:px-4 md:px-10 lg:px-20 xl:px-20 shadow-lg"
    :style="{ height: '5vh' }"
  >
    <p class="font-semibold">Vue Graph App</p>

    <router-link to="/">
      Home
    </router-link>

    <router-link to="/email">
      Email
    </router-link>

    <button v-if="auth.isAuthenticated" @click.prevent="logout">
      Logout
    </button>

    <button v-else @click.prevent="userLogin">
      Login
    </button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/use/store";
import { ActionTypes } from "@/store/actions-types.ts";
import { useGraph } from "@/use/graph";

export default defineComponent({
  name: "Header",
  setup() {
    const store = useStore();
    const { auth, userAgentApplication } = useGraph();
    const userLogin = () => {
      store.dispatch(ActionTypes.USER_AGENT_LOGIN);
    };
    const logout = () => {
      localStorage.clear();
      userAgentApplication.value.logout();
    };
    return { auth, userAgentApplication, userLogin, logout };
  }
});
</script>
