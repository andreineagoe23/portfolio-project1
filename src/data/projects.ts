export interface Project {
  id: string;
  title: string;
  category: string;
  tools: string[];
  challenge: string;
  solution: string;
  thumbnail: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "glitch-portrait",
    title: "Glitch Effect Portrait",
    category: "Digital Art",
    tools: ["Adobe Photoshop"],
    challenge: "Create a striking digital portrait that explores the intersection of traditional portraiture and digital distortion effects.",
    solution: "Applied glitch art techniques using displacement maps and pixel sorting to create a dynamic half-distorted effect. The contrast between the natural portrait and digital corruption creates visual tension and narrative depth.",
    thumbnail: "/placeholder-project-1.jpg",
    images: [
      "/placeholder-project-1-1.jpg",
      "/placeholder-project-1-2.jpg",
      "/placeholder-project-1-3.jpg",
    ],
  },
  {
    id: "food-campaign",
    title: "EAT Campaign - Food Photography",
    category: "Advertisement",
    tools: ["Adobe Photoshop"],
    challenge: "Design an eye-catching food campaign that promotes healthy eating with bold typography and vibrant imagery.",
    solution: "Combined fresh produce photography with striking glitch effects and bold vertical typography. The distorted lines create energy and movement, while the warm color palette emphasizes freshness and appetite appeal.",
    thumbnail: "/placeholder-project-2.jpg",
    images: [
      "/placeholder-project-2-1.jpg",
      "/placeholder-project-2-2.jpg",
      "/placeholder-project-2-3.jpg",
    ],
  },
  {
    id: "selective-color-portrait",
    title: "Selective Color Portrait",
    category: "Photo Manipulation",
    tools: ["Adobe Photoshop"],
    challenge: "Create a compelling portrait that uses selective color to draw attention and create emotional impact.",
    solution: "Converted the portrait to black and white while preserving vibrant rainbow gradient colors on the clothing. This technique creates a powerful focal point and adds a contemporary, artistic edge to a classic portrait style.",
    thumbnail: "/placeholder-project-3.jpg",
    images: [
      "/placeholder-project-3-1.jpg",
      "/placeholder-project-3-2.jpg",
      "/placeholder-project-3-3.jpg",
    ],
  },
  {
    id: "switzerland-travel-guide",
    title: "Destination Switzerland - Travel Guide",
    category: "Editorial Design",
    tools: ["Adobe Photoshop"],
    challenge: "Design an informative and visually appealing travel brochure that captures the essence of Switzerland as a destination.",
    solution: "Created a tri-fold brochure combining stunning landscape photography with elegant gold typography. The layout balances tourist information with aspirational imagery, using a sophisticated color scheme that reflects Swiss quality and beauty.",
    thumbnail: "/placeholder-project-4.jpg",
    images: [
      "/placeholder-project-4-1.jpg",
      "/placeholder-project-4-2.jpg",
      "/placeholder-project-4-3.jpg",
    ],
  },
  {
    id: "mac-cosmetics-ad",
    title: "MAC Cosmetics Product Advertisement",
    category: "Product Design",
    tools: ["Adobe Photoshop"],
    challenge: "Design a premium cosmetics advertisement that showcases the product while maintaining brand elegance and visual appeal.",
    solution: "Created an abstract background using flowing organic shapes in gradient tones that complement the foundation shade. The composition emphasizes the product while the text 'Perfection Begins With You' reinforces brand messaging in an elegant, modern layout.",
    thumbnail: "/placeholder-project-6.jpg",
    images: [
      "/placeholder-project-6-1.jpg",
      "/placeholder-project-6-2.jpg",
      "/placeholder-project-6-3.jpg",
    ],
  },
];
