import { Moon, Sun } from "lucide-react";
import { useDarkTheme } from "../store/useDarkTema";

export default function ButtonThema() {
    const { darkTheme, toggleTheme } = useDarkTheme();
    const Icon = darkTheme ? Moon : Sun;

    const animation = darkTheme ? "rotate-[360deg]" : "rotate-[0deg]";
    const transition = "transition-all duration-300 ease-in-out";

    const handleClick = () => {
        toggleTheme();
    };

    return (
        <button
            onClick={handleClick}
            aria-label={`Mudar para tema ${darkTheme ? "claro" : "escuro"}`}
            className={`dark:hover:bg-gray p-2 rounded-md hover:bg-gray/30 font-medium overflow-hidden ${transition}`}
        >
            <div
                key={darkTheme ? "moon" : "sun"}
                className={`animate-${animation} ${transition}`}
            >
                <Icon size={28} />
            </div>
        </button>
    );
}
