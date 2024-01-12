import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import localfont from "next/font/local";

const switzer = localfont({
  src: "../../public/fonts/Switzer-Variable.woff2",
  variable: "--font-switzer",
});

export const metadata: Metadata = {
  title: "Nabin Dahal | Portfolio",
  description: "Nabin Dahal's Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${switzer.className} bg-background dark:bg-black flex justify-center selection:bg-secondary `}
      >
        <div className="max-w-screen-2xl w-full mt-10">
          <NavBar></NavBar>
          {children}
        </div>
      </body>
    </html>
  );
}
