import { DefaultUser, DefaultSession, DefaultJWT } from "next-auth";
// import { DefaultUser, DefaultSession, DefaultJWT } from "next-auth"
import { DefaultJWT } from "next-auth/jwt";

import { DefaultUser, DefaultSession, DefaultJWT } from "next-auth";

// interface ApiResponse {
//   status: boolean;
//   message: string;
//   response: {
//     id: number;
//     full_name: string;
//     university: string;
//     department: string;
//     email: string;
//     phone_number: number;
//     address: string;
//     password: string;
//     user_type: string; // Assuming user_type represents the user's role
//     created_at: string;
//     updated_at: string;
//   };
//   token: string;
// }

interface ApiResponse {
  status: string;
  data: {
    user: {
      _id: string;
      email: string;
      accountType: string;
      userType: string;
      profilePicture: string;
      isAdmin: boolean;
      finishTourGuide: boolean;
    };
    accessToken: string;
    refreshToken: string;
    message: string;
  };
}

declare module "next-auth" {
  // interface Session {
  //     user: {
  //         id: number;
  //         full_name: string;
  //         university: string;
  //         department: string;
  //         email: string;
  //         phone_number: number;
  //         address: string;
  //         password: string;
  //         user_type: string; // Assuming user_type represents the user's role
  //         created_at: string;
  //         updated_at: string;
  //         // Add other properties from your API response if necessary
  //     } & DefaultSession;
  // }

  interface Session {
    user:
      | ({
          user: {
            _id: string;
            email: string;
            accountType: string;
            userType: string;
            profilePicture: string;
            isAdmin: boolean;
            finishTourGuide: boolean;
          };
          accessToken: string;
          refreshToken: string;
          message: string;
        } & DefaultSession)
      | {
          googleUser: {
            _id: string;
            email: string;
            accountType: string;
            userType: string;
            profilePicture: string;
            isAdmin: boolean;
            finishTourGuide: boolean;
          };
          accessToken: string;
          refreshToken: string;
          message: string;
        };
  }

  // interface User extends DefaultUser {
  //     id: number;
  //     full_name: string;
  //     university: string;
  //     department: string;
  //     email: string;
  //     phone_number: number;
  //     address: string;
  //     password: string;
  //     user_type: string; // Assuming user_type represents the user's role
  //     created_at: string;
  //     updated_at: string;
  //     // Add other properties from your API response if necessary
  // }

  interface User extends DefaultUser {
    user: {
      _id: string;
      email: string;
      accountType: string;
      userType: string;
      profilePicture: string;
      isAdmin: boolean;
      finishTourGuide: boolean;
    };
    accessToken: string;
    refreshToken: string;
    message: string;
    // Add other properties from your API response if necessary
  }

  // interface JWT extends DefaultJWT {
  //     id: number;
  // full_name: string;
  // university: string;
  // department: string;
  // email: string;
  // phone_number: number;
  // address: string;
  // password: string;
  // user_type: string; // Assuming user_type represents the user's role
  // created_at: string;
  // updated_at: string;
  //     // Add other properties from your API response if necessary
  // }

  interface JWT extends DefaultJWT {
    user: {
      _id: string;
      email: string;
      accountType: string;
      userType: string;
      profilePicture: string;
      isAdmin: boolean;
      finishTourGuide: boolean;
    };
    accessToken: string;
    refreshToken: string;
    message: string;
  }

  // Extend the DefaultUser and DefaultSession interfaces if needed
}
