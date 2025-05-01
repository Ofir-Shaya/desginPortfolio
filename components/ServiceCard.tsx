import {
  Paintbrush,
  BarChart2,
  Camera,
  MessageSquare,
  Sofa,
  FolderKanban,
} from "lucide-react";

const iconMap = {
  design: Paintbrush,
  marketing: BarChart2,
  photography: Camera,
  social: MessageSquare,
  interior: Sofa,
  planning: FolderKanban,
};

interface Service {
  title: string;
  description: string;
  iconKey: keyof typeof iconMap;
}

const ServiceCard = ({ service }: { service: Service }) => {
  const Icon = iconMap[service.iconKey];
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
        <Icon size={20} />
      </div>
      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
