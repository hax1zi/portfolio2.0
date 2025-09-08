import Navbar from "../Navbar";
import { useDarkTheme } from "../../store/useDarkTema";

export default function Header() {
    const { darkTheme } = useDarkTheme();

    return (
        <header className="fixed z-[1] w-full h-20 max-sm:pl-8 max-lg:pl-14 lg:pl-side-spacing bg-[#F0F0F0] dark:bg-black flex justify-between dark:text-light text-text max-sm:hidden">
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
            </div>
            <Navbar />
        </header>
    );
}
