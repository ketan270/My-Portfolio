import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ketan Sharma — Frontend Engineer",
  description:
    "Frontend Engineer and Product Designer. Focused on interfaces and experiences, working remotely from Chandigarh,India.",
  generator: "Next.js",
  applicationName: "Ketan Sharma",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "nigeria",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Ketan Sharma — Frontend Engineer",
    description:
    "Frontend Engineer and Product Designer. Focused on interfaces and experiences, working remotely from Chandigarh,India.",
    url: "https://myportfolio2120.netlify.app/",
    siteName: "myportfolio2120.netlify.app/",
      },
  twitter: {
    card: "summary_large_image",
    title: "Ketan Sharma — Frontend Engineer",
    description:
    "Frontend Engineer and Product Designer. Focused on interfaces and experiences, working remotely from Chandigarh,India.",
    creator: "ketan270",
    creatorId: "1243720976552144897",
      },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
