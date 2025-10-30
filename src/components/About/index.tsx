export default function About() {
    return (
        <section
            id="about"
            className="w-full h-full pb-20 flex flex-col items-center max-sm:px-8 max-lg:px-14 lg:px-side-spacing pt-40 space-y-4 focus"
            aria-label="Sobre mim"
        >
            <h2 className="text-4xl font-medium">Sobre Mim</h2>

            <article>
                <h4 className="font-medium text-7xl text-center">Olá, mundo</h4>

                <div className="flex gap-10 flex-row mt-16 max-sm:flex-col">
                    <p className="text-lg max-w-lg opacity-80 leading-relaxed">
                        Atualmente sou desenvolvedor Front-end na{" "}
                        <b className="text-blue">Atos Capital</b> atuando na
                        construção e manutenção de páginas dos portais da
                        empresa utilizando React, TypeScript. Gosto de escrever
                        código limpo, pensar na experiência do usuário e manter
                        a performance como prioridade.
                    </p>
                    <p className="text-lg max-w-[550px] opacity-80 leading-relaxed ">
                        Iniciei minha jornada aos 14 anos em uma mentoria de
                        desenvolvimento web, e desde então venho me aprofundando
                        no mundo da programação. Também tenho experiências
                        anteriores com desenvolvimento backend em Node.js e Go,
                        além de ter atuado em projetos voltados à cibersegurança
                        no instituto <b className="text-blue">ATRI</b>.
                    </p>
                </div>
            </article>
            <div className="border p-4 space-x-4 flex flex-col items-center gap-4 mt-14">
                <div className="space-x-4">
                    <span>React</span>
                    <span>Next.js</span>
                    <span>Node.js</span>
                    <span>Prisma</span>
                </div>
                <div className="space-x-4">
                    <span>JavaScript</span>
                    <span>TypeScript</span>
                    <span>Go</span>
                    <span>Pyhton</span>
                    <span>Rust</span>
                </div>
                <div className="space-x-4 max-sm:hidden">
                    <span>Desenvolvimento front-end</span>
                    <span>Desenvolvimento back-end</span>
                    <span>Cibersegurança</span>
                </div>
            </div>
        </section>
    );
}
