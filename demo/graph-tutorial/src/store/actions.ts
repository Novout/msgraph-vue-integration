import { ActionContext, ActionTree } from "vuex";
import { ActionTypes } from "@/store/actions-types";
import { State } from "@/store/state";
import { MutationTypes } from "@/store/mutation-types";
import { getUserDetails } from "@/services/office/graphService";
import { getAccessToken } from "@/services/office/authService";
import { useConfig } from "@/use/graph";
import { AuthResponse } from "msal";
import {graphUserDetails} from "@/services/office/graphTypes";

export type ActionsType = {
  [ActionTypes.SET_ACCESS_TOKEN](context: ActionContext<State, State>): void;
  [ActionTypes.GET_USER_PROFILE](context: ActionContext<State, State>): void;
  [ActionTypes.USER_AGENT_LOGIN](context: ActionContext<State, State>): void;
};

export const actions: ActionTree<State, State> & ActionsType = {
  [ActionTypes.SET_ACCESS_TOKEN]({ commit, state }: ActionContext<State, State>) {
    if (state.auth.accessToken) {
      new Promise<graphUserDetails>(resolve => {
        resolve(getUserDetails(state.auth.accessToken));
      })
        .then(user => {
          commit(MutationTypes.GET_USER_PROFILE_SUCCESS, user);
        })
        .catch(error => {
          commit(MutationTypes.GET_USER_PROFILE_ERROR, error);
        });
    }
  },
  [ActionTypes.GET_USER_PROFILE]({ commit, state }: ActionContext<State, State>) {
    commit(MutationTypes.SET_SPINNER_LOGIN);
    if (state.auth.accessToken) {
      new Promise<graphUserDetails>(resolve => {
        resolve(getUserDetails(state.auth.accessToken));
      })
        .then(user => {
          commit(MutationTypes.GET_USER_PROFILE_SUCCESS, user);
        })
        .catch(error => {
          commit(MutationTypes.GET_USER_PROFILE_ERROR, error);
        });
    } else {
      new Promise<string>(resolve => {
        resolve(getAccessToken(state.userAgentApplication, state.auth.scopes));
      })
        .then((accessToken: string) => {
          if (accessToken === "TOKEN_NOT_EXISTS") return;
          localStorage.setItem(
            `msal.${useConfig().AUTH_ID}.accessToken`,
            accessToken
          );
          new Promise<graphUserDetails>(resolve => {
            resolve(getUserDetails(accessToken));
          })
            .then(user => {
              commit(MutationTypes.GET_USER_PROFILE_SUCCESS, user);
            })
            .catch(error => {
              commit(MutationTypes.GET_USER_PROFILE_ERROR, error);
            });
        })
        .catch(error => {
          console.error("ACCESS_TOKEN_ERROR", error);
        });
    }
  },
  [ActionTypes.USER_AGENT_LOGIN]({ commit, state, dispatch }: ActionContext<State, State>) {
    new Promise<AuthResponse | void>(resolve => {
      resolve(
        state.userAgentApplication.loginPopup({
          scopes: state.auth.scopes,
          prompt: "select_account"
        })
      );
    }).then(() => {
      new Promise<void>(resolve => {
        resolve(dispatch(ActionTypes.GET_USER_PROFILE));
      }).catch(error => commit(MutationTypes.GET_USER_PROFILE_ERROR, error));
    });
  }
};
