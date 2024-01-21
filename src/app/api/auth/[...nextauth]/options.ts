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
        try {
          const res = await fetch(`${apiUrl}/auth/form/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          });

          if (!res.ok) {
            throw new Error("Authentication failed");
          }

          const user = await res.json();
          return user;
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    error: "/*",
  },
  callbacks: {
    async jwt({ token, user, googleUser }: any) {
      if (user && user.data) {
        token.accessToken = user.data.accessToken;
        token.userType = user.data?.user?.userType;
        token.email = user.data.user.email;
        token.firstname = user.data.user?.firstname;
        token.lastname = user.data.user?.lastname;
        token.profilePicture = user.data.user?.profilePicture;
      } else if (googleUser && googleUser.data) {
        token.accessToken = googleUser.data.accessToken;
        token.userType = googleUser.data?.user?.userType;
        token.email = googleUser.data.user.email;
        token.firstname = googleUser.data.user?.firstname;
        token.lastname = googleUser.data.user?.lastname;
        token.profilePicture = googleUser.data.user?.profilePicture;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token.accessToken && token.userType) {
        session.user.accessToken = token.accessToken;
        session.user.userType = token.userType;
        session.user.email = token.email;
        session.user.firstname = token.firstname;
        session.user.lastname = token.lastname;
        session.user.profilePicture = token.profilePicture;
      }
      return session;
    },
  },
};
