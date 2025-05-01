import Head from "next/head";
import { useState } from "react";
import ProjectCard, { Project } from "../components/ProjectCard";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects: Project[] = [
    {
      id: "1",
      title: "Brand Identity: Eco Store",
      description:
        "Complete brand identity design for an eco-friendly online store.",
      imageUrl: "/images/project1.jpg",
      tags: ["Brand Design", "Logo", "Identity"],
      link: "/portfolio/eco-store",
    },
    {
      id: "2",
      title: "Product Photography: Artisan Jewelry",
      description:
        "Professional product photography for a handmade jewelry collection.",
      imageUrl: "/images/project2.jpg",
      tags: ["Photography", "Product"],
      link: "/portfolio/artisan-jewelry",
    },
    {
      id: "3",
      title: "Social Media Campaign: Summer Launch",
      description:
        "Strategic social media campaign for a summer clothing line launch.",
      imageUrl: "/images/project3.jpg",
      tags: ["Social Media", "Marketing"],
      link: "/portfolio/summer-launch",
    },
    {
      id: "4",
      title: "Website Redesign: Fitness Studio",
      description: "Complete website redesign for a local fitness studio.",
      imageUrl: "/images/project4.jpg",
      tags: ["Web Design", "UI/UX"],
      link: "/portfolio/fitness-studio",
    },
    {
      id: "5",
      title: "Marketing Materials: Food Festival",
      description:
        "Print and digital marketing materials for an annual food festival.",
      imageUrl: "/images/project5.jpg",
      tags: ["Marketing", "Print Design"],
      link: "/portfolio/food-festival",
    },
    {
      id: "6",
      title: "Mobile App UI: Travel Guide",
      description:
        "User interface design for a travel guide mobile application.",
      imageUrl: "/images/project6.jpg",
      tags: ["UI/UX", "Mobile App"],
      link: "/portfolio/travel-app",
    },
  ];

  const filters = [
    { value: "all", label: "All" },
    { value: "Brand Design", label: "Brand Design" },
    { value: "Photography", label: "Photography" },
    { value: "Marketing", label: "Marketing" },
    { value: "Social Media", label: "Social Media" },
    { value: "UI/UX", label: "UI/UX" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <>
      <Head>
        <title>Alinachka | Portfolio</title>
        <meta
          name="description"
          content="View my Alinachka featuring design, photography, marketing, and social media projects"
        />
      </Head>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              My Portfolio
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A collection of my best work across design, marketing,
              photography, and social media
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeFilter === filter.value
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
