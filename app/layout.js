import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { getImage } from "@/lib/images";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s | ${site.name} — ${site.role}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.description,
    url: site.url,
    siteName: site.brand,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
};

export default function RootLayout({ children }) {
  const logoSrc = getImage("brand", "logo");

  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-bg text-body antialiased flex flex-col">
        <Navbar logoSrc={logoSrc} />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
