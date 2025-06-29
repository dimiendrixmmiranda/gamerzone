'use client'
import MenuSuperior from "@/components/menuSuperior/MenuSuperior";
import RedesSociais from "@/components/redesSociais/RedesSociais";
import SidebarComponent from "@/components/sidebarComponent/SidebarComponente";
import useAuth from "@/data/hooks/useAuth";
import Clube from "@/interfaces/Clube";
import Image from "next/image";
import Link from "next/link";
import { FaGears } from "react-icons/fa6";
import { GiHamburgerMenu, GiTrophy } from "react-icons/gi";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";
import { IoLogIn, IoLogOutSharp, IoSettings } from "react-icons/io5";
import { MdScoreboard } from "react-icons/md";
import { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import type { OverlayPanel as OverlayPanelType } from 'primereact/overlaypanel';
import { ImUser } from "react-icons/im";
import useUsuarioIdentificado from "@/data/hooks/useUsuarioIndentificado";
import { FaUser } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";

interface HeaderProps {
    logo?: boolean
    textoLogo?: boolean
    menuSuperior?: boolean
    clube?: Clube | null
}

export default function Header({ logo, textoLogo, menuSuperior, clube }: HeaderProps) {
    const { usuario, logout } = useAuth()
    const op = useRef<OverlayPanelType>(null)
    const usuarioIdentificado = useUsuarioIdentificado()

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
                                <Image alt="imagem" src={clube?.enderecoImagem} fill className="object-contain" unoptimized></Image>
                            </div>
                        ) : ''
                    }
                    <h2 className={`flex uppercase font-black text-2xl text-center justify-center leading-5 lg:text-3xl`} style={{ textShadow: '1px 1px 2px black' }}>{clube?.nome}</h2>
                </Link>
            </div>
            <SidebarComponent
                titulo={<GiHamburgerMenu className='text-4xl' />}
                styleTitulo="lg:hidden"
                header={
                    <h2 className="text-white uppercase font-bold text-3xl" style={{ textShadow: '1px 1px 2px black' }}>Menu</h2>
                }
            >
                <div className="flex flex-col gap-4 w-full h-full">
                    {
                        usuarioIdentificado ? (
                            <div className="flex items-center gap-2">
                                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                    <Image alt={usuarioIdentificado.nome} src={usuarioIdentificado.imagem} fill className="object-cover" />
                                </div>
                                <p className="text-xl font-bold leading-4 text-white" style={{ textShadow: '1px 1px 2px black' }}>Bem Vindo {usuarioIdentificado.nick}</p>
                                <button
                                    className="text-2xl ml-auto"
                                    onClick={(e) => op.current?.toggle(e)}
                                >
                                    <CgMenuGridO />
                                </button>
                            </div>
                        ) : (
                            <Link href={'/cadastro'} className="flex items-center gap-2">
                                <div className="bg-zinc-600 text-white p-2 rounded-full">
                                    <FaUser />
                                </div>
                                <p className="text-xl font-bold leading-4 text-white" style={{ textShadow: '1px 1px 2px black' }}>Entrar/Criar Conta</p>
                            </Link>
                        )
                    }
                    <nav>
                        <ul className="flex flex-col gap-2">
                            <li className="grid bg-preto w-full overflow-hidden rounded-md mb-4" style={{ gridTemplateColumns: '1fr 30px' }}>
                                <input type="text" name="buscar" id="buscar" placeholder="Faça uma busca..." className="p-2 bg-preto w-full outline-none h-[40px] text-white" />
                                <button className="text-4xl flex justify-center items-center">
                                    <HiMagnifyingGlassCircle />
                                </button>
                            </li>
                            <li>
                                <Link href={'/'} className="font-bold text-white flex items-center gap-1 text-lg p-2 rounded-md transition-all duration-300 hover:bg-azul-escuro hover:text-white" style={{ textShadow: '1px 1px 2px black' }}>
                                    <MdScoreboard className="text-2xl text-azul-escuro" />
                                    <h2>Jogos</h2>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'} className="font-bold text-white flex items-center gap-1 text-lg p-2 rounded-md transition-all duration-300 hover:bg-azul-escuro hover:text-white" style={{ textShadow: '1px 1px 2px black' }}>
                                    <GiTrophy className="text-2xl text-azul-escuro" />
                                    <h2>Campeonatos</h2>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'} className="font-bold text-white flex items-center gap-1 text-lg p-2 rounded-md transition-all duration-300 hover:bg-azul-escuro hover:text-white" style={{ textShadow: '1px 1px 2px black' }}>
                                    <FaGears className="text-2xl text-azul-escuro" />
                                    <h2>CFG dos PRO</h2>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <RedesSociais style="mt-auto text-2xl" />
                </div>
            </SidebarComponent>
            <MenuSuperior menuSuperior={menuSuperior} />
            <RedesSociais style="hidden xl:text-lg 2xl:text-xl lg:flex" />

            {/* Área de login, validação, se tiver logado quero que apareça algo, caso contrario apareça o trecho abaixo*/}
            {
                usuario ? (
                    <div className="text-black font-bold hidden lg:flex items-center gap-2 xl:mr-2 2xl:mr-6 relative">
                        <Image
                            src={'/default/user-default-men.png'}
                            alt="Avatar"
                            width={32}
                            height={32}
                            className="rounded-full cursor-pointer"
                            onClick={(e) => op.current?.toggle(e)}
                        />
                        <OverlayPanel ref={op}>
                            <nav>
                                <ul>
                                    <li>
                                        <Link href={'/'} className="flex items-center gap-1 py-1 text-lg text-black">
                                            <ImUser />
                                            <p>Perfil</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'} className="flex items-center gap-1 py-1 text-lg text-black">
                                            <IoSettings />
                                            <p>Configurações</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            className="flex items-center gap-1 py-1 text-lg text-black"
                                            onClick={() => {
                                                if (logout) {
                                                    logout('/')
                                                }
                                            }}
                                        >
                                            <IoLogOutSharp />
                                            <p>Sair</p>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </OverlayPanel>
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