import { computed } from "vue";
import { useStore } from "@/use/store";

export const useGraph = () => {
  const store = useStore();
  const auth = computed(() => store.state.auth);
  const userAgentApplication = computed(() => store.state.userAgentApplication);

  return {
    auth,
    userAgentApplication
  };
};

export const useConfig = () => {
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ID = "a1a3eb0a-41a9-4a00-adf3-865482f1aa18";

  return {
    REDIRECT_URI,
    AUTH_ID
  };
};
