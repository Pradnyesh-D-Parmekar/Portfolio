import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider";

const inter = Inter({ subsets: ["latin"] });

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pradnyesh | Full-Stack Developer & AI Researcher",
  description: "M.Sc. Data Science & AI student specializing in Next.js 15, MERN, and Deepfake Detection. Explore my architectural AI and real-time systems.",
  keywords: ["Pradnyesh Parmekar", "MERN Stack", "Next.js 15", "AI Developer India", "Data Science Student"],
  authors: [{ name: "Pradnyesh Parmekar" }],
  openGraph: {
    title: "Pradnyesh | Full-Stack & AI Engineer",
    description: "Building the future with Next.js and Generative AI.",
    url: "https://pradnyesh.com",
    siteName: "Pradnyesh Portfolio",
    images: [
      {
        url: "/og-image.png", // 
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}> 
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
    </html>
  );
}
