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
            <div className="grid grid-cols-[220px_1fr] lg:grid-cols-[220px_1fr_auto_100px] xl:grid-cols-[250px_1fr_auto_100px]">
                <div className="relative">
                    <div className="barraDiagonal"></div>
                    <OffCanvas />
                    <Link href={'/'} className="flex items-center absolute top-[50%] left-12 md:left-3" style={{ transform: 'translate(0,-50%)' }}>
                        <div className="relative w-12 h-12 md:w-14 md:h-14">
                            <Image alt="Logo GamerZone" src={'/logo/logo-gamer-zone.png'} fill className="object-cover" />
                        </div>
                        <div className="relative w-24 h-12 md:h-14 md:w-28">
                            <Image alt="Texto GamerZone" src={'/logo/texto-gamer-zone.png'} fill className="object-cover" />
                        </div>
                    </Link>
                </div>
                <div className="flex items-center">
                    <Menu estilo="flex items-center gap-3 text-sm lg:text-base 2xl:text-lg" visibilidade="hidden md:flex" />
                </div>
                <div className="flex items-center mr-5">
                    <Redes
                        estilo="hidden lg:grid grid-cols-2 gap-2 text-2xl lg:grid-cols-4"
                        visibilidadeLabel={false}
                        linkInstagram="/"
                        linkFacebook="/"
                        linkEmail="/"
                        linkTiktok="/"
                    />
                </div>
                <div className="my-auto ml-auto mr-2 row-start-1 row-end-2 col-start-2 col-end-3 md:col-start-3 md:col-end-4 lg:col-start-4 lg:col-end-5">
                    <Login estilo="lg:flex" larguraPerfil="7" />
                </div>
            </div>
            {
                paginaClube && clube && (
                    <Link href={`/paginaClube/${createSlug(clube.time)}`} className={`flex gap-2 items-center justify-center p-2 md:p-3 lg:px-4`} style={{ backgroundColor: `${clube.cor}` }}>
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