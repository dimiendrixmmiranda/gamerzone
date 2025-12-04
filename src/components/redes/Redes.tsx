import { listaDeRedesSociais } from "@/constants/Redes";
import Link from "next/link";

interface RedesProps {
    estilo: string,
    visibilidadeLabel: boolean
}

export default function Redes({ estilo, visibilidadeLabel }: RedesProps) {
    return (
        // 
        <nav>
            <ul className={estilo}>
                {
                    listaDeRedesSociais.map((rede, i) => {
                        return (
                            <li key={i} className="mx-auto">
                                <Link href={rede.link}>
                                    <div className="flex items-center gap-1">
                                        <div>
                                            {rede.icone}
                                        </div>
                                        <p className={`${visibilidadeLabel ? 'flex': 'hidden'}`}>{rede.label}</p>
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}