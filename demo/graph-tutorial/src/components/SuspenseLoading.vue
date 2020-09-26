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
import { defineComponent, PropType } from "vue";
import Loading from "@/components/loading/Loading.vue";

export default defineComponent({
  name: "SuspenseLoading",
  components: {
    Loading
  },
  props: {
    description: {
      type: String as PropType<string>,
      required: true
    }
  }
});
</script>

<style scoped></style>
