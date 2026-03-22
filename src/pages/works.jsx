import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projectdata";

function Works() {
  return (
    <section
      id="works"
      className="min-h-screen text-white px-6 py-15"
      style={{
        background: `
          radial-gradient(ellipse 100% 70% at 50% 100%, rgba(55, 55, 60, 0.35) 0%, transparent 55%),
          radial-gradient(ellipse 80% 50% at 60% 90%, rgba(70, 70, 75, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(28, 28, 33, 0.3) 0%, transparent 70%),
          #111113
        `,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-24 mt-0 p-0">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-center">
            Projects
          </h2>
          <p className="text-center mt-2 max-w-full text-gray-500 text-lg ">A collection of my work in modern web development and clean UI/UX design.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:p-8 ">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;