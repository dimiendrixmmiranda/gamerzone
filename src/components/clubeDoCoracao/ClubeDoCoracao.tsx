/* eslint-disable @typescript-eslint/no-explicit-any */


import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaPlayCircle } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa6"
import { IoMdClock } from "react-icons/io"
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { LuShieldOff } from "react-icons/lu";
import { createSlug } from "@/lib/utils/createSlug"
import { useClubeSelecionado } from "@/lib/hooks/useClubeSelecionado"
import Time from "@/interfaces/Time"
import { listaDeTimes } from "@/constants/listaDeTimes"
import useNoticias from "@/lib/hooks/useNoticias"
import Noticia from "@/interfaces/Noticia"

interface ClubeDoCoracaoProps {
    estilo: string
}

export default function ClubeDoCoracao({ estilo }: ClubeDoCoracaoProps) {
    const { clube, selecionarClube, removerClube } = useClubeSelecionado();
    const { noticias } = useNoticias();

    const [filtroTimes, setFiltroTimes] = useState<'am' | 'eu' | 'as'>('am');
    const [times, setTimes] = useState<Time[]>([]);

    const [noticiasTime, setNoticiasTime] = useState<Noticia[]>([])

    useEffect(() => {
        const timesFiltrados = filtroTimes
            ? listaDeTimes.filter(t => t.regiao === filtroTimes)
            : listaDeTimes;
        setTimes(timesFiltrados)
    }, [filtroTimes])

    useEffect(() => {
        if (!clube) return;

        const noticiasFiltradas = noticias
            .filter(noticia =>
                noticia.timesEnvolvidos.some(time =>
                    time.id === clube.id
                )
            )
            .map(noticia => ({
                ...noticia,
                tipo: "noticia"
            }))

        setNoticiasTime(noticiasFiltradas);
    }, [noticias, clube]);

    const noticiasSelecionadas: any = [
        ...noticiasTime,
        {
            tipo: 'proximoJogo'
        },
    ]

    return (
        <div className={`${estilo}`}>
            <div className={`bg-zinc-800 h-full text-white p-2 flex-col gap-2 sm:p-4 md:grid-cols-2 xl:flex-col ${clube ? 'hidden' : 'flex md:grid xl:flex'}`} style={{textShadow: '1px 1px 2px black'}}>
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold leading-6">Selecione sua organização favorita!</h2>
                    <p>Escolha sua ORG favorita e fique por dentro de todas as notícias, próximos jogos e muito mais.</p>
                </div>
                <div className="flex flex-col">
                    {/* Menu */}
                    <ul className="grid grid-cols-3 gap-2">
                        <li className={`w-full flex justify-center text-white font-bold p-2 transition-all duration-300 ${filtroTimes === 'am' ? 'bg-azul-escuro border-2 border-zinc-950' : 'bg-azul-medio opacity-80 border-2 border-zinc-950'}`}>
                            <button className="w-full h-full flex justify-center items-center" style={{ textShadow: '1px 1px 2px black' }} onClick={() => setFiltroTimes('am')}>
                                AM
                            </button>
                        </li>
                        <li className={`w-full flex justify-center bg-azul-escuro text-white font-bold p-2 transition-all duration-300 ${filtroTimes === 'eu' ? 'bg-azul-escuro border-2 border-zinc-950' : 'bg-azul-medio opacity-80 border-2 border-zinc-950'}`}>
                            <button className="w-full h-full flex justify-center items-center" style={{ textShadow: '1px 1px 2px black' }} onClick={() => setFiltroTimes('eu')}>
                                EU
                            </button>
                        </li>
                        <li className={`w-full flex justify-center bg-azul-escuro text-white font-bold p-2 transition-all duration-300 ${filtroTimes === 'as' ? 'bg-azul-escuro border-2 border-zinc-950' : 'bg-azul-medio opacity-80 border-2 border-zinc-950'}`}>
                            <button className="w-full h-full flex justify-center items-center" style={{ textShadow: '1px 1px 2px black' }} onClick={() => setFiltroTimes('as')}>
                                AS
                            </button>
                        </li>
                    </ul>
                    {/* Orgs */}
                    <ul className="grid grid-cols-4 mt-2">
                        {
                            times.map((time, i) => {
                                return (
                                    <li
                                        key={i}
                                        className="flex flex-col justify-center items-center p-1 cursor-pointer"
                                        onClick={() => {
                                            selecionarClube(time)
                                            localStorage.setItem("clubeFavorito", JSON.stringify(time))
                                        }}
                                    >
                                        <div className="relative w-8 h-8 ">
                                            <Image alt="logo time" src={time.logo} fill className="object-contain" />
                                        </div>
                                        <p className="uppercase font-bold">{time.abreviacao}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className={`${clube ? 'flex' : 'hidden'} w-full h-full flex-col`} style={{ boxShadow: '0 0 2px 1px black' }}>
                <div className="h-[60px] w-full grid grid-rows-3 relative">
                    <button
                        className="absolute top-[295px] left-2 text-2xl hover:bg-azul-escuro hover:text-white transition-all duration-300 p-1 rounded-[6px] sm:top-[290px] md:text-3xl md:top-[300px] z-30 xl:top-2 xl:left-[90%]"
                        onClick={() => removerClube()}
                    >
                        <LuShieldOff />
                    </button>
                    <div className={`w-full h-full block row-start-1 row-end-3 md:p-4`} style={{ backgroundColor: `${clube?.cor}` }}></div>
                    <div className="w-full h-full block row-start-3 row-end-4 bg-white md:p-4"></div>
                    <div className="absolute top-[50%] flex items-center gap-2 p-2" style={{ transform: 'translate(0,-50%)' }}>
                        <div className="relative w-10 h-10 drop-shadow-[0_0_20px_rgba(0,0,0,1)]">
                            {
                                clube && <Image alt="logo da equipe" src={clube?.logo} fill className="object-contain" />
                            }
                        </div>
                        <div>
                            <p className="font-bold text-2xl text-white" style={{ textShadow: '1px 1px 3px black' }}>Go, Go {clube?.time}!</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-2 h-full w-full flex flex-col gap-2 md:p-4 xl:p-2 xl:px-4">
                    <div className="w-full mx-auto">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={20}
                            navigation
                            pagination={{ clickable: true }}
                            loop={true}
                            className=""
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                660: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1280: {
                                    slidesPerView: 1,
                                }
                            }}
                        >
                            {noticiasSelecionadas.map((noticia: Noticia | any, i: number) => (
                                <SwiperSlide key={i} className="w-full h-full">
                                    {
                                        noticia.tipo === 'noticia' ? (
                                            <Link href={`/noticia/${createSlug(noticia.titulo, noticia.id)}`}>
                                                <div className="w-full relative bg-black/50 text-white flex items-center justify-center rounded-[12px] h-[220px] overflow-hidden xl:h-[320px]">
                                                    <div className="relative w-full h-full">
                                                        <Image alt="imagem da noticia" src={noticia.imagem} fill className="object-cover" unoptimized/>
                                                    </div>
                                                    <h2 className="absolute max-w-[90%] mx-auto text-center font-bold bottom-6 bg-black rounded-[8px] line-clamp-3 p-2 xl:text-2xl">{noticia.titulo}</h2>
                                                </div>
                                            </Link>
                                        ) : (
                                            <div className="w-full bg-azul-escuro text-white flex items-center justify-center rounded-[12px] h-[220px] xl:h-[320px]">
                                                <div className="flex w-full h-full">
                                                    <div className="z-10 flex flex-col gap-2 w-full h-full p-3">
                                                        <p className="text-sm truncate lg:text-base">ESL Challenger League Season 50: Europe</p>
                                                        <div className="flex flex-col gap-1">
                                                            <div className="flex items-center gap-1">
                                                                <div className="w-6 h-6 relative xl:w-8 xl:h-8">
                                                                    <Image
                                                                        src="/logo.png"
                                                                        alt="logo"
                                                                        fill
                                                                        className="object-contain"
                                                                    />
                                                                </div>
                                                                <p className="font-bold xl:text-xl">Imperial</p>
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <div className="w-6 h-6 relative xl:w-8 xl:h-8">
                                                                    <Image
                                                                        src="/logo.png"
                                                                        alt="logo"
                                                                        fill
                                                                        className="object-contain"
                                                                    />
                                                                </div>
                                                                <p className="font-bold xl:text-xl">Fúria</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <IoMdClock className="text-xl" />
                                                            <p>20/11 - 18:30</p>
                                                        </div>
                                                        <div className="bg-red-600 mt-auto mb-2 p-1 rounded-[8px] w-fit px-2">
                                                            <button className="flex items-center gap-2">Onde Assistir <FaPlayCircle /></button>
                                                        </div>
                                                        <div className="flex justify-end items-center gap-1 w-full border-t-2 py-1 border-white" style={{ textShadow: '1px 1px 2px black' }}>
                                                            <p>Agenda Da Imperial</p>
                                                            <FaArrowRight />
                                                        </div>
                                                    </div>
                                                    <div className="absolute w-full h-full overflow-hidden rounded-[12px]">
                                                        <div className="relative w-[180px] h-full ml-auto -mr-5 xl:w-[240px]">
                                                            {/* Imagem de fundo */}
                                                            <Image
                                                                src="/noway.webp"
                                                                alt="Jogador estrela"
                                                                fill
                                                                className="object-contain"
                                                            />
                                                        </div>
                                                        {/* Sombra + Degradê escuro sobre a imagem */}
                                                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 shadow-[0_0_40px_rgba(0,0,0,1)] rounded-[12px]"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    {clube && (
                        <Link
                            href={`/paginaClube/${createSlug(clube.id)}`}
                            className="flex justify-end items-center gap-1"
                        >
                            Mais sobre {clube.time} <FaArrowRight />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}