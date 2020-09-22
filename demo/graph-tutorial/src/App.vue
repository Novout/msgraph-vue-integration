<template>
  <Header />
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "@/use/store";
import { ActionTypes } from "@/store/actions-types";
import Header from "@/components/Header.vue";

export default defineComponent({
  name: "App",
  components: {
    Header
  },
  setup() {
    onMounted(async () => {
      const store = useStore();
      await store.dispatch(ActionTypes.SET_ACCESS_TOKEN);
    });
  }
});
</script>
