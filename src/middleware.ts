import { withAuth, NextRequestWithAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    function middleware(request: NextRequestWithAuth) {
        console.log(request.nextUrl.pathname)
        console.log(request.nextauth.token)

        if (request.nextUrl.pathname.startsWith("/")
            && request.nextauth.token?.userType !== "Company"
            && request.nextauth.token?.userType !== "Student"
                && request.nextauth.token?.userType !== "Business"
                && request.nextauth.token?.userType !== ""
            ) {
            return NextResponse.rewrite(
                new URL("/not-found", request.url)
            )
        }

        // if (request.nextUrl.pathname.startsWith("/")
        //     && request.nextauth.token?.userType !== "Student"
        //     && request.nextauth.token?.userType !== "Business"
        // ) {
        //     return NextResponse.rewrite(
        //         new URL("/not-found", request.url)
        //     )
        // }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token
        },
    }
)

export const config = { matcher: [
    '/dashboard/:path*',
    "/dashboard", 
    "/dashboard/projects", 
    "/dashboard/projects/create", 
    "/dashboard/projects/existing", 
    "/dashboard/projects/finished", 
    "/dashboard/projects/progress", 
    "/dashboard/payment/comfirmation", 
    "/dashboard/payment/paymmethod", 
    "/dashboard/payment/transaction", 
    "/dashboard/payment", 
    "/dashboard/settings", 
    "/dashboard/support", 
] }