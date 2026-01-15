// for better-auth client generation
// baseurl is used to construct the redirect url that is send to google auth server
import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL,
});