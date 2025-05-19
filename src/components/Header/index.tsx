import { GithubLogo, LinkedinLogo, ReadCvLogo } from "@phosphor-icons/react";
import Navbar from "./components/Navbar";

export default function Header() {
  return (
    <header className="fixed z-[1] w-full">
      <Navbar />
      <div className="h-10 bg-gray-light dark:bg-gray flex justify-between items-center px-side-spacing">
        <div className="inline-flex space-x-2">
          <a
            className="opacity-70 hover:opacity-100 transition-[opacity]"
            href="https://www.linkedin.com/in/david-fontes-9b84a4201"
            target="_blank"
          >
            <LinkedinLogo size={28} />
          </a>
          <a
            className="opacity-70 hover:opacity-100 transition-[opacity]"
            href=""
            target="_blank"
          >
            <GithubLogo size={28} />
          </a>
          <a
            className="opacity-70 hover:opacity-100 transition-[opacity]"
            href=""
            target="_blank"
          >
            <ReadCvLogo size={28} />
          </a>
        </div>
        <p className="opacity-80">davidfontes303@gmail.com</p>
      </div>
    </header>
  );
}
