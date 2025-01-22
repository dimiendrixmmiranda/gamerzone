'use client'
import Image from "next/image";
import Link from "next/link";
import style from './style.module.css'
import listaDeRedesSociais from "@/core/constants/ListaDeRedesSociais";
import Menu from "@/components/menu/Menu";
import listaDeMenus from "@/core/constants/ListaDeMenus";
import Offcanvas from "@/components/offcanvas/Offcanvas";

export default function Header() {
    return (
        <header className={style.header}>
            <Link href={'/'}>
                <div className="flex items-center justify-center">
                    <div className="w-[70px] h-[70px] relative">
                        <Image alt="Logo da GamerZone" src={'/logo/logo-gamer-zone.png'} fill className="object-cover" ></Image>
                    </div>
                    <div className="relative w-[120px] h-[50px]">
                        <Image alt="Texto GamerZone" src={'/logo/texto-gamer-zone.png'} fill className="object-cover" ></Image>
                    </div>
                </div>
            </Link>

            {/* Tipo do menu será igual ao da ESPN*/}
            <Menu tituloMenu={listaDeMenus[0].nome} icone={listaDeMenus[0].icone} linkMenu={listaDeMenus[0].linkMenu} submenu={listaDeMenus[0].submenu}></Menu>
            <Menu tituloMenu={listaDeMenus[1].nome} icone={listaDeMenus[1].icone} linkMenu={listaDeMenus[1].linkMenu} submenu={listaDeMenus[1].submenu}></Menu>
            <Menu tituloMenu={listaDeMenus[2].nome} icone={listaDeMenus[2].icone} linkMenu={listaDeMenus[2].linkMenu} submenu={listaDeMenus[2].submenu}></Menu>
            <Menu tituloMenu={listaDeMenus[3].nome} icone={listaDeMenus[3].icone} linkMenu={listaDeMenus[3].linkMenu} submenu={listaDeMenus[3].submenu}></Menu>

            {/* <button className="text-4xl self-center justify-self-center md:hidden"><GiHamburgerMenu /></button> */}
            <Offcanvas></Offcanvas>
            <ul className={style.rede}>
                {
                    listaDeRedesSociais.map((rede, i) => {
                        return (
                            <li key={i} className="text-sm flex justify-center items-end lg:text-lg">
                                <Link href={rede.link}>
                                    {rede.icone}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </header>
    )
}