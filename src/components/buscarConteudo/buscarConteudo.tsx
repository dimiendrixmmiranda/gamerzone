'use client'

import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function BuscarConteudo() {
    const searchParams = useSearchParams()
    const termo = searchParams.get('query')

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-4xl">O termo pesquisado foi: <strong>{termo}</strong></h2>
            {/* Equipes */}
            <div className="bg-laranja text-white p-2">
                <h3 className="uppercase font-bold text-3xl">Equipes:</h3>
                <span>Nenhuma equipe encontrada...</span>
            </div>
            {/* Campeonatos */}
            <div className="bg-laranja text-white p-2">
                <h3 className="uppercase font-bold text-3xl">Campeonatos:</h3>
                <span>Nenhuma campeonato encontrado...</span>
            </div>
            {/* Notícias */}
            <div className="bg-laranja text-white p-2">
                <h3 className="uppercase font-bold text-3xl">Notícias:</h3>
                <span>Nenhuma notícia encontrada...</span>
            </div>
            {/* ANCORA: Pode virar um componente */}
            <div className="flex justify-end">
                <Link href={'/'} className="bg-azul-escuro text-white uppercase font-bold text-xl px-4 py-2 rounded-lg">
                    Voltar
                </Link>
            </div>
        </div>
    )
}