import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ReviewCard from "../components/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  const services = [
    {
      title: "Graphic Design",
      description:
        "Creative visual solutions for brand identity, print materials, and digital assets.",
      icon: "design",
    },
    {
      title: "Digital Marketing",
      description:
        "Strategic campaigns that drive engagement and convert audiences.",
      icon: "marketing",
    },
    {
      title: "Photography",
      description:
        "Professional photography services for products, events, and portraits.",
      icon: "photography",
    },
    {
      title: "Social Media",
      description:
        "Content creation and management to build your brand presence online.",
      icon: "social",
    },
    {
      title: "Interior Design",
      description:
        "Stylish and functional interior solutions tailored to your space and personality.",
      icon: "design",
    },
    {
      title: "Design Planning",
      description:
        "Holistic design strategy and project planning to bring creative visions to life.",
      icon: "design",
    },
  ];

  return (
    <>
      <Head>
        <title>Alinchka | Home</title>
        <meta
          name="description"
          content="Creative freelancer specializing in design, marketing, photography, and social media"
        />
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
            <Link href="/portfolio" className="btn">
              View My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Hello, I'm Alinchka</h2>
            <p className="text-lg text-gray-600 mb-8">
              I help brands stand out in the digital world through strategic
              design, engaging marketing, captivating photography, and effective
              social media presence. With over 5 years of experience working
              with businesses of all sizes, I bring a unique creative
              perspective to every project.
            </p>
            <Link href="/contact" className="btn">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {service.icon === "design" && (
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      ></path>
                    </svg>
                  )}
                  {service.icon === "marketing" && (
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                      ></path>
                    </svg>
                  )}
                  {service.icon === "photography" && (
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  )}
                  {service.icon === "social" && (
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      ></path>
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
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
              Honest feedback from past clients and collaborators
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {[
              {
                name: "Emma R.",
                text: "Alina transformed our brand visuals and social media presence. Super professional and creative.",
              },
              {
                name: "Liam K.",
                text: "Outstanding photography and design sense. Highly recommend her for any freelance project.",
              },
              {
                name: "Sophia D.",
                text: "We hired Alina for design planning and she nailed it — beautiful work and easy to collaborate with.",
              },
              {
                name: "Daniel M.",
                text: "One of the best creative freelancers I’ve worked with. Punctual, talented, and friendly.",
              },
            ].map((review, i) => (
              <SwiperSlide key={i}>
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
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
