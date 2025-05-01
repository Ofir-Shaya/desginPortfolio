import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ReviewCard from "../components/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ServiceCard from "../components/ServiceCard";
import { useRef, useState } from "react";

export default function Home() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<any>(null);

  const services: {
    title: string;
    description: string;
    iconKey:
      | "design"
      | "marketing"
      | "photography"
      | "social"
      | "interior"
      | "planning";
  }[] = [
    {
      title: "Graphic Design",
      description:
        "Creative visual solutions for brand identity, print materials, and digital assets.",
      iconKey: "design",
    },
    {
      title: "Digital Marketing",
      description:
        "Strategic campaigns that drive engagement and convert audiences.",
      iconKey: "marketing",
    },
    {
      title: "Photography",
      description:
        "Professional photography services for products, events, and portraits.",
      iconKey: "photography",
    },
    {
      title: "Social Media",
      description:
        "Content creation and management to build your brand presence online.",
      iconKey: "social",
    },
    {
      title: "Interior Design",
      description:
        "Stylish and functional interior solutions tailored to your space and personality.",
      iconKey: "interior",
    },
    {
      title: "Design Planning",
      description:
        "Holistic design strategy and project planning to bring creative visions to life.",
      iconKey: "planning",
    },
  ];

  return (
    <>
      <Head>
        <title>Alinachka | Home</title>
        <meta
          name="description"
          content="Creative freelancer specializing in design, marketing, photography, and social media"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Creative workspace"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="container-custom relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Bringing your creative vision to life
            </h1>
            <p className="text-xl mb-8">
              Design • Marketing • Photography • Social Media
            </p>
            <Link
              href="/portfolio"
              className="btn transition-transform duration-200 hover:scale-105"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Hello, I'm Alina Shipovalova
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              I help brands stand out in the digital world through strategic
              design, engaging marketing, captivating photography, and effective
              social media presence. With over 5 years of experience working
              with businesses of all sizes, I bring a unique creative
              perspective to every project.
            </p>
            <Link
              href="/contact"
              className="btn transition-transform duration-200 hover:scale-105"
            >
              Let's Work Together
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">My Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive creative solutions tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Genuine feedback from happy clients
            </p>
          </div>

          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {[
                {
                  name: "Emma R.",
                  text: "Alina made my brand look premium. Fast, professional, and amazing style.",
                },
                {
                  name: "Liam K.",
                  text: "Incredible photo shoot and post-editing. My product finally stands out.",
                },
                {
                  name: "Sophia D.",
                  text: "Hired her for marketing visuals — results were clean, consistent, and sharp.",
                },
                {
                  name: "Daniel M.",
                  text: "Design planning was on point, she delivered more than expected.",
                },
                {
                  name: "Ava L.",
                  text: "Reliable, responsive, and easy to work with. Will hire again for sure.",
                },
                {
                  name: "Noah S.",
                  text: "She’s the reason our IG looks this good now. Period.",
                },
              ].map((review, i) => (
                <SwiperSlide key={i}>
                  <ReviewCard review={review} />
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
              className={`absolute top-1/2 left-[-30px] -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-md z-10 transition-opacity flex items-center justify-center ${
                isBeginning
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
            >
              <span className="text-2xl leading-none">‹</span>
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
              className={`absolute top-1/2 right-[-30px] -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-md z-10 transition-opacity flex items-center justify-center ${
                isEnd ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-100"
              }`}
            >
              <span className="text-2xl leading-none">›</span>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to start your next project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something amazing together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-primary bg-white hover:bg-transparent hover:text-white transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
