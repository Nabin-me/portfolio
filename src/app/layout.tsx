import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "Nabin Dahal | Portfolio",
  description: "Nabin Dahal's Personal Portfolio",
};
// TODO do this and do that
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="grid place-content-center bg-[#EAEFF3]">
        <div className="w-[1244px]">
          <NavBar></NavBar>
          {children}
        </div>
      </body>
    </html>
  );
}
