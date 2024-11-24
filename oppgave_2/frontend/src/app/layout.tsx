import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// TODO: Kommenter ut om du ønsker å bruke .css
// import '../styles/scss/main.css'

// TODO: Kommenter ut om du ikke ønsker å bruke tailwind
import "../styles/tailwind/main.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
      </body>
    </html>
  );
}

