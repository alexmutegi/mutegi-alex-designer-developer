import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mutegi Alex | Designer & Developer",
  description:
    "Mutegi Alex is a designer and developer specializing in system architecture, web development, branding, payments, automation, APIs, digital marketing and SEO.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}