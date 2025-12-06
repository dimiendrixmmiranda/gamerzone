'use client'

import { db } from "@/lib/firebase/firebase"
import handleImagemChange from "@/lib/utils/handleImageChange"
import { addDoc, collection, Timestamp } from "firebase/firestore"
import { useState } from "react"

export default function Page() {
    const [nomeDaColuna, setNomeDaColuna] = useState('')
    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [conteudo, setConteudo] = useState('')
    const [dataHora, setDataHora] = useState('')
    
    // Controle da imagem
    const [imagemPreview, setImagemPreview] = useState<string | null>(null);
    const [imagemBase64, setImagemBase64] = useState<string | null>(null);
    const [erroImagemTamanho, setErroImagemTamanho] = useState<string | null>(null);
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // VALIDAÇÕES IMPORTANTES
        if (!nomeDaColuna || !titulo || !autor || !conteudo || !dataHora) {
            alert("Preencha todos os campos!");
            return;
        }

        try {
            const conteudoArray = conteudo.split("\n").filter((linha) => linha.trim() !== "");

            // Converter data e hora para Timestamp
            const timestampFirebase = Timestamp.fromDate(new Date(dataHora));

            // Criar objeto Notícia
            const coluna = {
                nomeDaColuna,
                titulo,
                autor,
                conteudo: conteudoArray,
                data: timestampFirebase,
                imagem: imagemBase64
            };

            // Enviar para Firestore
            await addDoc(collection(db, "listaDeColunas"), coluna);

            alert("video adicionada com sucesso!");

            // Resetar formulário
            setNomeDaColuna('')
            setTitulo('')
            setAutor('')
            setConteudo('')
            setDataHora('')

        } catch (error) {
            console.error("Erro ao salvar notícia:", error);
            alert("Erro ao salvar notícia!");
        }
    }

    return (
        <div className="bg-zinc-100 p-6 rounded-md shadow-md w-full max-w-2xl mx-auto">
            <h1 className="text-xl font-semibold mb-4">Adicionar Coluna</h1>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

                {/* ESPORTE */}
                <fieldset className="flex flex-col gap-1">
                    <label className="font-medium">Nome da Coluna:</label>
                    <select
                        value={nomeDaColuna}
                        onChange={(e) => setNomeDaColuna(e.target.value)}
                        className="border p-2 rounded-md"
                    >
                        <option value="">Selecione</option>
                        <option value="proscene">Pro Scene</option>
                        <option value="econ&strat">Econ & Strat</option>
                        <option value="championstour">Champions Tour</option>
                        <option value="operatorsmeta">Operators Meta</option>
                    </select>
                </fieldset>


                {/* TÍTULO */}
                <fieldset className="flex flex-col gap-1">
                    <label className="font-medium">Titulo:</label>
                    <input
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        className="border p-2 rounded-md"
                    />
                </fieldset>

                {/* SUBTÍTULO */}
                <fieldset className="flex flex-col gap-1">
                    <label className="font-medium">Autor</label>
                    <input
                        type="text"
                        value={autor}
                        onChange={(e) => setAutor(e.target.value)}
                        className="border p-2 rounded-md"
                    />
                </fieldset>

                {/* CONTEÚDO */}
                <fieldset className="flex flex-col gap-1">
                    <label className="font-medium">Conteudo:</label>
                    <textarea
                        name="conteudo"
                        id="conteudo"
                        value={conteudo}
                        onChange={(e) => setConteudo(e.target.value)}
                        className="border p-2 rounded-md h-[400px]"
                    />
                </fieldset>

                {/* DATA E HORA */}
                <fieldset className="flex flex-col gap-1">
                    <label className="font-medium">Data e Hora</label>
                    <input
                        type="datetime-local"
                        value={dataHora}
                        onChange={(e) => setDataHora(e.target.value)}
                        className="border p-2 rounded-md"
                    />
                </fieldset>

                {/* IMAGEM */}
                <fieldset className="flex flex-col gap-2">
                    <label className="font-medium">Foto da Notícia</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                            handleImagemChange(
                                e,
                                setErroImagemTamanho,
                                setImagemBase64,
                                setImagemPreview
                            )
                        }
                    />

                    {erroImagemTamanho && (
                        <p className="text-red-600 text-sm">{erroImagemTamanho}</p>
                    )}

                    {imagemPreview && (
                        <div>
                            <label className="font-medium">Prévia:</label>
                            <img
                                src={imagemPreview}
                                alt="Prévia"
                                className="w-24 h-24 object-cover rounded-md border"
                            />
                        </div>
                    )}
                </fieldset>

                {/* BOTÃO */}
                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Salvar Video
                </button>
            </form>
        </div>
    )
}