import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

import style from './rodape.module.css'

export default function Rodape() {
    return (
        <footer className={`w-full bg-[--cor-principal] ${style.rodape}`}>
            <div className="p-2 pb-4 flex flex-col justify-center gap-4 xl:justify-center">
                <div className="flex h-[100px]">
                    <img src="/logo-gamer-zone.png" alt="Logo" className="h-full" />
                    <img src="/texto-gamer-zone.png" alt="texto" className="h-full" />
                </div>
                <div className="flex flex-col uppercase font-semibold self-center">
                    <h2 className="text-center">Nos encontre nas Redes Sociais</h2>
                    <ul className="redes-sociais flex h-[40px] justify-center items-center">
                        <li className="text-3xl flex-1 relative flex justify-center items-center" data-social="Facebook">
                            <Link href={'/'}><FaFacebookSquare /></Link>
                        </li>
                        <li className="text-3xl flex-1 relative flex justify-center items-center" data-social="Instagram">
                            <Link href={'/'}><FaSquareInstagram /></Link>
                        </li>
                        <li className="text-3xl flex-1 relative flex justify-center items-center" data-social="Tiktok">
                            <Link href={'/'}><AiFillTikTok /></Link>
                        </li>
                        <li className="text-3xl flex-1 relative flex justify-center items-center" data-social="Twitter">
                            <Link href={'/'}><FaXTwitter /></Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="uppercase font-bold">Links para Contato</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="text-sm leading-4">
                            <Link href={'mailto:dimiendrixmmiranda@gmail.com'} className="hover:text-zinc-500">Imprensa: dimiendrixmmiranda@gmail.com</Link>
                        </li>
                        <li className="text-sm leading-4">
                            <Link href={'mailto:dimiendrixmmiranda@gmail.com'} className="hover:text-zinc-500">Contato: dimiendrixmmiranda@gmail.com</Link>
                        </li>
                        <li className="text-sm leading-4">
                            <Link href={'mailto:dimiendrixmmiranda@gmail.com'} className="hover:text-zinc-500">Comercial: dimiendrixmmiranda@gmail.com</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="uppercase font-bold">Endereço</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="leading-3">Avenida Paraná, 2989</li>
                        <li className="leading-3">Joaquim Távora - PR</li>
                        <li className="leading-3">86455000</li>
                        <li className="leading-3">Brasil</li>
                    </ul>
                </div>
            </div>
            <div className="bg-black flex flex-col md:flex-row md:gap-3 md:justify-center">
                <h2 className="text-center leading-5 font-black uppercase py-2 md:text-xl">Desenvolvido por Dimi Endrix Martins Miranda</h2>
                <ul className="flex justify-center items-center md:gap-4">
                    <li className="text-2xl flex-1 relative flex justify-center items-center" data-social="Facebook">
                        <Link href={'/'}><FaFacebookSquare /></Link>
                    </li>
                    <li className="text-2xl flex-1 relative flex justify-center items-center" data-social="Instagram">
                        <Link href={'/'}><FaSquareInstagram /></Link>
                    </li>
                    <li className="text-2xl flex-1 relative flex justify-center items-center" data-social="Tiktok">
                        <Link href={'/'}><AiFillTikTok /></Link>
                    </li>
                    <li className="text-2xl flex-1 relative flex justify-center items-center" data-social="Twitter">
                        <Link href={'/'}><FaXTwitter /></Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

