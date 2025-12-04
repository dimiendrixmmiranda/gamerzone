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
        <Template paginaClube={false}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <fieldset>
                    <label htmlFor="nome">Nome Completo:</label>
                    <input value={nome} onChange={e => setNome(e.target.value)} type="text" id="nome" />
                </fieldset>

                <fieldset>
                    <label htmlFor="email">Email Completo:</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" id="email" />
                </fieldset>

                <fieldset>
                    <label htmlFor="senha">Crie uma senha</label>
                    <input value={senha} onChange={e => setSenha(e.target.value)} type="password" id="senha" />
                </fieldset>

                <fieldset>
                    <label htmlFor="Nick">Nick:</label>
                    <input value={nick} onChange={e => setNick(e.target.value)} type="text" id="Nick" />
                </fieldset>

                <fieldset>
                    <label htmlFor="dataDeNascimento">Data de nascimento:</label>
                    <input value={dataDeNascimento} onChange={e => setDataDeNascimento(e.target.value)} type="date" id="dataDeNascimento" />
                </fieldset>

                <fieldset>
                    <label htmlFor="telefone">Telefone:</label>
                    <input value={telefone} onChange={e => setTelefone(e.target.value)} type="text" id="telefone" />
                </fieldset>

                <fieldset>
                    <label htmlFor="sexo">Sexo:</label>
                    <select value={sexo} onChange={e => setSexo(e.target.value)} id="sexo">
                        <option value="">Selecione</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                        <option value="nenhum">Prefiro não Dizer</option>
                    </select>
                </fieldset>

                <button type="submit">Cadastrar</button>
            </form>
        </Template>
    )
}
