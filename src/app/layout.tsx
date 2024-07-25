import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Navbar, Sidebar, LayoutProvider } from "@/components";

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
        <LayoutProvider>
          <main className="flex min-h-full flex-col justify-center">
            <Navbar />
            <div className="relative p-5 flex">
              <Sidebar />
              {children}
            </div>
          </main>
        </LayoutProvider>
      </body>
    </html>
  );
}
