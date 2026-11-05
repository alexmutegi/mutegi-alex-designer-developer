import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Mutegi Alex | Designer & Developer", template: "%s | Mutegi Alex" },
  description: "Mutegi Alex is a designer and developer creating digital systems, websites, brands, integrations and practical digital products.",
  metadataBase: new URL("https://mutegialex.com"),
  alternates: { canonical: "/" },
  openGraph: { title: "Mutegi Alex | Designer & Developer", description: "Digital design, development, systems, branding and integrations.", type: "website", locale: "en_KE" },
  twitter: { card: "summary_large_image", title: "Mutegi Alex | Designer & Developer", description: "Digital design, development, systems, branding and integrations." }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}