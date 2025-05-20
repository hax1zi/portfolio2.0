import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  textarea: yup.string().required("Deve ter algum conteudo")
})

type FormValue = {
  name: string
  email: string
  textarea: string
}

export default function useContact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm<FormValue>({
    resolver: yupResolver(schema)
  })

  const onSubmit = useCallback(async (data: FormValue) => {
    try{
      const response = await fetch("https://backend-portfolio-one.vercel.app/email", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(data)
      })

      const result = await response.json()
      toast.success(result.message || "Mensagem enviada com sucesso!")
      reset()
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      toast.error("Ocorreu um erro ao tentar enviar")
    }
  }, [])

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    reset
  }
}