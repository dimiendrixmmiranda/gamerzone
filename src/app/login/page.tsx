"use client"

import Template from "@/components/template/Template";
import Auth from "@/lib/context/Auth";
import { useContext, useState } from "react";
import React from "react";

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
            )
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Template paginaClube={false} estiloContainer="max-w-screen min-h-[70vh] flex justify-center">
            <div className="flex flex-col h-fit my-auto p-4">
                <h2 className="font-bold text-center text-2xl leading-7" style={{ textShadow: '1px 1px 3px 2px black' }}>Faça o login e aproveite todas as vantagens!</h2>
                <div className="relative mx-auto grid grid-rows-2 w-full items-center justify-center p-4 my-auto max-w-[400px] h-[600px] overflow-hidden md:grid-rows-1 md:grid-cols-2 md:max-w-[900px] md:h-[350px]">
                    <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat rounded-t-[12px] p-4 md:rounded-none md:rounded-l-[12px]"
                        style={{ backgroundImage: "url('/default/fundo.png')" }}
                    />
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-4 border border-azul-escuro p-4 bg-azul-escuro text-white z-20 w-full rounded-b-[12px] h-full md:rounded-none md:rounded-r-[12px] md:p-6" style={{ textShadow: '1px 1px 2px black' }}>
                        <fieldset className="flex flex-col gap-1">
                            <label htmlFor="email">Email Completo:</label>
                            <input value={email} onChange={e => setEmail(e.target.value)} type="text" id="email" className="h-[35px] rounded-[6px] p-2 text-black" />
                        </fieldset>

                        <fieldset className="flex flex-col gap-1">
                            <label htmlFor="senha">Crie uma senha</label>
                            <input value={senha} onChange={e => setSenha(e.target.value)} type="password" id="senha" className="h-[35px] rounded-[6px] p-2 text-black" />
                        </fieldset>

                        <button type="submit" className="bg-laranja py-1 font-bold">Cadastrar</button>
                    </form>
                </div>
            </div>
        </Template>
    )
}
