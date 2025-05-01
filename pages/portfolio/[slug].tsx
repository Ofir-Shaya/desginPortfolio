import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Head from "next/head";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

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
    description: "User interface design for a travel guide mobile application.",
    imageUrl: "/images/project6.jpg",
    tags: ["UI/UX", "Mobile App"],
    link: "/portfolio/travel-app",
  },
];

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { slug: project.link.split("/").pop() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const project = projects.find((p) => p.link.endsWith(slug));

  return {
    props: {
      project: project || null,
    },
  };
};

export default function ProjectPage({ project }: { project: Project }) {
  if (!project) return <div>Project not found</div>;

  return (
    <>
      <Head>
        <title>{project.title} | Portfolio</title>
      </Head>
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={1000}
          height={600}
          className="rounded-lg mb-6 object-cover"
        />
        <p className="text-lg text-gray-700 mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 px-3 py-1 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
