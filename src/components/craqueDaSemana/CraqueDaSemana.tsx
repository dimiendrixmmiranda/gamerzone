'use client'

import { Jogador } from "@/interfaces/Jogador"
import { db } from "@/lib/firebase/firebase"
import useListaCraquesDaSemana from "@/lib/hooks/useListaCraquesDaSemana"
import { getAuth } from "firebase/auth"
import { doc, updateDoc } from "firebase/firestore"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Dialog } from 'primereact/dialog';
import CardJogador from "../cardJogador/CardJogador"
import useContadorSemanal from "@/lib/hooks/useContadorSemanal"
import ListaDeCraques from "@/interfaces/ListaDeCraques"
import Link from "next/link"
import { normalizarData } from "@/lib/utils/normalizarData"

export default function CraqueDaSemana() {
    const [jogadorAtual, setJogadorAtual] = useState<Jogador | null>(null)
    const { listaCraqueDaSemana } = useListaCraquesDaSemana();
    const [craqueDaSemana, setCraquesDaSemana] = useState<ListaDeCraques | null>(null)
    const [visibleDialog, setVisibleDialog] = useState(false);
    const [usuarioAtualVotou, setUsuarioAtualVotou] = useState(false)
    const auth = getAuth();
    const user = auth.currentUser;
    // console.log(craqueDaSemana)

    const [ganhadorCraque, setGanhadorCraque] = useState<Jogador | null>(null);

    useEffect(() => {
        if (!craqueDaSemana) {
            setGanhadorCraque(null);
            return;
        }
        const vencedor = craqueDaSemana.listaDeCraquesDaSemana.reduce((max, jogador) =>
            (jogador.votos ?? 0) > (max.votos ?? 0) ? jogador : max
        );
        setGanhadorCraque(vencedor);
    }, [craqueDaSemana]);

    useEffect(() => {
        if (!listaCraqueDaSemana || listaCraqueDaSemana.length === 0) return;

        // 1. lista aberta e atual
        const aberta = listaCraqueDaSemana
            .filter(lista => lista.semanaCorrente === true && lista.encerrado === false)[0];

        if (aberta) {
            setCraquesDaSemana(aberta);
            return;
        }

        // 2. pegar a última encerrada pela data (ordem DESC)
        const encerradasOrdenadas = [...listaCraqueDaSemana]
            .filter(l => l.encerrado === true)
            .sort((a, b) => normalizarData(b.data) - normalizarData(a.data));

        if (encerradasOrdenadas.length > 0) {
            setCraquesDaSemana(encerradasOrdenadas[0]);
            return;
        }

        // 3. fallback caso não tenha nada
        setCraquesDaSemana(null);

    }, [listaCraqueDaSemana]);

    useEffect(() => {
        if (user) {
            const validacao = craqueDaSemana?.usuariosQueJaVotaram?.includes(user.uid) ?? false;
            if (validacao) {
                setUsuarioAtualVotou(true)
            } else {
                setUsuarioAtualVotou(false)
            }
        }
    }, [craqueDaSemana, auth])

    const contador = useContadorSemanal(
        craqueDaSemana?.data,
        craqueDaSemana
    );

    useEffect(() => {
        if (!craqueDaSemana) return;

        // quando o contador chegar em Encerrado
        if (contador === "Encerrado" && craqueDaSemana.semanaCorrente === true) {
            encerrarVotacao();
        }
    }, [contador, listaCraqueDaSemana]);

    async function encerrarVotacao() {
        if (!craqueDaSemana) return;

        const docRef = doc(db, "listaDeCraquesDaSemana", craqueDaSemana.id);

        await updateDoc(docRef, {
            encerrado: true,
            semanaCorrente: false
        })
    }

    async function votar() {
        if (!user) {
            alert("Você precisa estar logado para votar!");
            return;
        }

        // tenho que pegar lista da semana e armazenar em uma lista usuarios que ja votaram e depois fazer uma verificação para o voto {uid: ...., votou: true ou false}
        // lista global de votantes
        const votantes = craqueDaSemana?.usuariosQueJaVotaram ?? [];

        // 🔥 se já votou na semana → bloqueia
        if (votantes.includes(user.uid)) {
            alert("Você já votou nesta semana!");
            return;
        }

        if (!craqueDaSemana || !jogadorAtual) return;

        // Clonar lista atual
        const novaLista = [...craqueDaSemana.listaDeCraquesDaSemana];

        // Encontrar jogador
        const index = novaLista.findIndex((j) => j.nick === jogadorAtual.nick);

        if (index === -1) return;

        const jogador = novaLista[index];
        jogador.votos = jogador.votos ?? 0;
        jogador.votos += 1;

        // adiciona votante GLOBAL
        votantes.push(user.uid);

        // grava no firebase
        const docRef = doc(db, "listaDeCraquesDaSemana", craqueDaSemana.id);

        await updateDoc(docRef, {
            listaDeCraquesDaSemana: novaLista,
            usuariosQueJaVotaram: votantes
        });
        // atualiza estado local
        craqueDaSemana.listaDeCraquesDaSemana = novaLista;
        craqueDaSemana.usuariosQueJaVotaram = votantes;

        alert("Voto computado!");
    }

    const votosArray = craqueDaSemana?.listaDeCraquesDaSemana.map(j => j.votos ?? 0) ?? [0];
    const maxVotos = Math.max(...votosArray, 1);

    return (
        <div className="bg-zinc-900 text-white m-2 p-4 mb-6 h-[430px] lg:h-[450px] xl:h-[420px]">
            <div className={`${usuarioAtualVotou ? 'hidden' : 'flex'} ${craqueDaSemana?.encerrado ? 'hidden' : 'flex'} flex-col gap-4`}>
                <div className="flex flex-col gap-4 items-center xl:flex-row xl:justify-around">
                    <h2 className="text-3xl font-bold text-center lg:text-5xl" style={{ textShadow: '1px 1px 2px black' }}>Vote no Craque da Semana</h2>
                    <span className="text-xl text-center lg:text-3xl">Votação encerra em {contador}</span>
                </div>
                <div className="overflow-x-auto scrollbar-none snap-x snap-mandatory">
                    <ul className="flex gap-4 w-max min-w-full items-start px-2 py-1 lg:justify-center"
                        style={{ WebkitOverflowScrolling: "touch" }}>
                        {
                            craqueDaSemana?.listaDeCraquesDaSemana.map((jogador, i) => {
                                return (
                                    <CardJogador key={i} jogador={jogador} jogadorAtual={jogadorAtual} setJogadorAtual={setJogadorAtual} />
                                )
                            })
                        }
                    </ul>
                </div>
                <button
                    className={`flex justify-center items-center w-full text-center py-1 text-2xl font-bold bg-laranja transition-all duration-500 ${jogadorAtual === null ? 'opacity-60' : 'opacity-100'}`}
                    style={{ textShadow: '1px 1px 2px black' }}
                    onClick={votar}
                    disabled={!jogadorAtual}
                >
                    Votar!
                </button>
            </div>
            <div className={`${usuarioAtualVotou ? 'flex' : 'hidden'} ${craqueDaSemana?.encerrado ? 'hidden' : 'flex'} flex-col gap-4`}>
                <div className="flex flex-col gap-2 items-center xl:flex-row xl:justify-around">
                    <h2 className="text-3xl font-bold text-center lg:text-5xl" style={{ textShadow: '1px 1px 2px black' }}>Acompanhe os resultados:</h2>
                    <span className="text-xl text-center lg:text-3xl">Votação encerra em {contador}</span>
                    <div className="md:hidden">
                        <p>Estatísticas</p>
                    </div>
                </div>
                <div className="overflow-x-auto scrollbar-none snap-x snap-mandatory">
                    <ul className="flex gap-4 w-max min-w-full items-start px-2 py-1 justify-center"
                        style={{ WebkitOverflowScrolling: "touch" }}>
                        {
                            craqueDaSemana?.listaDeCraquesDaSemana.map((jogador, i) => {
                                return (
                                    <li key={i} className={`group relative flex flex-shrink-0 w-[170px] h-[210px] overflow-hidden sm:w-[200px] sm:h-[250px] xl:w-[210px] xl:h-[270px]`}>
                                        <div className="grid grid-rows-[1fr_35px] w-full h-full">
                                            <div className="relative w-full h-full bg-zinc-800">
                                                <Image alt={jogador.nome} src={jogador.imagem} fill className="object-cover" />
                                            </div>
                                            <div className="w-full h-full bg-zinc-950 text-white flex justify-center items-center font-bold">
                                                <h2>{jogador.nick}</h2>
                                            </div>
                                        </div>
                                        {
                                            jogador.votos != undefined && (
                                                <div
                                                    className={`relative h-full p-2 flex items-end bg-zinc-400`}
                                                >
                                                    <div
                                                        className="absolute bottom-0 left-0 w-full bg-laranja transition-all duration-500"
                                                        style={{
                                                            height: `${((jogador.votos ?? 0) / maxVotos) * 100}%`
                                                        }}
                                                    />
                                                    <p className="font-bold z-20" style={{ textShadow: '1px 1px 2px black' }}>{jogador.votos}</p>
                                                </div>
                                            )
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="hidden md:flex justify-center">
                    <button onClick={() => setVisibleDialog(true)} className="text-xl font-bold text-center w-full transition-all duration-300 py-1 hover:bg-laranja" style={{ textShadow: '1px 1px 2px black' }}>Confira as Todas as Estatísticas do Craque da Galera</button>
                </div>
            </div>
            <div className={`${craqueDaSemana?.encerrado ? 'flex' : 'hidden'} flex-col justify-center gap-4`}>
                <h2 className="text-center uppercase font-bold text-2xl">O ganhador do craque da semana é:</h2>
                {
                    ganhadorCraque &&
                    <div className="flex flex-col md:grid md:grid-cols-2 md:max-w-[500px] md:w-full md:mx-auto">
                        <div className="w-full flex flex-col justify-center items-center">
                            <div className="relative w-[220px] h-[250px]">
                                <Image alt={ganhadorCraque.nome} src={ganhadorCraque.imagem} fill className="object-contain" />
                            </div>
                            <div className="flex flex-col justify-center items-center text-center">
                                <h2 className="font-bold text-2xl">{ganhadorCraque.nick}</h2>
                                <h3 className="font-semibold text-lg">{ganhadorCraque.nome}</h3>
                            </div>

                        </div>
                        <div className="flex-col hidden md:flex bg-laranja p-4" style={{textShadow: '1px 1px 2px black'}}>
                            <span className="text-xl">Idade: {ganhadorCraque.idade}</span>
                            <div className="flex items-center gap-2">
                                <span className="text-xl">Nacionalidade:</span>
                                <div className="relative w-8 h-6">
                                    <Image alt={ganhadorCraque.nacionalidade.pais} src={ganhadorCraque.nacionalidade.imagem} fill className="object-contain" />
                                </div>
                            </div>
                            <span className="text-xl">Posição: {ganhadorCraque.posicao}</span>
                            <Link className="text-xl bg-azul-escuro p-1 text-center mt-auto" href={ganhadorCraque.linkHLTV}>Link hltv</Link>
                        </div>
                    </div>
                }
            </div>
            <div className="card flex justify-content-center">
                <Dialog header="Estatísticas do Craque da Galera" className="w-full max-w-[95%]" visible={visibleDialog} onHide={() => { if (!visibleDialog) return; setVisibleDialog(false); }}>
                    <div className="text-black md:grid md:grid-cols-2 md:gap-4">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl font-black">Lista de ganhadores:</h2>
                            <ul>
                                <li className="flex items-center gap-2">
                                    <p>Semana 01/12/25 à 06/12/25:</p>
                                    <span>noway</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <p>Semana 24/11/25 à 29/11/25:</p>
                                    <span>molodoy</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <p>Semana 17/11/25 à 22/11/25:</p>
                                    <span>noway</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2 justify-center items-center">
                            <h2 className="text-2xl font-black">Maior ganhador:</h2>
                            <div className="bg-zinc-700 w-fit">
                                <div className="relative w-[170px] h-[200px]">
                                    <Image alt="noway" src={'/noway.webp'} fill className="object-cover" />
                                </div>
                                <div className="bg-zinc-950 text-white flex justify-center items-center py-1">
                                    <h3>noway</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </div>
        </div>
    )
}