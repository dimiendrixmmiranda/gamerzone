import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaThreads, FaXTwitter } from "react-icons/fa6";

export default function RedesSociais() {
    return (
        <nav className="hidden lg:flex">
            <ul className="relative flex gap-1 xl:mr-4">
                <li>
                    <Link href={'/'} className="bg-blue-500 text-azul-escuro xl:text-lg 2xl:text-xl">
                        <FaFacebook />
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className="bg-blue-500 text-azul-escuro xl:text-lg 2xl:text-xl">
                        <AiFillInstagram />
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className="bg-blue-500 text-azul-escuro xl:text-lg 2xl:text-xl">
                        <FaXTwitter />
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className="bg-blue-500 text-azul-escuro xl:text-lg 2xl:text-xl">
                        <FaYoutube />
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className="bg-blue-500 text-azul-escuro xl:text-lg 2xl:text-xl">
                        <FaTiktok />
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className="bg-blue-500 text-azul-escuro xl:text-lg 2xl:text-xl">
                        <FaThreads />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}