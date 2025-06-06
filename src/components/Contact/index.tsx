import { ToastContainer } from "react-toastify";
import useContact from "./useContact";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export default function Contact() {
  const { handleSubmit, register, errors, onSubmit } = useContact();

  return (
    <section
      className="w-full h-full py-20 flex justify-center items-center flex-col gap-2"
      aria-label="Area de contato"
      id="contact"
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <motion.h2
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-medium max-sm:text-3xl"
      >
        Entre em contato comigo
      </motion.h2>
      <p className="mb-6 opacity-80 max-sm:max-w-[250px] max-sm:text-center">
        Minhas caixa de entrada está sempre disponivel
      </p>
      <div className="flex gap-10 justify-center items-center flex-col">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            className="border-2 p-4 border-blue text-blue text-2xl mt-6 hover:bg-blue/60 transition-colors rounded-lg max-sm:text-xl"
            href="mailto:davidfontes303@gmail.com"
          >
            Meu email
          </a>
        </motion.div>
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-8xl font-bold" aria-hidden="true">
            OU
          </h3>
        </motion.div>
        <motion.form
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="space-y-2 min-w-2xl max-md:min-w-xl max-sm:min-w-[300px] w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col relative gap-2">
            <label htmlFor="name">Nome/Empresa</label>
            <input
              id="name"
              type="text"
              {...register("name")}
              className="border border-gray p-2 rounded-md"
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <p className="absolute right-0 text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="flex flex-col relative gap-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              {...register("email")}
              type="email"
              className="border border-gray p-2 rounded-md"
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="absolute right-0 text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className={cn("flex flex-col relative gap-2", errors.textarea && "gap-8")}>
            <label htmlFor="Message">Assunto</label>
            <textarea
              rows={5}
              id="message"
              {...register("textarea")}
              className="border border-gray p-2 rounded-md resize-none"
            ></textarea>
            {errors.textarea && (
              <p className="absolute max-sm:max-w-50 right-0 text-red-500">
                {errors.textarea.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="border-2 p-2 w-full border-blue text-blue text-2xl mt-6 hover:bg-blue/60 transition-colors rounded-lg"
          >
            Enviar
          </button>
        </motion.form>
      </div>
    </section>
  );
}
