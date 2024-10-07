'use client';

import BotaoAncora from "components/botaoAncora/BotaoAncora";
import Pagina from "components/template/Pagina";
import { listaDeJogadores } from "core";
import Jogador from "core/jogadores/jogadores";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoCopy } from "react-icons/io5";
import { FaArrowLeft, FaArrowUp } from "react-icons/fa";

export default function Page() {
    const [jogador, setJogador] = useState<Jogador | null>(null);
    const [copiado, setCopiado] = useState<string | null>(null); // Estado que indica qual item foi copiado

    const copiar = async (item: string, tipo: string) => {
        try {
            await navigator.clipboard.writeText(item);
            setCopiado(tipo); // Identifica qual item foi copiado
            setTimeout(() => setCopiado(null), 2000); // Remove feedback após 2 segundos
        } catch (err) {
            console.error("Erro ao copiar para a área de transferência: ", err);
        }
    };

    return (
        <Pagina>
            <div className="min-h-[100vh] bg-[--preto-skins]">
                <div className="max-w-[95%] mx-auto flex flex-col gap-5 py-4">
                    <h2 className="font-black uppercase text-lg text-center leading-6 md:text-2xl lg:text-3xl">
                        Configurações dos principais jogadores de CS2 da Atualidade!
                    </h2>
                    <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {listaDeJogadores.map(jogador => {
                            return (
                                <li key={jogador.id} className="w-full h-[200px] bg-black max-w-[190px] 
                                justify-self-center flex flex-col hover:scale-[1.05] transition-all md:max-w-[230px] md:h-[270px]" onClick={() => setJogador(jogador)}>
                                    <Link href={'#informacoes'} className="flex flex-col w-full h-full">
                                        <div className="relative w-full h-[80%]">
                                            <Image src={jogador.imagem} alt={jogador.nome} fill className="object-cover" />
                                        </div>
                                        <div className="flex flex-col justify-center items-center my-auto gap-[2px]">
                                            <h2 className="leading-4 text-xl font-bold">{jogador.nick}</h2>
                                            <h4 className="leading-4 text-sm font-medium">{jogador.posicao}</h4>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>

                    {jogador && (
                        <div className="w-full bg-zinc-900 cfgproJogador" id="informacoes">
                            <div className="relative w-full h-[300px] max-w-[320px] mx-auto md:h-[210px] lg:max-w-full lg:h-[340px] xl:h-[240px]">
                                <Image src={jogador?.imagem} alt={jogador?.nome} fill className="object-cover" />
                            </div>
                            <div className="bg-zinc-700 p-2">
                                <h3 className="uppercase text-xl font-bold">Mouse:</h3>
                                <ul>
                                    <li className="flex gap-1">
                                        <p>Modelo:</p>
                                        <p>{jogador.mouse.modelo}</p>
                                    </li>
                                    <li className="flex gap-1">
                                        <p>Dpi:</p>
                                        <p>{jogador.mouse.dpi}</p>
                                    </li>
                                    <li className="flex gap-1">
                                        <p>Sensibilidade:</p>
                                        <p>{jogador.mouse.Sensitivity}</p>
                                    </li>
                                    <li className="flex gap-1">
                                        <p>Sensibilidade do Zoom:</p>
                                        <p>{jogador.mouse.Zoom_Sensitivity}</p>
                                    </li>
                                    <li className="flex gap-1">
                                        <p>Sensibilidade do Windows:</p>
                                        <p>{jogador.mouse.Windows_Sensitivity}</p>
                                    </li>
                                    <li className="flex gap-1">
                                        <p>eDPI:</p>
                                        <p>{jogador.mouse.eDPI}</p>
                                    </li>
                                    <li className="flex gap-1">
                                        <p>HZ:</p>
                                        <p>{jogador.mouse.hz}</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-zinc-700 p-2">
                                <h3 className="uppercase text-xl font-bold">Mira</h3>
                                <div>
                                    <p>{jogador.mira}</p>
                                    <button
                                        className="flex bg-[--azul] w-full justify-center items-center gap-2 py-1 uppercase font-bold"
                                        onClick={() => copiar(jogador.mira, 'mira')}
                                    >
                                        {copiado === 'mira' ? "Copiado!" : "Copiar"} <IoCopy />
                                    </button>
                                </div>
                            </div>
                            <div className="bg-zinc-700 p-2">
                                <h3 className="uppercase text-xl font-bold">Viewmodel</h3>
                                <ul>
                                    <li className="flex gap-1">
                                        <p>FOV:</p>
                                        <p>{jogador.viewmodel.fov}</p>
                                    </li>
                                    <li className="flex gap-1">
                                        <p>Offset x:</p>
                                        <p>{jogador.viewmodel.offsetX}</p>
                                    </li>
                                    <li className="flex gap-1">
                                        <p>Offset y:</p>
                                        <p>{jogador.viewmodel.offsetY}</p>
                                    </li>
                                    <li className="flex gap-1">
                                        <p>Offset z:</p>
                                        <p>{jogador.viewmodel.offsetZ}</p>
                                    </li>
                                    <li className="flex gap-1">
                                        <p>Presetpos:</p>
                                        <p>{jogador.viewmodel.presetpos}</p>
                                    </li>
                                    <li className="flex gap-1">
                                        <button
                                            className="flex bg-[--azul] w-full justify-center items-center gap-2 py-1 uppercase font-bold"
                                            onClick={() => copiar(jogador.viewmodel.codigo, 'viewmodel')}
                                        >
                                            {copiado === 'viewmodel' ? "Copiado!" : "Copiar"} <IoCopy />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-zinc-700 p-2">
                                <h3 className="uppercase text-xl font-bold">Configurações de Vídeo Avançado</h3>
                                <ul>
                                    <li className="flex gap-1">
                                        <p>Resolução:</p>
                                        <p>{jogador.video.resolucao}</p>
                                    </li>
                                    <li className="flex gap-1">
                                        <p>Brilho:</p>
                                        <p>{jogador.video.Brightness}</p>
                                    </li>
                                    <li className="flex gap-1">
                                        <p>Modo de Exibicao:</p>
                                        <p>{jogador.video.Display_Mode}</p>
                                    </li>
                                    <li className="flex gap-1">
                                        <p>Proporção da Tela:</p>
                                        <p>{jogador.video.aspectRatio}</p>
                                    </li>
                                    <li className="flex gap-1">
                                        <p>Modo de escala:</p>
                                        <p>{jogador.video.scalingMode}</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-zinc-700 p-2">
                                <h2 className="uppercase text-xl font-bold">Configurações de Video Avançadas:</h2>
                                <ul>
                                    <li className="flex gap-1">
                                        <p>Aumentar Contraste do Jogador:</p>
                                        <p>{jogador.videoAvancado.Boost_Player_Contrast}</p>
                                    </li>
                                    <li className="flex gap-1">
                                        <p>V-Sync:</p>
                                        <p>{jogador.videoAvancado.V_Sync}</p>
                                    </li>
                                    <li className="flex gap-1">
                                        <p>NVIDIA Reflex Low Latency:</p>
                                        <p>{jogador.videoAvancado.NVIDIA_Reflex_Low_Latency}</p>
                                    </li>
                                    <li className="flex gap-1">
                                        <p>NVIDIA G-Sync:</p>
                                        <p>{jogador.videoAvancado.NVIDIA_G_Sync}</p>
                                    </li>
                                    <li className="flex gap-1">
                                        <p>FPS Máximo:</p>
                                        <p>{jogador.videoAvancado.Maximum_FPS_In_Game}</p>
                                    </li>
                                    <li className="flex gap-1">
                                        <p>Modo Anti-Aliasing de Multiamostragem:</p>
                                        <p>{jogador.videoAvancado.Multisampling_Anti_Aliasing_Mode}</p>
                                    </li>
                                    <li className="flex gap-1">
                                        <p>Qualidade de Sombra:</p>
                                        <p>{jogador.videoAvancado.Global_Shadow_Quality}</p>
                                    </li>
                                    <li className="flex gap-1">
                                        <p>Detalhe de Textura do Modelo:</p>
                                        <p>{jogador.videoAvancado.Model_Texture_Detail}</p>
                                    </li>
                                    <li className="flex gap-1">
                                        <p>Modo de filtragem da Textura:</p>
                                        <p>{jogador.videoAvancado.Texture_Filtering_Mode}</p>
                                    </li>
                                    <li className="flex gap-1">
                                        <p>Detalhes do Shader:</p>
                                        <p>{jogador.videoAvancado.Shader_Detail}</p>
                                    </li>
                                    <li className="flex gap-1">
                                        <p>Detalhes da partícula:</p>
                                        <p>{jogador.videoAvancado.Particle_Detail}</p>
                                    </li>
                                    <li className="flex gap-1">
                                        <p>Oclusão Ambiente:</p>
                                        <p>{jogador.videoAvancado.Ambient_Occlusion}</p>
                                    </li>
                                    <li className="flex gap-1">
                                        <p>High Dynamic Range:</p>
                                        <p>{jogador.videoAvancado.High_Dynamic_Range}</p>
                                    </li>
                                    <li className="flex gap-1">
                                        <p>FidelityFX Super Resolution:</p>
                                        <p>{jogador.videoAvancado.FidelityFX_Super_Resolution}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                    <div className='flex justify-around md:justify-end md:gap-4 xl:mr-4'>
                        <BotaoAncora href='/' icone={<FaArrowLeft />} texto='Voltar'></BotaoAncora>
                        <BotaoAncora href='#topo' icone={<FaArrowUp />} texto='Voltar Ao topo'></BotaoAncora>
                    </div>
                </div>
            </div>
        </Pagina>
    );
}
