'use client'
import Template from "@/components/template/Template"
import useUsuarioIdentificado from "@/data/hooks/useUsuarioIndentificado"
import { db } from "@/lib/firebase"
import handleImagemChange from "@/utils/handleImageChange"
import { doc, updateDoc } from "firebase/firestore"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Page() {
    const usuarioIdentificado = useUsuarioIdentificado()
    const [alterarNome, setAlterarNome] = useState<string>('')
    const [alterarEmail, setAlterarEmail] = useState<string>('')
    const [alterarNick, setAlterarNick] = useState<string>('')
    const [alterarBiografia, setAlterarBiografia] = useState<string>('')
    const [imagemBase64, setImagemBase64] = useState('');
    const [imagemPreview, setImagemPreview] = useState('');
    const [erroImagemTamanho, setErroImagemTamanho] = useState<string | null>(null);
    const [loading, setLoading] = useState(false)
    const [mensagem, setMensagem] = useState<string | null>(null)

    console.log(usuarioIdentificado)

    useEffect(() => {
        if (usuarioIdentificado?.nome) {
            setAlterarNome(usuarioIdentificado.nome)
            setAlterarEmail(usuarioIdentificado.email)
            setAlterarNick(usuarioIdentificado.nick)
            setImagemPreview(usuarioIdentificado.imagem)
            setAlterarBiografia(usuarioIdentificado.bio)
        }
    }, [usuarioIdentificado])

    async function alterarDadosUsuario(e: React.FormEvent) {
        e.preventDefault()
        if (!usuarioIdentificado?.id) {
            setMensagem("Usuário não identificado.")
            return
        }
        setLoading(true)
        setMensagem(null)

        try {
            const userRef = doc(db, "usuarios", usuarioIdentificado.id)

            const dadosAtualizados = {
                nome: alterarNome,
                email: alterarEmail,
                nick: alterarNick,
                bio: alterarBiografia,
                imagem: imagemBase64 || imagemPreview,
            }

            await updateDoc(userRef, dadosAtualizados)
            setMensagem("Dados atualizados com sucesso!")
        } catch (error) {
            setMensagem("Erro ao atualizar dados: " + (error as Error).message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Template logo={true} textoLogo={true} menuSuperior={true}>
            {
                usuarioIdentificado ? (
                    <div className="p-4 flex flex-col min-h-screen overflow-hidden max-w-[800px] mx-auto">
                        <form onSubmit={alterarDadosUsuario} className="flex flex-col gap-2">
                            <fieldset className="flex flex-col">
                                <label htmlFor="alterarNome" className="uppercase font-bold text-xl">Alterar nome:</label>
                                <input className="px-2 py-1 rounded-md bg-yellow-600 text-white" type="text" name="alterarNome" id="alterarNome" value={alterarNome} onChange={(e) => setAlterarNome(e.target.value)} />
                            </fieldset>
                            <fieldset className="flex flex-col">
                                <label htmlFor="alterarEmail" className="uppercase font-bold text-xl">Alterar email:</label>
                                <input className="px-2 py-1 rounded-md bg-yellow-600 text-white" type="text" name="alterarEmail" id="alterarEmail" value={alterarEmail} onChange={(e) => setAlterarEmail(e.target.value)} />
                            </fieldset>
                            <fieldset className="flex flex-col">
                                <label htmlFor="alterarNickname" className="uppercase font-bold text-xl">Alterar nick:</label>
                                <input className="px-2 py-1 rounded-md bg-yellow-600 text-white" type="text" name="alterarNickname" id="alterarNickname" value={alterarNick} onChange={(e) => setAlterarNick(e.target.value)} />
                            </fieldset>
                            <fieldset className="flex flex-col">
                                <label htmlFor="alterarBio" className="uppercase font-bold text-xl">Alterar Biografia:</label>
                                <textarea className="px-2 py-1 rounded-md bg-yellow-600 text-white h-[200px]" name="alterarBio" id="alterarBio" value={alterarBiografia} onChange={(e) => setAlterarBiografia(e.target.value)} maxLength={220} />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="imagens">Imagem do usuário</label>
                                <input
                                    className="flex flex-col overflow-hidden"
                                    type="file"
                                    id="imagens"
                                    accept="image/*"
                                    onChange={(e) => handleImagemChange(e, setErroImagemTamanho, setImagemBase64, setImagemPreview)}
                                />
                                {imagemPreview && (
                                    <div className="mt-2 flex flex-col">
                                        <label className="uppercase font-bold text-xl">Prévia da Imagem:</label>
                                        <img src={imagemPreview} alt="Prévia" className="w-[100px] h-[100px] overflow-hidden rounded-full object-cover mx-auto md:w-[200px] md:h-[200px]" />
                                    </div>
                                )}
                                {erroImagemTamanho && <p className="text-red-600">{erroImagemTamanho}</p>}
                            </fieldset>
                            <button type="submit" disabled={loading} className="p-2 bg-azul-escuro text-white rounded duration-300 transition-all uppercase font-bold hover:bg-amarelo">
                                {loading ? "Atualizando..." : "Salvar alterações"}
                            </button>
                            {
                                mensagem ? (
                                    <div className="flex flex-col gap-2">
                                        <p className="mt-2 text-center uppercase font-bold break-words text-xl leading-6">{mensagem}</p>
                                        <Link href={'/usuario/perfil'} className="uppercase font-bold text-center bg-azul-escuro text-white py-2 cursor-pointer">
                                            Ir para meu perfil
                                        </Link>
                                    </div>
                                ) : ''
                            }
                        </form>
                    </div>
                ) : ''
            }
        </Template>
    )
}