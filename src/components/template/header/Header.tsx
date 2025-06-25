import MenuSuperior from "@/components/menuSuperior/MenuSuperior";
import RedesSociais from "@/components/redesSociais/RedesSociais";
import SidebarComponent from "@/components/sidebarComponent/SidebarComponente";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

interface HeaderProps {
    logo?: boolean
    textoLogo?: boolean
    textoClube?: string
    logoClube?: string
    menuSuperior?: boolean
}

export default function Header({ logo, textoLogo, textoClube, menuSuperior, logoClube}: HeaderProps) {
    return (
        <header className="bg-amarelo p-2 flex items-center lg:gap-3 xl:gap-5 2xl:gap-8">
            {/* Logo */}
            <Link href={'/'} className={`flex items-center ${textoClube != '' ? '' : 'flex-1'}`}>
                <Image src={'/logo/logo-gamer-zone.png'} alt="Logo Gamerzone" width={50} height={50} className={logo ? 'block' : 'hidden'} />
                <Image src={'/logo/texto-gamer-zone.png'} alt="Texto Gamerzone" width={100} height={50} className={`-ml-1 ${textoLogo ? 'block' : 'hidden'} md:block`} />
            </Link>
            <div className={`${textoClube != '' ? 'flex' : 'hidden'} flex-1 justify-center items-center gap-2`}>
                {
                    logoClube != null ? (
                        <div className="relative w-6 h-6 lg:w-8 lg:h-8">
                            <Image alt="imagem" src={logoClube} fill className="object-contain"></Image>
                        </div>
                    ) : ''
                }
                <h2 className={`flex uppercase font-black text-2xl text-center justify-center leading-5 lg:text-3xl`} style={{ textShadow: '1px 1px 2px black' }}>{textoClube}</h2>
            </div>
            <SidebarComponent titulo={<GiHamburgerMenu className='text-4xl' />} styleTitulo="lg:hidden" />
            <MenuSuperior menuSuperior={menuSuperior} />
            <RedesSociais />
        </header>
    )
}