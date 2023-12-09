import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { NextApiRequest, NextApiResponse } from 'next';


const apiUrl = process.env.NEXT_PUBLIC_API_URL;


export const options: NextAuthOptions = {
    providers: [
     
        CredentialsProvider({
            name: "Credentials",
           
            credentials: {
                email: {},
                password: {},
              },
            async authorize(credentials) {
                // This is where you need to retrieve user data 
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                const res = await fetch(`${apiUrl}/users/login`, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      email: credentials?.email,
                      password: credentials?.password,
                    }),
                  })
                  const user = await res.json()
                  // const author = user?.response
        
                  console.log({ user })
                  // console.log({ author })
                  
                  if (res.ok && user) {
                    return user;
                  } else {
                    return null
                  }
                },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: '/sign-in'
    },
    callbacks: {
      async jwt({ token, user }: any) {
        if (user && user.response) {
            token.id = user.response.id;
            token.email = user.response.email;
            token.user_type = user.response.user_type;
            token.full_name = user.response.full_name;
        }
        return token;
    },
    async session({ session, token }: any) {
        if (token && token.user_type) {
            session.user.id = token.id;
            session.user.email = token.email;
            session.user.user_type = token.user_type;
            session.user.full_name = token.full_name;
        }
        return session;
    },
  }
  
}