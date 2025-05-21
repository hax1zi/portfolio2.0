import { useEffect, useState } from "react";
import Card from "./components/ProjectCard";

interface projetoDataType {
  id: number;
  desktop: string;
  mobile: string;
  title: string;
  techs: Array<string>;
  description: string;
  link: string;
  github: string;
}

export default function Projects() {
  const [dataProjects, setDataProjects] = useState<projetoDataType[]>([]);

  useEffect(() => {
    fetch("https://backend-portfolio-one.vercel.app/projects")
      .then((response) => response.json())
      .then((data) => {
        setDataProjects(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <section
      id="projects"
      className="w-full h-full flex  justify-center items-center flex-col pt-40"
      aria-label="Alguns dos meus projetos"
    >
      <h2 className="text-4xl font-medium  mb-30">Alguns dos meus projetos</h2>
      <div className="space-y-50">
        {dataProjects.map((project) => (
          <Card
            direction={project.id === 2 ? "left" : ""}
            project={project}
            key={project.id}
          />
        ))}
      </div>
    </section>
  );
}
