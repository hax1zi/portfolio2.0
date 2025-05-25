import NotebookScreen from "./NotebookScreen";
import MobileScreen from "./MobileScreen";
import { cn } from "../../../utils/cn";
import { GithubLogo, Link } from "@phosphor-icons/react";
import Button from "../../Button";

interface ProjectCardProps {
  project: {
    id: number;
    desktop: string;
    mobile: string;
    title: string;
    techs: Array<string>;
    description: string;
    link: string;
    github: string;
  };
  direction?: "left" | "";
}

export default function ProjectCard({ project, direction }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "flex gap-24 max-lg:gap-0 justify-center flex-wrap",
        direction === "left" && "flex-row-reverse max-lg:flex-row"
      )}
      aria-label={`Projeto: ${project.title}`}
    >
      <div className="relative">
        <NotebookScreen image={project.desktop} />
        <MobileScreen direction={direction} image={project.mobile} />
      </div>

      <div className="max-w-[340px] max-sm:max-w-[300px] space-y-4 flex flex-col justify-center">
        <h3 className="font-bold text-4xl">{project.title}</h3>
        <p className="opacity-80 leading-relaxed text-lg">
          {project.description}
        </p>
        <div className="flex gap-4 flex-wrap">
          {project.techs.map((tech, index) => (
            <p
              className="px-4 py-1 font-medium bg-gray-light rounded dark:text-light dark:bg-gray"
              key={index}
            >
              {tech}
            </p>
          ))}
        </div>
        <div className="flex">
          <Button variant="ghost" className="py-2">
            <a
              href={project.github}
              target="_blank"
              className="text-blue rounded-md"
              rel="noopener noreferrer"
              aria-label="Código no GitHub"
            >
              <GithubLogo size={32} />
            </a>
          </Button>
          <Button variant="ghost" className="py-2">
            <a
              href={project.link}
              target="_blank"
              className=" text-blue rounded-md"
              rel="noopener noreferrer"
              aria-label="Ver projeto ao vivo"
            >
              <Link size={32} />
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
