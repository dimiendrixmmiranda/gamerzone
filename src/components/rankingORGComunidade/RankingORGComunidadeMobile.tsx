"use client";

import { listaDeTimes } from "@/constants/listaDeTimes";
import Time from "@/interfaces/Time";
import { db } from "@/lib/firebase/firebase";
import useContadorSemanal from "@/lib/hooks/useContadorSemanal";
import useListaTimesDaRodada from "@/lib/hooks/useListaTimesDaRodada";
import { getAuth } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function RankingORGComunidadeMobile() {
    const { listaDeTimesDaRodada } = useListaTimesDaRodada()
    const [timesDaRodada, setTimesDaRodada] = useState<Time[]>([])
    const [ranking, setRanking] = useState<Time[]>([]);
    const auth = getAuth();
    const user = auth.currentUser;
    const [usuarioAtualVotou, setUsuarioAtualVotou] = useState(false)

    const contador = useContadorSemanal(
        listaDeTimesDaRodada?.data, 
        listaDeTimesDaRodada
    )
    
    useEffect(() => {
        if (user) {
            const validacao = listaDeTimesDaRodada?.usuariosQueJaVotaram.includes(user.uid)
            if (validacao) {
                setUsuarioAtualVotou(true)
            } else {
                setUsuarioAtualVotou(false)
            }
        }
    }, [listaDeTimesDaRodada, auth])

    useEffect(() => {
        if (listaDeTimesDaRodada) {
            setTimesDaRodada(listaDeTimesDaRodada.listaDeTimesDaRodada)
        }
    }, [listaDeTimesDaRodada]);


    async function votar() {
        if (!user) {
            alert("Você precisa estar logado para votar!");
            return;
        }

        if (listaDeTimesDaRodada != null) {

            const docRef = doc(db, "listaDeTimesDaRodada", String(listaDeTimesDaRodada.id));
            const snap = await getDoc(docRef);

            const votantes = listaDeTimesDaRodada.usuariosQueJaVotaram ?? [];

            if (votantes.includes(user.uid)) {
                alert("Você já votou!");
                return;
            }

            const novaLista = [...listaDeTimesDaRodada.listaDeTimesDaRodada];

            ranking.forEach((slot, idx) => {
                if (!slot) return;
                const index = novaLista.findIndex(t => t.id === slot.id);
                if (index === -1) return;

                novaLista[index].votos = (novaLista[index].votos ?? 0) + (10 - idx);
            });

            votantes.push(user.uid);

            const payload = {
                listaDeTimesDaRodada: novaLista,
                usuariosQueJaVotaram: votantes
            };

            if (!snap.exists()) {
                await setDoc(docRef, payload);
            } else {
                await updateDoc(docRef, payload);
            }

            alert("Voto computado!");
        }
    }


    function handleAdd(time: Time) {
        // impede mais de 10 posições
        if (ranking.length >= 10) return;

        // impede duplicado
        if (ranking.includes(time)) return;

        setRanking(prev => [...prev, time]);
    }

    function handleReset() {
        setRanking([]);
    }

    const votosArray = timesDaRodada.map(j => j.votos ?? 0) ?? [0];
    const maxVotos = Math.max(...votosArray, 1);

    return (
        <div className="bg-zinc-800 m-2 p-4 text-white flex flex-col gap-4 xl:hidden">
            <div className={`${usuarioAtualVotou ? 'hidden' : 'flex'} flex-col gap-4`}>
                <div className="flex flex-col gap-4 items-center xl:flex-row xl:justify-around text-white">
                    <h2 className="font-bold text-3xl text-center" style={{ textShadow: '1px 1px 2px black' }}>Vote no Ranking da Comunidade!</h2>
                    <span className="text-xl text-center lg:text-3xl">Votação encerra em {contador}</span>
                </div>

                {/* LISTA DE TIMES */}
                <div className="grid grid-cols-2 gap-2">
                    {timesDaRodada.map((time) => {
                        const jaEscolhido = ranking.includes(time);

                        return (
                            <button
                                key={time.id}
                                onClick={() => handleAdd(time)}
                                disabled={jaEscolhido}
                                className={`
                                bg-zinc-800 p-3 rounded-xl border border-zinc-700 active:scale-95 transition
                                ${jaEscolhido ? "opacity-50 cursor-not-allowed" : ""}
                            `}
                            >
                                <div className="flex items-center gap-2">
                                    <div className="relative w-6 h-6 md:h-8 md:w-8">
                                        <Image alt={`logo do time ${time.time}`} src={time.logo} fill className="object-cover" />
                                    </div>
                                    <p className="leading-5 font-bold md:text-xl">{time.time}</p>
                                </div>
                            </button>
                        );
                    })}

                </div>

                {/* RANK MONTADO */}
                <div className="flex flex-col gap-4">

                    {ranking.length === 0 && (
                        <p className="text-zinc-400 p-4 bg-zinc-800 rounded-xl">Clique nos times para montar o ranking (do 1º ao 10º).</p>
                    )}

                    {ranking.map((time, index) => (
                        <div className="relative flex items-center gap-8 overflow-hidden p-4 bg-zinc-800 rounded-xl" key={index}>
                            <div>
                                <span className="text-white text-xl">{index + 1}º</span>
                                <div className="h-[70px] w-1 absolute -top-2 left-12 border-2 border-zinc-600 rotate-[10deg]"></div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="relative w-6 h-6 md:h-8 md:w-8">
                                    <Image alt={`logo do time ${time.time}`} src={time.logo} fill className="object-cover" />
                                </div>
                                <p className="leading-5 font-bold md:text-3xl">{time.time}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* BOTÃO RESET */}
                {ranking.length > 0 && (
                    <button
                        onClick={handleReset}
                        className="bg-red-600 w-full py-2 mt-4 font-bold active:scale-95 transition rounded-xl"
                    >
                        Resetar Ranking
                    </button>
                )}

                <div className="flex justify-center items-center w-full">
                    <button
                        onClick={votar}
                        className="text-2xl font-bold bg-laranja w-full py-2 text-white"
                    >
                        Votar!
                    </button>
                </div>
            </div>
            <div className={`${usuarioAtualVotou ? 'flex' : 'hidden'} flex-col gap-4`}>
                <div className="flex flex-col gap-4 items-center xl:flex-row xl:justify-around text-white">
                    <h2 className="font-bold text-3xl text-center" style={{ textShadow: '1px 1px 2px black' }}>Vote no Ranking da Comunidade!</h2>
                    <span className="text-xl text-center lg:text-3xl">Votação encerra em {contador}</span>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <h3 className="text-center">Obrigado pelo seu voto! Acompanhe o resultado parcial das votações:</h3>
                    <div className="w-full">
                        <ul className="grid grid-cols-2 gap-4 w-full">
                            {
                                timesDaRodada.map((time, i) => {
                                    return (
                                        <li key={i} className="flex gap-2 items-center">
                                            <div className="relative w-7 h-7 md:w-10 md:h-10">
                                                <Image alt={time.time} src={time.logo} fill className="object-contain" />
                                            </div>
                                            {
                                                time.votos != undefined && (
                                                    <div
                                                        className={`relative h-2 w-full p-2 flex items-end bg-zinc-400 md:h-6`}
                                                    >
                                                        <div
                                                            className="absolute bottom-0 left-0 h-full bg-laranja transition-all duration-500"
                                                            style={{
                                                                width: `${((time.votos ?? 0) / maxVotos) * 100}%`
                                                            }}
                                                        />
                                                        <p className="font-bold z-20 text-sm absolute -top-[2px] left-1 md:top-0" style={{ textShadow: '1px 1px 2px black' }}>{time.votos}</p>
                                                    </div>
                                                )
                                            }
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
