import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { State, Auth } from "./state";

export type Mutations<S = State> = {
  [MutationTypes.GET_USER_PROFILE_SUCCESS](state: S, payload: any): Auth;
  [MutationTypes.GET_USER_PROFILE_ERROR](state: S, payload: any): Auth;
  [MutationTypes.SET_SPINNER_LOGIN](state: S, payload: any): Auth;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.GET_USER_PROFILE_SUCCESS](
    { auth },
    { displayName, mail, userPrincipalName }
  ) {
    auth.isAuthenticated = true;
    auth.user.displayName = displayName;
    auth.user.mail = mail || userPrincipalName;
    auth.error = null;
    auth.spinner.login = false;
    return auth;
  },
  [MutationTypes.GET_USER_PROFILE_ERROR]({ auth }, { err }) {
    auth.user.mail = "";
    auth.user.displayName = "";
    auth.isAuthenticated = false;
    auth.spinner.login = false;
    return auth;
  },
  [MutationTypes.SET_SPINNER_LOGIN]({ auth }) {
    auth.spinner.login = true;
    return auth;
  }
};
