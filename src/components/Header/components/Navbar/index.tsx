import { useEffect, useState } from "react";
import { useDarkTheme } from "../../../../store/useDarkTema";
import { navList } from "../navList";
import Button from "../../../Button";
import ButtonThema from "../../../ButtonTheme";
import { GithubLogo, LinkedinLogo, ReadCvLogo } from "@phosphor-icons/react";

interface LinkData {
  github: string;
  linkedin: string;
  curriculum: string;
}

export default function Navbar() {
  const { darkTheme } = useDarkTheme();
  const [selectedLocation, setSelectedLocation] = useState<string>("");
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
    <nav className="bg-light  dark:bg-darker px-side-spacing flex justify-between items-center  ">
      <div className="inline-flex">
        <div className="inline-flex space-x-2 mr-4">
          <img
            src={`/icons/DF-${darkTheme ? "white" : "black"}.svg`}
            alt="David Fontes logo"
            className="w-8 h-8"
          />
          <h1 className="text-2xl cursor-default font-medium">DavidFontes</h1>
        </div>
        <div className="flex gap-2">
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
      <div className="text-xl flex items-center gap-2">
        {navList.map((item) => (
          <a key={item.id} href={item.local} className="text-base">
            <Button
              onClick={() => setSelectedLocation(item.local)}
              activated={item.local === selectedLocation}
              variant="nav"
              key={item.id}
            >
              {item.name}
            </Button>
          </a>
        ))}
        <ButtonThema />
      </div>
    </nav>
  );
}
