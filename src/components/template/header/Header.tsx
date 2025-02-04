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
import { listaDeCampeonatos } from "@/core/constants/ListaDeCampeonatos";
import { listaDeRankings } from "@/core/constants/ListaDeRankings";
import { listaDeCfgDosPro } from "@/core/constants/ListaDeCfgDosPro";
import { listaDeMenusSkins } from "@/core/constants/ListaDeMenuSkins";

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
                    <Link href={'/'} className="flex items-center gap-1 text-lg font-bold p-1 xl:text-xl hover:bg-[--preto-fosco]">
                        <MdScoreboard />
                        <p>
                            Resultados
                        </p>
                    </Link>
                </li>
                <li className="cursor-pointer">
                    <div className={style.cabecalhoMenu}>
                        <div className="flex items-center gap-1 font-bold p-1 xl:text-xl hover:bg-[--preto-fosco]">
                            <GiChampions />
                            <p>
                                Campeonatos
                            </p>
                        </div>
                        <ul className="p-4 w-[420px] absolute top-[125%] left-0 hidden z-10 lg:w-[600px]">
                            <li className={style.cabecalhoMenuCampeonatos}>
                                {/* Lista de Campeonatos */}
                                <ul className="flex flex-col gap-1 lg:gap-2 lg:text-lg">
                                    {
                                        listaDeCampeonatos.map((camp, i) => {
                                            return (
                                                <li key={i}>
                                                    <Link href={camp.link} className="items-center px-2" style={{ display: 'grid', gridTemplateColumns: '40px 1fr 20px' }}>
                                                        <div className="relative w-8 h-4 bg-orange-950">
                                                            <Image alt={camp.nome} src={camp.imagem} fill className="object-cover"></Image>
                                                        </div>
                                                        <p className="overflow-hidden whitespace-nowrap text-ellipsis font-bold">{camp.nome}</p>
                                                        <div className="relative w-full h-full">
                                                            <Image alt={camp.nome} src={camp.game} fill className="object-contain"></Image>
                                                        </div>
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
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
                                <Link href={'/'} className="uppercase font-bold col-start-1 col-end-3 text-center mt-2 hover:bg-[--azul]">Ver Todos os Campeonatos</Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="cursor-pointer">
                    <div className={style.cabecalhoMenu}>
                        <div className="flex items-center gap-1 font-bold p-1 xl:text-xl hover:bg-[--preto-fosco]">
                            <PiRankingFill />
                            <p>
                                Rankings
                            </p>
                        </div>
                        <ul className="w-[200px] absolute top-[125%] left-0 hidden z-10 p-4 gap-2 xl:gap-4">
                            {
                                listaDeRankings.map((ranking, i) => {
                                    return (
                                        <li key={i} className="font-bold p-1 xl:text-lg hover:bg-[--azul]">
                                            <Link href={ranking.link}>
                                                <p className="leading-6">{ranking.nome}</p>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </li>
                <li className="cursor-pointer">
                    <div className={style.cabecalhoMenu}>
                        <div className="flex items-center gap-1 font-bold p-1 xl:text-xl hover:bg-[--preto-fosco]">
                            <FaGear />
                            <p>
                                CFG dos Pro
                            </p>
                        </div>
                        <ul className="w-[220px] absolute top-[125%] left-0 hidden z-10 p-4 gap-2 font-bold xl:gap-4">
                            {
                                listaDeCfgDosPro.map((cfg, i) => {
                                    return (
                                        <li key={i} className="hover:bg-[--azul]">
                                            <Link href={cfg.link} className="items-center gap-1 p-1" style={{ display: 'grid', gridTemplateColumns: '20px 1fr' }}>
                                                <div className="relative w-full h-full">
                                                    <Image alt={cfg.nome} src={cfg.icone} fill className="object-contain"></Image>
                                                </div>
                                                <p>{cfg.nome}</p>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </li>
                <li className="cursor-pointer">
                    <div className={style.cabecalhoMenu}>
                        <div className="flex items-center gap-1 font-bold p-1 xl:text-xl hover:bg-[--preto-fosco]">
                            <FaGear />
                            <p>
                                Skins
                            </p>
                        </div>
                        <ul className="w-[200px] absolute top-[125%] left-[-100px] hidden z-10 p-4 gap-2 font-bold xl:gap-4 xl:left-[-50px]">
                            {
                                listaDeMenusSkins.map((menu, i) => {
                                    return (
                                        <li key={i} className="p-1 transition-all hover:bg-[--azul] w-full h-full">
                                            <Link className="w-full h-full gap-1 items-center" href={menu.link} style={{display: 'grid', gridTemplateColumns: '20px 1fr'}}>
                                                <div className="relative w-full h-full">
                                                    <Image alt={menu.nome} src={menu.game} fill className="object-contain"></Image>
                                                </div>
                                                <p>{menu.nome}</p>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </li>
            </ul>

            {/* Redes Sociais */}
            <ul className="hidden grid-cols-2 items-center md:grid lg:flex lg:gap-1 lg:text-xl xl:gap-2 xl:text-2xl xl:mr-4">
                {
                    listaDeRedesSociais.map((rede, i) => {
                        return (
                            <li key={i} className="hover:scale-[1.1] transition-all">
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