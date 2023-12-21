import { withAuth, NextRequestWithAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    function middleware(request: NextRequestWithAuth) {
        console.log(request.nextUrl.pathname)
        console.log(request.nextauth.token)

        if (request.nextUrl.pathname.startsWith("/dashboard")
            && request.nextauth.token?.userType !== "Company"
            && request.nextauth.token?.userType !== "Student"
                && request.nextauth.token?.userType !== "Business"
               
            ) {
            return NextResponse.rewrite(
                new URL("/not-found", request.url)
            )
        }

    },
    {
        callbacks: {
            authorized: ({ token }) => !!token
        },
    }
)

export const config = { matcher: [
    '/dashboard/:path*',
] }