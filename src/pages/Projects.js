import React, { useEffect, useRef, useState } from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Projects.css";

function Projects() {
  const projectsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const projectsElement = projectsRef.current;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, observerOptions);

    if (projectsElement) {
      observer.observe(projectsElement);
    }

    return () => {
      if (projectsElement) {
        observer.unobserve(projectsElement);
      }
    };
  }, []);

  return (
    <div className="projects">
      <h1 className="projects-title">My Personal Projects</h1>
      <div
        className={`projectList ${isVisible ? "visible" : ""}`}
        ref={projectsRef}
      >
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem
              key={idx}
              id={idx}
              name={project.name}
              image={project.image}
              skills={project.skills}
              delay={idx * 0.1}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
