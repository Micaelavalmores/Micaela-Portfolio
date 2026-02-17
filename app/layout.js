
import { Geist } from "next/font/google";
import { Raleway } from "next/font/google";
import "./globals.css";
import FooterVisibility from "./components/FooterVisibility";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});



export const metadata = {
  title: "Micaela's Portfolio",
  description: "A comprehensive showcase of my UX/UI design projects, skills, and experience. Explore my work, learn about my design process, and discover how I can help bring your digital ideas to life.",
  icons: {
    icon: "/logos/micaela-logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.variable}`}>
        {children}
        <FooterVisibility />
      </body>
    </html>
  );
}
