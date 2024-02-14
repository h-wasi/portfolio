import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Hammad Wasi",
  description:
    "Wasi (HE/HIM) is a seasoned Frontend Engineer with a knack for crafting captivating user interfaces that elevate user experiences. Specializing in React and Next.js, he excels in turning complex ideas into engaging, interactive web solutions.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
