import "~/styles/globals.css";

import { type Metadata } from "next";
import { Darumadrop_One, Fredoka } from "next/font/google";
import { PostHogProvider } from "~/components/PostHogProvider";

export const metadata: Metadata = {
  title: "DeltaHacks 12",
  description:
    "McMaster University's largest student-run hackathon for change.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "DeltaHacks 12",
    description:
      "McMaster University's largest student-run hackathon for change.",
    url: "https://deltahacks.com",
    siteName: "DeltaHacks 12",
    images: [
      {
        url: "https://deltahacks.com/og.png",
        width: 1200,
        height: 630,
        alt: "DeltaHacks 12",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
});

const darumadropOne = Darumadrop_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-darumdrop",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${darumadropOne.variable} ${fredoka.variable} scroll-smooth overscroll-none`}
    >
      <body className="bg-background overscroll-none">
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
