<template>
  <article
    class="bg-gray-100 w-full sm:w-full md:w-full lg:w-2/4 xl:w-2/4 px-2 sm:px-2 md:px-5 lg:px-10 xl:px-10 pt-5 mt-10"
  >
    <p class="text-blue-800">{{ title }}</p>
    <section class="w-full" v-html="html" />
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "EmailItem",
  props: {
    subject: {
      type: String as PropType<string>,
      required: true
    },
    body: {
      type: Object as PropType<Record<any, any>>,
      required: true
    }
  },
  setup(props) {
    return { title: props.subject, html: props.body.content };
  }
});
</script>
