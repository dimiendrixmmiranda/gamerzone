'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGears } from "react-icons/fa6";
import { GiTrophy } from "react-icons/gi";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";
import { MdScoreboard } from "react-icons/md";

interface MenuSuperiorProps {
    menuSuperior?: boolean
}

export default function MenuSuperior({ menuSuperior }: MenuSuperiorProps) {
    // busca pode virar função
    const [busca, setBusca] = useState('')
    const router = useRouter()

    const handleBuscar = () => {
        if (busca.trim() !== '') {
            router.push(`/buscar?query=${encodeURIComponent(busca)}`)
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleBuscar()
    }

    return (
        <nav className={menuSuperior ? 'block' : 'hidden'}>
            <ul className="hidden items-center gap-4 lg:flex">
                <li>
                    <Link href={'/'} className="font-bold flex items-center gap-1 text-lg px-2 py-1 rounded-md transition-all duration-300 hover:bg-azul-escuro" style={{ textShadow: '1px 1px 2px black' }}>
                        <MdScoreboard className="text-2xl" />
                        <h2>Jogos</h2>
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className="font-bold flex items-center gap-1 text-lg px-2 py-1 rounded-md transition-all duration-300 hover:bg-azul-escuro" style={{ textShadow: '1px 1px 2px black' }}>
                        <GiTrophy className="text-2xl" />
                        <h2>Campeonatos</h2>
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className="font-bold flex items-center gap-1 text-lg px-2 py-1 rounded-md transition-all duration-300 hover:bg-azul-escuro" style={{ textShadow: '1px 1px 2px black' }}>
                        <FaGears className="text-2xl" />
                        <h2>CFG dos PRO</h2>
                    </Link>
                </li>
                <li className="grid bg-preto max-w-[160px] w-full overflow-hidden rounded-md xl:ml-[10px] xl:max-w-[200px]" style={{ gridTemplateColumns: '1fr 30px' }}>
                    <input
                        type="text"
                        name="buscar"
                        id="buscar"
                        placeholder="Faça uma busca..."
                        className="px-2 py-1 bg-preto w-full outline-none"
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button onClick={handleBuscar} className="text-2xl flex justify-center items-center">
                        <HiMagnifyingGlassCircle />
                    </button>
                </li>
            </ul>
        </nav>
    )
}