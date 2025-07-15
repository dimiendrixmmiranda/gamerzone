'use client'
import useAuth from "@/data/hooks/useAuth"
import { useState } from "react"

export default function Page() {
    const { login, cadastrar } = useAuth()
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [nick, setNick] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmeSenha, setConfirmeSenha] = useState('')
    const [bio] = useState('')
    
    const [emailLogin, setEmailLogin] = useState('')
    const [senhaLogin, setSenhaLogin] = useState('')

    const [visible, setVisible] = useState<'login' | 'cadastrar'>('cadastrar')
    const [erro, setErro] = useState<string | null>(null)

    async function submeterCadastro() {
        if (nome && email && senha && confirmeSenha) {
            if (senha !== confirmeSenha) {
                exibirErro("As senhas não coincidem!");
                return;
            }

            if (!cadastrar) {
                exibirErro("O cadastro não está disponível.");
                return;
            }

            try {
                console.log("Tentando cadastrar...");
                await cadastrar(email, senha, nome, nick, bio);
                console.log("Cadastro realizado com sucesso!");
            } catch (error) {
                console.error("Erro ao cadastrar:", error);
                exibirErro("Ocorreu um erro ao cadastrar. Verifique os dados.");
            }
        } else {
            exibirErro("Preencha todos os campos!");
        }
    }

    async function submeterLogin() {
        if (!login) {
            exibirErro("Login não disponível.");
            return;
        }

        if (emailLogin && senhaLogin) {
            try {
                await login(emailLogin, senhaLogin);
            } catch (error) {
                console.error("Erro no login:", error);
                exibirErro("Falha no login. Verifique as credenciais.");
            }
        } else {
            exibirErro("Preencha todos os campos!");
        }
    }


    function exibirErro(msg: string, tempoEmSegundos: number = 5) {
        console.log("Erro definido:", msg); // Verifica se o erro foi atualizado
        setErro(msg);
        setTimeout(() => setErro(null), tempoEmSegundos * 1000);
    }

    console.log('Função cadastrar disponível?', typeof cadastrar);


    return (
        <div className="w-full min-h-screen bg-azul-escuro p-4 flex justify-center items-center">
            <form className={`flex-col gap-3 p-4 bg-amarelo ${visible === 'cadastrar' ? 'flex' : 'hidden'}`}>
                <fieldset>
                    <label htmlFor="nome">Nome Completo:</label>
                    <input type="text" name="nome" id="nome" className="w-full h-[30px] text-black rounded-lg p-2 text-sm" value={nome} onChange={(e) => setNome(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" className="w-full h-[30px] text-black rounded-lg p-2 text-sm" value={email} onChange={(e) => setEmail(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="nick">Nick:</label>
                    <input type="text" name="nick" id="nick" className="w-full h-[30px] text-black rounded-lg p-2 text-sm" value={nick} onChange={(e) => setNick(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" name="senha" id="senha" className="w-full h-[30px] text-black rounded-lg p-2 text-sm" value={senha} onChange={(e) => setSenha(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="confirmeSenha">Confirme a Senha:</label>
                    <input type="password" name="confirmeSenha" id="confirmeSenha" className="w-full h-[30px] text-black rounded-lg p-2 text-sm" value={confirmeSenha} onChange={(e) => setConfirmeSenha(e.target.value)} />
                </fieldset>
                <button
                    type="button"
                    className="w-full uppercase font-bold bg-azul-escuro py-1"
                    onClick={submeterCadastro}
                >
                    Inscrever-se
                </button>
                <button
                    type="button"
                    onClick={() => setVisible('login')}
                >
                    Já é cadastrado? Faça login!
                </button>
            </form>

            <form className={`flex-col gap-3 p-4 bg-amarelo ${visible === 'login' ? 'flex' : 'hidden'}`}>
                <fieldset>
                    <label htmlFor="emailLogin">Email:</label>
                    <input
                        type="email"
                        name="emailLogin"
                        id="emailLogin"
                        className="w-full h-[30px] text-black rounded-lg p-2 text-sm"
                        value={emailLogin}
                        onChange={(e) => setEmailLogin(e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="senhaLogin">Senha:</label>
                    <input
                        type="password"
                        name="senhaLogin"
                        id="senhaLogin"
                        className="w-full h-[30px] text-black rounded-lg p-2 text-sm"
                        value={senhaLogin}
                        onChange={(e) => setSenhaLogin(e.target.value)}
                    />
                </fieldset>
                <button
                    type="button"
                    className="w-full uppercase font-bold bg-azul-escuro py-1"
                    onClick={submeterLogin}
                >
                    Entrar
                </button>
                <button
                    type="button"
                    onClick={() => setVisible('cadastrar')}
                >
                    Ainda não tem conta? Cadastre-se!
                </button>
            </form>

            {erro && (
                <div className="text-red-600 font-bold mb-4">
                    {erro}
                </div>
            )}
        </div>
    )
}