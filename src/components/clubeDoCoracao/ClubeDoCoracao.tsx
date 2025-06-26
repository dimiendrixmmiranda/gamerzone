'use client'
import clubesDoCoracao from "@/constants/clubesDoCoracao";
import useNoticias from "@/hooks/useNoticias";
import Clube from "@/interfaces/Clube";
import Noticia from "@/interfaces/Noticia";
import { createSlug } from "@/utils/createSlug";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ClubeDoCoracao() {
    const [orgsBr, setOrgsBr] = useState<Clube[]>([])
    const [orgsEu, setOrgsEu] = useState<Clube[]>([])
    const [clubeSelecionado, setClubeSelecionado] = useState<Clube | null>(null)
    const [noticiasClubeSelecionado, setNoticiasClubeSelecionado] = useState<Noticia[]>([])
    const [visibleClubeSelecionado, setVisibleClubeSelecionado] = useState<'selecionado' | 'naoSelecionado'>('naoSelecionado')
    const noticias = useNoticias()

    useEffect(() => {
        setOrgsBr(clubesDoCoracao.filter(clube => clube.regiao === 'br'))
        setOrgsEu(clubesDoCoracao.filter(clube => clube.regiao === 'eu'))

        const salvo = localStorage.getItem("clubeDoCoracao")
        if (salvo) {
            setClubeSelecionado(JSON.parse(salvo))
            setVisibleClubeSelecionado("selecionado")
        }
    }, [])

    useEffect(() => {
        if (clubeSelecionado && noticias.length > 0) {
            const filtradas = noticias.filter(noticia =>
                noticia.tags?.includes(clubeSelecionado.id)
            )
            setNoticiasClubeSelecionado(filtradas.slice(0, 3))
        }
    }, [clubeSelecionado, noticias])

    function selecionarClube(clube: Clube) {
        localStorage.setItem("clubeDoCoracao", JSON.stringify(clube))
        setClubeSelecionado(clube)
        setVisibleClubeSelecionado("selecionado")
    }

    function renderItem(clube: Clube, i: number) {
        return (
            <li key={i} className="w-fit flex justify-center items-center justify-self-center transition-all duration-300 rounded-md hover:bg-azul-escuro hover:scale-110">
                <button onClick={() => selecionarClube(clube)} className="flex flex-col items-center justify-center w-fit p-2">
                    <div className="relative w-8 h-8">
                        <Image alt="logo-time" src={`${clube.enderecoImagem}`} fill className="object-contain" unoptimized/>
                    </div>
                    <p className="uppercase font-bold text-sm leading-4" style={{textShadow: '1px 1px 1px black'}}>{clube.abreviacao}</p>
                </button>
            </li>
        )
    }

    return (
        <div className="hidden flex-col p-2 row-start-1 row-end-2 col-start-4 col-end-5 md:p-4 lg:flex xl:col-start-5 xl:col-end-7 xl:max-w-[95%] xl:justify-self-end 2xl:justify-self-center">
            <div className={`w-full h-fit bg-amarelo text-white p-2 flex-col gap-5 xl:p-4 ${visibleClubeSelecionado === "selecionado" ? 'hidden' : 'flex'}`}>
                <h2 className="text-xl font-secundaria uppercase font-bold leading-5" style={{textShadow: '1px 1px 2px black'}}>Selecione seu clube do coração:</h2>
                <ul className="flex flex-col gap-4">
                    <li className="flex flex-col gap-1">
                        <h3 className="font-semibold text-lg leading-4 ml-2 mb-1" style={{textShadow: '1px 1px 2px black'}}>Orgs Brasileiras</h3>
                        <ul className="grid grid-cols-4">
                            {orgsBr.map(renderItem)}
                        </ul>
                    </li>
                    <li className="flex flex-col gap-1">
                        <h3 className="font-semibold text-lg leading-4 ml-2 mb-1" style={{textShadow: '1px 1px 2px black'}}>Orgs Europeias</h3>
                        <ul className="grid grid-cols-4">
                            {orgsEu.map(renderItem)}
                        </ul>
                    </li>
                </ul>
            </div>

            <div className={`w-full h-fit bg-amarelo text-white p-2 flex-col xl:p-4 ${visibleClubeSelecionado === "naoSelecionado" ? 'hidden' : 'flex'}`}>
                {clubeSelecionado ? (
                    <div className="flex flex-col gap-4 items-center relative">
                        <div>
                            <div className="absolute top-0 right-0">
                                <div className="relative w-8 h-8 mb-2">
                                    <Image alt="logo-time" src={clubeSelecionado.enderecoImagem} fill className="object-contain" unoptimized/>
                                </div>
                            </div>
                            <h2 className="text-2xl uppercase font-black" style={{textShadow: '1px 1px 1px black'}}>{clubeSelecionado.nome}</h2>
                        </div>
                        <ul className="flex flex-col gap-2">
                            {
                                noticiasClubeSelecionado.length > 0 ? (
                                    noticiasClubeSelecionado.map((noticia, i) => {
                                        return (
                                            <li key={i} className="rounded-md bg-azul-escuro" style={{boxShadow: '0 0 2px 1px black'}}>
                                                <Link className="w-full grid grid-cols-3 gap-1 rounded-md overflow-hidden" href={`/noticia/${createSlug(noticia.id)}`}>
                                                    {/* Imagem */}
                                                    <div className="relative w-full h-[110px] bg-red-400 sm:h-[130px] lg:h-[110px] xl:h-[130px]">
                                                        <Image alt="imagem" src={noticia.imagem} fill className="object-cover"></Image>
                                                    </div>
                                                    <div className="col-start-2 col-end-4 w-full p-2 flex flex-col gap-1">
                                                        <h2 className="line-clamp-3 font-bold leading-5">{noticia.titulo}</h2>
                                                        <p className="line-clamp-2 leading-4 text-sm">{noticia.subtitulo}</p>
                                                        <span className="text-xs mt-auto">Por {noticia.autor}, {noticia.data.toDate().toLocaleString('pt-br')}</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        )
                                    })
                                ) : (
                                    <div>
                                        Nenhuma noticia cadastrada!
                                    </div>
                                )
                            }
                        </ul>
                        <div className="flex flex-col gap-1 w-full mt-4 md:grid md:grid-cols-2 md:gap-3 lg:-mt-2 lg:flex lg:gap-1 2xl:grid">
                            {/* Tenho que mandar o objeto clube selecionado para a pagina paginaClube */}
                            <Link
                                href={`/paginaClube/${createSlug(clubeSelecionado.id)}`}
                                className="w-full text-center py-1 bg-white text-orange-500 font-bold rounded transition duration-200 hover:bg-azul-escuro hover:text-white" style={{boxShadow: '0 0 2px 1px black', textShadow: '1px 1px 1px black'}}
                            >
                                Ir para página
                            </Link>
                            <button
                                onClick={() => {
                                    localStorage.removeItem("clubeDoCoracao");
                                    setClubeSelecionado(null);
                                    setVisibleClubeSelecionado("naoSelecionado");
                                }}
                                className="w-full py-1 bg-white text-orange-500 font-bold rounded transition duration-200 hover:bg-azul-escuro hover:text-white" style={{boxShadow: '0 0 2px 1px black', textShadow: '1px 1px 1px black'}}
                            >
                                Selecionar outra equipe
                            </button>
                        </div>
                    </div>
                ) : (
                    <p>Carregando...</p>
                )}
            </div>
        </div>
    )
}
