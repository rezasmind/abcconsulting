import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ABC Consulting - Beauty Professional Licensing & Business Services",
  description: "Expert assistance in obtaining beauty licenses and setting up successful beauty businesses in the USA. Over 20 years of industry experience.",
  icons: {
    icon: './signature.svg'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full bg-white`}>
        {children}
      </body>
    </html>
  );
}
