import "./globals.css";
import { Montserrat } from "next/font/google";
import Nav from "./components/nav";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
