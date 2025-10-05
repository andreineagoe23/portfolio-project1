import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Download } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import photoshop1 from "@/assets/photoshop-1.png";
import photoshop2 from "@/assets/photoshop-2.png";
import photoshop3 from "@/assets/photoshop-3.png";
import photoshop4 from "@/assets/photoshop-4.png";
import photoshop6 from "@/assets/photoshop-6.png";

const projectImages = [photoshop1, photoshop2, photoshop3, photoshop4, photoshop6];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 bg-gradient-hero">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Georgeana-Maria Matei
              </h1>
              <p className="text-xl text-muted-foreground mb-8 font-light">
                Graphic Designer & Visual Storyteller
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Transforming ideas into compelling visuals through thoughtful design and creative problem-solving.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/work">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    View My Work
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Get In Touch
                  </Button>
                </Link>
                <a href="/CV_Matei_Georgeana.pdf" download="CV_Matei_Georgeana.pdf">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                </a>
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-card">
                <img
                  src={heroImage}
                  alt="Georgeana-Maria Matei"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Link to="/work">
              <Button variant="ghost" className="text-accent hover:text-accent/80">
                View All →
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 5).map((project, index) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                image={projectImages[index]}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
