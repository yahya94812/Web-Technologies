// it is used to handle callbacks from auth providers servers
// [...all] = "catch everything after this point"
// [id] = "catch single segment"
import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);