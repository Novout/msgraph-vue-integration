<template>
  <section
    class="bg-gray-300 flex flex-col justify-center items-center w-full p-5"
  >
    <EmailItem
      v-for="({ subject, body }, index) in state.list"
      :key="index"
      :subject="subject"
      :body="body"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useGraph } from "@/use/graph.ts";
import { getAccessToken } from "@/services/office/authService.ts";
import { getMessages } from "@/services/office/graphService.ts";
import EmailItem from "@/components/email/EmailItem.vue";

export default defineComponent({
  name: "EmailList",
  components: {
    EmailItem
  },
  async setup() {
    const { auth, userAgentApplication } = useGraph();
    const state = reactive({
      list: []
    });
    const token = await getAccessToken(
      userAgentApplication.value,
      auth.value.scopes
    );
    const messages = await getMessages(token);

    state.list = messages.value;
    return { state };
  }
});
</script>
