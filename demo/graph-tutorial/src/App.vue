<template>
  <AuthProvider>
    <Header />
    <router-view />
  </AuthProvider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import AuthProvider from "@/provider/AuthProvider.vue";

export default defineComponent({
  name: "App",
  components: {
    AuthProvider,
    Header
  }
});
</script>
