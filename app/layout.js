import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: {
    default: "Compassionate Support for Seniors Foundation",
    template: "%s | Compassionate Support for Seniors Foundation"
  },
  description:
    "Compassionate care, education, accessibility, settlement support, and community-centered programs."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="site-body">
        <div className="site-orb site-orb--one" />
        <div className="site-orb site-orb--two" />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
