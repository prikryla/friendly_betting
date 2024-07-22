import type { NextAuthConfig } from "next-auth";

export const authConfig = {
     callbacks: {
        authorized({ auth, request: { nextUrl } }) {
          const isLoggedIn = !!auth?.user;
          console.log('authorized method')
          console.log(isLoggedIn);
          const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
          if (isOnDashboard) {
            if (isLoggedIn) return true;
            return false; 
          } else if (isLoggedIn) {
            return Response.redirect(new URL('/dashboard', nextUrl));
          }
          return true;
        },
      },
      providers: [], 
      secret: process.env.AUTH_TOKEN,
    } satisfies NextAuthConfig;