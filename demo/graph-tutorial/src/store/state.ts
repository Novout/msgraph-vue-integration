import { UserAgentApplication } from "msal";
import { useConfig } from "@/use/graph";

export interface Spinner {
  login: boolean;
}

export interface User {
  displayName: string;
  mail: string;
}

export interface Auth {
  user: User;
  isAuthenticated: boolean;
  error: object | undefined | null;
  scopes: Array<string>;
  accessToken: string;
  spinner: Spinner;
}

export interface State {
  auth: Auth;
  userAgentApplication: UserAgentApplication;
}

export const state: State = {
  auth: {
    user: {
      displayName: "",
      mail: ""
    },
    isAuthenticated: false,
    error: null,
    scopes: ["user.read", "calendars.read"],
    accessToken:
      localStorage.getItem(`msal.${useConfig().AUTH_ID}.accessToken`) || "",
    spinner: {
      login: false
    }
  },
  userAgentApplication: new UserAgentApplication({
    auth: {
      clientId: useConfig().AUTH_ID,
      redirectUri: useConfig().REDIRECT_URI
    },
    cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: true
    }
  })
};
