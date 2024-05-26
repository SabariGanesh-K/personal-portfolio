import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import { NextUIProvider } from "@nextui-org/react";

const karla = Karla({ subsets: ["latin"], variable: "--font-karla" });

export const metadata: Metadata = {
  title: "Sabari Krishna ♦️♠️",
  description: "Sabari Ganesh K A Dedicated Full Stack Software Developer Specializing in Cloud , Devops and Blockchains.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={karla.className}>
        <NextUIProvider>
          <CustomCursor  />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
