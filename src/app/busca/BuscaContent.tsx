'use client'
import Botao from "@/components/botao/Botao";
import CardJogador from "@/components/cardJogador/CardJogador";
import CardNoticia from "@/components/cardNoticia/CardNoticia";
import Template from "@/components/template/Template";
import { listaDeTimes } from "@/constants/listaDeTimes";
import { Jogador } from "@/interfaces/Jogador";
import Noticia from "@/interfaces/Noticia";
import Time from "@/interfaces/Time";
import useNoticias from "@/lib/hooks/useNoticias";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

export default function Page() {
    const searchParams = useSearchParams();
    const q = searchParams.get("q") ?? ""; // garante string
    const { noticias } = useNoticias();

    const [noticiasFiltradas, setNoticiasFiltradas] = useState<Noticia[]>([]);
    const [times, setTimes] = useState<Time[]>([])
    const [jogadores, setJogadores] = useState<Jogador[]>([])



    const buscarTermo = (termo: string) => {
        const busca = termo.toLowerCase().trim()

        const filtradas = noticias.filter(noticia =>
            noticia.titulo.toLowerCase().includes(busca)
        )

        const timesFiltrados = listaDeTimes.filter(time =>
            time.time.toLowerCase().includes(busca) ||
            time.id.toLowerCase().includes(busca)
        )

        const jogadoresFiltrados = Array.from(
            new Map(
                listaDeTimes
                    .flatMap(time => time.elenco)
                    .filter(jogador =>
                        jogador.nome.toLowerCase().includes(busca) ||
                        jogador.nick.toLowerCase().includes(busca) ||
                        jogador.time.toLowerCase().includes(busca)
                    )
                    .map(j => [j.nome, j]) // usa ID como chave
            ).values()
        )

        const timePorJogador = new Set(
            jogadoresFiltrados.map(jogador => jogador.time.toLowerCase())
        );

        const filtroTimesPorJogador = listaDeTimes.filter(time =>
            timePorJogador.has(time.id.toLowerCase())
        );

        const arrayFinalTimes = Array.from(
            new Map(
                [...filtroTimesPorJogador, ...timesFiltrados].map(t => [t.id, t])
            ).values()
        )

        setNoticiasFiltradas(filtradas);
        setTimes(arrayFinalTimes)
        setJogadores(jogadoresFiltrados)
    }
    console.log(times)

    useEffect(() => {
        buscarTermo(q);
    }, [noticias, q])

    return (
        <Template paginaClube={false}>
            <div className="p-6">
                <h1 className="text-3xl font-bold mb-4">
                    Resultados para: &quot;{q}&ldquo;
                </h1>
                <div className="flex flex-col gap-8">
                    <div>
                        <h2 className="text-2xl font-semibold">Times:</h2>
                        <div className="mt-4 flex flex-col gap-4">
                            {noticiasFiltradas.length === 0 && (
                                <p>Nenhum time encontrado.</p>
                            )}
                            <ul className="flex flex-wrap gap-4">
                                {
                                    times.map((time, i) => {
                                        return (
                                            <li key={i}>
                                                <Link href={`/paginaClube/${time.id}`}>
                                                    <div className="relative w-[100px] h-[100px]">
                                                        <Image alt={time.time} src={time.logo} fill className="object-contain" />
                                                    </div>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">Jogadores:</h2>
                        <div className="mt-4 flex flex-col gap-4">
                            {jogadores.length === 0 && (
                                <p>Nenhum jogador encontrado.</p>
                            )}
                            <ul className="flex gap-4">
                                {
                                    jogadores.map((jogador, i) => {
                                        return (
                                            <CardJogador jogador={jogador} key={i} />
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">Notícias:</h2>
                        <div className="mt-4 flex flex-col gap-4">
                            {noticiasFiltradas.length === 0 && (
                                <p>Nenhuma notícia encontrada.</p>
                            )}
                            <ul className="flex flex-col grid-cols-2 xl:gap-4 xl:grid">
                                {noticiasFiltradas.map((noticia) => (
                                    <div key={noticia.id}>
                                        <CardNoticia noticia={noticia} />
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <Botao label="Voltar" icone={<FaRegArrowAltCircleLeft />} link="/" />
                </div>
            </div>
        </Template>
    );
}
