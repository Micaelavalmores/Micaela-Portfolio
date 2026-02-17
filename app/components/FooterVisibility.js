"use client"

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterVisibility() {
  const pathname = usePathname();

  if (pathname?.startsWith("/case-study")) {
    return null;
  }

  return <Footer />;
}
