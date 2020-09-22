import { ActionContext, ActionTree } from "vuex";
import { ActionTypes } from "@/store/actions-types";
import { State } from "@/store/state";
import { MutationTypes } from "@/store/mutation-types";
import { getUserDetails } from "@/services/office/graphService";
import { getAccessToken } from "@/services/office/authService";
import { useConfig } from "@/use/graph";

export type ActionsType = {
  [ActionTypes.SET_ACCESS_TOKEN](context: ActionContext<any, any>): void;
  [ActionTypes.GET_USER_PROFILE](context: ActionContext<any, any>): void;
  [ActionTypes.USER_AGENT_LOGIN](context: ActionContext<any, any>): void;
};

export const actions: ActionTree<State, State> & ActionsType = {
  [ActionTypes.SET_ACCESS_TOKEN]({ commit, state }) {
    if (state.auth.accessToken) {
      new Promise<string>(resolve => {
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
  [ActionTypes.GET_USER_PROFILE]({ commit, state }) {
    commit(MutationTypes.SET_SPINNER_LOGIN);
    if (state.auth.accessToken) {
      new Promise<void>(resolve => {
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
          new Promise<any>(resolve => {
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
  [ActionTypes.USER_AGENT_LOGIN]({ commit, state, dispatch }) {
    new Promise<void>(resolve => {
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