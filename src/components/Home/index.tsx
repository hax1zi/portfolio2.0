import { ChevronDown, Mouse } from "lucide-react";

export default function Home() {
    return (
        <section
            id="home"
            className="w-full h-screen flex flex-col justify-center items-center relative"
        >
            <div className="space-y-2 max-sm:space-y-0">
                <h1 className="text-4xl font-medium max-sm:text-xl">
                    Olá, sou o David
                </h1>
                <h2 className="text-7xl uppercase font-bold max-lg:text-5xl max-sm:text-3xl">
                    Desenvolvedor
                </h2>
                <div className="flex items-center">
                    <h3 className="text-7xl uppercase font-bold mr-4 max-sm:mr-0 max-lg:text-5xl max-sm:text-3xl">
                        Front-end
                    </h3>
                    <img
                        alt="JavaScript"
                        src="/icons/javascript.svg"
                        className="max-lg:w-12 max-sm:w-10"
                        width={64}
                    />
                    <img
                        alt="TypeScript"
                        src="/icons/typescript.svg"
                        className="max-lg:w-12 max-sm:w-10"
                        width={64}
                    />
                    <img
                        alt="React"
                        className="animate-[spin_4s_linear_infinite] max-lg:w-12 max-sm:w-10"
                        src="/icons/react.svg"
                        width={64}
                    />
                </div>
                <p className="max-w-[600px] max-sm:max-w-[300px]">
                    Construindo sistemas em forma de arte.
                </p>
            </div>
            <div className="absolute bottom-0 flex flex-col items-center animate-bounce">
                <Mouse size={32} />
                <ChevronDown size={20} />
            </div>
        </section>
    );
}
