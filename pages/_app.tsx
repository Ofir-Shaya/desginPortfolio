import { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Alinochka showcasing design, marketing, photography, and social media work"
        />
        <meta property="og:title" content="Alinochka" />
        <meta
          property="og:description"
          content="Alinochka showcasing design, marketing, photography, and social media work"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta
          property="og:url"
          content="https://creative-portfolio.vercel.app"
        />
        <title>Alinochka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
