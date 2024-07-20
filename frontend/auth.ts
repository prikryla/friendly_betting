import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import axios from 'axios';


async function loginUser(username: string, password: string, csrfToken: string) {  
    try {
        const headers = {
            'Content-Type': 'application/json',
            'X-CRSFToken': csrfToken, 
        }
        const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', {username, password}, { headers: headers });
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
            .object({ username: z.string(), password: z.string(), csrfToken: z.string()})
            .safeParse(credentials)

        if (parsedCredentials.success) {
            const { username, password, csrfToken } = parsedCredentials.data;
            const user = await loginUser(username, password, csrfToken)
            if (!user) return null
        }
        return null
        
    }
  })]
});