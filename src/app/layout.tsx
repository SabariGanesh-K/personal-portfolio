import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";

const karla = Karla({ subsets: ["latin"], variable: "--font-karla" });

// export const metadata: Metadata = {
//   title: "",
//   description: " ",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <meta httpEquiv="Cache-Control" content="no-cache, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <meta name="google-site-verification" content="9U0-YnKdWueBdZmj8Y5_JEkGNPOiV-_d8cPrmjIgifs" />
        <title>Sabari Krishna ♦️♠️</title>
        <meta
          name="description"
          content="Sabari Ganesh K A Dedicated Full Stack Software Developer Specializing in Cloud , Devops and Blockchain .Best full stack developer pursuing his CSE in VIT Chennai [ Vellore Institute of Technology ]"
        />
        <link rel="shortcut icon" href="/fire.png" />

      <body suppressHydrationWarning={true} className={karla.className}>
        <NextUIProvider>
          <CustomCursor  />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
