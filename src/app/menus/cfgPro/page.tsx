'use client';

import Pagina from "@/components/template/Pagina";
import listaDeJogadores from "@/data/jogadores";
import Link from "next/link";
import styles from './styles.module.css'
import { FaCopy } from "react-icons/fa";
import { useState } from "react";
import { Jogador } from "@/types/Jogador";

export default function Page() {
    const [jogadorSelecionado, setJogadorSelecionado] = useState<Jogador | null>(null)
    console.log(jogadorSelecionado)
    return (
        <Pagina>
            <ul className="flex flex-wrap justify-center p-2 gap-4">
                {listaDeJogadores.map((jogador, index) => {
                    return (
                        <li key={index} onClick={() => setJogadorSelecionado(jogador)}>
                            <Link href={'#detalhes'}>
                                <div className="w-[95%] mx-auto max-w-[320px] bg-[--preto-skins] p-3 relative flex flex-col gap-3">
                                    <div>
                                        <img src={jogador.imagem} alt={jogador.nome} />
                                    </div>
                                    <div className="bg-black">
                                        <h2 className="text-center text-2xl font-bold">{jogador.nick}</h2>
                                    </div>
                                    <div className="absolute top-2 right-3 w-8">
                                        <img src={jogador.logoTimeAtual} alt={jogador.timeAtual} />
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            {
                jogadorSelecionado != null ? (
                    <div id="detalhes" className={`w-[95%] max-w-[1000px] mx-auto bg-[--preto-skins] mt-10 p-3 gap-3 xl:max-w-[1200px] ${styles.cfgPro}`}>
                        <div className={`flex justify-center items-center ${styles.cfgProImagem}`}>
                            <div className="relative max-w-[325px]">
                                <img src={jogadorSelecionado.imagem} alt={jogadorSelecionado.nome} className="max-w-[325px] w-full" />
                                <img className="w-10 absolute top-0 right-0" src={jogadorSelecionado.logoTimeAtual} alt={jogadorSelecionado.timeAtual} />
                                <h2 className="text-2xl font-bold text-center absolute bottom-0 left-[50%] bg-black w-full py-1" style={{transform: 'translate(-50%)'}}>{jogadorSelecionado.nick}</h2>
                            </div>
                        </div>
                        <div className={styles.cfgProEquipamentos}>
                            <h2 className="uppercase font-bold text-xl">Equipamentos</h2>
                            <ul className="text-lg">
                                <li>Monitor: ZOWIE XL2546K</li>
                                <li>Mouse: Logitech G Pro X Superlight Pink</li>
                                <li>Mousepad: SteelSeries QcK Heavy</li>
                                <li>Teclado: Logitech G Pro</li>
                                <li>Fone: HyperX Cloud II</li>
                            </ul>
                        </div>
                        <div className={styles.cfgProMouse}>
                            <h2 className="uppercase font-bold text-xl">Mouse</h2>
                            <ul className="text-lg">
                                <li>DPI: 800</li>
                                <li>Sensibilidade: 1.25</li>
                                <li>EDPI: 1000</li>
                                <li>zoom_sensitivity_ratio_mouse:1.0</li>
                                <li>Sensibilidade no Windows: 6</li>
                            </ul>
                        </div>
                        <div className={`relative ${styles.cfgProMira}`} style={{ display: 'grid', gridTemplateColumns: '80% 1fr' }}>
                            <h2 className="uppercase font-bold text-xl" style={{ gridColumn: '1/3' }}>Mira</h2>
                            <ul className="text-lg flex flex-wrap gap-2" style={{ gridColumn: '1/2' }}>
                                <li>cl_crosshairsize: 1</li>
                                <li>cl_crosshairgap: -4</li>
                                <li>cl_crosshairthickness: 0</li>
                                <li>cl_crosshairstyle: 4</li>
                                <li>cl_crosshaircolor: 5</li>
                                <li>cl_crosshair_drawoutline: 0</li>
                                <li>cl_crosshairdot: 0</li>
                            </ul>
                            <button className="flex justify-center items-center flex-wrap gap-1 bg-[--azul] rounded-md w-fit h-fit py-1 px-2">Copiar <FaCopy /></button>
                        </div>
                        <div className={`flex justify-between items-center ${styles.cfgProCodigoMira}`}>
                            <p className="" ><strong className="uppercase font-bold text-xl">Código da mira:</strong> CSGO-jQx5T-f7moo-kwd7v-om3hc-RMQNN</p>
                            <button className="flex justify-center items-center gap-1 bg-[--azul] py-1 px-2 rounded-md">Copiar <FaCopy /></button>
                        </div>
                    </div>
                ) : ('')
            }
        </Pagina>
    )
}