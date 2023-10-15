
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./Providers";
// import {NextUIProvider} from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nerdbuds",
  description: "Home Page for Nerdbuds software development organization",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* <NextUIProvider> */}
            <div className="">
              {children}
            </div>
          {/* </NextUIProvider> */}
        </Providers>
      </body>
    </html>
  );
}
