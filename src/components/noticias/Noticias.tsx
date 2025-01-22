import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';
import CardNoticia from "./CardNoticia";
import listaDeNoticias from "@/core/constants/ListaDeNoticias";

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

    const onPageChange = (event: onPageChange) => {
        setFirst(event.first);
        setRows(event.rows);

        // Rolar para o topo da seção de notícias
        const topoNoticias = document.getElementById("topoNoticias");
        if (topoNoticias) {
            topoNoticias.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const noticiasDaPaginaAtual = listaDeNoticias.slice(first, first + rows);

    return (
        <div className="my-4 flex flex-col gap-4 lg:my-0">
            <div className="grid grid-cols-4 gap-1">
                <button className="flex justify-center items-center gap-1">
                    <div className="w-8 h-8 bg-zinc-600 rounded-full md:w-6 md:h-6"></div>
                    <h2 className="hidden md:block text-xl text-black font-bold">Geral</h2>
                </button>
                <button className="flex justify-center items-center gap-1">
                    <div className="w-8 h-8 bg-zinc-600 rounded-full md:w-6 md:h-6"></div>
                    <h2 className="hidden md:block text-xl text-black font-bold">CS2</h2>
                </button>
                <button className="flex justify-center items-center gap-1">
                    <div className="w-8 h-8 bg-zinc-600 rounded-full md:w-6 md:h-6"></div>
                    <h2 className="hidden md:block text-xl text-black font-bold">Valorant</h2>
                </button>
                <button className="flex justify-center items-center gap-1">
                    <div className="w-8 h-8 bg-zinc-600 rounded-full md:w-6 md:h-6"></div>
                    <h2 className="hidden md:block text-xl text-black font-bold">LoL</h2>
                </button>
            </div>
            <ul className="flex flex-col gap-2 md:px-0" id="topoNoticias">
                {
                    noticiasDaPaginaAtual.map((noticia, i) => {
                        return (
                            <li key={i}>
                                <CardNoticia autor={noticia.autor} data={noticia.data} hora={noticia.hora} imagem={noticia.imagem} subtitulo={noticia.subtitulo} titulo={noticia.titulo}></CardNoticia>
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
                    style={{boxShadow: '0 0 1px 2px black'}}
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