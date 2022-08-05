import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl6fz4jqu2rr801un9argb4do/master",
  cache: new InMemoryCache(),
});
