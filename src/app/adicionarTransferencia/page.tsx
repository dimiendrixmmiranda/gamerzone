'use client'

import { db } from "@/lib/firebase"
import { addDoc, collection, Timestamp } from "firebase/firestore"
import { useState } from "react"

export default function Page() {
    const [nome, setNome] = useState('')
    const [fotoDoJogador, setFotoDoJogador] = useState('')
    const [posicao, setPosicao] = useState('')
    const [situacao, setSituacao] = useState('')
    const [nomeTimeAtual, setNomeTimeAtual] = useState('')
    const [escudoTimeAtual, setEscudoTimeAtual] = useState('')
    const [nomeNovoTime, setNomeNovoTime] = useState('')
    const [escudoNovoTime, setEscudoNovoTime] = useState('')

    async function salvarTransferencia(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        try {
            const transferencia = {
                nome: nome,
                fotoDoJogador: fotoDoJogador,
                posicao: posicao,
                situacao: situacao,
                timeAtual: {nome: nomeTimeAtual, escudo: escudoTimeAtual},
                novoTime: {nome: nomeNovoTime, escudo: escudoNovoTime},
                data: Timestamp.now()
            }
            const docRef = await addDoc(collection(db, "transferencias"), transferencia)
            console.log("Pedido salvo com ID:", docRef.id)
            console.log(transferencia)
        } catch (error) {
            console.error("Erro ao salvar pedido:", error)
        }
    }

    return (
        <div className="bg-azul-escuro min-h-screen w-full p-4">
            <form className="">
                <fieldset>
                    <label htmlFor="nome">Nome do jogador:</label>
                    <input type="text" name="nome" id="nome" className="w-full h-[30px] text-black rounded-lg p-2 text-sm" value={nome} onChange={(e) => setNome(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="fotoDoJogador">fotoDoJogador do jogador:</label>
                    <input type="text" name="fotoDoJogador" id="fotoDoJogador" className="w-full h-[30px] text-black rounded-lg p-2 text-sm" value={fotoDoJogador} onChange={(e) => setFotoDoJogador(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="posicao">Posição do jogador:</label>
                    <input type="text" name="posicao" id="posicao" className="w-full h-[30px] text-black rounded-lg p-2 text-sm" value={posicao} onChange={(e) => setPosicao(e.target.value)} />
                </fieldset>
                <fieldset className="flex flex-col">
                    <label htmlFor="situacao">situacao:</label>
                    <select name="situacao" id="situacao" className="h-[30px] px-2 text-black" value={situacao} onChange={(e) => setSituacao(e.target.value)}>
                        <option value="">Selecione</option>
                        <option value="rumor">Rumor</option>
                        <option value="interesse">Interesse</option>
                        <option value="negociando">Negociando</option>
                        <option value="fechado">Fechado</option>
                        <option value="melou">Melou</option> {/* geral vai pegar todas as categorias, inclusive outros */}
                    </select>
                </fieldset>
                <fieldset>
                    <label htmlFor="nomeTimeAtual">Nome Time Atual:</label>
                    <input type="text" name="nomeTimeAtual" id="nomeTimeAtual" className="w-full h-[30px] text-black rounded-lg p-2 text-sm" value={nomeTimeAtual} onChange={(e) => setNomeTimeAtual(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="escudoTimeAtual">Escudo time Atual:</label>
                    <input type="text" name="escudoTimeAtual" id="escudoTimeAtual" className="w-full h-[30px] text-black rounded-lg p-2 text-sm" value={escudoTimeAtual} onChange={(e) => setEscudoTimeAtual(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="nomeNovoTime">Nome novo time:</label>
                    <input type="text" name="nomeNovoTime" id="nomeNovoTime" className="w-full h-[30px] text-black rounded-lg p-2 text-sm" value={nomeNovoTime} onChange={(e) => setNomeNovoTime(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="escudoNovoTime">Escudo novo time:</label>
                    <input type="text" name="escudoNovoTime" id="escudoNovoTime" className="w-full h-[30px] text-black rounded-lg p-2 text-sm" value={escudoNovoTime} onChange={(e) => setEscudoNovoTime(e.target.value)} />
                </fieldset>
                
                <button className="bg-[--verde] py-1 text-2xl uppercase font-bold text-white" onClick={(e) => salvarTransferencia(e)}>Enviar</button>
            </form>
        </div>
    )
}