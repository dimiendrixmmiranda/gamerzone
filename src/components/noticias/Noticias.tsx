'use client';
import { IoGameController } from "react-icons/io5";
import { SiCounterstrike, SiValorant, SiLeagueoflegends } from "react-icons/si";
import Card from "../card/Card";
import { listaDeNoticias } from "core";

export default function Noticias() {

    return (
        <div className="w-full px-1 md:pl-4 flex flex-col mb-5 noticias">
            <div className="w-full flex justify-around gap-1 sm:grid sm:grid-cols-4 lg:gap-3">
                <button className="border border-[--cor-principal] text-black flex justify-center items-center gap-1 px-1 rounded-md font-bold md:text-lg md:py-1 lg:text-xl">
                    <IoGameController />Geral
                </button>
                <button className="border border-[--cor-principal] text-black flex justify-center items-center gap-1 px-1 rounded-md font-bold md:text-lg md:py-1 lg:text-xl">
                    <SiCounterstrike />CS2
                </button>
                <button className="border border-[--cor-principal] text-black flex justify-center items-center gap-1 px-1 rounded-md font-bold md:text-lg md:py-1 lg:text-xl">
                    <SiValorant />Valorant
                </button>
                <button className="border border-[--cor-principal] text-black flex justify-center items-center gap-1 px-1 rounded-md font-bold md:text-lg md:py-1 lg:text-xl">
                    <SiLeagueoflegends />LoL
                </button>
            </div>
            <div className="mt-4">
                <ul className="flex flex-col items-center gap-3 md:gap-5">
                    {listaDeNoticias.map((noticia) => {
                        return (
                            <Card key={noticia.id} noticia={noticia} estilo="h-36 w-full flex p-2 gap-1 pb-6 max-w-[540px] text-[--cor-principal] md:max-w-none sm:h-44 md:h-52 lg:h-48 lg:p-3 lg:gap-2 xl:h-60 xl:pb-8 overflow-hidden`" estiloTitulo="font-black text-[.8em] leading-4 md:text-xl md:leading-6 xl:text-2xl xl:leading-7" estiloSubtitulo="flex-1 text-[.5em] leading-3 flex-1 font-semibold sm:text-[.8em] sm:leading-4 md:text-[1em] md:leading-5 md:mt-1 xl:text-[1.2em] xl:leading-6" estiloTagLogo="rounded-full overflow-hidden w-4 h-4 z-10 top-1 left-1 absolute lg:w-8 lg:h-8" cor="var(--cor-principal)"></Card>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}