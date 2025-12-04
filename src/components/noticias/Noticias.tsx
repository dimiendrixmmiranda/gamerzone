'use client'
import CardNoticia from "../cardNoticia/CardNoticia";
import { useRef, useState } from "react";
import Noticia from "@/interfaces/Noticia";
import { Paginator } from 'primereact/paginator';
import MenuFiltroNoticias from "../menuFiltroNoticias/MenuFiltroNoticias";

interface NoticiasProps {
    noticias: Noticia[]
    filtroPorJogo: boolean
    noticiasPorPagina: number
}

export default function Noticias({ noticias, filtroPorJogo, noticiasPorPagina }: NoticiasProps) {
    const [esporteSelecionado, setEsporteSelecionado] = useState<
        'geral' | 'cs2' | 'valorant' | 'rainbowSix'
    >('geral')
    const [first, setFirst] = useState(0)
    const [rows,] = useState(noticiasPorPagina)
    const noticiasRef = useRef<HTMLDivElement>(null)

    const noticiasFiltradas = noticias.filter((noticia) => {
        if (esporteSelecionado === "geral") return true
        return noticia.esporte === esporteSelecionado
    })
    
    const noticiasPaginadas = noticiasFiltradas.slice(first, first + rows)

    return (
        <div className="flex flex-col gap-2 p-2 w-full sm:p-4 sm:gap-4 md:mx-auto lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-4 xl:col-start-1 xl:col-end-3">
            {/* Filtro de Notícias */}

            <MenuFiltroNoticias
                esporteSelecionado={esporteSelecionado}
                setEsporteSelecionado={setEsporteSelecionado}
                filtroPorJogo={filtroPorJogo}
            />
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