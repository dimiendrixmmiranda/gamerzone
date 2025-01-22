'use client'
import Link from "next/link"
import style from './style.module.css'
import Submenu from "@/core/menu/Submenu"

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
                        {
                            submenu != undefined ? (
                                <ul className={style.submenu}>
                                    
                                </ul>
                            ) : ''
                        }
                    </div>
                )
            }
        </div>
    )
}