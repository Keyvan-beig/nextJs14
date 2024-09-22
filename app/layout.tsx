import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js 14",
  description: "Next.js 14 test",
};

const vazirFont = localFont({
  src:'../fonts/Vazir-Bold.woff'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-slate-700 ${vazirFont.className}`}>
        {children}
      </body>
    </html>
  );
}
