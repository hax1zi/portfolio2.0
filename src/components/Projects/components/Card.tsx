import React from "react";
import NotebookScreen from "./NotebookScreen";
import MobileScreen from "./MobileScreen";
import { cn } from "../../../utils/cn";
import { GithubLogo, Link } from "@phosphor-icons/react";

interface CardProps {
  children: React.ReactNode;
  title: string;
  techs: string[];
  desktopImg: string;
  mobileImg: string;
  direction?: "left" | "";
  github: string;
  link: string;
}

export default function Card({
  children,
  desktopImg,
  mobileImg,
  techs,
  title,
  direction,
  github,
  link,
}: CardProps) {
  return (
    <div
      className={cn(
        "flex gap-24",
        direction === "left" && "flex-row-reverse gap-10"
      )}
    >
      <div className="relative">
        <NotebookScreen image={desktopImg} />
        <MobileScreen image={mobileImg} />
      </div>
      <div className="max-w-[400px] space-y-4 flex flex-col justify-center">
        <h4 className="font-bold text-4xl">{title}</h4>
        <p className="opacity-80 leading-relaxed text-lg">{children}</p>
        <div className="flex gap-4 flex-wrap">
          {techs.map((tech, index) => (
            <p
              className="px-4 py-1 font-medium bg-gray-light rounded dark:text-light dark:bg-gray"
              key={index}
            >
              {tech}
            </p>
          ))}
        </div>
        <div className="flex">
          <a
            href={github}
            target="_blank"
            className="p-2 text-blue hover:bg-gray transition-colors rounded-md"
          >
            <GithubLogo size={32} />
          </a>
          <a
            href={link}
            target="_blank"
            className="p-2 text-blue hover:bg-gray transition-colors rounded-md"
          >
            <Link size={32} />
          </a>
        </div>
      </div>
    </div>
  );
}
