'use client'

import { db } from "@/lib/firebase/firebase"
import { extrairYoutubeId } from "@/lib/utils/extrairYoutubeId"
import { addDoc, collection, Timestamp } from "firebase/firestore"
import { useState } from "react"

export default function Page() {
    const [url, setUrl] = useState('')
    const [titulo, setTitulo] = useState('')
    const [canal, setCanal] = useState('')
    const [plataforma, setPlataforma] = useState('')
    const [dataHora, setDataHora] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // VALIDAÇÕES IMPORTANTES
        if (!url || !titulo || !canal || !plataforma || !dataHora) {
            alert("Preencha todos os campos!");
            return;
        }

        try {
            // Converter data e hora para Timestamp
            const timestampFirebase = Timestamp.fromDate(new Date(dataHora));

            // id do video
            const idDoVideo = extrairYoutubeId(url)

            // Criar objeto Notícia
            const videoCurto = {
                idDoVideo: idDoVideo,
                titulo,
                linkCanal: canal,
                plataforma,
                data: timestampFirebase,
            };

            // Enviar para Firestore
            await addDoc(collection(db, "listaDeVideosCurtos"), videoCurto);

            alert("video adicionada com sucesso!");

            // Resetar formulário
            setUrl('')
            setTitulo("");
            setCanal("");
            setPlataforma("");
            setDataHora("");

        } catch (error) {
            console.error("Erro ao salvar notícia:", error);
            alert("Erro ao salvar notícia!");
        }
    }

    return (
        <div className="bg-zinc-100 p-6 rounded-md shadow-md w-full max-w-2xl mx-auto">
            <h1 className="text-xl font-semibold mb-4">Adicionar Notícia</h1>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

                {/* TÍTULO */}
                <fieldset className="flex flex-col gap-1">
                    <label className="font-medium">URL do vídeo</label>
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="border p-2 rounded-md"
                    />
                </fieldset>

                {/* SUBTÍTULO */}
                <fieldset className="flex flex-col gap-1">
                    <label className="font-medium">Titulo do video:</label>
                    <input
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        className="border p-2 rounded-md"
                    />
                </fieldset>

                {/* CONTEÚDO */}
                <fieldset className="flex flex-col gap-1">
                    <label className="font-medium">Link do canal:</label>
                    <input
                        type="text"
                        value={canal}
                        onChange={(e) => setCanal(e.target.value)}
                        className="border p-2 rounded-md"
                    />
                </fieldset>


                {/* ESPORTE */}
                <fieldset className="flex flex-col gap-1">
                    <label className="font-medium">Plataforma</label>
                    <select
                        value={plataforma}
                        onChange={(e) => setPlataforma(e.target.value)}
                        className="border p-2 rounded-md"
                    >
                        <option value="">Selecione</option>
                        <option value="youtube">Youtube</option>
                        <option value="tiktok">TikTok</option>
                        <option value="instagram">Instagram</option>
                        <option value="outros">Outros</option>
                    </select>
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