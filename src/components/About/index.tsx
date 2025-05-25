import { motion } from "framer-motion";
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
      className="w-full h-full flex flex-col items-center max-sm:px-8 max-lg:px-14 lg:px-side-spacing pt-40 space-y-4 focus"
      aria-label="Sobre mim"
    >
      <motion.h2
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-medium"
      >
        Sobre Mim
      </motion.h2>

      <article>
        <motion.h4
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-medium text-2xl text-center"
        >
          Olá, meu nome é David
        </motion.h4>

        <motion.p
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg max-w-4xl mt-4 opacity-90 leading-relaxed"
        >
          Sou desenvolvedor Front-end na{" "}
          <b className="text-blue">Atos Capital</b> atuando na construção e
          manutenção de páginas dos portais da empresa utilizando React,
          TypeScript. Gosto de escrever código limpo, pensar na experiência do
          usuário e manter a performance como prioridade.
        </motion.p>
        <motion.p
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-lg max-w-4xl mt-4 opacity-90 leading-relaxed"
        >
          Iniciei minha jornada aos 14 anos em uma mentoria de desenvolvimento
          web, e desde então venho me aprofundando no mundo da programação:
          componentização, testes unitários e versionamento de código. Também
          tenho experiências anteriores com desenvolvimento backend em Node.js e
          Go, além de ter atuado em projetos voltados à cibersegurança no
          instituto <b className="text-blue">ATRI</b>.
        </motion.p>
      </article>

      <div
        className="w-full h-26  mt-16 rounded-md max-w-4xl flex justify-center"
        role="list"
      >
        {techList.map((tech) => (
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + (tech.id * 0.2) }}
            viewport={{ once: true }}
            key={tech.id}
            className="text-center flex flex-col items-center justify-center mx-4 max-sm:mx-1 flex-wrap"
            role="listitem"
          >
            <img src={tech.src} className="max-sm:w-10" width={64} height={64} alt={tech.name} />
            <p className="max-sm:text-sm">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
