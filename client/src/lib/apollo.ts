import { ApolloClient, InMemoryCache } from "@apollo/client";

const API = import.meta.env.VITE_API_URL;
const HEADERS = import.meta.env.VITE_API_ACESS_TOKEN;

export const client = new ApolloClient({
    uri: API,
    headers: {
        "Authorization": `Bearer ${HEADERS}`
    },
    cache: new InMemoryCache(),
})
