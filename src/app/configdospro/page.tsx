'use client'
import CardJogador from "@/components/cardJogador/CardJogador";
import Template from "@/components/template/Template";
import { listaDeTimes } from "@/constants/listaDeTimes";
import Time from "@/interfaces/Time";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { Dialog } from 'primereact/dialog';
import { Jogador } from "@/interfaces/Jogador";
import Link from "next/link";
import Redes from "@/components/redes/Redes";
import nomePersonalizado from "@/lib/utils/nomePersonalizado";
import { copiar } from "@/lib/utils/copiar";
import CaixaDeDialogo from "@/components/caixaDeDialogo/CaixaDeDialogo";
import { PiMagnifyingGlassFill } from "react-icons/pi";

export default function Page() {
    const [equipes, setEquipes] = useState<Time[]>([])
    const [visible, setVisible] = useState(false);
    const [jogadorAtual, setJogadorAtual] = useState<Jogador | null>(null)

    const [mostrarCaixa, setMostrarCaixa] = useState(false);
    const [mensagemCaixa, setMensagemCaixa] = useState("");

    const [busca, setBusca] = useState("");
    const [sugestoes, setSugestoes] = useState<Jogador[]>([]);


    const copiarComAviso = (texto: string) => {
        copiar(texto);

        setMensagemCaixa("Copiado!");
        setMostrarCaixa(true);

        // esconder automaticamente depois de 1.5s
        setTimeout(() => {
            setMostrarCaixa(false);
        }, 1500);
    };


    useEffect(() => {
        setEquipes([listaDeTimes[1], listaDeTimes[2]])
    }, [listaDeTimes])

    const celularTabela = (cabecalho: string, conteudo: string) => {
        return (
            <div className={`grid ${cabecalho.includes('Código') ? 'col-start-1 col-end-3' : ''} grid-rows-2 border border-black`} style={{ borderCollapse: 'collapse' }}>
                <span className="p-1">{cabecalho}</span>
                <div className="grid grid-cols-[1fr_30px] p-1 items-center">
                    <p>{conteudo == '' ? 'Não Informado' : conteudo}</p>
                    <button
                        className="flex justify-center items-center"
                        onClick={() => copiarComAviso(conteudo)}
                    >
                        <FaCopy />
                    </button>
                </div>
            </div>
        )
    }

    const mouse = jogadorAtual?.configs?.mouse;
    const crosshair = jogadorAtual?.configs?.crosshair;
    const viewmodel = jogadorAtual?.configs?.viewmodel;
    const lauchOptions = jogadorAtual?.configs?.lauchOptions;
    const video = jogadorAtual?.configs?.video;
    const advancedVideo = jogadorAtual?.configs?.advancedVideo;
    const hud = jogadorAtual?.configs?.hud;
    const radar = jogadorAtual?.configs?.radar;


    return (
        <Template estiloContainer="max-w-full" paginaClube={false}>
            <div className="w-full bg-zinc-800">
                <div className="bg-zinc-900 min-h-[80vh] relative">
                    <div className="relative z-20 p-4 text-white flex flex-col gap-4 max-w-[1200px] mx-auto">
                        <h2 className="text-2xl font-bold text-center lg:text-3xl xl:text-4xl" style={{ textShadow: '1px 1px 2px black' }}>Confira as configurações dos Pro Players de Counter Strike</h2>
                        <div className="flex flex-col w-full relative overflow-hidden rounded-[8px]">
                            <input
                                type="text"
                                placeholder="Buscar jogador, nick ou time..."
                                className="h-[35px] w-full p-2 text-white bg-zinc-700 outline-none md:h-[40px] lg:h-[45px] lg:p-3"
                                value={busca}
                                onChange={(e) => {
                                    const valor = e.target.value;
                                    setBusca(valor);

                                    const termo = valor.toLowerCase().trim();
                                    if (termo === "") {
                                        setSugestoes([]);
                                        return;
                                    }

                                    // Junta todos os jogadores de todos os times
                                    const jogadores = equipes.flatMap(time =>
                                        time.elenco.map(j => ({ ...j, nomeTime: time.time }))
                                    );

                                    const filtrados = jogadores.filter(jogador =>
                                        jogador.nome.toLowerCase().includes(termo) ||
                                        jogador.nick.toLowerCase().includes(termo) ||
                                        jogador.nomeTime.toLowerCase().includes(termo)
                                    );

                                    setSugestoes(filtrados);
                                }}
                            />
                            {sugestoes.length > 0 && (
                                <div className="bg-zinc-800 border border-zinc-700 rounded-md max-h-[300px] overflow-y-auto">
                                    {sugestoes.map((jogador, index) => (
                                        <button
                                            key={index}
                                            className="w-full text-left p-2 hover:bg-zinc-700 grid grid-cols-[40px_1fr] gap-x-2"
                                            onClick={() => {
                                                setJogadorAtual(jogador);
                                                setVisible(true);
                                                setSugestoes([]);
                                                setBusca("");
                                            }}
                                        >
                                            <div className="relative w-10 h-10">
                                                <Image alt={jogador.nome} src={jogador.imagem} fill className="object-contain" />
                                            </div>
                                            <div>
                                                <p className="text-white">{jogador.nick}</p>
                                                <p className="text-sm text-zinc-400">{jogador.nome}</p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}
                            {
                                sugestoes.length <= 0 && busca != '' && (
                                    <div className="p-2 bg-zinc-700">
                                        <h2 className="font-bold text-lg">Nenhum jogador encontrado!</h2>
                                    </div>
                                )
                            }
                            <button className="absolute top-[50%] right-0 bg-zinc-950 p-2 h-full lg:text-xl" style={{ transform: 'translate(0,-50%)' }}><PiMagnifyingGlassFill /></button>
                        </div>
                        <div className="flex flex-col gap-4">
                            {
                                equipes.map((time, i) => {
                                    const jogadores = time.elenco.filter(jogador => jogador.posicao != 'coach')
                                    return (
                                        <div key={i} className="bg-zinc-950 w-full p-2 flex flex-col gap-4 md:p-4">
                                            <div className="flex items-center gap-2 md:pt-2 md:pl-2 lg:gap-4">
                                                <div className="relative w-10 h-10 lg:w-12 lg:h-12">
                                                    <Image alt={time.time} src={time.logo} fill className="object-contain" />
                                                </div>
                                                <h2 className="text-3xl font-bold lg:text-[42px]">
                                                    {time.time}
                                                </h2>
                                            </div>
                                            <div className="overflow-x-auto w-full">
                                                <ul className="flex gap-4 w-max min-w-full items-start px-2 py-1 lg:justify-center"
                                                    style={{ WebkitOverflowScrolling: "touch" }}>
                                                    {
                                                        jogadores != null && jogadores.map((jogador, i) => {
                                                            return (
                                                                // onClick={() => setVisible(true)}
                                                                <CardJogador jogador={jogador} key={i} onclick={() => {
                                                                    setVisible(true)
                                                                    setJogadorAtual(jogador)
                                                                }} />
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                {
                    jogadorAtual && (
                        <Dialog className="dialogconfigdospro" header={nomePersonalizado(jogadorAtual)} visible={visible} style={{ width: '95%', maxWidth: '1000px' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                            <div className="flex flex-col gap-4">
                                <div className="bg-zinc-700 flex flex-col justify-center items-center p-2 gap-4 rounded-[6px] md:grid md:grid-cols-[auto_1fr_40px] md:gap-6 md:p-4">
                                    <div className="relative w-[180px] h-[180px]  bg-zinc-500 p-2 rounded-full overflow-hidden md:w-[220px] md:h-[220px]">
                                        <Image alt={jogadorAtual.nome} src={jogadorAtual.imagem} fill className="object-contain" />
                                    </div>
                                    <div className="flex flex-col gap-1 w-full">
                                        <span>Nome: {jogadorAtual.nome}</span>
                                        <span>Nick: {jogadorAtual.nick}</span>
                                        <span>Idade: {jogadorAtual.idade}</span>
                                        <span>Posição: {jogadorAtual.posicao}</span>
                                        <div className="flex items-center gap-1">
                                            <span>Nacionalidade:</span>
                                            <div className="relative w-6 h-5">
                                                <Image alt={jogadorAtual.nacionalidade.pais} src={jogadorAtual.nacionalidade.imagem} fill className="object-contain" />
                                            </div>
                                            <p>{jogadorAtual.nacionalidade.pais}</p>
                                        </div>
                                        <Link href={jogadorAtual.linkHLTV} className="text-laranja">Link HLTV</Link>
                                        <span>{jogadorAtual.descricao}</span>
                                    </div>
                                    <div className="w-full h-full">
                                        <Redes
                                            estilo="grid grid-cols-4 text-2xl md:grid-cols-1 md:grid-rows-4 md:h-full"
                                            visibilidadeLabel={false}
                                            linkTwitter="/"
                                            linkTwitch="/"
                                            linkInstagram="/"
                                            linkSteam="/"
                                        />
                                    </div>
                                </div>
                                <div className="overflow-x-auto flex flex-col gap-4">
                                    <div className="w-full p-4 flex flex-col gap-2 bg-zinc-700" style={{ textShadow: '1px 1px 2px black' }}>
                                        <h2 className="font-bold text-2xl">Mouse</h2>
                                        <div className="inline-grid grid-cols-2 border border-black">
                                            {mouse && Object.entries(mouse).map(([key, value]) => (
                                                celularTabela(key, String(value))
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-full p-4 flex flex-col gap-2 bg-zinc-700" style={{ textShadow: '1px 1px 2px black' }}>
                                        <h2 className="font-bold text-2xl">Croshair</h2>
                                        <div className="inline-grid grid-cols-2 border border-black">
                                            {crosshair && Object.entries(crosshair).map(([key, value]) => (
                                                celularTabela(key, String(value))
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-full p-4 flex flex-col gap-2 bg-zinc-700" style={{ textShadow: '1px 1px 2px black' }}>
                                        <h2 className="font-bold text-2xl">Viewmodel</h2>
                                        <div className="inline-grid grid-cols-2 border border-black">
                                            {viewmodel && Object.entries(viewmodel).map(([key, value]) => (
                                                celularTabela(key, String(value))
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-full p-4 flex flex-col gap-2 bg-zinc-700" style={{ textShadow: '1px 1px 2px black' }}>
                                        <h2 className="font-bold text-2xl">Lauch Options</h2>
                                        <div className="inline-grid grid-cols-2 border border-black">
                                            {lauchOptions && Object.entries(lauchOptions).map(([key, value]) => (
                                                celularTabela(key, String(value))
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-full p-4 flex flex-col gap-2 bg-zinc-700" style={{ textShadow: '1px 1px 2px black' }}>
                                        <h2 className="font-bold text-2xl">Vídeo</h2>
                                        <div className="inline-grid grid-cols-2 border border-black">
                                            {video && Object.entries(video).map(([key, value]) => (
                                                celularTabela(key, String(value))
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-full p-4 flex flex-col gap-2 bg-zinc-700" style={{ textShadow: '1px 1px 2px black' }}>
                                        <h2 className="font-bold text-2xl">Advanced Vídeo</h2>
                                        <div className="inline-grid grid-cols-2 border border-black">
                                            {advancedVideo && Object.entries(advancedVideo).map(([key, value]) => (
                                                celularTabela(key, String(value))
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-full p-4 flex flex-col gap-2 bg-zinc-700" style={{ textShadow: '1px 1px 2px black' }}>
                                        <h2 className="font-bold text-2xl">Hud</h2>
                                        <div className="inline-grid grid-cols-2 border border-black">
                                            {hud && Object.entries(hud).map(([key, value]) => (
                                                celularTabela(key, String(value))
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-full p-4 flex flex-col gap-2 bg-zinc-700" style={{ textShadow: '1px 1px 2px black' }}>
                                        <h2 className="font-bold text-2xl">Radar</h2>
                                        <div className="inline-grid grid-cols-2 border border-black">
                                            {radar && Object.entries(radar).map(([key, value]) => (
                                                celularTabela(key, String(value))
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Dialog>
                    )
                }
                {mostrarCaixa && <CaixaDeDialogo frase={mensagemCaixa} />}
            </div>
        </Template>
    )
}



