
import { Campeonato } from "@/interfaces/Campeonato";
import { createSlug } from "@/lib/utils/createSlug";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuMapPinHouse } from "react-icons/lu";
import { RiComputerFill } from "react-icons/ri";

interface CardCampeonatoProps {
    estilo: string
    estiloImagem: string
    campeonato: Campeonato
    estiloTitulo?: string
    estiloData?: string
}

export default function CardCampeonato({ estilo, estiloImagem, estiloTitulo, estiloData, campeonato }: CardCampeonatoProps) {
    return (
        <li className={`${estilo}`}>
            <Link href={`/campeonatos/${createSlug(campeonato.id)}`} className="w-full h-full flex flex-col gap-4 relative">
                <div className={estiloImagem}>
                    <Image alt={campeonato?.nome} src={campeonato?.imagem} fill className="object-cover" />
                </div>
                <div className="flex flex-col gap-1">
                    <h2 className={`font-bold text-xl leading-6 text-center ${estiloTitulo}`}>{campeonato.nome}</h2>
                    <p className={`text-center ${estiloData}`}>de {campeonato.dataDeInicio} à {campeonato.dataDeFim}</p>
                </div>
                <div className="absolute top-0 left-0 w-full flex justify-between text-sm" style={{ textShadow: '1px 1px 2px black' }}>
                    {
                        campeonato.local === 'lan' ? (
                            <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded-[6px]">
                                <RiComputerFill />
                                <p className="capitalize">{campeonato.local}</p>
                            </div>
                        ) : (
                            <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded-[6px]">
                                <LuMapPinHouse />
                                <p className="capitalize">{campeonato.local}</p>
                            </div>
                        )
                    }
                    <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded-[6px]">
                        <FaRegCalendarAlt />
                        <p className="capitalize">em 134 dias</p>
                    </div>
                </div>
            </Link>
        </li>
    )
}