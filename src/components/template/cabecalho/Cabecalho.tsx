import Link from "next/link";
import Offcanvas from "../../offcanvas/Offcanvas";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import styles from './Cabecalho.module.css'
import { menu } from "@/constants/constantes";
import React from 'react';
import { MdScoreboard } from "react-icons/md";
import { GiChampions } from "react-icons/gi";
import { FaGear } from "react-icons/fa6";
import { PiRankingFill } from "react-icons/pi";
import { GiPistolGun } from "react-icons/gi";

export default function Cabecalho() {

    const renderizarIcone = (icone: string) => {
        switch (icone) {
            case '<MdScoreboard className="text-xl"/>':
                return <MdScoreboard className="lg:text-xl" />;
            case '<GiChampions className="text-xl" />':
                return <GiChampions className="lg:text-xl" />;
            case '<FaGear className="text-xl" />':
                return <FaGear className="lg:text-xl" />;
            case '<PiRankingFill className="text-xl" />':
                return <PiRankingFill className="lg:text-xl" />;
            case '<GiPistolGun className="text-xl" />':
                return <GiPistolGun className="lg:text-xl" />;
            default:
                return null;
        }
    }

    return (
        <header className="bg-[--cor-principal] flex p-1 md:p-2">
            <Link href={'/'} className="flex h-16 flex-1 md:flex-0 md:w-fit">
                <img src="../../logo-gamer-zone.png" alt="Logo Gamer Zone" className="h-full" />
                <img src="../../texto-gamer-zone.png" alt="Texto Gamer Zone" className="h-full -mx-1" />
            </Link>
            <ul className={`gap-1 justify-center items-center hidden md:flex ${styles.menu}`}>
                {
                    menu.map((item, i) => {
                        return (
                            <li key={i} className="px-2 py-1 rounded-md flex justify-center items-center cursor-pointer hover:bg-white hover:text-[--cor-principal]" style={{ transition: '.5s ease' }}>
                                <Link href={item.link} className="flex justify-center items-center text-sm font-bold gap-1 lg:text-lg">
                                    {renderizarIcone(item.icone)}
                                    <p>{item.nome}</p>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="hidden lg:flex justify-center items-center gap-1 mr-2 ml-6 xl:gap-2 xl:ml-10 redes-sociais">
                <li className="text-xl xl:text-2xl relative" data-social="Facebook">
                    <Link href={'/'}><FaFacebookSquare /></Link>
                </li>
                <li className="text-xl xl:text-2xl relative" data-social="Instagram">
                    <Link href={'/'}><FaSquareInstagram /></Link>
                </li>
                <li className="text-xl xl:text-2xl relative" data-social="Tiktok">
                    <Link href={'/'}><AiFillTikTok /></Link>
                </li>
                <li className="text-xl xl:text-2xl relative" data-social="Twitter">
                    <Link href={'/'}><FaXTwitter /></Link>
                </li>
            </ul>
            <Offcanvas></Offcanvas>
        </header>
    )
}