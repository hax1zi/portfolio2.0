import { ToastContainer } from "react-toastify";
import { FileUser, Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Contact() {

    return (
        <section
            className="w-full h-full py-20 flex justify-center items-center flex-col gap-2"
            aria-label="Area de contato"
            id="contact"
        >
            <ToastContainer position="top-right" autoClose={3000} />
            <h2 className="text-4xl font-medium max-sm:text-3xl">
                Entre em contato comigo
            </h2>
            <p className="mb-6 text-xl opacity-80 max-sm:max-w-[250px] max-sm:text-center">
                Minhas caixa de entrada está sempre disponivel
            </p>
            <div className="flex justify-center flex-col items-center gap-4">
                <div className="flex gap-4">
                    <a
                        href="/DavidFontes-cv.pdf"
                        target="_blank"
                        className="p-4 border text-xl inline-flex items-center gap-2 hover:text-blue transition-all hover:scale-[1.1]"
                    >
                        <FileUser size={32} />
                        <div className="flex flex-col ">
                            Curriculo
                            <label className="text-xs">
                                DavidFontes-cv.pdf
                            </label>
                        </div>
                    </a>
                    <a href="mailto:davidfontes303@gmail.com" className="p-4 border text-xl inline-flex items-center gap-2 hover:text-blue transition-all hover:scale-[1.1]">
                        <Mail size={32} />
                        <div className="flex flex-col">
                            Email{" "}
                            <label className="text-xs">
                                davidfontes303@gmail.com
                            </label>
                        </div>
                    </a>
                    <a href="tel:7999634862" className="p-4 border text-xl inline-flex items-center gap-2 hover:text-blue transition-all hover:scale-[1.1]">
                        <Phone size={32} />
                        <div className="flex flex-col">
                            Telefone{" "}
                            <label className="text-xs">(79) 9 9963-4862</label>
                        </div>
                    </a>
                </div>
                <div className="flex gap-4">
                    <a href="https://github.com/hax1zi" target="_blank" className="p-4 border text-xl inline-flex items-center gap-2 hover:text-blue transition-all hover:scale-[1.1]">
                        <Github size={32} />
                        <div className="flex flex-col">
                            GitHub <label className="text-xs">/hax1zi</label>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/david-fontes-9b84a4201/" target="_blank" className="p-4 border text-xl inline-flex items-center gap-2 hover:text-blue transition-all hover:scale-[1.1]">
                        <Linkedin size={32} />
                        <div className="flex flex-col">
                            Linkedin{" "}
                            <label className="text-xs">
                                /david-fontes-9b84a4201
                            </label>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
