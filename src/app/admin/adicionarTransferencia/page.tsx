'use client'

import { listaDeTimes } from "@/constants/listaDeTimes"
import Time from "@/interfaces/Time"
import { Jogador } from "@/interfaces/Jogador"
import { useContext, useEffect, useState } from "react"
import { addDoc, collection, doc, Timestamp, updateDoc } from "firebase/firestore"
import { db } from "@/lib/firebase/firebase"
import Auth from "@/lib/context/Auth"
import Transferencia from "@/interfaces/Transferencia"
import useTransferencias from "@/lib/hooks/useTransferencias"

export default function Page() {
    const [times, setTimes] = useState<Time[]>([])
    const [timeAtual, setTimeAtual] = useState<Time | null>(null)
    const [jogadorAtual, setJogadorAtual] = useState<Jogador | null>(null)
    const [timeDestino, setTimeDestino] = useState<Time | null>(null)
    const [situacaoTransferencia, setSituacaoTransferencia] = useState('')
    const [linkHighlight, setLinkHighlight] = useState('')
    const [valorDaTransferencia, setValorDaTransferencia] = useState('')
    const { usuario } = useContext(Auth)

    // atuliazar Transferencia
    const [transferenciaSelecionada, setTransferenciaSelecionada] = useState<Transferencia | null>(null)
    const [novaSituacao, setNovaSituacao] = useState('')
    const { transferencias } = useTransferencias()

    useEffect(() => {
        setTimes(listaDeTimes)
    }, [])

    console.log(situacaoTransferencia)

    function handleSelectTimeAtual(e: React.ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value
        const time = times.find(t => t.time === value) ?? null

        setTimeAtual(time)
        setJogadorAtual(null)
    }

    function handleSelectTimeDestino(e: React.ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value
        const time = times.find(t => t.time === value) ?? null

        setTimeDestino(time)  // 👈 CORRETO
    }


    function handleSelectJogador(e: React.ChangeEvent<HTMLSelectElement>) {
        if (!timeAtual) return

        const jogador = timeAtual.elenco.find(j => j.nick === e.target.value) ?? null
        setJogadorAtual(jogador)
    }


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // VALIDAÇÕES IMPORTANTES
        if (!timeAtual || !jogadorAtual || !timeDestino || !situacaoTransferencia) {
            alert("Preencha todos os campos!");
            return;
        }

        if (!usuario) {
            alert("Você precisa estar logado para adicionar transferência!")
            return
        }

        try {
            const transferencia = {
                timeAtual,
                jogadorAtual,
                timeDestino,
                situacaoTransferencia,
                data: Timestamp.now(),
                valorDaTransferencia: valorDaTransferencia,
                linkHighlight: linkHighlight
            }

            console.log(transferencia)

            // Enviar para Firestore
            await addDoc(collection(db, "listaDeTransferencias"), transferencia);

            alert("transferencia adicionada com sucesso!");

        } catch (error) {
            console.error("Erro ao salvar transferencia:", error);
            alert("Erro ao salvar transferencia!");
        }
    }

    return (
        <div>
            <h2>Adicionar uma nova transferência:</h2>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

                {/* SELECT DE TIMES */}
                <fieldset>
                    <label htmlFor="timeAtual">Time atual do jogador:</label>
                    <select
                        id="timeAtual"
                        onChange={handleSelectTimeAtual}
                        className="border border-black"
                    >
                        <option value="">Selecione…</option>

                        {times.map((time, index) => (
                            <option key={index} value={time.time}>
                                {time.time}
                            </option>
                        ))}
                    </select>
                </fieldset>

                {/* SELECT DE JOGADORES */}
                <fieldset>
                    <label htmlFor="jogadoresTimeAtual">Jogador:</label>
                    <select
                        id="jogadoresTimeAtual"
                        disabled={!timeAtual}
                        onChange={handleSelectJogador}
                        className="border border-black"
                    >
                        <option value="">Selecione…</option>

                        {timeAtual?.elenco?.map((jogador, index) => (
                            <option key={index} value={jogador.nick}>
                                {jogador.nome} ({jogador.nick})
                            </option>
                        ))}
                    </select>
                </fieldset>

                <fieldset>
                    <label htmlFor="timeDestino">Time de destino do jogador:</label>
                    <select
                        id="timeDestino"
                        onChange={handleSelectTimeDestino}
                        className="border border-black"
                    >
                        <option value="">Selecione…</option>

                        {times.map((time, index) => (
                            <option key={index} value={time.time}>
                                {time.time}
                            </option>
                        ))}
                    </select>
                </fieldset>

                <fieldset>
                    <label htmlFor="situacaoDaTransferencia">Situação da transferencia:</label>
                    <select
                        id="timeDestino"
                        onChange={(e) => setSituacaoTransferencia(e.target.value)}
                        className="border border-black"
                    >
                        <option value="">Selecione…</option>
                        <option value="rumor">Rumor</option>
                        <option value="interesse">Interesse</option>
                        <option value="negociando">Negociando</option>
                        <option value="fechado">Fechado</option>
                        <option value="melou">Melou</option>
                    </select>
                </fieldset>

                <fieldset>
                    <label htmlFor="valorDaTransferencia">valor da transferencia</label>
                    <input type="text" name="valorDaTransferencia" id="valorDaTransferencia" className="border border-black" value={valorDaTransferencia} onChange={(e) => setValorDaTransferencia(e.target.value)} />
                </fieldset>

                <fieldset>
                    <label htmlFor="linkHighlight">Link dos HighLights</label>
                    <input type="text" name="linkHighlight" id="linkHighlight" className="border border-black" value={linkHighlight} onChange={(e) => setLinkHighlight(e.target.value)} />
                </fieldset>
                <button type="submit">Adicionar Transferência</button>
            </form>

            {/* Atualizar transferencia */}
            {/* Atualizar transferencia */}
            <h2 className="mt-10 text-2xl font-bold">Atualizar transferência</h2>

            <form
                className="flex flex-col gap-4 mt-4"
                onSubmit={async (e) => {
                    e.preventDefault()

                    if (!transferenciaSelecionada) {
                        alert("Selecione uma transferência!")
                        return
                    }

                    try {
                        await updateDoc(
                            doc(db, "listaDeTransferencias", transferenciaSelecionada.id),
                            {
                                situacaoTransferencia: novaSituacao,
                                data: Timestamp.now()
                            }
                        )

                        alert("Transferência atualizada!")
                    } catch (err) {
                        console.error(err)
                        alert("Erro ao atualizar transferência!")
                    }
                }}
            >

                {/* SELECT COM TODAS AS TRANSFERÊNCIAS */}
                <fieldset>
                    <label htmlFor="transferencias">Selecione uma transferência:</label>
                    <select
                        id="transferencias"
                        className="border border-black"
                        onChange={(e) => {
                            const id = e.target.value
                            const t = transferencias.find((item) => item.id === id) ?? null

                            setTransferenciaSelecionada(t)
                            setNovaSituacao(t?.situacaoTransferencia ?? '')
                        }}
                    >
                        <option value="">Selecione…</option>
                        {transferencias.map((t, i) => (
                            <option key={i} value={t.id}>
                                {t.jogadorAtual.nick} → {t.timeDestino.time}
                            </option>
                        ))}
                    </select>
                </fieldset>

                {/* ALTERAR SITUAÇÃO */}
                <fieldset>
                    <label htmlFor="situacaoUpdate">Nova situação:</label>
                    <select
                        id="situacaoUpdate"
                        className="border border-black"
                        value={novaSituacao}
                        onChange={(e) => setNovaSituacao(e.target.value)}
                    >
                        <option value="rumor">Rumor</option>
                        <option value="interesse">Interesse</option>
                        <option value="negociando">Negociando</option>
                        <option value="fechado">Fechado</option>
                        <option value="melou">Melou</option>
                    </select>
                </fieldset>

                <button type="submit" className="bg-blue-500 p-2 text-white rounded">
                    Atualizar transferência
                </button>
            </form>

        </div>
    )
}
