import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/SideNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Student Dashboard",
  description: "Next-Gen Learning Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-neutral-950 text-white h-[100dvh] flex flex-col-reverse md:flex-row overflow-hidden`}>
        <aside className="w-full md:w-20 lg:w-64 h-16 md:h-full shrink-0 z-50">
          <SideNav />
        </aside>
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8 pb-20 md:pb-8">
          {children}
        </main>
      </body>
    </html>
  );
}
