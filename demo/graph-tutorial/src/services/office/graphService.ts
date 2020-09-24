import { GraphMessages, GraphUserDetails } from "@/services/office/graphTypes";

const graph = require("@microsoft/microsoft-graph-client");

const getAuthenticatedClient = (accessToken: string) => {
  // Initialize Graph client
  const client = graph.Client.init({
    // Use the provided access token to authenticate
    // requests
    authProvider: (done: any) => {
      done(null, accessToken);
    }
  });

  return client;
};

export const getUserDetails = (
  accessToken: string
): Promise<GraphUserDetails> => {
  const client = getAuthenticatedClient(accessToken);

  return new Promise<GraphUserDetails>(resolve => {
    resolve(client.api("/me").get());
  }).then(user => {
    return user;
  });
};

export const getMessages = (accessToken: string): Promise<GraphMessages> => {
  const client = getAuthenticatedClient(accessToken);

  return new Promise<GraphMessages>(resolve => {
    resolve(client.api("/me/messages").get());
  }).then(messages => {
    return messages;
  });
};
