import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextApiRequest, NextApiResponse } from "next";

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
        const res = await fetch(`${apiUrl}/auth/form/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });
        const user = await res.json();
        // const author = user?.response

        console.log(user);

        if (res.ok && user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    error: "/not-found",
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user && user.data) {
        token.accessToken = user.data.accessToken;
        // token.email = user.data.email;
        token.userType = user.data.user.userType;
        // token.full_name = user.data.full_name;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token && token.userType) {
        session.user.accessToken = token.accessToken;
        // session.user.email = token.email;
        session.user.userType = token.userType;
        // session.user.full_name = token.full_name;
      }
      return session;
    },
  },
};
