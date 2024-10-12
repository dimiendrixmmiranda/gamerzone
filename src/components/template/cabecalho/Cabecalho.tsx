import Link from "next/link";
import Offcanvas from "../../offcanvas/Offcanvas";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import styles from './Cabecalho.module.css'
import React from 'react';
import { listaMenu } from "core";

export default function Cabecalho() {
    return (
        <header className="bg-[--cor-principal] flex p-1 md:p-2" id="topo">
            <Link href={'/'} className="flex h-16 flex-1 md:flex-0 md:w-fit">
                <img src="../../logo-gamer-zone.png" alt="Logo Gamer Zone" className="h-full" />
                <img src="../../texto-gamer-zone.png" alt="Texto Gamer Zone" className="h-full -mx-1" />
            </Link>
            <ul className={`gap-1 justify-center items-center hidden md:flex ${styles.menu}`}>
                {
                    listaMenu.map((item, i) => {
                        return (
                            <li key={i} className="px-2 py-1 flex justify-center items-center cursor-pointer relative hover:bg-white hover:text-[--cor-principal]" style={{ transition: '.5s ease' }}>
                                <Link href={item.titulo.link} className="flex justify-center items-center text-sm font-bold gap-1 lg:text-lg">
                                    {item.titulo.icone}
                                    <p>{item.titulo.texto}</p>
                                </Link>
                                <ul className="absolute w-full h-fit top-[100%] left-0 hidden z-10">
                                    {
                                        item.subtititulo.map((subitem, i) => {
                                            return (
                                                <li key={i} className="px-2 py-1 bg-[--cor-principal] text-white xl:py-2">
                                                    <Link href={subitem.subtitulo.link} className="flex justify-center items-center text-sm font-bold gap-1 text-center">
                                                        <p>{subitem.subtitulo.nome}</p>
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
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