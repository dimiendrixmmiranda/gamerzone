import RedesSociais from "@/components/redesSociais/RedesSociais";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        // altura tem que alterar depois
        <footer className="flex flex-col bg-amarelo p-4 w-full overflow-hidden break-words mb-[50px]">
            <Link href={'/'} className={`flex justify-center`}>
                <Image src={'/logo/logo-gamer-zone.png'} alt="Logo Gamerzone" width={100} height={50} />
                <Image src={'/logo/texto-gamer-zone.png'} alt="Texto Gamerzone" width={180} height={50} className="-ml-2"/>
            </Link>
            <div>
                <p className="font-cursiva font-bold text-2xl text-center" style={{textShadow: '1px 1px 2px black'}}>A voz oficial do universo gamer.</p>
            </div>
            <RedesSociais style="text-2xl mt-4"></RedesSociais>
            {/* Links */}
            <div>
                <h3>Links</h3>
            </div>
            {/* Contatos */}
            <div>
                <h3>Contatos</h3>
            </div>
        </footer>
    )
}