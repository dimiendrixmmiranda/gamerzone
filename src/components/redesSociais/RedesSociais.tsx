import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaThreads, FaXTwitter } from "react-icons/fa6";

export default function RedesSociais() {
    return (
        <nav className="hidden lg:flex h-[40px]">
            <ul className="relative flex gap-1">
                <li className="self-center duration-300 transition-all hover:mb-3">
                    <Link href={'/'} className="bg-blue-500 text-azul-escuro xl:text-lg 2xl:text-xl">
                        <FaFacebook />
                    </Link>
                </li>
                <li className="self-center duration-300 transition-all hover:mb-3">
                    <Link href={'/'} className="bg-blue-500 text-azul-escuro xl:text-lg 2xl:text-xl">
                        <AiFillInstagram />
                    </Link>
                </li>
                <li className="self-center duration-300 transition-all hover:mb-3">
                    <Link href={'/'} className="bg-blue-500 text-azul-escuro xl:text-lg 2xl:text-xl">
                        <FaXTwitter />
                    </Link>
                </li>
                <li className="self-center duration-300 transition-all hover:mb-3">
                    <Link href={'/'} className="bg-blue-500 text-azul-escuro xl:text-lg 2xl:text-xl">
                        <FaYoutube />
                    </Link>
                </li>
                <li className="self-center duration-300 transition-all hover:mb-3">
                    <Link href={'/'} className="bg-blue-500 text-azul-escuro xl:text-lg 2xl:text-xl">
                        <FaTiktok />
                    </Link>
                </li>
                <li className="self-center duration-300 transition-all hover:mb-3">
                    <Link href={'/'} className="bg-blue-500 text-azul-escuro xl:text-lg 2xl:text-xl">
                        <FaThreads />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}