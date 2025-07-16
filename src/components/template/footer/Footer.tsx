import RedesSociais from "@/components/redesSociais/RedesSociais";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        // altura tem que alterar depois
        <footer className="bg-amarelo p-4 mb-10 lg:mb-0">
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:max-w-[1100px] xl:mx-auto">
                <Link href={'/'} className={`flex justify-center md:col-start-1 md:col-end-3 lg:col-end-2`}>
                    <Image src={'/logo/logo-gamer-zone.png'} alt="Logo Gamerzone" width={100} height={50} />
                    <Image src={'/logo/texto-gamer-zone.png'} alt="Texto Gamerzone" width={180} height={50} className="-ml-2" />
                </Link>
                <div className="md:col-start-1 md:col-end-3 lg:col-start-1 lg:col-end-2">
                    <p className="font-cursiva font-bold text-2xl text-center" style={{ textShadow: '1px 1px 2px black' }}>A voz oficial do universo gamer.</p>
                </div>
                <RedesSociais style="text-2xl mt-4 md:col-start-1 md:col-end-3 lg:col-start-1 lg:col-end-4"></RedesSociais>
                {/* Links */}
                <div className="lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3">
                    <h3>Links</h3>
                    <ul>
                        <li>
                            <Link href={'/'}>
                                Sobre nós
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                Avisos importantes
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                Termos de uso
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                Política de privacidade
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                Trabalhe com a gente
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Contatos */}
                <div className="lg:row-start-1 lg:row-end-3 lg:col-start-3 lg:col-end-4">
                    <h3>Contatos</h3>
                    <ul>
                        <li>
                            <a href="mailto:dmmiranda014@gmail.com" className="cursor-pointer">
                                Imprensa: dmmiranda014@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="mailto:dmmiranda014@gmail.com" className="cursor-pointer">
                                Contato: dmmiranda014@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="mailto:dmmiranda014@gmail.com" className="cursor-pointer">
                                Comercial: dmmiranda014@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}