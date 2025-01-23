import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';
import CardNoticia from "./CardNoticia";
import listaDeNoticias from "@/core/constants/ListaDeNoticias";
import style from './style.module.css'
import Image from "next/image";

interface onPageChange {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
}

export default function Noticias() {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(7);
    const [pageLinkSize,] = useState(2);
    const [gameSelecionado, setGameSelecionado] = useState<string>('geral')

    const filtrarNoticias = gameSelecionado.toLowerCase() === 'Geral'.toLowerCase() ?
        listaDeNoticias :
        listaDeNoticias.filter((noticia) => noticia.game.toLowerCase() === gameSelecionado.toLowerCase())

    const onPageChange = (event: onPageChange) => {
        setFirst(event.first);
        setRows(event.rows);

        // Rolar para o topo da seção de notícias
        const topoNoticias = document.getElementById("topoNoticias");
        if (topoNoticias) {
            topoNoticias.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const noticiasDaPaginaAtual = filtrarNoticias.slice(first, first + rows);

    return (
        <div className="my-4 flex flex-col gap-4 lg:my-0">
            <div className="grid grid-cols-4 gap-4">
                {/* Botões de filtro */}
                <button
                    className={`${style.botaoFiltro} ${gameSelecionado === "Geral" ? "opacity-100 text-white scale-[1.2]" : "opacity-50"}`}
                    onClick={() => { setGameSelecionado("Geral"); setFirst(0); }}
                >
                    <div className="relative w-10 h-7 rounded-full">
                        <Image alt="Noticias de Games em Geral" src={'/icones/geral.png'} fill></Image>
                    </div>
                    <h2 className="hidden md:block text-xl text-black font-bold">Geral</h2>
                </button>
                <button
                    className={`${style.botaoFiltro} ${gameSelecionado === "CS2" ? "opacity-100 text-white scale-[1.2]" : "opacity-50"}`}
                    onClick={() => { setGameSelecionado("CS2"); setFirst(0); }}
                >
                    <div className="w-8 h-8 bg-zinc-600 rounded-full md:w-6 md:h-6"></div>
                    <h2 className="hidden md:block text-xl text-black font-bold">CS2</h2>
                </button>
                <button
                    className={`${style.botaoFiltro} ${gameSelecionado === "Valorant" ? "opacity-100 text-white scale-[1.2]" : "opacity-50"}`}
                    onClick={() => { setGameSelecionado("Valorant"); setFirst(0); }}
                >
                    <div className="relative w-9 h-7 rounded-full">
                        <Image alt="Noticias de Valorant" src={'/icones/valorant.png'} fill></Image>
                    </div>
                    <h2 className="hidden md:block text-xl text-black font-bold">Valorant</h2>
                </button>
                <button
                    className={`${style.botaoFiltro} ${gameSelecionado === "LoL" ? "opacity-100 text-white scale-[1.2]" : "opacity-50"}`}
                    onClick={() => { setGameSelecionado("LoL"); setFirst(0); }}
                >
                    <div className="relative w-8 h-7 rounded-full">
                        <Image alt="Noticias de Valorant" src={'/icones/league-of-legends.png'} fill></Image>
                    </div>
                    <h2 className="hidden md:block text-xl text-black font-bold">LoL</h2>
                </button>
            </div>
            <ul className="flex flex-col gap-2 md:px-0" id="topoNoticias">
                {
                    noticiasDaPaginaAtual.map((noticia, i) => {
                        return (
                            <li key={i}>
                                <CardNoticia game={noticia.game} autor={noticia.autor} data={noticia.data} hora={noticia.hora} imagem={noticia.imagem} subtitulo={noticia.subtitulo} titulo={noticia.titulo}></CardNoticia>
                            </li>
                        );
                    })
                }
            </ul>

            <div className="card ml-1 lg:ml-2">
                <Paginator
                    first={first}
                    rows={rows}
                    totalRecords={listaDeNoticias.length}
                    onPageChange={onPageChange}
                    pageLinkSize={pageLinkSize}
                    className="bg-[--azul] text-white"
                    style={{ boxShadow: '0 0 1px 2px black' }}
                    template={{
                        layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown',
                        PrevPageLink: (options) => (
                            <button
                                type="button"
                                onClick={options.onClick}
                                disabled={options.disabled}
                                className={`p-paginator-prev p-link ${options.disabled ? 'p-disabled' : ''}`}
                            >
                                Anterior
                            </button>
                        ),
                        NextPageLink: (options) => (
                            <button
                                type="button"
                                onClick={options.onClick}
                                disabled={options.disabled}
                                className={`p-paginator-next p-link ${options.disabled ? 'p-disabled' : ''}`}
                            >
                                Próximo
                            </button>
                        ),
                    }} />
            </div>
        </div>
    );
}