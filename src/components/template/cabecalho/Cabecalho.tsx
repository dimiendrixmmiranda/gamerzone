import Link from "next/link";
import Offcanvas from "../../offcanvas/Offcanvas";
import { MdScoreboard } from "react-icons/md";
import { GiChampions } from "react-icons/gi";
import { FaGear } from "react-icons/fa6";
import { PiRankingFill } from "react-icons/pi";
import { GiPistolGun } from "react-icons/gi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

import styles from './Cabecalho.module.css'

export default function Cabecalho() {
    return (
        <header className="bg-[--cor-principal] flex p-1 md:p-2">
            <Link href={'/'} className="flex h-16 flex-1 md:flex-0 md:w-fit">
                <img src="../../logo-gamer-zone.png" alt="Logo Gamer Zone" className="h-full" />
                <img src="../../texto-gamer-zone.png" alt="Texto Gamer Zone" className="h-full -mx-1" />
            </Link>
            <ul className={`gap-1 justify-center items-center hidden md:flex ${styles.menu}`}>
                <li className="px-2 py-1 rounded-md flex justify-center items-center">
                    <Link href={'/'} className="flex justify-center items-center text-sm font-bold gap-1 lg:text-lg">
                        <MdScoreboard className="text-xl" />
                        <p>Resultados</p>
                    </Link>
                </li>
                <li className="px-2 py-1 rounded-md flex justify-center items-center">
                    <Link href={'/'} className="flex justify-center items-center text-sm font-bold gap-1 lg:text-lg">
                        <GiChampions className="text-xl" />
                        <p>Campeonatos</p>
                    </Link>
                </li>
                <li className="px-2 py-1 rounded-md flex justify-center items-center">
                    <Link href={'/'} className="flex justify-center items-center text-sm font-bold gap-1 lg:text-lg">
                        <FaGear className="text-xl" />
                        <p>CFG dos Pro</p>
                    </Link>
                </li>
                <li className="px-2 py-1 rounded-md flex justify-center items-center">
                    <Link href={'/'} className="flex justify-center items-center text-sm font-bold gap-1 lg:text-lg">
                        <PiRankingFill className="text-xl" />
                        <p>Rankings</p>
                    </Link>
                </li>
                <li className="px-2 py-1 rounded-md flex justify-center items-center">
                    <Link href={'/'} className="flex justify-center items-center text-sm font-bold gap-1 lg:text-lg">
                        <GiPistolGun className="text-xl" />
                        <p>Skins</p>
                    </Link>
                </li>
            </ul>
            <ul className="hidden lg:flex justify-center items-center gap-1 mr-2 ml-6 xl:gap-2 xl:ml-10">
                <li className="text-xl xl:text-2xl">
                    <Link href={'/'}><FaFacebookSquare /></Link>
                </li>
                <li className="text-xl xl:text-2xl">
                    <Link href={'/'}><FaSquareInstagram /></Link>
                </li>
                <li className="text-xl xl:text-2xl">
                    <Link href={'/'}><AiFillTikTok /></Link>
                </li>
                <li className="text-xl xl:text-2xl">
                    <Link href={'/'}><FaXTwitter /></Link>
                </li>
            </ul>
            <Offcanvas></Offcanvas>
        </header>
    )
}