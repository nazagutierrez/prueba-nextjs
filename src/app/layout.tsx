import type { Metadata } from "next";
import "@/globals.css";
import { mainFont } from "../fonts";
import Navbar from "../components/navbar/Navbar";
import ReactQueryProvider from "../components/providers/ReactQueryProvider";
import UserProvider from "@/components/providers/userProvider";
import { Slide, ToastContainer } from "react-toastify";

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
          <ToastContainer
            theme="dark"
            transition={Slide}
            autoClose={1500}
            hideProgressBar
            limit={3}
            draggable={true}
          />
        </UserProvider>
      </body>
    </html>
  );
}
