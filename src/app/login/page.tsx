"use client"

import Template from "@/components/template/Template";
import Auth from "@/lib/context/Auth";
import { useContext, useState } from "react";

export default function Page() {

    const { login } = useContext(Auth);

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        try {
            await login?.(
                email,
                senha,
            ); alert("Conta criada com sucesso!");
        } catch (error) {
            console.error(error);
            alert("Erro ao cadastrar!");
        }
    }

    return (
        <Template paginaClube={false}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <fieldset>
                    <label htmlFor="email">Email Completo:</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" id="email" />
                </fieldset>

                <fieldset>
                    <label htmlFor="senha">Crie uma senha</label>
                    <input value={senha} onChange={e => setSenha(e.target.value)} type="password" id="senha" />
                </fieldset>

                <button type="submit">Cadastrar</button>
            </form>
        </Template>
    )
}
