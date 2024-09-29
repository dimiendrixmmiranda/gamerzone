'use client'
import { skins, skinsGerais } from "@/data/skins";
import Pagina from "../template/Pagina";
import Grupo from "./Grupo";
import style from './style.module.css';
import { FaSteam } from "react-icons/fa";
import { useState } from "react";
import { Dialog } from 'primereact/dialog';

type Skin = {
    nome: string;
    tipo: string;
    raridade: string;
    statTrack: boolean; // Mudei para boolean, assumindo que deveria ser um booleano
    souvenir: boolean; // Mudei para boolean
    operacao: {
        nome: string;
        urlImg: string;
    };
    urlImg: string;
};

export default function Skins() {
    const [selecionarBotao, setSelecionarBotao] = useState('Geral');
    const [visible, setVisible] = useState(false);
    const [selecionarSkin, setselecionarSkin] = useState<Skin | null>(null);

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

    console.log(selecionarSkin)

    const selecionarSkins = selecionarBotao.toLowerCase() === 'geral' ?
        skinsGerais :
        skinsGerais.filter(skin => skin.tipo.toLowerCase() === selecionarBotao.toLowerCase());

    const handleSkinClick = (skin: Skin) => {
        setselecionarSkin(skin); // Armazena a skin selecionada
        setVisible(true); // Abre o diálogo
    };

    return (
        <Pagina>
            <ul className={`overflow-scroll overflow-y-hidden whitespace-nowrap pb-2 px-2 mt-4 w-[98%] mx-auto ${style.containerCardMenu}`}>
                {skins.map((grupo, index) => (
                    <Grupo
                        itensDoGrupo={grupo.itensDoGrupo}
                        nomeDoGrupo={grupo.nomeDoGrupo}
                        key={index}
                        click={(nome: string) => setSelecionarBotao(nome)}
                    />
                ))}
            </ul>
            <ul className="w-[95%] mx-auto mt-6 flex flex-wrap justify-center gap-4 p-2 py-4 bg-[--preto-skins]">
                {
                    selecionarSkins.map((skin, index) => (
                        <li className="cursor-pointer" key={index} onClick={() => handleSkinClick(skin)}>
                            <div className="px-4 py-2 max-w-[320px] rounded-lg lg:max-w-[350px]" style={{ backgroundColor: `var(${identificarRaridade(skin.raridade)})`, textShadow: '1px 1px 2px black', boxShadow: '1px 1px 2px black' }}>
                                <div className="h-[185px] flex justify-center items-center">
                                    <img src={skin.urlImg} alt={skin.nome} />
                                </div>
                                <h2 className="text-center font-bold text-2xl">{skin.nome}</h2>
                                <div className="flex mt-2" style={{ display: 'grid', gridTemplateColumns: '45% 65%' }}>
                                    <p style={{ gridColumn: '1/3' }}>Pode ser StatTrack? <strong>{skin.statTrack ? 'Sim' : 'Não'}</strong></p>
                                    <p className="whitespace-nowrap">Souvenir? <strong>{skin.souvenir ? 'Sim' : 'Não'}</strong></p>
                                    <p className="whitespace-nowrap">Raridade: <strong>{skin.raridade}</strong></p>
                                </div>
                                <div className="gap-1 mt-2" style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
                                    <h2 className="uppercase font-black text-center text-2xl" style={{ gridColumn: '1/3' }}>Operação:</h2>
                                    <h3 className="self-center justify-self-center text-center font-bold text-xl leading-6">{skin.operacao.nome}</h3>
                                    <img className="w-[100px] self-center justify-self-center" src={skin.operacao.urlImg} alt={skin.operacao.nome} />
                                </div>
                                <button className="bg-[--azul-escuro] w-full py-1 text-xl font-bold flex justify-center items-center gap-2 rounded-md mt-2">
                                    Inspecionar no Jogo <FaSteam />
                                </button>
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
        </Pagina>
    )
}
