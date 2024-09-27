import Link from "next/link";
import { useState } from "react";
import { IoGameController } from "react-icons/io5";
import { SiCounterstrike, SiValorant, SiLeagueoflegends } from "react-icons/si";
import { Paginator } from 'primereact/paginator';
import noticias from "@/data/noticias";
import { createSlugWithId } from "@/utils/createSlug";

type PaginatorEvent = {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
};

export default function Noticias() {
    const [selecionarBotao, setSelecionarBotao] = useState('Geral');
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(8);

    const minhasNoticias = noticias.slice(5)

    const selecionarNoticias = selecionarBotao.toLowerCase() === 'geral' ?
        minhasNoticias
        :
        minhasNoticias.filter(noticia => noticia.gameNoticia.toLowerCase() === selecionarBotao.toLowerCase())


    const onPageChange = (event: PaginatorEvent) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const botaoSelecionado = (botao: string) => {
        if (botao == 'Geral') {
            return botao === selecionarBotao
                ? 'p-2 font-bold flex justify-center items-center gap-[2px] rounded-md bg-[--cor-principal] text-white w-full'
                : 'p-2 font-bold flex justify-center items-center gap-[2px] rounded-md bg-gray-300 text-black w-full';
        }
        if (botao == 'CS2') {
            return botao === selecionarBotao
                ? 'p-2 font-bold flex justify-center items-center gap-[2px] rounded-md bg-[--laranja] text-white w-full'
                : 'p-2 font-bold flex justify-center items-center gap-[2px] rounded-md bg-gray-300 text-black w-full';
        }
        if (botao == 'Valorant') {
            return botao === selecionarBotao
                ? 'p-2 font-bold flex justify-center items-center gap-[2px] rounded-md bg-[--salmao] text-white w-full'
                : 'p-2 font-bold flex justify-center items-center gap-[2px] rounded-md bg-gray-300 text-black w-full';
        }
        if (botao == 'LoL') {
            return botao === selecionarBotao
                ? 'p-2 font-bold flex justify-center items-center gap-[2px] rounded-md bg-[--roxo] text-white w-full'
                : 'p-2 font-bold flex justify-center items-center gap-[2px] rounded-md bg-gray-300 text-black w-full';
        }
    };

    return (
        <div className="w-full mt-4 px-1 md:pl-4 flex flex-col">
            <div className="w-full flex justify-around gap-1">
                <button
                    className={`${botaoSelecionado('Geral')} lg:gap-2`}
                    onClick={() => setSelecionarBotao('Geral')}
                >
                    <IoGameController />Geral
                </button>
                <button
                    className={`${botaoSelecionado('CS2')} lg:gap-2`}
                    onClick={() => setSelecionarBotao('CS2')}
                >
                    <SiCounterstrike />CS2
                </button>
                <button
                    className={`${botaoSelecionado('Valorant')} lg:gap-3`}
                    onClick={() => setSelecionarBotao('Valorant')}
                >
                    <SiValorant />Valorant
                </button>
                <button
                    className={`${botaoSelecionado('LoL')} lg:gap-3`}
                    onClick={() => setSelecionarBotao('LoL')}
                >
                    <SiLeagueoflegends />LoL
                </button>
            </div>
            <div className="mt-4">
                <ul className="flex flex-col items-center gap-3 md:gap-5">
                    {selecionarNoticias.slice(first, first + rows).map((noticia, index) => {
                        return (
                            <li key={index} className="h-36 w-full flex p-2 gap-1 pb-6 max-w-[540px] md:max-w-none sm:h-44 md:h-52 lg:h-48 lg:p-3 lg:gap-2 xl:h-60 xl:pb-8 overflow-hidden" style={{ borderBottom: 'solid 2px var(--cor-principal)' }}>
                                <Link href={`/noticias/${createSlugWithId(noticia.tituloNoticia, noticia.id)}`} className="flex gap-2">
                                    <div className="h-full w-[45%] overflow-hidden relative" style={{ boxShadow: '0 0 1px 1px var(--cor-principal)' }}>
                                        <img src={noticia.thumbnail} alt="" className="w-full h-full object-cover" />
                                        <div className="rounded-full overflow-hidden w-5 h-5 z-10 top-1 left-1 absolute lg:w-8 lg:h-8">
                                            <img src={noticia.logoNoticia} alt={noticia.gameNoticia} className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="h-full w-[55%] text-[--cor-principal] px-1 flex flex-col gap-1 -mt-1 lg:px-2">
                                        <h2 className="font-black text-[.8em] leading-4 md:text-xl md:leading-6 xl:text-2xl xl:leading-7">{noticia.tituloNoticia}</h2>
                                        <p className="text-[.5em] leading-3 flex-1 font-semibold sm:text-[.8em] sm:leading-4 md:text-[1em] md:leading-5 md:mt-1 xl:text-[1.2em] xl:leading-6">
                                            {noticia.descricaoNoticia}
                                        </p>
                                        <span className="text-[.5em] sm:text-[.6em] xl:text-[.8em]">Por {noticia.autor} - {noticia.data}</span>
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="card max-w-[540px] mx-auto w-full md:max-w-none">
                <Paginator first={first} rows={rows} totalRecords={noticias.length} onPageChange={onPageChange} className="w-full mt-3" />
            </div>
        </div>
    );
}