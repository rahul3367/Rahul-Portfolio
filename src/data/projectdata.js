import cvAnalysis from "../assets/image1.png";
import medicineDonation from "../assets/image2.png";
import portfolio from "../assets/image3.png";

export const projects = [
  {
    id: 1,
    title: "CV Analysis Platform",
    image: cvAnalysis,
    description: "A resume analysis system that evaluates CVs based on job roles using intelligent keyword extraction and structured scoring logic.",
    tags: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    githubUrl: "https://github.com/rahul3367/cv-analysis",
    liveUrl: "",
    accentColor: "#a78bfa",
    bgColor: "#1a1a2e",
  },
  {
    id: 2,
    title: "Medicine Donation App",
    image: medicineDonation,
    description: "A platform connecting donors and NGOs to redistribute unused medicines efficiently with authentication and tracking.",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    githubUrl: "https://github.com/rahul3367/medicine-donation",
    liveUrl: "",
    accentColor: "#4ade80",
    bgColor: "#0f2027",
  },
  {
    id: 3,
    title: "Portfolio Website",
    image: portfolio,
    description: "A minimal, performance-focused personal website built using React, Tailwind, and modern animation techniques.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/rahul3367/Rahul-Portfolio",
    liveUrl: "",
    accentColor: "#38bdf8",
    bgColor: "#0c1a2e",
  },
];