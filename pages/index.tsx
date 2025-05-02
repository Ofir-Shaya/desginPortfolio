import type { AppProps } from "next/app";
import Head from "next/head";
import ShowcaseCarousel from "../components/ShowcaseCarousel";
import PortfolioGrid from "../components/PortfolioGrid";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Alinachka</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Creative freelancer specializing in design, marketing, photography, and social media"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              {/* Hero Section (Wide) */}
              <section className="w-full min-h-[80vh] bg-black text-white flex items-center justify-center text-center">
                <h1 className="text-5xl md:text-7xl font-bold">
                  Bringing Your Vision to Life
                </h1>
              </section>
              {/* Mission (Narrow) */}
              <section className="bg-gray-50">
                <div className="relative px-4 py-20 mx-auto max-w-xl text-center">
                  <div className="absolute top-1/4 bottom-1/4 left-0 w-px bg-gray-200"></div>
                  <div className="absolute top-1/4 bottom-1/4 right-0 w-px bg-gray-200"></div>
                  <h2 className="text-3xl font-bold mb-4">
                    Design with Purpose
                  </h2>
                  <p className="text-gray-600 text-lg">
                    I help brands stand out with clean, bold visuals and
                    thoughtful design strategy.
                  </p>
                </div>
              </section>
              {/* Carousel (Wide) */}
              <section className="w-full bg-gray-100 py-16">
                <div className="max-w-6xl mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center mb-8">
                    Recent Visuals
                  </h2>
                  <ShowcaseCarousel />
                </div>
              </section>
              {/* How It Works (Narrow) */}
              <section className="bg-gray-50">
                <div className="relative px-4 py-20 mx-auto max-w-xl text-center">
                  <div className="absolute top-1/4 bottom-1/4 left-0 w-px bg-gray-200"></div>
                  <div className="absolute top-1/4 bottom-1/4 right-0 w-px bg-gray-200"></div>
                  <h2 className="text-2xl font-bold mb-4">How I Work</h2>
                  <p className="text-gray-700 text-base">
                    From concept to execution, I collaborate closely with
                    clients to turn ideas into high-impact design that converts
                    and inspires.
                  </p>
                </div>
              </section>

              {/* Portfolio Section (Wide) */}
              <section className="w-full bg-white py-16">
                <div className="max-w-7xl mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center mb-12">
                    Featured Projects
                  </h2>
                  <PortfolioGrid />
                </div>
              </section>
              {/* Final Message (Narrow) */}
              <section className="bg-gray-50">
                <div className="relative px-4 py-20 mx-auto max-w-xl text-center">
                  <div className="absolute top-1/4 bottom-1/4 left-0 w-px bg-gray-200"></div>
                  <div className="absolute top-1/4 bottom-1/4 right-0 w-px bg-gray-200"></div>
                  <h2 className="text-2xl font-semibold mb-2">
                    More than pixels
                  </h2>
                  <p className="text-gray-600">
                    It’s about helping you connect, grow, and inspire with
                    design that actually works.
                  </p>
                </div>
              </section>
              {/* CTA (Wide) */}
              <section className="w-full bg-primary text-white py-20 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Let’s Build Something That Lasts
                </h2>
                <p className="text-lg mb-8">
                  Your brand deserves more than a template. Let's craft
                  something original.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                  Start Your Project
                </a>
              </section>
            </main>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
