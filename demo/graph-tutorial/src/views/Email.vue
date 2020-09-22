<template>
  <SuspenseLoading description="Email List...">
    <EmailList />
  </SuspenseLoading>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EmailList from "@/components/email/EmailList.vue";
import SuspenseLoading from "@/components/SuspenseLoading.vue";

export default defineComponent({
  name: "Email",
  components: {
    EmailList,
    SuspenseLoading
  }
});
</script>
