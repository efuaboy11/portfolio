import Preloader from "@/components/ui/preloader";
import "./global.css"
import BootstrapForBrowser from "@/components/ui/bootstrapForBrowser";
import Header from "@/components/sections/header";
import CallToAction from "@/components/sections/callToAction";
import Footer from "@/components/sections/footer";

export const metadata = {
  title: "Ehizefua - Software Developer Portfolio",
  description: "Portfolio of Ehizefua, a versatile software developer specializing in Python/Django backend, React & Next.js frontend, and Flutter application development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <BootstrapForBrowser />
        <Preloader />
        <Header />
        {children}
        <CallToAction />
        <Footer />
      </body>
    </html>
  );
}
