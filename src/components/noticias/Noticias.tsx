'use client';
import { useEffect, useState } from "react";
import { IoGameController } from "react-icons/io5";
import { SiCounterstrike, SiValorant, SiLeagueoflegends } from "react-icons/si";
import { Paginator } from 'primereact/paginator';
import Card from "../card/Card";
import { listaDeNoticias } from "core";

type PaginatorEvent = {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
};

export default function Noticias() {
    const [selecionarBotao, setSelecionarBotao] = useState('Geral');
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(11);

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        // Define a largura da janela assim que o componente é montado
        setWindowWidth(window.innerWidth);

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Limpeza do evento na desmontagem do componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const qtdeNoticias = windowWidth <= 1024 ? 5 : 9
    const minhasNoticias = listaDeNoticias.slice(qtdeNoticias)

    const selecionarNoticias = selecionarBotao.toLowerCase() === 'geral' ?
        minhasNoticias
        :
        minhasNoticias.filter(noticia => noticia.tag.toLowerCase() === selecionarBotao.toLowerCase())


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
        <div className="w-full px-1 md:pl-4 flex flex-col mb-5">
            <div className="w-full flex justify-around gap-1 lg:ml-2">
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
                    {selecionarNoticias.slice(first, first + rows).map((noticia) => {
                        return (
                            <Card key={noticia.id} noticia={noticia} estilo="h-36 w-full flex p-2 gap-1 pb-6 max-w-[540px] text-[--cor-principal] md:max-w-none sm:h-44 md:h-52 lg:h-48 lg:p-3 lg:gap-2 xl:h-60 xl:pb-8 overflow-hidden`" estiloTitulo="font-black text-[.8em] leading-4 md:text-xl md:leading-6 xl:text-2xl xl:leading-7" estiloSubtitulo="flex-1 text-[.5em] leading-3 flex-1 font-semibold sm:text-[.8em] sm:leading-4 md:text-[1em] md:leading-5 md:mt-1 xl:text-[1.2em] xl:leading-6" estiloTagLogo="rounded-full overflow-hidden w-5 h-5 z-10 top-1 left-1 absolute lg:w-8 lg:h-8" cor="var(--cor-principal)"></Card>
                        )
                    })}
                </ul>
            </div>
            <div className="card max-w-[540px] mx-auto w-full md:max-w-none paginacao">
                <Paginator first={first} rows={rows} totalRecords={listaDeNoticias.length} onPageChange={onPageChange} className="w-full mt-3" />
            </div>
        </div>
    );
}