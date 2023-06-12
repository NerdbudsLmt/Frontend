import './globals.css'
import { Inter } from 'next/font/google'
import UIProvider from "@/context/UIProvider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Nerdbuds',
    description: 'Home Page for Nerdbuds software development organization',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <UIProvider>
                    <Nav />
                    {children}
                    <Footer />
                </UIProvider>
            </body>
        </html>
    )
}
