import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OMARO",
    template: "%s | OMARO",
  },
  description: "Infrastructure that keeps humans in every room that matters.",
  metadataBase: new URL("https://omaro.xyz"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('omaro-theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark');})()` }} />
      </head>
      <body
        className={`${ibmPlexMono.variable} ${ibmPlexSans.variable} antialiased min-h-screen flex flex-col`}
        style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
      >
        <Nav />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
