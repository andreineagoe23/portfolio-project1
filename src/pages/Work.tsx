import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Palette, FileText, Sparkles } from "lucide-react";

const toolCategories = [
  {
    id: "photoshop",
    title: "Adobe Photoshop",
    description: "Photo editing, digital art, and visual compositions",
    path: "/work/photoshop",
    icon: Palette,
  },
  {
    id: "indesign",
    title: "Adobe InDesign",
    description: "Editorial design, layouts, and print materials",
    path: "/work/indesign",
    icon: FileText,
  },
  {
    id: "canva",
    title: "Canva",
    description: "Social media graphics and digital content",
    path: "/work/canva",
    icon: Sparkles,
  }
];

const Work = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center animate-fade-in">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            My Work
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my design projects organized by tool. Each collection showcases 
            different skills and creative approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {toolCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link 
                key={category.id} 
                to={category.path}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="
                  relative overflow-hidden 
                  hover:shadow-hover transition-all duration-300 
                  p-8 h-full
                  hover:scale-105
                ">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="mb-6 p-4 rounded-2xl bg-accent/10">
                      <Icon className="w-10 h-10 text-accent" strokeWidth={1.5} />
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-4">
                      {category.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-6 flex-grow">
                      {category.description}
                    </p>
                    
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-4 transition-all duration-300">
                      View Projects
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Work;
