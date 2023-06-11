import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.HASURA_ENDPOINT || "",
  cache: new InMemoryCache(),
  ssrMode: true, // Enable SSR mode

  // Since we are always running in SSR, we don't need to worry about users
  // having access to our API key since they won't see these headers in their browser network tab.
  headers: {
    "X-Hasura-Survey-Id": process.env.HASURA_SURVEY_ID || "",
  },
});

export default client;
