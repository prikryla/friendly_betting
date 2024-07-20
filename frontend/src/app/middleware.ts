import NextAuth from "next-auth/next";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
    matcher: ['/((?api|_next/static|_next/image|.*\\.png$).*']
}