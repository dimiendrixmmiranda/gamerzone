'use client'

import Jogos from "@/components/jogos/Jogos";
import Noticias from "@/components/noticias/Noticias";
import CarrosselMobile from "@/components/slider/CarrosselMobile";
import CarrosselWeb from "@/components/slider/CarrosselWeb";
import Template from "@/components/template/Template";
import { listaDeTimes } from "@/constants/listaDeTimes";
import Noticia from "@/interfaces/Noticia";
import Time from "@/interfaces/Time";
import useNoticias from "@/lib/hooks/useNoticias";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const { noticias } = useNoticias();
    const params = useParams();
    const slug = params.slug;
    const [noticiasTime, setNoticiasTime] = useState<Noticia[]>([])
    const [time, setTime] = useState<Time | null>(null)

    useEffect(() => {
        const timeSelecionado = listaDeTimes.filter(time => time.id === slug)[0]
        setTime(timeSelecionado)
    }, [listaDeTimes])

    useEffect(() => {
        if (!slug) return;

        const noticiasFiltradas = noticias
            .filter(noticia =>
                noticia.timesEnvolvidos.some(time =>
                    time.id === slug
                )
            )
            .map(noticia => ({
                ...noticia,
                tipo: "noticia"
            }))
        setNoticiasTime(noticiasFiltradas);
    }, [noticias]);

    console.log(noticiasTime)

    return (
        <Template paginaClube={true}>
            <CarrosselMobile noticias={noticiasTime} />
            <CarrosselWeb noticias={noticiasTime} />
            <div className="p-4">
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl text-center font-bold md:text-4xl">Elenco Atual</h2>
                    <div className="overflow-x-auto w-full">
                        <ul className="flex gap-4 w-max min-w-full items-start px-2 py-1 lg:justify-center"
                            style={{ WebkitOverflowScrolling: "touch" }}>
                            {
                                time != null && time.elenco.map((jogador, i) => {
                                    return (
                                        <li key={i} className="group relative flex-shrink-0 w-[130px] h-[170px] sm:w-[150px] sm:h-[200px] lg:w-[170px] lg:h-[220px] xl:w-[200px] xl:h-[250px] overflow-hidden">

                                            {/* CARD PRINCIPAL */}
                                            <div className="grid grid-rows-[1fr_35px] w-full h-full">
                                                <div className="relative w-full h-full bg-zinc-800">
                                                    <Image alt={jogador.nome} src={jogador.imagem} fill className="object-cover" />
                                                </div>
                                                <div className="w-full h-full bg-zinc-950 text-white flex justify-center items-center font-bold">
                                                    <h2>{jogador.nick}</h2>
                                                </div>
                                            </div>

                                            {/* INFO QUE SOBE NO HOVER */}
                                            <div className="
                                                absolute bottom-[-120%] left-0 
                                                w-full h-full bg-black text-white p-4 text-sm flex flex-col gap-2
                                                transition-all duration-700 ease-in-out
                                                group-hover:bottom-0 opacity-90
                                            ">
                                                <p>Nome: {jogador.nome}</p>
                                                <p>Nick: {jogador.nick}</p>
                                                <p>Idade: {jogador.idade}</p>
                                                <div className="flex items-center gap-1">
                                                    País: <div className="relative w-5 h-4"><Image alt="nacionalidade" src={jogador.nacionalidade.imagem} fill className="object-contain" /></div> {jogador.nacionalidade.pais}
                                                </div>
                                            </div>

                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="mt-4 xl:grid xl:grid-cols-3 xl:grid-rows-[auto_auto_1fr] xl:gap-4 xl:gap-y-8">
                    <Noticias
                        noticias={noticiasTime}
                        filtroPorJogo={true}
                        noticiasPorPagina={8}
                    />
                    <div className="md:grid md:grid-cols-2 md:gap-4 md:mx-4 xl:flex xl:flex-col xl:mx-0">
                        <Jogos />
                    </div>
                </div>
            </div>

        </Template >
    )
}