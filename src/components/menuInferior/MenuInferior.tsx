import { FaHome } from "react-icons/fa";
import SidebarComponent from "../sidebarComponent/SidebarComponente";
import Link from "next/link";
import { MdOutlineShield, MdScoreboard } from "react-icons/md";
import { GiTrophy } from "react-icons/gi";
import Image from "next/image";
import Clube from "@/interfaces/Clube";
import { useEffect, useState } from "react";
import useNoticias from "@/data/hooks/useNoticias";
import Noticia from "@/interfaces/Noticia";
import clubesDoCoracao from "@/constants/clubesDoCoracao";

export default function MenuInferior() {

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
            setNoticiasClubeSelecionado(filtradas.slice(0, 4))
        }
    }, [clubeSelecionado, noticias])

    function selecionarClube(clube: Clube) {
        localStorage.setItem("clubeDoCoracao", JSON.stringify(clube))
        setClubeSelecionado(clube)
        setVisibleClubeSelecionado("selecionado")
    }

    function renderItem(clube: Clube, i: number) {
        return (
            <li key={i} className="w-fit flex justify-center items-center justify-self-center hover:scale-110 transition-all duration-300">
                <button onClick={() => selecionarClube(clube)} className="flex flex-col items-center justify-center w-fit p-2">
                    <div className="relative w-8 h-8">
                        <Image alt="logo-time" src={`${clube.enderecoImagem}`} fill className="object-contain" />
                    </div>
                    <p className="uppercase font-bold text-sm leading-4">{clube.abreviacao}</p>
                </button>
            </li>
        );
    }

    return (
        <div className="w-full h-12 bg-azul-escuro text-white bottom-0 left-0 fixed z-20 lg:hidden">
            <nav className="w-full h-full grid grid-cols-4">
                <Link href={'/'} className="justify-self-center flex flex-col justify-center items-center gap-1">
                    <FaHome />
                    <p className="text-center font-semibold leading-4">Início</p>
                </Link>
                <button className="flex flex-col justify-center items-center">
                    <SidebarComponent
                        header={
                            <div className="flex items-center gap-2">
                                {
                                    clubeSelecionado == null ? (
                                        <>
                                            <MdOutlineShield className="text-3xl" />
                                            <span className="font-bold uppercase text-3xl text-black">Organização</span>
                                        </>
                                    ) : (
                                        <>
                                            <Image
                                                alt="Time Selecionado"
                                                src={clubeSelecionado.enderecoImagem}
                                                width={30}
                                                height={30}
                                                className="rounded-full"
                                            />
                                            <span className="font-bold uppercase text-3xl text-black">{clubeSelecionado.nome}</span>
                                        </>
                                    )
                                }
                            </div>
                        }
                        titulo={
                            <div className="justify-self-center flex flex-col justify-center items-center gap-1">
                                {
                                    clubeSelecionado == null ? (
                                        <>
                                            <MdOutlineShield />
                                            <p className="text-center font-semibold leading-4">Org</p>
                                        </>
                                    ) : (
                                        <>
                                            <Image alt="time Selecionado" src={clubeSelecionado.enderecoImagem} width={18} height={18} />
                                            <p className="text-center font-semibold leading-4 uppercase">{clubeSelecionado.abreviacao}</p>
                                        </>
                                    )
                                }
                            </div>
                        }
                    >
                        {
                            <div>
                                <div className="flex flex-col p-2">
                                    <div className={`w-full h-fit text-black p-2 flex-col gap-5 xl:p-4 ${visibleClubeSelecionado === "selecionado" ? 'hidden' : 'flex'}`}>
                                        <h2 className="text-xl font-secundaria uppercase font-bold leading-5">Selecione seu clube do coração:</h2>
                                        <ul className="flex flex-col gap-4">
                                            <li className="flex flex-col gap-1">
                                                <h3 className="font-semibold text-lg leading-4">Orgs Brasileiras</h3>
                                                <ul className="grid grid-cols-4">
                                                    {orgsBr.map(renderItem)}
                                                </ul>
                                            </li>
                                            <li className="flex flex-col gap-1">
                                                <h3 className="font-semibold text-lg leading-4">Orgs Europeias</h3>
                                                <ul className="grid grid-cols-4">
                                                    {orgsEu.map(renderItem)}
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className={`w-full h-fit text-black p-2 flex-col gap-5 xl:p-4 ${visibleClubeSelecionado === "naoSelecionado" ? 'hidden' : 'flex'}`}>
                                        {clubeSelecionado ? (
                                            <div className="flex flex-col items-center relative">
                                                {
                                                    noticiasClubeSelecionado.length > 0 ? (
                                                        noticiasClubeSelecionado.map((noticia, i) => {
                                                            return (
                                                                <div key={i} className="w-full grid grid-cols-3 gap-1 mt-2 bg-azul-escuro text-white rounded-md overflow-hidden">
                                                                    {/* Imagem */}
                                                                    <div className="relative w-full h-[110px] bg-red-400 sm:h-[130px] lg:h-[110px] xl:h-[130px]">
                                                                        <Image alt="imagem" src={noticia.imagem} fill className="object-cover"></Image>
                                                                    </div>
                                                                    <div className="col-start-2 col-end-4 w-full p-2 flex flex-col gap-1">
                                                                        <h2 className="line-clamp-3 font-bold leading-5">{noticia.titulo}</h2>
                                                                        <p className="line-clamp-2 leading-4 text-sm">{noticia.subtitulo}</p>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    ) : (
                                                        <div>
                                                            Nenhuma noticia cadastrada!
                                                        </div>
                                                    )
                                                }
                                                <div className="flex flex-col gap-1 w-full mt-4">
                                                    <button
                                                        className="w-full py-1 bg-azul-escuro text-white font-bold rounded hover:bg-azul-escuro transition"
                                                    >
                                                        Ir para página
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            localStorage.removeItem("clubeDoCoracao");
                                                            setClubeSelecionado(null);
                                                            setVisibleClubeSelecionado("naoSelecionado");
                                                        }}
                                                        className="w-full py-1 bg-azul-escuro text-white font-bold rounded hover:bg-azul-escuro transition"
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
                            </div>
                        }
                    </SidebarComponent>
                </button>
                <button className="flex flex-col justify-center items-center">
                    <SidebarComponent titulo={<div className="justify-self-center flex flex-col justify-center items-center gap-1">
                        <MdScoreboard />
                        <p className="text-center font-semibold leading-4">Jogos</p>
                    </div>} />
                </button>
                <button className="flex flex-col justify-center items-center">
                    <SidebarComponent titulo={<div className="justify-self-center flex flex-col justify-center items-center gap-1">
                        <GiTrophy />
                        <p className="text-center font-semibold leading-4 flex md:hidden">Camp</p>
                        <p className="text-center font-semibold leading-4 hidden md:flex">Camp</p>
                    </div>} />
                </button>
            </nav>
        </div>
    )
}