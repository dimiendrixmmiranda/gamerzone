import MenuSuperior from "@/components/menuSuperior/MenuSuperior";
import RedesSociais from "@/components/redesSociais/RedesSociais";
import SidebarComponent from "@/components/sidebarComponent/SidebarComponente";
import useAuth from "@/data/hooks/useAuth";
import Clube from "@/interfaces/Clube";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogIn } from "react-icons/io5";

interface HeaderProps {
    logo?: boolean
    textoLogo?: boolean
    menuSuperior?: boolean
    clube?: Clube | null
}

export default function Header({ logo, textoLogo, menuSuperior, clube }: HeaderProps) {
    const { usuario } = useAuth()

    return (
        <header className="bg-amarelo p-2 flex items-center lg:gap-3 xl:gap-5 2xl:gap-8">
            {/* Logo */}
            <Link href={'/'} className={`flex items-center ${clube?.nome != '' ? '' : 'flex-1'}`}>
                <Image src={'/logo/logo-gamer-zone.png'} alt="Logo Gamerzone" width={50} height={50} className={logo ? 'block' : 'hidden'} />
                <Image src={'/logo/texto-gamer-zone.png'} alt="Texto Gamerzone" width={100} height={50} className={`-ml-1 ${textoLogo ? 'block' : 'hidden'} md:block`} />
            </Link>
            <div className={`${clube?.nome != '' ? 'flex' : 'hidden'} flex-1 justify-center items-center gap-2`}>
                <Link href={`/paginaClube/${clube?.id}`} className="flex justify-center items-center gap-2">
                    {
                        clube?.enderecoImagem != null ? (
                            <div className="relative w-6 h-6 lg:w-8 lg:h-8">
                                <Image alt="imagem" src={clube?.enderecoImagem} fill className="object-contain"></Image>
                            </div>
                        ) : ''
                    }
                    <h2 className={`flex uppercase font-black text-2xl text-center justify-center leading-5 lg:text-3xl`} style={{ textShadow: '1px 1px 2px black' }}>{clube?.nome}</h2>
                </Link>
            </div>
            <SidebarComponent titulo={<GiHamburgerMenu className='text-4xl' />} styleTitulo="lg:hidden" />
            <MenuSuperior menuSuperior={menuSuperior} />
            <RedesSociais />

            {/* Área de login, validação, se tiver logado quero que apareça algo, caso contrario apareça o trecho abaixo*/}
            {
                usuario ? (
                    <div className="text-black font-bold hidden lg:flex items-center gap-2 xl:mr-2 2xl:mr-6">
                        <Image
                            src={'/default/user-default-men.png'}
                            // src={usuario.imagemURL || '/avatar-padrao.png'}
                            alt="Avatar"
                            width={32}
                            height={32}
                            className="rounded-full"
                        />
                    </div>
                ) : (
                    <Link href={'/cadastro'} className="hidden lg:flex">
                        <div className="text-white text-2xl p-1 bg-azul-escuro rounded-md flex items-center xl:mr-2 xl:px-2 2xl:mr-6">
                            <IoLogIn />
                            <p className="text-lg hidden xl:block">Entrar</p>
                        </div>
                    </Link>
                )
            }
        </header>
    )
}