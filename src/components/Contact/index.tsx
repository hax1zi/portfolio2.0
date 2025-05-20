import { ToastContainer } from "react-toastify";
import useContact from "./useContact";

export default function Contact() {
  const { handleSubmit, register, errors, onSubmit } = useContact();

  return (
    <section className="w-full h-full py-side-spacing flex justify-center items-center flex-col gap-20">
      <ToastContainer position="top-right" autoClose={3000}/>
      <h3 className="text-4xl font-medium">Entre em contato comigo</h3>
      <div className="flex gap-10 justify-center items-center flex-col">
        <div className="text-center">
          <a
            className="border-2 p-4 border-blue text-blue text-2xl mt-6 hover:bg-blue/60 transition-colors rounded-lg"
            href="mailto:davidfontes303@gmail.com"
          >
            Meu email
          </a>
          <p className="mt-6 opacity-80">
            Minhas caixa de entrada está sempre disponivel
          </p>
        </div>
        <div>
          <h4 className="text-8xl font-bold">OU</h4>
        </div>
        <form className="space-y-2 min-w-2xl" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col relative gap-2">
            <label>Nome/Empresa</label>
            <input
              type="text"
              {...register("name")}
              className="border border-gray p-2 rounded-md"
            />
            {errors.name && <p className="absolute right-0 text-red-500">{errors.name.message}</p>}
          </div>
          <div className="flex flex-col relative gap-2">
            <label>Email</label>
            <input
              {...register("email")}
              type="email"
              className="border border-gray p-2 rounded-md"
            />
            {errors.email && <p className="absolute right-0 text-red-500">{errors.email.message}</p>}
          </div>
          <div className="flex flex-col relative gap-2">
            <label htmlFor="">Assunto</label>
            <textarea rows={5}
              {...register("textarea")}
              className="border border-gray p-2 rounded-md resize-none"
            ></textarea>
            {errors.textarea && <p className="absolute right-0 text-red-500">{errors.textarea.message}</p>}
          </div>
          <button className="border-2 p-2 w-full border-blue text-blue text-2xl mt-6 hover:bg-blue/60 transition-colors rounded-lg">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
