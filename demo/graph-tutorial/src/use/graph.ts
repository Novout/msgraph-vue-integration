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
  const AUTH_ID = "YOUR_KEY_HERE";

  return {
    REDIRECT_URI,
    AUTH_ID
  };
};
