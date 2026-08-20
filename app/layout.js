import { Unbounded, Poppins } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { getImage } from "@/lib/images";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const unbounded = Unbounded({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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
    <html lang="en" className={`${unbounded.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-bg text-body antialiased flex flex-col">
        <Navbar logoSrc={logoSrc} />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
