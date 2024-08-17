import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import axios from 'axios';

const getCsrfToken = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/auth/csrf-token/');
      return response.data.csrfToken
    } catch (error) {
      console.log('csrf token error', error);
    }
  };

async function loginUser(username: string, password: string) {  
    try {
        const csrfToken = await getCsrfToken()
        const headers = {
            'X-CRSFToken': csrfToken, 
            'Content-Type': 'application/json',
        }
        const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', {'username' :username, 'password': password}, { headers: headers });
        return response.data;
        // any psst
    } catch (error: any) {
        return null
    }
}

export default loginUser;

 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [Credentials({
    async authorize(credentials) {
        const parsedCredentials = z
            .object({ username: z.string(), password: z.string()})
            .safeParse(credentials)
    

        if (parsedCredentials.success) {
            const { username, password } = parsedCredentials.data;
            const user = await loginUser(username, password)
            if (!user) return null
            if (user) return user
        }
        return null
        
    }
  })]
});