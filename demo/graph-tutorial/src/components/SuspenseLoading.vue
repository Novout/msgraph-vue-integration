<template>
  <Suspense>
    <template #default>
      <slot />
    </template>
    <template #fallback>
      <Loading :description="description" />
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Loading from "@/components/loading/Loading.vue";

export default defineComponent({
  name: "SuspenseLoading",
  components: {
    Loading
  },
  props: {
    description: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped></style>
