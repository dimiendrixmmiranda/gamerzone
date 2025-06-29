'use client'

import { useSearchParams } from "next/navigation"

export default function BuscarConteudo() {
    const searchParams = useSearchParams()
    const termo = searchParams.get('query')
    console.log(termo)

    return (
        <div>
            <p>{termo}</p>
            {/* Equipes */}
            <div></div>
            {/* Campeonatos */}
            <div></div>
            {/* Notícias */}
            <div></div>
        </div>
    )
}