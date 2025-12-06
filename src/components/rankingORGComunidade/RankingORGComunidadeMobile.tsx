"use client";

import { listaDeTimes } from "@/constants/listaDeTimes";
import Time from "@/interfaces/Time";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function RankingORGComunidadeMobile() {
    const [ranking, setRanking] = useState<Time[]>([]);
    const [contador, ] = useState<string>("23:12:18");
    const [teams, setTeams] = useState<Time[]>([]);

    useEffect(() => {
        setTeams(listaDeTimes.slice(0, 10))
    }, [])

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

    return (
        <div className="bg-zinc-900 m-2 p-4 text-white flex flex-col gap-4 xl:hidden">

            <div className="flex flex-col gap-4 items-center xl:flex-row xl:justify-around text-white">
                <h2 className="font-bold text-3xl text-center" style={{ textShadow: '1px 1px 2px black' }}>Vote no Ranking da Comunidade!</h2>
                <span className="text-xl text-center lg:text-3xl">Votação encerra em {contador}</span>
            </div>

            {/* LISTA DE TIMES */}
            <div className="grid grid-cols-2 gap-2">
                {teams.map((time) => {
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
            <div className="bg-zinc-800 rounded-xl p-4 flex flex-col gap-4">

                {ranking.length === 0 && (
                    <p className="text-zinc-400">Clique nos times para montar o ranking (do 1º ao 10º).</p>
                )}

                {ranking.map((time, index) => (
                    <div className="flex items-center gap-2 md:gap-4" key={index}>
                        <span className="text-2xl md:text-3xl">{index + 1}º</span>
                        <div className="relative w-6 h-6 md:h-8 md:w-8">
                            <Image alt={`logo do time ${time.time}`} src={time.logo} fill className="object-cover" />
                        </div>
                        <p className="leading-5 font-bold md:text-3xl">{time.time}</p>
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
                <button className="text-2xl font-bold bg-laranja w-full py-2 text-white">Votar!</button>
            </div>
        </div>
    );
}
