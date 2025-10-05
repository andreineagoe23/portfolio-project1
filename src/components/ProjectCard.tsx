import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
}

const ProjectCard = ({ id, title, category, image }: ProjectCardProps) => {
  return (
    <Link to={`/project/${id}`}>
      <Card className="group overflow-hidden border-0 shadow-card hover:shadow-card-hover transition-all duration-300">
        <div className="aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
            {category}
          </p>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCard;
