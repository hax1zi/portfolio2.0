import { useDarkTheme } from "../../store/useDarkTema";

export default function About() {
  const { darkTheme } = useDarkTheme();
  
  const techList = [
    {
      id: 1,
      src: `/techs/${darkTheme ? "dark" : "light"}/javascript.svg`,
      name: "JavaScript",
    },
    {
      id: 2,
      src: `/techs/${darkTheme ? "dark" : "light"}/typescript.svg`,
      name: "TypeScript",
    },
    {
      id: 3,
      src: `/techs/${darkTheme ? "dark" : "light"}/react.svg`,
      name: "React",
    },
    {
      id: 4,
      src: `/techs/${darkTheme ? "dark" : "light"}/nodejs.svg`,
      name: "NodeJS",
    },
    {
      id: 5,
      src: `/techs/${darkTheme ? "dark" : "light"}/git.svg`,
      name: "Git",
    },
  ];

  return (
    <section
      id="about"
      className="w-full h-full flex flex-col items-center px-side-spacing pt-40 space-y-4 "
    >
      <h3 className="text-4xl font-medium">Sobre Mim</h3>

      <h4 className="font-medium text-2xl">Olá, meu nome é David</h4>

      <p className="text-lg max-w-4xl mt-4 opacity-90 leading-relaxed">
        Sou desenvolvedor Front-end na <b className="text-blue">Atos Capital</b>{" "}
        atuando na construção e manutenção de páginas dos portais da empresa
        utilizando React, TypeScript. Gosto de escrever código limpo, pensar na
        experiência do usuário e manter a performance como prioridade.
      </p>
      <p className="text-lg max-w-4xl mt-4 opacity-90 leading-relaxed">
        Iniciei minha jornada aos 14 anos em uma mentoria de desenvolvimento
        web, e desde então venho me aprofundando no mundo da programação:
        componentização, testes unitários e versionamento de código. Também
        tenho experiências anteriores com desenvolvimento backend em Node.js e
        Go, além de ter atuado em projetos voltados à cibersegurança no
        instituto <b className="text-blue">ATRI</b>.
      </p>
      <div className="w-full h-26  mt-16 rounded-md max-w-4xl flex justify-center ">
        {techList.map((tech) => (
          <div key={tech.id} className="text-center flex flex-col items-center justify-center mx-4">
            <img src={tech.src} width={64} height={64} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
