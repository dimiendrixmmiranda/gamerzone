'use client'
import Offcanvas from "@/components/offcanvas/Offcanvas";
import Image from "next/image";
import Link from "next/link";
import style from './style.module.css'
import { MdScoreboard } from "react-icons/md";
import { GiChampions } from "react-icons/gi";
import { PiRankingFill } from "react-icons/pi";
import { FaGear } from "react-icons/fa6";
import listaDeRedesSociais from "@/core/constants/ListaDeRedesSociais";

export default function Header() {
    return (
        <header className={style.cabecalho} id="topo">
            <div>
                <Link href={'/'} className="flex items-center">
                    <div className="relative w-[80px] h-[60px] md:w-[50px] lg:w-[80px]">
                        <Image alt="Logo Da Gamerzone" src={'/logo/logo-gamer-zone.png'} fill className="object-contain"></Image>
                    </div>
                    <div className="relative w-[130px] h-[70px] -ml-3 md:w-[100px] md:-ml-1 lg:-ml-3 lg:w-[130px]">
                        <Image alt="Texto Da Gamerzone" src={'/logo/texto-gamer-zone.png'} fill className="object-contain"></Image>
                    </div>
                </Link>
            </div>

            {/* Menus */}
            <ul className="items-center gap-2 hidden md:flex md:mx-auto lg:m-0 lg:ml-2 lg:gap-4 xl:gap-6 xl:ml-8">
                <li className="cursor-pointer">
                    <Link href={'/'} className="flex items-center gap-1 text-lg font-bold xl:text-xl">
                        <MdScoreboard />
                        <p>
                            Resultados
                        </p>
                    </Link>
                </li>
                <li className="cursor-pointer">
                    <div className={style.cabecalhoMenu}>
                        <div className="flex items-center gap-1 font-bold xl:text-xl">
                            <GiChampions />
                            <p>
                                Campeonatos
                            </p>
                        </div>
                        <ul className="p-4 w-[420px] absolute top-[125%] left-0 hidden z-10 lg:w-[600px]">
                            <li className={style.cabecalhoMenuCampeonatos}>
                                {/* Lista de Campeonatos */}
                                <ul className="flex flex-col gap-1 lg:gap-2 lg:text-lg">
                                    <li>
                                        <Link href={'/'} className="flex items-center gap-1">
                                            <div className="relative w-8 h-4 bg-orange-950"></div>
                                            <p className="overflow-hidden whitespace-nowrap text-ellipsis font-bold">ESL One Cologne 2025</p>
                                            <div className="relative w-8 h-4 bg-black"></div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'} className="flex items-center gap-1">
                                            <div className="relative w-8 h-4 bg-orange-950"></div>
                                            <p className="overflow-hidden whitespace-nowrap text-ellipsis font-bold">ESL One Cologne 2025</p>
                                            <div className="relative w-8 h-4 bg-black"></div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'} className="flex items-center gap-1">
                                            <div className="relative w-8 h-4 bg-orange-950"></div>
                                            <p className="overflow-hidden whitespace-nowrap text-ellipsis font-bold">ESL One Cologne 2025</p>
                                            <div className="relative w-8 h-4 bg-black"></div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'} className="flex items-center gap-1">
                                            <div className="relative w-8 h-4 bg-orange-950"></div>
                                            <p className="overflow-hidden whitespace-nowrap text-ellipsis font-bold">ESL One Cologne 2025</p>
                                            <div className="relative w-8 h-4 bg-black"></div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'} className="flex items-center gap-1">
                                            <div className="relative w-8 h-4 bg-orange-950"></div>
                                            <p className="overflow-hidden whitespace-nowrap text-ellipsis font-bold">ESL One Cologne 2025</p>
                                            <div className="relative w-8 h-4 bg-black"></div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'} className="flex items-center gap-1">
                                            <div className="relative w-8 h-4 bg-orange-950"></div>
                                            <p className="overflow-hidden whitespace-nowrap text-ellipsis font-bold">ESL One Cologne 2025</p>
                                            <div className="relative w-8 h-4 bg-black"></div>
                                        </Link>
                                    </li>
                                </ul>
                                {/* Lista de Times */}
                                <ul className="grid grid-cols-4 gap-1 w-full h-full overflow-hidden">
                                    <li className="w-full h-full flex justify-center items-center">
                                        <Link href={'/'} className="relative w-8 h-8">
                                            <Image alt="Time" src={'/default/escudo-default.png'} fill className="object-contain"></Image>
                                        </Link>
                                    </li>
                                    <li className="w-full h-full flex justify-center items-center">
                                        <Link href={'/'} className="relative w-8 h-8">
                                            <Image alt="Time" src={'/default/escudo-default.png'} fill className="object-contain"></Image>
                                        </Link>
                                    </li>
                                    <li className="w-full h-full flex justify-center items-center">
                                        <Link href={'/'} className="relative w-8 h-8">
                                            <Image alt="Time" src={'/default/escudo-default.png'} fill className="object-contain"></Image>
                                        </Link>
                                    </li>
                                    <li className="w-full h-full flex justify-center items-center">
                                        <Link href={'/'} className="relative w-8 h-8">
                                            <Image alt="Time" src={'/default/escudo-default.png'} fill className="object-contain"></Image>
                                        </Link>
                                    </li>
                                    <li className="w-full h-full flex justify-center items-center">
                                        <Link href={'/'} className="relative w-8 h-8">
                                            <Image alt="Time" src={'/default/escudo-default.png'} fill className="object-contain"></Image>
                                        </Link>
                                    </li>
                                    <li className="w-full h-full flex justify-center items-center">
                                        <Link href={'/'} className="relative w-8 h-8">
                                            <Image alt="Time" src={'/default/escudo-default.png'} fill className="object-contain"></Image>
                                        </Link>
                                    </li>
                                    <li className="w-full h-full flex justify-center items-center">
                                        <Link href={'/'} className="relative w-8 h-8">
                                            <Image alt="Time" src={'/default/escudo-default.png'} fill className="object-contain"></Image>
                                        </Link>
                                    </li>
                                    <li className="w-full h-full flex justify-center items-center">
                                        <Link href={'/'} className="relative w-8 h-8">
                                            <Image alt="Time" src={'/default/escudo-default.png'} fill className="object-contain"></Image>
                                        </Link>
                                    </li>
                                    <li className="w-full h-full flex justify-center items-center">
                                        <Link href={'/'} className="relative w-8 h-8">
                                            <Image alt="Time" src={'/default/escudo-default.png'} fill className="object-contain"></Image>
                                        </Link>
                                    </li>
                                    <li className="w-full h-full flex justify-center items-center">
                                        <Link href={'/'} className="relative w-8 h-8">
                                            <Image alt="Time" src={'/default/escudo-default.png'} fill className="object-contain"></Image>
                                        </Link>
                                    </li>
                                    <li className="w-full h-full flex justify-center items-center">
                                        <Link href={'/'} className="relative w-8 h-8">
                                            <Image alt="Time" src={'/default/escudo-default.png'} fill className="object-contain"></Image>
                                        </Link>
                                    </li>
                                    <li className="w-full h-full flex justify-center items-center">
                                        <Link href={'/'} className="relative w-8 h-8">
                                            <Image alt="Time" src={'/default/escudo-default.png'} fill className="object-contain"></Image>
                                        </Link>
                                    </li>
                                    <li className="w-full h-full flex justify-center items-center">
                                        <Link href={'/'} className="relative w-8 h-8">
                                            <Image alt="Time" src={'/default/escudo-default.png'} fill className="object-contain"></Image>
                                        </Link>
                                    </li>
                                    <li className="w-full h-full flex justify-center items-center">
                                        <Link href={'/'} className="relative w-8 h-8">
                                            <Image alt="Time" src={'/default/escudo-default.png'} fill className="object-contain"></Image>
                                        </Link>
                                    </li>
                                    <li className="w-full h-full flex justify-center items-center">
                                        <Link href={'/'} className="relative w-8 h-8">
                                            <Image alt="Time" src={'/default/escudo-default.png'} fill className="object-contain"></Image>
                                        </Link>
                                    </li>
                                    <li className="w-full h-full flex justify-center items-center">
                                        <Link href={'/'} className="relative w-8 h-8">
                                            <Image alt="Time" src={'/default/escudo-default.png'} fill className="object-contain"></Image>
                                        </Link>
                                    </li>
                                </ul>
                                <Link href={'/'} className="uppercase font-bold col-start-1 col-end-3 text-center mt-2">Ver Todos os Campeonatos</Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="cursor-pointer">
                    <div className={style.cabecalhoMenu}>
                        <div className="flex items-center gap-1 font-bold xl:text-xl">
                            <PiRankingFill />
                            <p>
                                Rankings
                            </p>
                        </div>
                        <ul className="w-[200px] bg-red-500 absolute top-[125%] left-0 hidden z-10 p-4 gap-2 xl:gap-4">
                            <li className="font-bold xl:text-lg">
                                <Link href={'/'}>
                                    <p className="leading-6">Ranking da ESL</p>
                                </Link>
                            </li>
                            <li className="font-bold xl:text-lg">
                                <Link href={'/'}>
                                    <p className="leading-6">Ranking da HLTV</p>
                                </Link>
                            </li>
                            <li className="font-bold xl:text-lg">
                                <Link href={'/'}>
                                    <p className="leading-6">Ranking da VLR.gg</p>
                                </Link>
                            </li>
                            <li className="font-bold xl:text-lg">
                                <Link href={'/'}>
                                    <p className="leading-6">Ranking da Liquipedia</p>
                                </Link>
                            </li>
                            <li className="font-bold xl:text-lg">
                                <Link href={'/'}>
                                    <p className="leading-6">Ranking da LoL Esports Global Power Rankings</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="cursor-pointer">
                    <div className={style.cabecalhoMenu}>
                        <div className="flex items-center gap-1 font-bold xl:text-xl">
                            <FaGear />
                            <p>
                                CFG dos Pro
                            </p>
                        </div>
                        <ul className="w-[200px] absolute top-[125%] left-0 hidden z-10 p-4 gap-2 font-bold xl:gap-4">
                            <li>
                                <Link href={'/'}>
                                    <p>Conter Strike</p>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'}>
                                    <p>Valorant</p>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'}>
                                    <p>Raimbow Six Siege</p>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'}>
                                    <p>League of Legends</p>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'}>
                                    <p>PUBG</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="cursor-pointer">
                    <div className={style.cabecalhoMenu}>
                        <div className="flex items-center gap-1 font-bold xl:text-xl">
                            <FaGear />
                            <p>
                                Skins
                            </p>
                        </div>
                        <ul className="w-[200px] absolute top-[125%] left-0 hidden z-10 p-4 gap-2 font-bold xl:gap-4">
                            <li>
                                <Link href={'/'}>
                                    <p>Conter Strike</p>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'}>
                                    <p>Valorant</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>

            {/* Redes Sociais */}
            <ul className="hidden grid-cols-2 items-center md:grid lg:flex lg:gap-1 lg:text-xl xl:gap-2 xl:text-2xl xl:mr-4">
                {
                    listaDeRedesSociais.map((rede, i) => {
                        return (
                            <li key={i}>
                                <Link href={rede.link}>
                                    {rede.icone}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>

            <Offcanvas></Offcanvas>
        </header>
    )
}