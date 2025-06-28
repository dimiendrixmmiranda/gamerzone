import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaThreads, FaXTwitter } from "react-icons/fa6";

interface RedesSociaisProps{
    style: string
}

export default function RedesSociais({style}:RedesSociaisProps) {
    return (
        <nav className={`h-[40px] ${style}`}>
            <ul className="relative grid grid-cols-6 gap-2">
                <li className="self-center duration-300 transition-all justify-self-center hover:mb-3">
                    <Link href={'/'} className="bg-blue-500 text-azul-escuro">
                        <FaFacebook />
                    </Link>
                </li>
                <li className="self-center duration-300 transition-all justify-self-center hover:mb-3">
                    <Link href={'/'} className="bg-blue-500 text-azul-escuro">
                        <AiFillInstagram />
                    </Link>
                </li>
                <li className="self-center duration-300 transition-all justify-self-center hover:mb-3">
                    <Link href={'/'} className="bg-blue-500 text-azul-escuro">
                        <FaXTwitter />
                    </Link>
                </li>
                <li className="self-center duration-300 transition-all justify-self-center hover:mb-3">
                    <Link href={'/'} className="bg-blue-500 text-azul-escuro">
                        <FaYoutube />
                    </Link>
                </li>
                <li className="self-center duration-300 transition-all justify-self-center hover:mb-3">
                    <Link href={'/'} className="bg-blue-500 text-azul-escuro">
                        <FaTiktok />
                    </Link>
                </li>
                <li className="self-center duration-300 transition-all justify-self-center hover:mb-3">
                    <Link href={'/'} className="bg-blue-500 text-azul-escuro">
                        <FaThreads />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}