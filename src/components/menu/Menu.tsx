import { listaDeMenu } from "@/constants/Menu";
import Link from "next/link";

interface MenuProps {
    visibilidade: string
    estilo: string
}

export default function Menu({ visibilidade, estilo }: MenuProps) {
    return (
        <nav className={`${visibilidade} flex-1 justify-center lg:flex-none lg:mr-auto lg:text-lg`}>
            <ul className={estilo}>
                {
                    listaDeMenu.map((menu, i) => {
                        return (
                            <li key={i}>
                                <Link href={menu.link} className="flex items-center gap-1 font-bold">
                                    <div>
                                        {menu.icone}
                                    </div>
                                    <p>
                                        {menu.label}
                                    </p>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}