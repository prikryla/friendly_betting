import NextAuth from 'next-auth';
import { NextResponse } from "next/server";
import { authConfig } from '../auth.config';

const {auth} = NextAuth(authConfig);

const authRoutes = ['/dashboard'];

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    const isApiAuthRoute = nextUrl.pathname.startsWith('/login') || nextUrl.pathname === '/' || nextUrl.pathname === '/register';
    const isPublicRoute = nextUrl.pathname === '/';
        
    const isAuthRoute = authRoutes.some(route => nextUrl.pathname.startsWith(route));
    
    if (isApiAuthRoute) {
        return NextResponse.next();
    } 
    
    if (isAuthRoute) {
        if (!isLoggedIn) {
            return NextResponse.redirect(new URL('/login', nextUrl));
        }
        return NextResponse.next();
    }

    if (!isLoggedIn && !isPublicRoute) {
        return NextResponse.redirect(new URL('/login', nextUrl));
    }

    return NextResponse.next();
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
