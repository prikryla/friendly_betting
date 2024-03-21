import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import axios from 'axios';

async function loginUser(email: string, password: string) {  
    console.log("loginUser metoda")
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', {email, password});
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export default loginUser;

 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [Credentials({
    async authorize(credentials) {
        const parsedCredentials = z
            .object({ email: z.string().email(), password: z.string().min(8)})
            .safeParse(credentials)

        if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            const user = await loginUser(email, password)
            if (!user) return null
        }
        return null
        
    }
  })]
});