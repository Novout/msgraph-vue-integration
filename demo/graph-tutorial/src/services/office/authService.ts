import { UserAgentApplication, AuthResponse } from "msal";

const isInteractionRequired = (error: any) => {
  if (!error.message || error.message.length <= 0) {
    return false;
  }

  return (
    error.message.indexOf("consent_required") > -1 ||
    error.message.indexOf("interaction_required") > -1 ||
    error.message.indexOf("login_required") > -1
  );
};

export const getAccessToken = (
  userAgentApplication: UserAgentApplication,
  scopes: Array<string>
): Promise<string> => {
  return new Promise<AuthResponse>(resolve => {
    resolve(
      userAgentApplication.acquireTokenSilent({
        scopes
      })
    );
  })
    .then(({ accessToken }) => {
      return accessToken;
    })
    .catch(error => {
      return new Promise<AuthResponse>((resolve, reject) => {
        if (isInteractionRequired(error)) {
          resolve(
            userAgentApplication.acquireTokenPopup({
              scopes
            })
          );
        }
        reject(error);
      })
        .then(({ accessToken }) => {
          return accessToken;
        })
        .catch(() => {
          return "TOKEN_NOT_EXISTS";
        });
    });
};

export const normalizeError = async (error: any) => {
  let normalizedError = {};
  if (typeof error === "string") {
    const errParts = error.split("|");
    normalizedError =
      errParts.length > 1
        ? { message: errParts[1], debug: errParts[0] }
        : { message: error };
  } else {
    normalizedError = {
      debug: JSON.stringify(error)
    };
  }
  return normalizedError;
};
