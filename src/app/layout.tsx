import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Navbar, Sidebar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Voyatek HR Panel",
  description: "Mock dashboard application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col justify-center">
          <Navbar />
          <div className="relative p-5 flex gap-y-12">
            <Sidebar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
