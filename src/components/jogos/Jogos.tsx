'use client'

import { useEffect, useState } from "react"

export default function Jogos() {
    const [jogos, setJogos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchJogos = async () => {
            try {
                const response = await fetch('https://api.pandascore.co/csgo/tournaments?search=thunderpick', {
                    headers: {
                        Authorization: '2lSOVVxlumKWYoGcq8ggU3c7APVxc2fsQaTf9wehiXyj1hrr1OQ'
                    }
                })

                if (!response.ok) {
                    throw new Error(`Erro ${response.status}: ${response.statusText}`)
                }

                const data = await response.json()
                setJogos(data)
            } catch (error) {
                console.error('Erro ao buscar jogos:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchJogos()
    }, [])

    return (
        <div className="w-full h-full text-white lg:flex xl:col-start-5 xl:col-end-7 xl:max-w-[95%] xl:justify-self-center p-4">
            <div className="bg-zinc-700 w-full max-h-[400px] 2xl:max-h-[500px] overflow-auto p-4">
                {loading ? (
                    <p>Carregando jogos...</p>
                ) : jogos.length === 0 ? (
                    <p>Nenhum jogo encontrado.</p>
                ) : (
                    <ul>
                        {/* {jogos.map((jogo: any) => (
                            <li key={jogo.id} className="mb-2 border-b border-zinc-500 pb-2">
                                <strong>{jogo.name}</strong><br />
                                {jogo.begin_at ? `Data: ${new Date(jogo.begin_at).toLocaleString()}` : 'Data indefinida'}
                            </li>
                        ))} */}
                    </ul>
                )}
            </div>
        </div>
    )
}
