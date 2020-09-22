<template>
  <SuspenseLoading description="Home">
    <main
      class="flex flex-col justify-center items-center w-full "
      :style="{ height: '95vh' }"
    >
      <section
        class="bg-gray-300 w-full sm:w-full md:w-full lg:w-3/5 xl:w-3/5 p-5"
      >
        <img
          class="object-cover w-full"
          :src="require('@/assets/microsoft_logo.svg')"
        />
        <span> Quick Start to use Graph in conjunction with VueJS</span>
        <section class="pt-10">
          <section v-if="auth.isAuthenticated">
            <h4>Welcome {{ auth.user.displayName }}!</h4>
            <p>Use the navigation bar icons at the top of the page</p>
          </section>
          <section v-else-if="auth.spinner.login">Loading...</section>
          <button
            class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            v-else
            @click.prevent="graphLogin"
          >
            Login
          </button>
        </section>
      </section>
    </main>
  </SuspenseLoading>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/use/store";
import { useGraph } from "@/use/graph";
import { ActionTypes } from "@/store/actions-types";
import SuspenseLoading from "@/components/SuspenseLoading.vue";
export default defineComponent({
  name: "Home",
  components: {
    SuspenseLoading
  },
  setup() {
    const store = useStore();
    const { auth } = useGraph();
    const graphLogin = () => {
      store.dispatch(ActionTypes.USER_AGENT_LOGIN);
    };
    return {
      auth,
      graphLogin
    };
  }
});
</script>
