import Image from "next/image";
import Link from "next/link";

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="relative h-64">
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>

        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full transition-colors duration-200 hover:bg-gray-700 hover:text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.link && (
          <Link
            href={project.link}
            passHref
            legacyBehavior
            className="text-primary font-medium hover:underline transition-transform duration-200 hover:scale-105"
          >
            <a className="text-primary font-medium hover:underline">
              View Project
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
