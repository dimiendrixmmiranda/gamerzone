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

                <Dialog header={jogadorSelecionado?.nome} visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Dialog>
            </div>
        </div >
    )
}       