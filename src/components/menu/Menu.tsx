import { listaDeMenu } from "@/constants/Menu";
import Link from "next/link";

interface MenuProps {
    visibilidade: string
    estilo: string
}

export default function Menu({ visibilidade, estilo }: MenuProps) {
    return (
        <nav className={`${visibilidade} justify-center my-auto lg:flex-none lg:mr-auto`}>
            <ul className={estilo}>
                {
                    listaDeMenu.map((menu, i) => {
                        return (
                            <li key={i} className="p-1 transition-all duration-300 rounded-[6px] hover:bg-white hover:text-azul-escuro hover:mb-2">
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