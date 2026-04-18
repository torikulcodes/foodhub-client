import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "https://foodhub-client-eta.vercel.app"+"/api/auth",
  fetchOptions: {
    credentials: "include",
  },
});
