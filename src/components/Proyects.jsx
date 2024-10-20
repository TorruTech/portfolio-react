import React, { useRef, useEffect } from 'react';

const projects = [
  {
    url: "https://proydes-spa.vercel.app/",
    imgSrc: "./images/proydes.png",
    title: "Landing page de Proydes S.L."
  },
  {
    url: "https://tic-tac-mqzpbiuxd-torrutechs-projects.vercel.app/",
    imgSrc: "./images/tictactoe.png",
    title: "Tres en raya"
  },
  {
    url: "https://calculator-pdf43bhvd-torrutechs-projects.vercel.app/",
    imgSrc: "./images/calculadora.png",
    title: "Calculadora"
  },
  {
    url: "https://guess-the-species.vercel.app/",
    imgSrc: "./images/adivinalaespecie.png",
    title: "Adivina la especie"
  }
];

export const Proyects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <div id="projects">
      <h1>Proyectos personales</h1>
      <div id="projectsGrid" ref={projectsRef}>
        {projects.map((project) => (
          <div className="singleProject" key={project.title}>
            <a href={project.url}>
              <img src={project.imgSrc} alt={project.title} />
            </a>
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
