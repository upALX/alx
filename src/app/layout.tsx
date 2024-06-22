import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { mergeStyle } from "@/lib/utils";

const mainFont = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={mergeStyle(
          "min-h-screen bg-background font-sans antialiased",
          mainFont.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
