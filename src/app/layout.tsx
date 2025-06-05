import type { Metadata } from "next";
import "./globals.css";
import { mainFont } from "./fonts";
import Navbar from "./components/Navbar";
import ReactQueryProvider from "./components/ReactQueryProvider";
import UserProvider from "./context/userProvider";

export const metadata: Metadata = {
  title: "Crypto tracker",
  description: "Nextjs technical test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <title>Crypto tracker</title>
      <body className={`${mainFont.className}`}>
        <UserProvider>
          <Navbar />
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </UserProvider>
      </body>
    </html>
  );
}
