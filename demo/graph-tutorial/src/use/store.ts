import { Store } from "vuex";
import { State } from "@/store/state";
import { store } from "@/store";

export function useStore() {
  return store as Store<State>;
}
