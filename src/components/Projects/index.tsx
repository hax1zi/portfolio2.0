import { useEffect, useState } from "react";
import Card from "./components/ProjectCard";
import { motion } from "framer-motion";

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
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-medium  mb-30"
      >
        Alguns dos meus projetos
      </motion.h2>
      {dataProjects.map((project) => (
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0}}
          viewport={{ once: true }}
          className="mt-40"
        >
          <Card
            direction={project.id === 2 ? "left" : ""}
            project={project}
            key={project.id}
          />
        </motion.div>
      ))}
    </section>
  );
}
