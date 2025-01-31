'use client'
import Link from "next/link"
import style from './style.module.css'
import Submenu from "@/core/menu/Submenu"
import Image from "next/image"

interface MenuProps {
    tituloMenu: string
    icone: React.ReactElement
    linkMenu?: string
    submenu?: Submenu[]
}

export default function Menu({ tituloMenu, icone, linkMenu, submenu }: MenuProps) {
    return (
        <div className={style.menu}>
            {
                linkMenu != undefined ? (
                    <Link href={linkMenu}>
                        <p className="text-xl">{icone}</p>
                        <p>{tituloMenu}</p>
                    </Link>
                ) : (
                    <div>
                        <p className="text-xl">{icone}</p>
                        <p>{tituloMenu}</p>
                        <div className={style.submenu}>
                            <h2>{tituloMenu}</h2>
                            {
                                submenu != undefined ? (
                                    <ul className="flex flex-col gap-1">
                                        {
                                            submenu.map((sub, i) => {
                                                return (
                                                    <li key={i}>
                                                        <Link href={sub.link} className="flex items-center text-black gap-1">
                                                            <div className="relative w-12 h-8">
                                                                <Image alt={sub.nome} src={sub.imagem ? sub.imagem : '/default/escudo-default.png'} fill className="object-cover"></Image>
                                                            </div>
                                                            <h2>{sub.nome}</h2>
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                ) : ''
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}