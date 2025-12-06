/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React, { useEffect, useState } from "react";
import {
    DndContext,
    DragOverlay,
    PointerSensor,
    TouchSensor,
    useSensor,
    useSensors,
    useDraggable,
    useDroppable,
} from "@dnd-kit/core";
import { listaDeTimes } from "@/constants/listaDeTimes";
import Time from "@/interfaces/Time";
import Image from "next/image";

export default function RankingORGComunidadeSingleFile() {
    const [contador,] = useState<string>("23:12:18");

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor, {
            activationConstraint: {
                delay: 150,   // segurou 150ms
                tolerance: 5, // pode mexer 5px antes de ativar
            },
        })
    );

    const [teams, setTeams] = useState<Time[]>([]);
    useEffect(() => {
        setTeams(listaDeTimes.slice(0, 10))
    }, [])

    const [ranking, setRanking] = useState<(Time | null)[]>(
        Array(10).fill(null)
    );

    const [dragging, setDragging] = useState<Time | null>(null);

    function handleDragStart(e: any) {
        const id = String(e.active.id);
        const item = teams.find((t) => t.id === id) || ranking.find((t) => t?.id === id);
        setDragging(item ?? null);
    }

    function handleDragEnd(e: any) {
        const { active, over } = e;
        if (!over) {
            setDragging(null);
            return;
        }

        const sourceId = String(active.id);
        const overId = String(over.id); // ex: "slot-2"
        if (!overId.startsWith("slot-")) {
            setDragging(null);
            return;
        }
        const slotIndex = Number(overId.replace("slot-", ""));

        // evita duplicar
        if (ranking.some((t) => t?.id === sourceId)) {
            setDragging(null);
            return;
        }

        const droppedTeam = teams.find((t) => t.id === sourceId) || ranking.find((t) => t?.id === sourceId);
        if (!droppedTeam) {
            setDragging(null);
            return;
        }

        const newRanking = [...ranking];
        newRanking[slotIndex] = droppedTeam;

        setRanking(newRanking);
        setTeams((prev) => prev.filter((t) => t.id !== droppedTeam.id));
        setDragging(null);
    }

    function removeFromRanking(id: string) {
        setRanking((prev) => prev.map((s) => (s?.id === id ? null : s)));

        setTeams((prev) => {
            // pega o time completo do ranking (antes da remoção visual)
            const removedTeam = ranking.find((t) => t?.id === id);

            if (!removedTeam) return prev; // fail-safe

            // evita duplicar
            if (prev.some((t) => t.id === id)) return prev;

            return [removedTeam, ...prev];
        });

        setDragging(null);
    }


    // helper para pegar o nome do time a partir do ranking atual ou do passado (melhora UX)
    // function getNameFromRanking(id: string) {
    //     const foundInRanking = ranking.find((t) => t?.id === id);
    //     if (foundInRanking) return foundInRanking.time;
    //     se não achar (caso raro), tenta procurar nos teams (antes da remoção)
    //     const foundInTeams = teams.find((t) => t.id === id);
    //     if (foundInTeams) return foundInTeams.time;
    //     fallback
    //     return id;
    // }

    return (
        <div className="hidden xl:block">
            <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
                <div className="flex flex-col bg-zinc-900 m-2 p-4 gap-4">
                    <div className="flex flex-col gap-4 items-center xl:flex-row xl:justify-around text-white">
                        <h2 className="font-bold  text-4xl text-center" style={{ textShadow: '1px 1px 2px black' }}>Vote no Ranking da Comunidade!</h2>
                        <span className="text-xl text-center lg:text-3xl">Votação encerra em {contador}</span>
                    </div>
                    <div className="w-full grid grid-cols-2">
                        <TimesPanel teams={teams} />
                        <RankingPanel ranking={ranking} removeFromRanking={removeFromRanking} />
                    </div>
                    <div className="flex justify-center items-center w-full px-4">
                        <button className="text-2xl font-bold bg-laranja w-full py-2 text-white">Votar!</button>
                    </div>
                </div>

                <DragOverlay>
                    {dragging ? (
                        <div className="flex items-center gap-2 bg-zinc-300 p-4">
                            <div className="w-8 h-8 relative">
                                <Image alt={dragging.time} src={dragging.logo} fill className="object-cover" />
                            </div>
                            <span className="text-lg font-bold line-clamp-1" style={{ textShadow: '1xp 1px 2px black' }}>{dragging.time}</span>
                        </div>
                    ) : null}
                </DragOverlay>
            </DndContext>
        </div>
    );
}

/* ---------------- TimesPanel ---------------- */
function TimesPanel({ teams }: { teams: Time[] }) {
    return (
        <div className="p-4 bg-zinc-900 text-white flex flex-col gap-3">
            <h3 className="font-bold text-xl">Times disponíveis</h3>
            <div className="grid grid-cols-2 gap-3 mt-auto mb-[1px]">
                {teams.map((team) => (
                    <DraggableTeamSmall key={team.id} team={team} />
                ))}
            </div>
        </div>
    );
}

/* ---------------- RankingPanel ---------------- */
function RankingPanel({
    ranking,
    removeFromRanking,
}: {
    ranking: (Time | null)[];
    removeFromRanking: (id: string) => void;
}) {
    return (
        <div className="p-4 bg-zinc-900 text-white flex flex-col gap-3">
            <h3 className="font-bold mb-3">Ranking (clique no ✕ para remover)</h3>
            <div className="grid grid-cols-2 gap-2">
                {ranking.map((slot, idx) => (
                    <RankingSlot key={idx} slot={slot} index={idx} removeFromRanking={removeFromRanking} />
                ))}
            </div>
        </div>
    );
}

function DraggableTeamSmall({ team }: { team: Time }) {
    const { attributes, listeners, setNodeRef } = useDraggable({ id: team.id });
    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            className="bg-zinc-500 p-3 cursor-grab text-center select-none"
            role="button"
        >
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 relative">
                    <Image alt={team.time} src={team.logo} fill className="object-cover" />
                </div>
                <span className="text-lg font-bold line-clamp-1" style={{ textShadow: '1xp 1px 2px black' }}>{team.time}</span>
            </div>
        </div>
    );
}

function RankingSlot({ slot, index, removeFromRanking }: { slot: Time | null; index: number; removeFromRanking: (id: string) => void; }) {
    const { setNodeRef } = useDroppable({ id: `slot-${index}` });

    return (
        <div ref={setNodeRef} className="relative border border-zinc-600 p-3 min-h-[60px] flex items-center overflow-hidden">
            {slot ? (
                <div className="w-full flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 relative">
                            <Image alt={slot.time} src={slot.logo} fill className="object-cover" />
                        </div>
                        <span className="text-lg font-bold line-clamp-1" style={{ textShadow: '1xp 1px 2px black' }}>{slot.time}</span>
                    </div>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            removeFromRanking(slot.id);
                        }}
                        className="ml-2 text-sm px-2 py-1 bg-red-600 hover:bg-red-700"
                        aria-label={`Remover ${slot.time}`}
                    >
                        ✕
                    </button>
                </div>
            ) : (
                <div>
                    <span className="text-white text-xl">{index + 1}º</span>
                    <div className="h-[70px] w-1 absolute -top-2 left-12 border-2 border-zinc-600 rotate-[10deg]"></div>
                </div>
            )}
        </div>
    );
}
