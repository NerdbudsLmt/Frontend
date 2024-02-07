import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/providers/Providers";
import AuthProvider from "./context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'GeekOps',
  description: 'Home Page for GeekOps software development organization',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/* <Head>
        <link rel='icon' href='/Images/GeeksOps Logo.png' />
      </Head> */}
      <body className={inter.className}>
        <AuthProvider>
          <Providers>{children}</Providers>
        </AuthProvider>
      </body>
    </html>
  )
}
