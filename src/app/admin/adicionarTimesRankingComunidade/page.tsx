'use client'

import { listaDeTimes } from "@/constants/listaDeTimes"
import Time from "@/interfaces/Time"
import { db } from "@/lib/firebase/firebase"
import { addDoc, collection, Timestamp } from "firebase/firestore"
import { useEffect, useState } from "react"

export default function Page() {
    const [times, setTimes] = useState<Time[]>([])
    const [listaDeTimesDaRodada, setListaDeTimesDaRodada] = useState<Time[]>([])
    const [dataHora, setDataHora] = useState('')

    useEffect(() => {
        const timesBrs = listaDeTimes.filter(time => time.regiao == 'am')
        setTimes(timesBrs)
        setListaDeTimesDaRodada([])
    }, [])


    const handleToggle = (time: Time) => {
        setListaDeTimesDaRodada(prev => {

            if (prev.some(j => j.time === time.time)) {
                return prev.filter(j => j.time !== time.time)
            }

            // LIMITE
            if (prev.length >= 10) {
                alert("Você só pode selecionar 10 times da rodada!");
                return prev
            }

            return [...prev, time]
        })
    }


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // VALIDAÇÕES IMPORTANTES
        if (!listaDeTimesDaRodada) {
            alert("Preencha todos os campos!");
            return;
        }

        try {
            const timestampFirebase = Timestamp.fromDate(new Date(dataHora));

            const listaComVotos = listaDeTimesDaRodada.map(time => ({
                ...time,
                votos: 0
            }));

            // Criar objeto Notícia
            const semana = {
                semanaCorrente: true,
                listaDeTimesDaRodada: listaComVotos,
                encerrado: false,
                data: timestampFirebase
            };

            // Enviar para Firestore
            await addDoc(collection(db, "listaDeTimesDaRodada"), semana);

            alert("jogadores adicionada com sucesso!");

        } catch (error) {
            console.error("Erro ao salvar jogadores:", error);
            alert("Erro ao salvar jogadores!");
        }
    }
    return (
        <div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <fieldset className="flex flex-col gap-1 border p-4">
                    <label className="font-medium">Times da rodada</label>

                    {times.map((time) => {
                        const checked = listaDeTimesDaRodada.some(j => j.time === time.time)

                        return (
                            <label
                                key={time.time}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={() => handleToggle(time)}
                                />
                                {time.time}
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