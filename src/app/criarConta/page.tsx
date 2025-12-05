"use client"

import Template from "@/components/template/Template";
import Auth from "@/lib/context/Auth";
import { useContext, useState } from "react";

export default function Page() {

    const { cadastrar } = useContext(Auth);

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nick, setNick] = useState("");
    const [dataDeNascimento, setDataDeNascimento] = useState("");
    const [telefone, setTelefone] = useState("");
    const [sexo, setSexo] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        try {
            await cadastrar?.(
                email,
                senha,
                nome,
                nick,
                dataDeNascimento,
                telefone,
                sexo
            ); alert("Conta criada com sucesso!");
        } catch (error) {
            console.error(error);
            alert("Erro ao cadastrar!");
        }
    }

    return (
        <Template paginaClube={false} estiloContainer="max-w-screen min-h-[70vh] flex justify-center">
            <div className="relative mx-auto grid grid-rows-3 w-full items-center justify-center p-4 my-auto max-w-[500px] h-[950px] overflow-hidden lg:grid-rows-1 lg:grid-cols-3 lg:max-w-[900px] lg:h-[450px]">
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat rounded-t-[12px] p-4 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 lg:rounded-none lg:rounded-l-[12px]"
                    style={{ backgroundImage: "url('/default/fundo.png')" }}
                >
                    <h2 className="font-bold text-center text-2xl text-white leading-7" style={{ textShadow: '1px 1px 3px 2px black' }}>Faça o login e aproveite todas as vantagens!</h2>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-4 border border-azul-escuro p-4 bg-azul-escuro text-white z-20 w-full rounded-b-[12px] h-full row-start-2 row-end-4 lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-2 lg:grid lg:grid-cols-2 lg:rounded-none lg:rounded-r-[12px] lg:p-6" style={{ textShadow: '1px 1px 2px black' }}>

                    <fieldset className="flex flex-col gap-1">
                        <label htmlFor="nome">Nome Completo:</label>
                        <input className="h-[35px] rounded-[6px] p-2 text-black" value={nome} onChange={e => setNome(e.target.value)} type="text" id="nome" />
                    </fieldset>

                    <fieldset className="flex flex-col gap-1">
                        <label htmlFor="email">Email Completo:</label>
                        <input className="h-[35px] rounded-[6px] p-2 text-black" value={email} onChange={e => setEmail(e.target.value)} type="text" id="email" />
                    </fieldset>

                    <fieldset className="flex flex-col gap-1">
                        <label htmlFor="senha">Crie uma senha</label>
                        <input className="h-[35px] rounded-[6px] p-2 text-black" value={senha} onChange={e => setSenha(e.target.value)} type="password" id="senha" />
                    </fieldset>

                    <fieldset className="flex flex-col gap-1">
                        <label htmlFor="Nick">Nick:</label>
                        <input className="h-[35px] rounded-[6px] p-2 text-black" value={nick} onChange={e => setNick(e.target.value)} type="text" id="Nick" />
                    </fieldset>

                    <fieldset className="flex flex-col gap-1">
                        <label htmlFor="dataDeNascimento">Data de nascimento:</label>
                        <input className="h-[35px] rounded-[6px] p-2 text-black" value={dataDeNascimento} onChange={e => setDataDeNascimento(e.target.value)} type="date" id="dataDeNascimento" />
                    </fieldset>

                    <fieldset className="flex flex-col gap-1">
                        <label htmlFor="telefone">Telefone:</label>
                        <input className="h-[35px] rounded-[6px] p-2 text-black" value={telefone} onChange={e => setTelefone(e.target.value)} type="text" id="telefone" />
                    </fieldset>

                    <fieldset className="flex flex-col gap-1 lg:col-start-1 lg:col-end-3">
                        <label htmlFor="sexo">Sexo:</label>
                        <select className="h-[35px] rounded-[6px] p-2 text-black" value={sexo} onChange={e => setSexo(e.target.value)} id="sexo">
                            <option value="">Selecione</option>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="nenhum">Prefiro não Dizer</option>
                        </select>
                    </fieldset>

                    <button type="submit" className="bg-laranja py-1 font-bold lg:col-start-1 lg:col-end-3">Cadastrar</button>
                </form>
            </div>
        </Template>
    )
}
