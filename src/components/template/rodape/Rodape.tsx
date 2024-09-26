import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

import style from './rodape.module.css'

export default function Rodape() {
    return (
        <footer className={`w-full bg-[--cor-principal] mt-10 xl:pt-3 ${style.rodape}`}>
            <div className="flex justify-center items-center p-2">
                <div className="flex">
                    <img src="./logo-gamer-zone.png" alt="" className="w-[80px]" />
                    <img src="./texto-gamer-zone.png" alt="" className="w-[140px] -ml-2" />
                </div>
            </div>
            <div className="flex flex-wrap gap-3 justify-center mt-2 px-2">
                <div className="w-45% flex flex-col gap-1 md:flex-1">
                    <h3 className="uppercase font-bold">Links</h3>
                    <ul className="flex flex-col">
                        <li className="text-sm leading-4">
                            <Link href={'/'}>Sobre Nós</Link>
                        </li>
                        <li className="text-sm leading-4">
                            <Link href={'/'}>Avisos Importantes</Link>
                        </li>
                        <li className="text-sm leading-4">
                            <Link href={'/'}>Termos de Uso</Link>
                        </li>
                        <li className="text-sm leading-4">
                            <Link href={'/'}>Política de Privacidade</Link>
                        </li>
                        <li className="text-sm leading-4">
                            <Link href={'/'}>Trabalhe com a gente</Link>
                        </li>
                    </ul>
                </div>
                <div className="w-45% flex flex-col gap-1 md:flex-1">
                    <h3 className="uppercase font-bold">Redes Sociais</h3>
                    <ul className="flex">
                        <li className="text-xl xl:text-2xl">
                            <Link href={'/'}><FaFacebookSquare /></Link>
                        </li>
                        <li className="text-xl xl:text-2xl">
                            <Link href={'/'}><FaSquareInstagram /></Link>
                        </li>
                        <li className="text-xl xl:text-2xl">
                            <Link href={'/'}><AiFillTikTok /></Link>
                        </li>
                        <li className="text-xl xl:text-2xl">
                            <Link href={'/'}><FaXTwitter /></Link>
                        </li>
                    </ul>
                </div>
                <div className="w-45% flex flex-col gap-1 md:flex-1">
                    <h3 className="uppercase font-bold">Links para Contato</h3>
                    <ul className="flex flex-col">
                        <li className="text-sm leading-4">
                            <Link href={'mailto:dimiendrixmmiranda@gmail.com'}>Imprensa: dimiendrixmmiranda@gmail.com</Link>
                        </li>
                        <li className="text-sm leading-4">
                            <Link href={'mailto:dimiendrixmmiranda@gmail.com'}>Contato: dimiendrixmmiranda@gmail.com</Link>
                        </li>
                        <li className="text-sm leading-4">
                            <Link href={'mailto:dimiendrixmmiranda@gmail.com'}>Comercial: dimiendrixmmiranda@gmail.com</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <h2 className="text-center bg-black leading-5 font-black uppercase p-2 mt-4">Desenvolvido por Dimi Endrix Martins Miranda</h2>
        </footer>
    )
}

