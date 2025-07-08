'use client'
import { IoLogoGameControllerB } from "react-icons/io";
import { SiCounterstrike, SiUbisoft, SiValorant } from "react-icons/si";
import CardNoticia from "../cardNoticia/CardNoticia";
import { useRef, useState } from "react";
import Noticia from "@/interfaces/Noticia";
import { Paginator } from 'primereact/paginator';

interface NoticiasProps {
    noticias: Noticia[]
    filtroPorJogo: boolean
    noticiasPorPagina: number
}

export default function Noticias({ noticias, filtroPorJogo, noticiasPorPagina }: NoticiasProps) {
    const [esporteSelecionado, setEsporteSelecionado] = useState("geral")
    const [first, setFirst] = useState(0)
    const [rows, ] = useState(noticiasPorPagina) // define quantidade de noticias
    const noticiasRef = useRef<HTMLDivElement>(null)

    const noticiasFiltradas = noticias.filter((noticia) => {
        if (esporteSelecionado === "geral") return true
        return noticia.esporte === esporteSelecionado
    })

    const noticiasPaginadas = noticiasFiltradas.slice(first, first + rows)

    return (
        <div className="flex flex-col gap-2 p-2 w-full sm:p-4 sm:gap-4 md:max-w-[800px] md:mx-auto lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-4 lg:max-w-[900px] xl:col-end-5">
            {/* Filtro de Notícias */}
            {
                filtroPorJogo ? (

                    <div className="flex gap-2">
                        <button
                            className={`flex items-center flex-1 justify-center gap-1 p-1 ${esporteSelecionado === "geral" ? "bg-blue-700 text-white" : ""}`}
                            onClick={() => setEsporteSelecionado("geral")}
                        >
                            <IoLogoGameControllerB />
                            <p className="font-bold sm:text-lg">Geral</p>
                        </button>
                        <button
                            className={`flex items-center flex-1 justify-center gap-1 p-1 ${esporteSelecionado === "cs2" ? "bg-orange-500 text-white" : ""}`}
                            onClick={() => setEsporteSelecionado("cs2")}
                        >
                            <SiCounterstrike />
                            <p className="font-bold sm:text-lg">CS2</p>
                        </button>
                        <button
                            className={`flex items-center flex-1 justify-center gap-1 p-1 ${esporteSelecionado === "valorant" ? "bg-pink-700 text-white" : ""}`}
                            onClick={() => setEsporteSelecionado("valorant")}
                        >
                            <SiValorant />
                            <p className="font-bold sm:text-lg">Valorant</p>
                        </button>
                        <button
                            className={`flex items-center flex-1 justify-center gap-1 p-1 ${esporteSelecionado === "rainbowSix" ? "bg-slate-900 text-white" : ""}`}
                            onClick={() => setEsporteSelecionado("rainbowSix")}
                        >
                            <SiUbisoft />
                            <p className="font-bold sm:text-lg">R6S</p>
                        </button>
                    </div>
                ) : ''
            }
            {/* Cards de Notícias */}
            <nav ref={noticiasRef}>
                <ul className="flex flex-col gap-5">
                    {
                        noticiasPaginadas.map((noticia, i) => {
                            return (
                                <CardNoticia key={i} noticia={noticia} />
                            )
                        })
                    }
                </ul>
            </nav>

            {/* Paginator */}
            <Paginator
                first={first}
                rows={rows}
                totalRecords={noticiasFiltradas.length}
                onPageChange={(e) => {
                    setFirst(e.first);
                    // rolar até o início da lista de notícias
                    setTimeout(() => {
                        noticiasRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 100);
                }}
                className="mt-4"
            />
        </div>
    )
}