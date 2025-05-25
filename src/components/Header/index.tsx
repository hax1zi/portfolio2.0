import { motion } from "framer-motion";
import Navbar from "../Navbar";
import { useDarkTheme } from "../../store/useDarkTema";
import { GithubLogo, LinkedinLogo, ReadCvLogo } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

interface LinkData {
  github: string;
  linkedin: string;
  curriculum: string;
}

export default function Header() {
  const { darkTheme } = useDarkTheme();
  const [data, setData] = useState<LinkData | null>(null);

  useEffect(() => {
    fetch("https://backend-portfolio-one.vercel.app/links")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="fixed z-[1] w-full h-20 max-sm:pl-8 max-lg:pl-14 lg:pl-side-spacing bg-light dark:bg-darker flex justify-between dark:text-light text-text max-sm:hidden"
    >
      <div className="flex items-center">
        <div className="flex items-center">
          <img
            src={`/icons/DF-${darkTheme ? "white" : "black"}.svg`}
            alt="David Fontes logo"
            className="w-8 h-8 text-3xl mr-2"
          />
          <h1 className="text-2xl mr-4 cursor-default font-medium max-xl:hidden ">
            DavidFontes
          </h1>
        </div>
        <div role="group" aria-label="Grupo de links" className="flex gap-2 max-sm:hidden">
          <a
            className="opacity-70 hover:opacity-100 transition-[opacity]"
            href={data?.github}
            target="_blank"
            aria-label="Github"
            rel="noopener noreferrer"
          >
            <GithubLogo size={28} />
          </a>
          <a
            className="opacity-70 hover:opacity-100 transition-[opacity]"
            href={data?.curriculum}
            target="_blank"
            aria-label="Curriculo"
            rel="noopener noreferrer"
          >
            <ReadCvLogo size={28} />
          </a>
          <a
            className="opacity-70 hover:opacity-100 transition-[opacity]"
            href={data?.linkedin}
            target="_blank"
            aria-label="linkedin"
            rel="noopener noreferrer"
          >
            <LinkedinLogo size={28} />
          </a>
        </div>
      </div>

      <Navbar />
    </motion.header>
  );
}
