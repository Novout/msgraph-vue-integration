<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "@/use/store";
import { ActionTypes } from "@/store/actions-types";

export default defineComponent({
  name: "AuthProvider",
  setup() {
    onMounted(async () => {
      const store = useStore();
      await store.dispatch(ActionTypes.SET_ACCESS_TOKEN);
    });
  }
});
</script>

<style scoped></style>
