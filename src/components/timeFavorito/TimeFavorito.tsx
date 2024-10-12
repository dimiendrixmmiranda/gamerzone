'use client';

import Card from "components/card/Card";
import { listaDeNoticias, listaDeTimes } from "core";
import Noticia from "core/noticias/noticia";
import Time from "core/times/times";
import Image from "next/image";
import { useState } from "react";
import { TiArrowBack } from "react-icons/ti";
import style from './style.module.css'

interface TimeFavoritoProps {
    display?: string
}

export default function TimeFavorito({ display }: TimeFavoritoProps) {
    const [noticiaSelecionadas, setNoticiaSelecionadas] = useState<Noticia[]>([])
    const [visibleTimeSelecionado, setVisibleTimeSelecionado] = useState('grid')
    const [visibleNoticiaSelecionado, setVisibleNoticiaSelecionado] = useState('hidden')
    const [visibleBtnVoltar, setVisibleBtnVoltar] = useState('hidden')

    function selecionarNoticiaTime(time: Time) {
        const noticias = listaDeNoticias.filter(t => t.time.toLowerCase().trim() === time.nome.toLocaleLowerCase().trim()).slice(0, 3)
        setNoticiaSelecionadas(noticias)
        setVisibleTimeSelecionado('hidden')
        setVisibleNoticiaSelecionado('flex')
        setVisibleBtnVoltar('flex')
    }

    return (
        <div className={`${style.timeFavorito} ${display}`}>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 35px'}}>
                <h1 className="uppercase font-black text-xl text-center leading-5 self-center">Qual seu time do Coração?</h1>
                <button className={`top-2 right-2 ${visibleBtnVoltar} bg-zinc-800 text-2xl p-1 border border-black rounded-md`} onClick={() => {
                    setVisibleTimeSelecionado('grid')
                    setVisibleNoticiaSelecionado('hidden')
                    setVisibleBtnVoltar('hidden')
                }}><TiArrowBack /></button>
            </div>
            <ul className={`w-full grid grid-cols-4 gap-2 ${visibleTimeSelecionado}`}>
                {
                    listaDeTimes.map((time) => (
                        <li key={time.id} className="hover:scale-[1.05] transition-all bg-[--preto-skins] rounded-md py-1 cursor-pointer" onClick={() => { selecionarNoticiaTime(time) }}>
                            <div className="flex justify-center items-center relative w-full h-[60px]">
                                <Image src={time.logo} alt={time.nome} fill className="object-contain p-2" priority />
                            </div>
                            <h2 className="text-center leading-4 text-[.7em]">{time.nome}</h2>
                        </li>
                    ))
                }
            </ul>
            <div className={`${visibleNoticiaSelecionado} flex-col`}>
                <ul className=''>
                    {
                        noticiaSelecionadas.length > 0 ? noticiaSelecionadas.map((noticia, index) => {
                            return (
                                <Card noticia={noticia} estilo="h-36 w-full flex p-2 gap-1 pb-6 max-w-[540px] sm:h-40" estiloTitulo="font-black text-[.8em] leading-4 md:text-lg md:leading-5 lg:text-[16px]" estiloSubtitulo="flex-1 text-[.5em] leading-3 flex-1 font-semibold sm:text-[.8em] md:mt-1 md:leading-4 lg:text-[12px]" estiloTagLogo="rounded-full overflow-hidden w-4 h-4 z-10 top-1 left-1 absolute" cor="white" key={index}></Card>
                            )
                        }) : <h2 className="text-center my-2 uppercase font-bold text-lg:">Sem notícias desse time!</h2>
                    }
                </ul>
                <button className="uppercase font-bold text-xl py-1 bg-black">Mais Notícias</button>
            </div>
        </div>
    )
}
