'use client';
import { skins, skinsGerais } from "@/data/skins";
import Pagina from "../template/Pagina";
import Grupo from "./Grupo";
import style from './style.module.css';
import { FaSteam } from "react-icons/fa";
import { FaCircleArrowUp, FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useState, useRef } from "react";
import { Dialog } from 'primereact/dialog';
import Link from "next/link";

type Skin = {
    nome: string;
    tipo: string;
    raridade: string;
    statTrack: boolean;
    souvenir: boolean;
    operacao: {
        nome: string;
        urlImg: string;
    };
    urlImg: string;
};

export default function SkinsCS2() {
    const [selecionarBotao, setSelecionarBotao] = useState('Geral');
    const [visible, setVisible] = useState(false);
    const [selecionarSkin, setselecionarSkin] = useState<Skin | null>(null);
    const scrollContainerRef = useRef<HTMLUListElement>(null);    

    function identificarRaridade(raridade: string): string {
        let valorRetornado = '';
        switch (raridade) {
            case 'Cinza':
                valorRetornado = '--cinza-steam';
                break;
            case 'Azul Claro':
                valorRetornado = '--azul-claro-steam';
                break;
            case 'Azul':
                valorRetornado = '--azul-steam';
                break;
            case 'Roxo':
                valorRetornado = '--roxo-steam';
                break;
            case 'Rosa':
                valorRetornado = '--rosa-steam';
                break;
            case 'Vermelha':
                valorRetornado = '--vermelho-steam';
                break;
            case 'Laranja':
                valorRetornado = '--vermelho-steam';
                break;
            default:
                valorRetornado = 'não encontrado';
                break;
        }
        return valorRetornado;
    }

    const selecionarSkins = selecionarBotao.toLowerCase() === 'geral' ?
        skinsGerais :
        skinsGerais.filter(skin => skin.tipo.toLowerCase() === selecionarBotao.toLowerCase());

    const handleSkinClick = (skin: Skin) => {
        setselecionarSkin(skin);
        setVisible(true);
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <Pagina>
            <div className="relative">
                {/* Referencia o ul usando scrollContainerRef */}
                <ul ref={scrollContainerRef} id="topo" className={`overflow-scroll overflow-y-hidden whitespace-nowrap pb-2 px-2 mt-4 w-[98%] mx-auto ${style.containerCardMenu} xl:w-[85%]`}>
                    {skins.map((grupo, index) => (
                        <Grupo
                            itensDoGrupo={grupo.itensDoGrupo}
                            nomeDoGrupo={grupo.nomeDoGrupo}
                            key={index}
                            click={(nome: string) => setSelecionarBotao(nome)}
                        />
                    ))}
                </ul>
                
                <button 
                    onClick={scrollLeft} 
                    className="absolute top-[50%] left-2 bg-black text-xl p-1 rounded-full text-[--dourado] xl:left-14 xl:p-2 xl:top-[45%]"
                >
                    <FaArrowLeft />
                </button>
                
                <button 
                    onClick={scrollRight} 
                    className="absolute top-[50%] right-2 bg-black text-xl p-1 rounded-full text-[--dourado] xl:right-14 xl:p-2 xl:top-[45%]"
                >
                    <FaArrowRight />
                </button>
            </div>

            <ul className="w-[95%] mx-auto mt-6 flex flex-wrap justify-center gap-4 p-2 py-4 bg-[--preto-skins] xl:w-[85%]">
                {
                    selecionarSkins.map((skin, index) => (
                        <li className="cursor-pointer" key={index} onClick={() => handleSkinClick(skin)}>
                            <div className="px-4 py-2 max-w-[320px] h-fit rounded-lg md:h-[500px] lg:max-w-[360px] xl:h-[470px]" style={{ backgroundColor: `var(--preto-skins-claro)`, textShadow: '1px 1px 2px black', boxShadow: '1px 1px 2px black', border: `solid 4px var(${identificarRaridade(skin.raridade)})`, display: 'grid', gridTemplateRows: '185px 1fr auto auto 40px' }}>
                                <div className="h-[185px] flex justify-center items-center">
                                    <img src={skin.urlImg} alt={skin.nome} className="w-[75%]" />
                                </div>
                                <h2 className="text-center font-bold text-2xl">{skin.nome}</h2>
                                <div className="flex mt-2" style={{ display: 'grid', gridTemplateColumns: '45% 65%' }}>
                                    <p style={{ gridColumn: '1/3' }}>Pode ser StatTrack? <strong>{skin.statTrack ? 'Sim' : 'Não'}</strong></p>
                                    <p className="whitespace-nowrap">Souvenir? <strong>{skin.souvenir ? 'Sim' : 'Não'}</strong></p>
                                    <p className="whitespace-nowrap">Raridade: <strong>{skin.raridade}</strong></p>
                                </div>
                                <div className="gap-2 my-3" style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
                                    <h2 className="uppercase font-black text-center text-2xl" style={{ gridColumn: '1/3' }}>Operação:</h2>
                                    <h3 className="self-center justify-self-center text-center font-bold text-xl leading-6">{skin.operacao.nome}</h3>
                                    <img className="w-[80px] self-center justify-self-center" src={skin.operacao.urlImg} alt={skin.operacao.nome} />
                                </div>
                                <Link href={'https://stash.clash.gg/weapon/USP-S'} className="bg-[--azul-escuro] w-full py-1 text-xl font-bold flex justify-center items-center gap-2 rounded-md relative z-10 mt-auto">
                                    Inspecionar no Jogo <FaSteam />
                                </Link>
                            </div>
                        </li>
                    ))
                }
            </ul>

            <Dialog
                visible={visible}
                className="w-[95%] max-w-[400px] xl:max-w-[700px]"
                onHide={() => setVisible(false)}
            >
                {selecionarSkin && (
                    <div>
                        <img src={selecionarSkin.urlImg} alt={selecionarSkin.nome} />
                        <h2 className="text-center text-xl lg:text-4xl">{selecionarSkin.nome}</h2>
                    </div>
                )}
            </Dialog>

            <Link href={'#topo'} className="fixed bottom-4 right-6 bg-black text-4xl rounded-full z-20" style={{ boxShadow: '0 0 3px 2px black' }}><FaCircleArrowUp /></Link>
        </Pagina>
    );
}