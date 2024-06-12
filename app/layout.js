import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Navbarcomponents/Nav";
import { Providers } from "./Provider";
import Footer from "../components/Footercomponents/Footer";
import FAQ from "@/components/Homecomponets/FAQ";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title:
    "Angadi World Technologies - Leading Website Designing & Mobile App Development Company in India, US, and UK",
  description:
    "Angadi World Technologies (AWT) is the best website designing company offering top-notch mobile app development, digital marketing, project consulting, and QR code technology solutions in Bangalore, Hyderabad, India, US, and UK",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/png"
          sizes="32x32"
        />

        <meta property="og:title" content="Angadi World Technologies Pvt Ltd" />
        <meta
          property="og:description"
          content="Angadi World Technologies (AWT) is the best website designing company offering top-notch mobile app development, digital marketing, project consulting, and QR code technology solutions in Bangalore, Hyderabad, India, US, and UK"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dipr7y36n/image/upload/v1717178542/AWT-WEBSITE/velm49jtssv2r6hqtgyy.png"
        />
        <meta property="og:url" content="https://www.angadiworldtech.com" />
      </head>
      <body className={inter.className}>
        <Providers>
          <Nav />
          {children}
          <FAQ />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
