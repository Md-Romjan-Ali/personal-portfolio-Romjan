import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MouseProvider } from "../contexts/MouseContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Md. Romjan Islam - Portfolio",
  description: "Portfolio homepage for Md. Romjan Islam built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MouseProvider>{children}</MouseProvider>
      </body>
    </html>
  );
}
