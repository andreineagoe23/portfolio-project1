import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const projectImages = [project1, project2, project3, project4, project5, project6];

const ProjectDetail = () => {
  const { id } = useParams();
  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <div className="min-h-screen pt-24 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/work">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Work
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const mainImage = projectImages[projectIndex];

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <Link to="/work">
          <Button variant="ghost" className="mb-8 -ml-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Work
          </Button>
        </Link>

        <div className="animate-fade-in">
          {/* Project Header */}
          <div className="mb-12">
            <p className="text-sm uppercase tracking-wider text-accent mb-3">
              {project.category}
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{project.title}</h1>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="aspect-video rounded-lg overflow-hidden shadow-card mb-16">
            <img
              src={mainImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">My Solution</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Project Showcase */}
          <div>
            <h2 className="text-2xl font-semibold mb-8">Project Showcase</h2>
            <div className="grid gap-8">
              {/* Reuse the main image for showcase */}
              <div className="aspect-[16/10] rounded-lg overflow-hidden shadow-card">
                <img
                  src={mainImage}
                  alt={`${project.title} showcase 1`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-square rounded-lg overflow-hidden shadow-card bg-muted"></div>
                <div className="aspect-square rounded-lg overflow-hidden shadow-card bg-muted"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
