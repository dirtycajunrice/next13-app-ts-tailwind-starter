import "@/styles/globals.css";
import React, { FC } from "react";
import { PageProps } from "@/interfaces";
import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Example",
  description: "Example",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "/Logo.png",
    shortcut: "/Logo.png",
    apple: "/Logo.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/Logo.png",
    },
  },
};

const RootLayout: FC<PageProps> = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <Link href="/">Home</Link> | <Link href="/about">About</Link> |{' '}
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  );
}

export default RootLayout;
