import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const projectImages = [project1, project2, project3, project4, project5, project6];

const InDesign = () => {
  const indesignProjects = projects.filter(p => 
    p.tools.includes("Adobe InDesign")
  );

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <Link to="/work">
            <Button variant="ghost" className="mb-4">← Back to Work</Button>
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Adobe InDesign Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Projects created with Adobe InDesign, showcasing editorial design, layouts, 
            and print materials.
          </p>
        </div>

        {indesignProjects.length === 0 ? (
          <div className="text-center py-20 animate-fade-in">
            <p className="text-xl text-muted-foreground">
              Coming soon! InDesign projects will be added here.
            </p>
          </div>
        ) : (
          <div className="grid gap-12">
            {indesignProjects.map((project, index) => {
              const projectIndex = projects.findIndex(p => p.id === project.id);
              return (
                <div key={project.id} className="animate-fade-in">
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-card">
                      <img
                        src={projectImages[projectIndex]}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                        {project.category}
                      </p>
                      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                      
                      <div className="mb-4">
                        <h3 className="font-semibold mb-2">Tools Used</h3>
                        <p className="text-muted-foreground">{project.tools.join(", ")}</p>
                      </div>

                      <div className="mb-4">
                        <h3 className="font-semibold mb-2">The Challenge</h3>
                        <p className="text-muted-foreground">{project.challenge}</p>
                      </div>

                      <div className="mb-6">
                        <h3 className="font-semibold mb-2">My Solution</h3>
                        <p className="text-muted-foreground">{project.solution}</p>
                      </div>

                      <Link to={`/project/${project.id}`}>
                        <Button variant="outline">View Full Project →</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default InDesign;
