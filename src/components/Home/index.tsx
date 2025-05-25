import { CaretDown, MouseScroll } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="w-full h-screen flex flex-col justify-center items-center relative"
    >
      <div className="space-y-2 max-sm:space-y-0">
        <motion.h1
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="text-4xl font-medium max-sm:text-xl"
        >
          Olá, sou o David
        </motion.h1>
        <motion.h2
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-7xl uppercase font-bold max-lg:text-5xl max-sm:text-3xl"
        >
          Desenvolvedor
        </motion.h2>
        <div className="flex items-center">
          <motion.h3
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-7xl uppercase font-bold mr-4 max-sm:mr-0 max-lg:text-5xl max-sm:text-3xl"
          >
            Front-end
          </motion.h3>
          <motion.img
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            alt="JavaScript"
            src="/icons/javascript.svg"
            className="max-lg:w-12 max-sm:w-10"
            width={64}
          />
          <motion.img
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            alt="TypeScript"
            src="/icons/typescript.svg"
            className="max-lg:w-12 max-sm:w-10"
            width={64}
          />
          <motion.img
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            alt="React"
            className="animate-[spin_4s_linear_infinite] max-lg:w-12 max-sm:w-10"
            src="/icons/react.svg"
            width={64}
          />
        </div>
        <motion.p
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="max-w-90 max-sm:hidden"
        >
          Sou um programador que não constrói apenas páginas e sim cada
          interação e experiência que o usuário terá nela.
        </motion.p>
      </div>
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="flex flex-col items-center absolute bottom-6 animate-bounce"
        aria-hidden="true"
      >
        <MouseScroll size={32} />
        <CaretDown size={20} />
      </motion.div>
    </section>
  );
}
