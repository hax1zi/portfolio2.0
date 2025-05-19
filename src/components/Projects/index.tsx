import { useEffect, useState } from "react";
import Card from "./components/Card";

interface projetoDataType {
  id: number;
  desktop: string;
  mobile: string;
  title: string;
  techs: Array<string>;
  description: string;
  link: string;
  blackOrWhite: string;
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
    <section id="projects" className="w-full h-full flex  justify-center items-center flex-col pt-40">
      <h3 className="text-4xl font-medium  mb-30">Alguns dos meus projetos</h3>
      <div className="space-y-50">
        {dataProjects.map((project) => (
          <Card
            direction={project.id === 2 ? "left" : ""}
            title={project.title}
            techs={project.techs}
            desktopImg={project.desktop}
            mobileImg={project.mobile}
            key={project.id}
          >
            {project.description}
          </Card>
        ))}
      </div>
    </section>
  );
}
