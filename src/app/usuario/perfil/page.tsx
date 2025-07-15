'use client'
import Template from "@/components/template/Template"
import useAuth from "@/data/hooks/useAuth"
import useUsuarioIdentificado from "@/data/hooks/useUsuarioIndentificado"
import Image from "next/image"
import Link from "next/link"
import { FaClipboardUser } from "react-icons/fa6"
import { IoLogOutSharp } from "react-icons/io5"

export default function Page() {
    const { logout } = useAuth()
    const usuarioIdentificado = useUsuarioIdentificado()

    return (
        <Template logo={true} textoLogo={true} menuSuperior={true}>
            {
                usuarioIdentificado ? (
                    <div className="p-4 flex flex-col max-w-[800px] mx-auto gap-4 md:min-h-[85vh] md:gap-6 xl:max-w-[1000px]">
                        <h2 className="font-black text-2xl text-center md:text-4xl">Bem vindo {usuarioIdentificado?.nick}</h2>
                        <div className="relative w-[150px] h-[150px] bg-blue-300 mx-auto rounded-full overflow-hidden md:w-[200px] md:h-[200px]">
                            <Image alt={`Imagem do usuário ${usuarioIdentificado.nome}`} src={usuarioIdentificado.imagem} fill className="object-cover" />
                        </div>
                        <ul className="flex flex-col gap-2 mx-auto xl:gap-5">
                            <li className="flex font-bold text-xl items-center xl:text-2xl">
                                <p className="leading-6 break-words"><strong className="uppercase mr-2">Nome:</strong> {usuarioIdentificado.nome}</p>
                            </li>
                            <li className="flex font-bold text-xl items-center xl:text-2xl">
                                <p className="leading-6 break-all"><strong className="uppercase mr-2">Nickname:</strong> {usuarioIdentificado.email}</p>
                            </li>
                            <li className="flex font-bold text-xl items-center xl:text-2xl">
                                <p className="leading-6 flex break-all"><strong className="uppercase mr-2 text-nowrap">Email:</strong> {usuarioIdentificado.email}</p>
                            </li>
                            <li className="flex flex-col font-bold text-xl items-center xl:text-2xl">
                                <strong className="uppercase self-start">Biografia:</strong>
                                <span className="break-words self-start">
                                    {
                                        usuarioIdentificado.bio
                                    }
                                </span>
                            </li>
                        </ul>
                        <div className="flex gap-2 ml-auto">
                            <Link href={'/usuario/configuracoes'} className="flex items-center gap-1 bg-amarelo text-white uppercase font-bold px-4 py-2 transition-all duration-300 hover:bg-azul-escuro">
                                <FaClipboardUser className="mb-[2px]" />
                                Alterar Dados
                            </Link>
                            <button
                                className="flex items-center gap-1 bg-amarelo text-white uppercase font-bold px-4 py-2 transition-all duration-300 hover:bg-azul-escuro"
                                onClick={() => {
                                    if (logout) {
                                        logout('/')
                                    }
                                }}
                            >
                                <IoLogOutSharp className="mb-[2px]" />
                                Sair
                            </button>
                        </div>
                    </div>
                ) : ''
            }
        </Template>
    )
}