import { List, X } from "@phosphor-icons/react";
import Button from "../Button";
import { useDarkTheme } from "../../store/useDarkTema";
import { useMenuMobile } from "../../store/useMenuMobile";
import { cn } from "../../utils/cn";
import ButtonThema from "../ButtonTheme";

export default function HeaderMobile() {
  const { darkTheme } = useDarkTheme();
  const { setMenuState, menuMobile } = useMenuMobile();

  return (
    <header className="sm:hidden fixed z-[1] w-full bg-light dark:bg-darker dark:text-light text-text  pl-8 pr-4">
      <div className="flex items-center justify-between h-16">
        <img
          src={`/icons/DF-${darkTheme ? "white" : "black"}.svg`}
          alt="David Fontes logo"
          className="w-8 h-8 text-3xl mr-2"
        />
        {menuMobile ? (
          <Button
            onClick={() => setMenuState(false)}
            variant="ghost"
            aria-label="menu mobile"
          >
            <X size={48} />
          </Button>
        ) : (
          <Button
            onClick={() => setMenuState(true)}
            variant="ghost"
            aria-label="menu mobile"
          >
            <List size={48} />
          </Button>
        )}
      </div>
      <article
        className={cn(
          "w-full flex justify-center text-center text-3xl h-screen transition-[height] duration-500 overflow-hidden",
          menuMobile ? "h-screen" : "h-0"
        )}
      >
        <nav>
          <ul className="flex flex-col gap-6 mt-10 mb-4">
            <li>
              <a onClick={() => setMenuState(false)} href="#home">
                Inicio
              </a>
            </li>
            <li>
              <a onClick={() => setMenuState(false)} href="#about">
                Sobre
              </a>
            </li>
            <li>
              <a onClick={() => setMenuState(false)} href="#experience">
                Experiências
              </a>
            </li>
            <li>
              <a onClick={() => setMenuState(false)} href="#projects">
                Projetos
              </a>
            </li>
            <li>
              <a onClick={() => setMenuState(false)} href="#contact">
                Contato
              </a>
            </li>
          </ul>
          <ButtonThema />
        </nav>
      </article>
    </header>
  );
}
