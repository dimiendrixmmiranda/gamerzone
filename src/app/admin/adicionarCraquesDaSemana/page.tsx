'use client'
import { listaDeTimes } from "@/constants/listaDeTimes"
import { Jogador } from "@/interfaces/Jogador"
import { db } from "@/lib/firebase/firebase"
import { addDoc, collection, Timestamp } from "firebase/firestore"
import { useEffect, useState } from "react"

export default function Page() {
    const [listaDeJogadores, setListaDeJogadores] = useState<Jogador[]>([])
    const [listaCraquesDaGalera, setListaCraquesDaGalera] = useState<Jogador[]>([])
    const [dataHora, setDataHora] = useState('')

    useEffect(() => {
        const jogadores = listaDeTimes.map(time => time.elenco).flat()

        const jogadoresUnicos = Array.from(
            new Map(jogadores.map(j => [j.nick, j])).values()
        )

        setListaDeJogadores(jogadoresUnicos)
    }, [])

    const handleToggle = (jogador: Jogador) => {
        setListaCraquesDaGalera(prev => {

            // Se já está selecionado, REMOVE
            if (prev.some(j => j.nick === jogador.nick)) {
                return prev.filter(j => j.nick !== jogador.nick)
            }

            // Se não está, ADICIONA
            return [...prev, jogador]
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // VALIDAÇÕES IMPORTANTES
        if (!listaCraquesDaGalera) {
            alert("Preencha todos os campos!");
            return;
        }

        try {
            const timestampFirebase = Timestamp.fromDate(new Date(dataHora));
            
            const listaComVotos = listaCraquesDaGalera.map(jogador => ({
                ...jogador,
                votos: 0
            }));

            // Criar objeto Notícia
            const semana = {
                semanaCorrente: true,
                listaDeCraquesDaSemana: listaComVotos,
                encerrado: false,
                data: timestampFirebase
            };

            // Enviar para Firestore
            await addDoc(collection(db, "listaDeCraquesDaSemana"), semana);

            alert("jogadores adicionada com sucesso!");

        } catch (error) {
            console.error("Erro ao salvar jogadores:", error);
            alert("Erro ao salvar jogadores!");
        }
    }

    console.log(listaCraquesDaGalera)

    return (
        <div>
            <h2>Adicione os craques da galera</h2>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <fieldset className="flex flex-col gap-1 border p-4">
                    <label className="font-medium">Jogadores</label>

                    {listaDeJogadores.map((jogador) => {

                        const checked = listaCraquesDaGalera.some(j => j.nick === jogador.nick)

                        return (
                            <label
                                key={jogador.nick}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    type="checkbox"
                                    checked={checked}          // ← controlado
                                    onChange={() => handleToggle(jogador)}
                                />
                                {jogador.nick}
                            </label>
                        )
                    })}
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