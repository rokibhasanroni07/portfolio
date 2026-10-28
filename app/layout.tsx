import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rokib Hasan Roni — Developer Portfolio",
  description:
    "Portfolio of Rokib Hasan Roni, a Computer Science and Engineering student exploring software development, AI/ML, and cybersecurity.",
  applicationName: "Rokib Hasan Roni Portfolio",
  keywords: [
    "Rokib Hasan Roni",
    "developer portfolio",
    "Computer Science and Engineering",
    "Next.js",
    "AI",
    "Machine Learning",
    "Cybersecurity",
  ],
  openGraph: {
    title: "Rokib Hasan Roni — Developer Portfolio",
    description: "Building practical solutions through code.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}