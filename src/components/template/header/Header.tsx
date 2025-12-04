'use client'
import Login from "@/components/login/Login";
import Menu from "@/components/menu/Menu";
import OffCanvas from "@/components/offcanvas/Offcanvas";
import Redes from "@/components/redes/Redes";
import { useClubeSelecionado } from "@/lib/hooks/useClubeSelecionado";
import { createSlug } from "@/lib/utils/createSlug";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
    paginaClube: boolean
}

export default function Header({ paginaClube }: HeaderProps) {
    const { clube } = useClubeSelecionado();

    return (
        <header className="bg-azul-escuro text-white flex flex-col">
            <div className="flex items-center p-2 md:gap-2 lg:gap-6 md:p-3 lg:px-4">
                <Link href={'/'} className="flex items-center">
                    <div className="relative w-12 h-12 md:w-14 md:h-14">
                        <Image alt="Logo GamerZone" src={'/logo/logo-gamer-zone.png'} fill className="object-cover" />
                    </div>
                    <div className="relative w-24 h-12 md:h-14 md:w-28">
                        <Image alt="Texto GamerZone" src={'/logo/texto-gamer-zone.png'} fill className="object-cover" />
                    </div>
                </Link>
                <Menu estilo="flex items-center gap-3" visibilidade="hidden md:flex"/>
                <Redes estilo="hidden md:grid grid-cols-2 gap-2 text-2xl lg:grid-cols-4" visibilidadeLabel={false}/>
                <Login />
                <OffCanvas />
            </div>
            {
                paginaClube && clube && (
                    <Link href={`/paginaClube/${createSlug(clube.time)}`} className={`flex gap-2 items-center justify-center p-2 md:p-3 lg:px-4`} style={{backgroundColor: `${clube.cor}`}}>
                        <div className="relative w-8 h-8 drop-shadow-[0_0_2px_rgba(0,0,0,0.8)]">
                            <Image alt="clube" src={clube.logo} fill className="object-contain" />
                        </div>
                        <h2 className="font-bold text-3xl" style={{ textShadow: '1px 1px 2px black' }}>{clube.time}</h2>
                    </Link>
                )
            }
        </header>
    )
}