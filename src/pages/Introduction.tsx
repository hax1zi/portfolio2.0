import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { useDarkTheme } from "../store/useDarkTema";

interface IntroductionProps {
  setStart: (value: boolean) => void;
}

export default function Introduction({ setStart }: IntroductionProps) {
  const [animation, setAnimation] = useState<boolean>(false);
  const { darkTheme } = useDarkTheme();

  useEffect(() => {
    const timerAnimation = setTimeout(() => {
      setAnimation(true);
    }, 500);

    const timerHasStarted = setTimeout(() => {
      setStart(true);
    }, 1500);

    return () => {
      clearTimeout(timerAnimation);
      clearTimeout(timerHasStarted);
    };
  }, [setStart, setAnimation]);

  return (
    <section
      className={cn(
        "w-full h-screen bg-white dark:bg-black dark:text-white opacity-100 flex justify-center items-center flex-col transition-all duration-700 delay-1000 fixed z-[2]",
        animation && "opacity-0 invisible",
        darkTheme && "dark"
      )}
    >
      <h2
        className={cn(
          "font-medium text-5xl transition-all",
          animation && " -translate-y-10 opacity-0 duration-700"
        )}
      >
        Portfolio de David Fontes
      </h2>
      <h3
        className={cn(
          "text-4xl transition-all delay-300",
          animation && " -translate-y-10 opacity-0 duration-700"
        )}
      >
        Por favor beba <b className="text-blue ">água</b>
      </h3>
    </section>
  );
}
