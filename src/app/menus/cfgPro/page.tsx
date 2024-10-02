'use client';

import Pagina from "@/components/template/Pagina";
import listaDeJogadores from "@/data/jogadores";
import Link from "next/link";
import styles from './styles.module.css'
import { FaCopy } from "react-icons/fa";
import { useState } from "react";
import { Jogador } from "@/types/Jogador";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleLeft } from "react-icons/fa";

export default function Page() {
    const [jogadorSelecionado, setJogadorSelecionado] = useState<Jogador | null>(null)
    const [codigoMira, setCodigoMira] = useState('')
    const [viewmodel, setViewmodel] = useState('')

    const copiarCodigoMira = () => {
        navigator.clipboard.writeText(codigoMira).then(() => {
            alert('Mira copiada com Sucesso!');
        }).catch(err => {
            console.error('Erro ao copiar o texto: ', err);
        });
    };
    const copiarViewModel = () => {
        navigator.clipboard.writeText(viewmodel).then(() => {
            alert('Viewmodel copiado com sucesso');
        }).catch(err => {
            console.error('Erro ao copiar o texto: ', err);
        });
    };

    const copiarMira = (mira: string | null) => {
        mira != null ? setCodigoMira(mira) : ''
        copiarCodigoMira()
    }
    const copiarCodigoViewmodel = (viewmodel: string | null) => {
        viewmodel != null ? setViewmodel(viewmodel) : ''
        copiarViewModel()
    }

    return (
        <Pagina>
            <h2 id="topo" className="text-white bg-black p-2 max-w-[95%] mx-auto uppercase leading-6 my-3 font-black text-center text-2xl lg:max-w-[1250px]">Miras dos Principais Jogadores de CS2 do momento:</h2>
            <ul className="flex flex-wrap justify-center p-2 gap-4">
                {listaDeJogadores.map((jogador, index) => {
                    return (
                        <li key={index} onClick={() => setJogadorSelecionado(jogador)}>
                            <Link href={'#detalhes'}>
                                <div className="w-[300px] h-[350px] mx-auto bg-[--preto-skins] p-3 relative flex flex-col gap-3">
                                    <div className="w-full max-h-[276px] overflow-hidden">
                                        <img src={jogador.imagem} alt={jogador.nome} className="w-full" />
                                    </div>
                                    <div className="bg-black">
                                        <h2 className="text-center text-2xl font-bold">{jogador.nick}</h2>
                                    </div>
                                    <div className="absolute top-2 right-3">
                                        <img src={jogador.logoTimeAtual} alt={jogador.timeAtual} className=" w-10 h-10" />
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            {
                jogadorSelecionado != null ? (
                    <div id="detalhes" className={`w-[95%] max-w-[1000px] mx-auto bg-[--preto-skins] mt-10 p-3 gap-3 mb-6 xl:max-w-[1250px] ${styles.cfgPro}`}>
                        <div className={`flex justify-center items-center ${styles.cfgProImagem}`}>
                            <div className="relative max-w-[325px] w-full">
                                <img src={jogadorSelecionado.imagem} alt={jogadorSelecionado.nome} className="max-w-[325px] w-full" />
                                <img className="w-10 absolute top-0 right-0" src={jogadorSelecionado.logoTimeAtual} alt={jogadorSelecionado.timeAtual} />
                                <h2 className="text-2xl font-bold text-center absolute bottom-0 left-[50%] bg-black w-full py-1" style={{ transform: 'translate(-50%)' }}>{jogadorSelecionado.nick}</h2>
                            </div>
                        </div>
                        <div className={styles.cfgProEquipamentos}>
                            <h2 className="uppercase font-bold text-xl xl:text-2xl">Equipamentos</h2>
                            <ul className="text-lg flex flex-col gap-1">
                                <li className="flex gap-2">
                                    <p>Monitor:</p>
                                    <p>{jogadorSelecionado.equipamentos?.monitor != null ? jogadorSelecionado.equipamentos?.monitor : 'Indefinido'}</p>
                                </li>
                                <li className="flex gap-2">
                                    <p>Mouse:</p>
                                    <p>{jogadorSelecionado.equipamentos?.mouse != null ? jogadorSelecionado.equipamentos?.mouse : 'Indefinido'}</p>
                                </li>
                                <li className="flex gap-2">
                                    <p>Teclado:</p>
                                    <p>{jogadorSelecionado.equipamentos?.teclado != null ? jogadorSelecionado.equipamentos?.teclado : 'Indefinido'}</p>
                                </li>
                                <li className="flex gap-2">
                                    <p>Fone:</p>
                                    <p>{jogadorSelecionado.equipamentos?.fone != null ? jogadorSelecionado.equipamentos?.fone : 'Indefinido'}</p>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.cfgProMouse}>
                            <h2 className="uppercase font-bold text-xl xl:text-2xl">Mouse</h2>
                            <ul className="text-lg">
                                <li className="flex gap-2">
                                    <p>DPI:</p>
                                    <p>{jogadorSelecionado.mouse?.dpi}</p>
                                </li>
                                <li className="flex gap-2">
                                    <p>Sensibilidade:</p>
                                    <p>{jogadorSelecionado.mouse?.sensibilidade}</p>
                                </li>
                                <li className="flex gap-2">
                                    <p>eDPI:</p>
                                    <p>{jogadorSelecionado.mouse?.edpi}</p>
                                </li>
                                <li className="flex gap-2">
                                    <p>Zoom Sensitive:</p>
                                    <p>{jogadorSelecionado.mouse?.zoom_sensitivity_ratio_mouse}</p>
                                </li>
                                <li className="flex gap-2">
                                    <p>Sensibilidade do Windows:</p>
                                    <p>{jogadorSelecionado.mouse?.sensibilidade_no_Windows}</p>
                                </li>
                            </ul>
                        </div>
                        <div className={`relative ${styles.cfgViewmodel}`} style={{ display: 'grid', gridTemplateColumns: '80% 1fr' }}>
                            <h2 className="uppercase font-bold text-xl xl:text-2xl" style={{ gridColumn: '1/3' }}>Viewmodel</h2>
                            <ul className="text-lg flex flex-wrap gap-2" style={{ gridColumn: '1/2' }}>
                                <li className="flex">
                                    <p>Fov:</p>
                                    <p>{jogadorSelecionado.viewmodel.fov}</p>
                                </li>
                                <li className="flex">
                                    <p>OffSet X:</p>
                                    <p>{jogadorSelecionado.viewmodel.offsetx}</p>
                                </li>
                                <li className="flex">
                                    <p>OffSet Y:</p>
                                    <p>{jogadorSelecionado.viewmodel.offsety}</p>
                                </li>
                                <li className="flex">
                                    <p>OffSet Z:</p>
                                    <p>{jogadorSelecionado.viewmodel.offsetz}</p>
                                </li>
                                <li className="flex">
                                    <p>Prosetpos:</p>
                                    <p>{jogadorSelecionado.viewmodel.prosetpos}</p>
                                </li>
                            </ul>
                            <button className="flex justify-center items-center flex-wrap gap-1 bg-[--azul] rounded-md w-fit h-fit py-1 px-2" onClick={() => copiarCodigoViewmodel(jogadorSelecionado.viewmodel.codigo)}>Copiar <FaCopy /></button>
                        </div>
                        <div className={`flex justify-between items-center ${styles.cfgProCodigoMira}`}>
                            <p className="text-xl flex gap-2" >
                                <strong className="uppercase font-bold">Código da mira:</strong>
                                <span>{jogadorSelecionado.codigoMira}</span>
                            </p>
                            <button className="flex justify-center items-center gap-1 bg-[--azul] py-1 px-2 rounded-md" onClick={() => copiarMira(jogadorSelecionado.codigoMira)}>Copiar <FaCopy /></button>
                        </div>
                    </div>
                ) : ('')
            }

            <div className="flex gap-4 mx-auto mt-2 xl:max-w-[1250px] xl:justify-end">
                <Link href={'#topo'} className="flex justify-center items-center gap-1 bg-[--azul] px-2 py-1 text-bold rounded-md xl:text-xl">
                    Voltar ao topo <FaRegArrowAltCircleUp />
                </Link>
                <Link href={'/'} className="flex justify-center items-center gap-1 bg-[--azul] px-2 py-1 text-bold rounded-md xl:text-xl">
                    Voltar <FaRegArrowAltCircleLeft />
                </Link>
            </div>
        </Pagina>
    )
}