<template>
  <main
    class="flex justify-center items-center bg-gray-300 w-full"
    :style="{ height: '95vh' }"
  >
    <section
      class="bg-gray-100 sm:w-full md:w-full lg:w-2/4 xl:w-2/4 p-10 text-6xl rounded antialiased"
    >
      <p>Loading {{ description }}</p>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loading",
  props: {
    description: {
      type: String,
      required: true
    }
  }
});
</script>
