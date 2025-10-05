import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import aboutPortrait from "@/assets/about-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Portrait */}
          <div className="animate-fade-in">
            <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-lg overflow-hidden shadow-card">
              <img
                src={aboutPortrait}
                alt="Georgeana-Maria Matei"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* About Me Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Me</h1>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm Georgeana-Maria Matei, an ambitious person who is always eager to learn new things. I am currently a Digital Media student at the West University of Timișoara.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I am organized, with great attention to detail, and my biggest motivation is to constantly develop my skills and contribute to a team's success. I quickly adapt my abilities to get actively involved and achieve successful results. My passion for creativity and communication is also reflected in my consistent activity on TikTok, where I create content and analyze how the platform's algorithm works.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My digital skills include Adobe Photoshop, Canva, CapCut, and the Microsoft Office suite.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="animate-fade-in">
          <h2 className="text-3xl font-semibold mb-8">Education</h2>
          <div className="p-6 bg-card rounded-lg shadow-soft">
            <h3 className="font-semibold text-xl mb-2">Digital Media</h3>
            <p className="text-muted-foreground mb-4">West University of Timișoara • 2023 - 2026 (Present)</p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Analyzed the online campaign data of a local company, identifying strengths and weaknesses.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Participated in a practical project as a micro-influencer, promoting products and services like a real content creator.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Studied collaborative content types and their impact on the audience.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
