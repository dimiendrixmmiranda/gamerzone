"use client";

import { useState } from "react";
import handleImagemChange from "@/lib/utils/handleImageChange";
import { listaDeTimes } from "@/constants/listaDeTimes";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";

export default function Page() {
    // Campos do formulário
    const [titulo, setTitulo] = useState("");
    const [subtitulo, setSubtitulo] = useState("");
    const [conteudo, setConteudo] = useState("");
    const [autor, setAutor] = useState("");
    const [timesEnvolvidos, setTimesEnvolvidos] = useState<string[]>([]);
    const [dataHora, setDataHora] = useState("");
    const [esporte, setEsporte] = useState("");

    // Controle da imagem
    const [imagemPreview, setImagemPreview] = useState<string | null>(null);
    const [imagemBase64, setImagemBase64] = useState<string | null>(null);
    const [erroImagemTamanho, setErroImagemTamanho] = useState<string | null>(null);

    function toggleTime(time: string) {
        setTimesEnvolvidos((prev) =>
            prev.includes(time)
                ? prev.filter((t) => t !== time)
                : [...prev, time]
        );
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // VALIDAÇÕES IMPORTANTES
        if (!titulo || !subtitulo || !conteudo || !autor || !dataHora || !esporte) {
            alert("Preencha todos os campos!");
            return;
        }

        if (timesEnvolvidos.length === 0) {
            alert("Selecione pelo menos 1 time!");
            return;
        }

        if (!imagemBase64) {
            alert("Selecione uma imagem!");
            return;
        }

        try {
            // Transformar conteúdo para array de parágrafos
            const conteudoArray = conteudo.split("\n").filter((linha) => linha.trim() !== "");

            // Converter data e hora para Timestamp
            const timestampFirebase = Timestamp.fromDate(new Date(dataHora));

            // Objeto de times selecionados
            const timesSelecionados = listaDeTimes.filter(time =>
                timesEnvolvidos.includes(time.time)
            )

            // Criar objeto Notícia
            const noticiaData = {
                autor,
                conteudoDaNoticia: conteudoArray,
                data: timestampFirebase,
                imagem: imagemBase64,
                subtitulo,
                titulo,
                esporte,
                timesEnvolvidos: timesSelecionados,
                comentarios: []
            };

            // Enviar para Firestore
            await addDoc(collection(db, "listaDeNoticias"), noticiaData);

            alert("Notícia adicionada com sucesso!");

            // Resetar formulário
            setTitulo("");
            setSubtitulo("");
            setConteudo("");
            setAutor("");
            setTimesEnvolvidos([]);
            setEsporte("");
            setDataHora("");
            setImagemPreview(null);
            setImagemBase64(null);

        } catch (error) {
            console.error("Erro ao salvar notícia:", error);
            alert("Erro ao salvar notícia!");
        }
    };

    return (
        <div className="bg-zinc-100 p-6 rounded-md shadow-md w-full max-w-2xl mx-auto">
            <h1 className="text-xl font-semibold mb-4">Adicionar Notícia</h1>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

                {/* TÍTULO */}
                <fieldset className="flex flex-col gap-1">
                    <label className="font-medium">Título da Notícia</label>
                    <input
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        className="border p-2 rounded-md"
                    />
                </fieldset>

                {/* SUBTÍTULO */}
                <fieldset className="flex flex-col gap-1">
                    <label className="font-medium">Subtítulo da Notícia</label>
                    <input
                        type="text"
                        value={subtitulo}
                        onChange={(e) => setSubtitulo(e.target.value)}
                        className="border p-2 rounded-md"
                    />
                </fieldset>

                {/* CONTEÚDO */}
                <fieldset className="flex flex-col gap-1">
                    <label className="font-medium">Conteúdo da Notícia</label>
                    <textarea
                        value={conteudo}
                        onChange={(e) => setConteudo(e.target.value)}
                        className="border p-2 rounded-md min-h-[120px]"
                        placeholder="Separe parágrafos usando Enter"
                    ></textarea>
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

                {/* AUTOR */}
                <fieldset className="flex flex-col gap-1">
                    <label className="font-medium">Autor</label>
                    <input
                        type="text"
                        value={autor}
                        onChange={(e) => setAutor(e.target.value)}
                        className="border p-2 rounded-md"
                    />
                </fieldset>

                {/* ESPORTE */}
                <fieldset className="flex flex-col gap-1">
                    <label className="font-medium">Esporte</label>
                    <select
                        value={esporte}
                        onChange={(e) => setEsporte(e.target.value)}
                        className="border p-2 rounded-md"
                    >
                        <option value="">Selecione</option>
                        <option value="cs2">Counter-Strike 2</option>
                        <option value="valorant">Valorant</option>
                        <option value="rainbowSix">Rainbow Six</option>
                        <option value="outros">Outros</option>
                    </select>
                </fieldset>

                {/* TIMES */}
                <fieldset className="flex flex-col gap-2">
                    <label className="font-medium">Times Envolvidos</label>

                    <div className="grid grid-cols-2 gap-2">
                        {listaDeTimes.map((time) => (
                            <label key={time.id} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={timesEnvolvidos.includes(time.time)}
                                    onChange={() => toggleTime(time.time)}
                                />
                                {time.time}
                            </label>
                        ))}
                    </div>
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
                    Salvar Notícia
                </button>
            </form>
        </div>
    );
}