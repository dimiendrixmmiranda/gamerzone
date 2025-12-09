'use client'
import Template from "@/components/template/Template";
import { listaDeTimes } from "@/constants/listaDeTimes";
import Time from "@/interfaces/Time";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import React from 'react';
import CardJogador from "@/components/cardJogador/CardJogador";
import { FaGlobeAmericas, FaGlobeAsia, FaGlobeEurope } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import Link from "next/link";

export default function Page() {
    const [timeAtual, setTimeAtual] = useState<Time | null>(null)

    const [lista, setLista] = useState<Time[]>([])
    const [regiao, setRegiao] = useState<'am' | 'eu' | 'as' | 'wr'>('wr')

    useEffect(() => {
        if (regiao === "wr") {
            // World Ranking → lista completa
            const listaTimesSemClubeDefault = listaDeTimes.filter(time => time.id != 'semclube')
            const ordenado = [...listaTimesSemClubeDefault].sort((a, b) => {
                return parseInt(a.colocacao) - parseInt(b.colocacao);
            })
            setLista(ordenado)
        } else {
            const listaTimesSemClubeDefault = listaDeTimes.filter(time => time.id != 'semclube')
            // Demais regiões → filtra por regiao
            const filtrados = listaTimesSemClubeDefault.filter(
                (time) => time.regiao === regiao
            )
            const ordenado = [...filtrados].sort((a, b) => {
                return parseInt(a.colocacao) - parseInt(b.colocacao);
            })
            setLista(ordenado)
        }
    }, [regiao, listaDeTimes])

    const toggleTimeAtual = (time: Time) => {
        if (timeAtual?.id === time.id) {
            // se clicar no mesmo → fechar
            setTimeAtual(null)
        } else {
            // se clicar em outro → abrir
            setTimeAtual(time)
        }
    }

    const renderizarBotaoFiltro = (regiao: 'am' | 'eu' | 'as' | 'wr', texto: string, icone: React.ReactElement, setRegiao: (regiao: 'am' | 'eu' | 'as' | 'wr') => void) => {
        return (
            <li className="flex justify-center items-center bg-laranja">
                <button onClick={() => setRegiao(regiao)} className="w-full flex justify-center items-center text-lg font-bold py-1" style={{ textShadow: '1px 1px 2px black' }}>
                    <span className="block md:hidden uppercase">
                        {regiao}
                    </span>
                    <span className="hidden md:flex items-center gap-1">
                        {icone}
                        <p>
                            {texto}
                        </p>
                    </span>
                </button>
            </li>
        )
    }

    return (
        <Template paginaClube={false} estiloContainer="max-w-full bg-zinc-900">
            <div className="w-full min-h-screen p-4 text-white flex flex-col gap-4 max-w-[1350px] mx-auto">
                <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">Confira o ranking por equipes:</h2>
                <h3 className="text-lg font-bold md:text-xl lg:text-2xl">Ranking de 1º de dezembro de 2025</h3>
                <ul className="grid grid-cols-4 gap-1">
                    {
                        renderizarBotaoFiltro('wr', 'World Ranking', <BiWorld />, () => setRegiao('wr'))
                    }
                    {
                        renderizarBotaoFiltro('am', 'América', <FaGlobeAmericas />, () => setRegiao('am'))
                    }
                    {
                        renderizarBotaoFiltro('eu', 'Europa', <FaGlobeEurope />, () => setRegiao('eu'))
                    }
                    {
                        renderizarBotaoFiltro('as', 'Ásia', <FaGlobeAsia />, () => setRegiao('as'))
                    }
                </ul>
                <ul>
                    {
                        lista.map((time, i) => {
                            return (
                                <li key={i} className="flex flex-col bg-zinc-700 border-2 border-zinc-950">
                                    <div className="grid grid-cols-[60px_1fr_20px] h-[60px]">
                                        <div className="overflow-hidden relative h-[60px] w-[60px]">
                                            <div className="flex justify-center items-center h-full p-2 text-xl">
                                                <span className="leading-5 mr-3">{i + 1}º</span>
                                            </div>
                                            <div className="w-1 h-[70px] bg-zinc-950 rotate-12 absolute -top-2 left-12" />
                                        </div>
                                        <div className="flex items-center gap-2 p-2 flex-1">
                                            <div className="w-10 h-10 relative">
                                                <Image alt={time.time} src={time.logo} fill className="object-contain" />
                                            </div>
                                            <div className="flex flex-col h-full w-full">
                                                <h2 className="font-bold text-xl leading-5 line-clamp-1">
                                                    {time.time}
                                                </h2>
                                                {/* porque não funciona? */}
                                                <div className="relative overflow-x-auto overflow-y-hidden whitespace-nowrap max-w-[140px] sm:max-w-[245px] md:max-w-fit">
                                                    <span className="text-xs leading-3">
                                                        {time.elenco.map(j => j.nick).join(", ")}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className={`w-5 bg-zinc-800 border-l-2 border-black flex justify-center items-center`} onClick={() => toggleTimeAtual(time)}>
                                            <IoMdArrowDropdown className={`transition-all duration-300 ${time.id === timeAtual?.id ? 'rotate-180' : 'rotate-0'}`} />
                                        </button>
                                    </div>
                                    <div className={`${time.id === timeAtual?.id ? 'flex' : 'hidden'} p-2 overflow-x-auto w-full`}>
                                        <ul className="flex gap-4 w-max min-w-full items-start px-2 py-1 lg:justify-center"
                                            style={{ WebkitOverflowScrolling: "touch" }}>
                                            {
                                                time != null && time.elenco.map((jogador, i) => {
                                                    return (
                                                        <CardJogador jogador={jogador} key={i} />
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <Link href={'/'} className="ml-auto bg-azul-escuro p-2 px-4 font-bold text-lg rounded-[8px]">Voltar</Link>
            </div>
        </Template>
    )
}