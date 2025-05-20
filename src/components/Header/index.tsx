import { GithubLogo, LinkedinLogo, ReadCvLogo } from "@phosphor-icons/react";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

interface LinkData {
  github: string;
  linkedin: string;
  curriculum: string;
}

export default function Header() {
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
    <header className="fixed z-[1] w-full">
      <Navbar />
      <div className="h-10 bg-gray-light dark:bg-gray flex justify-between items-center px-side-spacing">
        <div className="inline-flex space-x-2">
          <a
            className="opacity-70 hover:opacity-100 transition-[opacity]"
            href={data?.github}
            target="_blank"
          >
            <GithubLogo size={28} />
          </a>
          <a
            className="opacity-70 hover:opacity-100 transition-[opacity]"
            href={data?.curriculum}
            target="_blank"
          >
            <ReadCvLogo size={28} />
          </a>
          <a
            className="opacity-70 hover:opacity-100 transition-[opacity]"
            href={data?.linkedin}
            target="_blank"
          >
            <LinkedinLogo size={28} />
          </a>
        </div>
        <p className="opacity-80">davidfontes303@gmail.com</p>
      </div>
    </header>
  );
}
