import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: process.env.NEXT_PUBLIC_METADATA_BASE_URL,
  title: "Joshua Arnold",
  description: "A NextJS Portfolio",
  icons: {
    apple: process.env.NEXT_PUBLIC_METADATA_BASE_URL + "api/og",
  },
  openGraph: {
    images: [{ url: "api/og" }],
    url: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-24">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
