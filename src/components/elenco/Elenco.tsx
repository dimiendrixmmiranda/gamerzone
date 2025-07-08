'use client'
import Image from "next/image";
import Jogador from "@/interfaces/Jogador";
import React, { useState } from "react";
import { Dialog } from 'primereact/dialog';

interface ElencoProps {
    elenco?: Jogador[]
}

export default function Elenco({ elenco }: ElencoProps) {
    const [visible, setVisible] = useState(false)
    const [jogadorSelecionado, setJogadorSelecionado] = useState<Jogador | null>(null)
    console.log(jogadorSelecionado)
    return (
        <div className="flex w-full p-2">
            <div className="flex flex-col gap-2 w-full max-w-[1120px] mx-auto">
                <h2 className="uppercase font-bold text-2xl md:text-3xl">Elenco Atual:</h2>
                <ul className="flex overflow-auto whitespace-nowrap gap-2 xl:overflow-visible xl:gap-4">
                    {/* Implementar em cada li um dialog para cada jogador */}
                    {
                        elenco && elenco.map((jogador, i) => {
                            return (
                                <li
                                    key={i}
                                    className="bg-zinc-700 w-[180px] h-[240px] grid grid-rows-[1fr_40px] shrink-0 cursor-pointer hover:scale-110 transition-all duration-300"
                                    onClick={() => {
                                        setJogadorSelecionado(jogador)
                                        setVisible(true)
                                    }}>
                                    <div className="relative w-full h-full flex">
                                        {
                                            jogador.posicoes && jogador.posicoes.length ? (
                                                <ul className="absolute top-1 right-2 ">
                                                    {
                                                        jogador.posicoes.map((posicao, i) => {
                                                            return (
                                                                <li className="relative w-7 h-7 -mb-1" key={i}>
                                                                    <Image alt={posicao} src={`/posicoes/${posicao}.png`} fill className="object-contain" />
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            ) : ''
                                        }
                                        <Image alt={jogador.nome} src={`${jogador.imagem}`} fill className="object-cover" unoptimized></Image>
                                    </div>
                                    <h3 className="w-full h-full p-2 flex justify-center items-center uppercase font-bold bg-amarelo text-white" style={{ textShadow: '1px 1px 2px black' }}>{jogador.nick}</h3>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="card flex justify-content-center">
                {/* <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} /> */}

                <Dialog header={jogadorSelecionado?.nome} visible={visible} style={{ width: '95vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                    {
                        jogadorSelecionado != undefined ? (
                            <div className="overflow-hidden flex flex-col gap-4 text-black">
                                <div className="relative w-56 h-56 mx-auto">
                                    <Image alt={jogadorSelecionado?.nome} src={jogadorSelecionado?.imagem} fill className="object-contain"></Image>
                                </div>
                                <ul className="flex flex-col gap-2">
                                    <li className="flex gap-1 leading-5">
                                        <h2>Nick:</h2>
                                        <p>{jogadorSelecionado.nick}</p>
                                    </li>
                                    <li className="flex gap-1 leading-5">
                                        <h2>Idade:</h2>
                                        <p>22</p>
                                    </li>
                                    <li className="flex gap-1 leading-5">
                                        <h2>Código da mira:</h2>
                                        <p>CSGO-HBz8G-fnZTD-H3L3s-etmrY-AO6FP</p>
                                    </li>
                                    <li>
                                        <h2>Posições:</h2>
                                        
                                        <ul className="flex w-full">
                                            {
                                                jogadorSelecionado.posicoes && jogadorSelecionado.posicoes.map((posicao, i) => {
                                                    return (
                                                        <li className="flex-1 flex justify-center items-center flex-col" key={i}>
                                                            <div className="relative w-8 h-8">
                                                                <Image alt={`${posicao}`} src={`/posicoes/${posicao}.png`} fill className="object-contain" />
                                                            </div>
                                                            <p className="uppercase font-bold">{posicao}</p>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        ) : ''
                    }
                </Dialog>
            </div>
        </div >
    )
}       