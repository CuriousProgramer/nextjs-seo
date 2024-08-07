import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes'
import RootProvider from "@/components/RootProvider";

const inter = Inter({ subsets: ["latin"] });
const spartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Techbible",
  description: "The Community for Easy SaaS Exploration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spartan.className}>
        {children}
      </body>
    </html>
  );
}
