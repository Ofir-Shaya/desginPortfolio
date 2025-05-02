import Image from "next/image";

const projects = [
  {
    title: "Eco Store Branding",
    image: "/images/project1.jpg",
    tags: ["Branding", "Logo"],
  },
  {
    title: "Social Media Kit",
    image: "/images/project2.jpg",
    tags: ["Marketing", "Content"],
  },
  {
    title: "Fashion Editorial",
    image: "/images/project3.jpg",
    tags: ["Photography", "Styling"],
  },
  {
    title: "Interior Lookbook",
    image: "/images/project4.jpg",
    tags: ["Interior", "Layout"],
  },
  {
    title: "Creative Ad Concept",
    image: "/images/project5.jpg",
    tags: ["Creative", "Ad Design"],
  },
  {
    title: "Minimal Product Showcase",
    image: "/images/project6.jpg",
    tags: ["Product", "Visual"],
  },
];

export default function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {projects.map((project, i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition-shadow duration-300"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <div className="flex flex-wrap gap-2 text-sm text-primary font-medium">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-primary/10 px-2 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
