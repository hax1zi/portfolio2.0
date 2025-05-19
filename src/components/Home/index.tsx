import { CaretDown, MouseScroll } from "@phosphor-icons/react";

export default function Home() {
  return (
    <section
      id="home"
      className="w-full h-screen flex flex-col justify-center items-center relative"
    >
      <div className="space-y-2">
        <h4 className="text-4xl font-medium">Olá, sou o David</h4>
        <h3 className="text-7xl uppercase font-bold">Desenvolvedor</h3>
        <div className="inline-flex">
          <h2 className="text-7xl uppercase font-bold mr-4">Front-end</h2>
          <img src="/icons/javascript.svg" width={64} />
          <img src="/icons/typescript.svg" width={64} />
          <img
            className="animate-[spin_4s_linear_infinite]"
            src="/icons/react.svg"
            width={64}
          />
        </div>
        <p className="max-w-90">Sou um programador que não constrói apenas páginas e sim cada interação e experiência que o usuário terá nela.</p>
      </div>
      <div className="flex flex-col items-center absolute bottom-6 animate-bounce">
        <MouseScroll size={32} />
        <CaretDown size={20} />
      </div>
    </section>
  );
}
