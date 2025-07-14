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
                    <div className="p-4 flex flex-col min-h-screen overflow-hidden">
                        <h2 className="font-black text-2xl text-center">Bem vindo {usuarioIdentificado?.nick}</h2>
                        <div className="relative w-[150px] h-[150px] bg-blue-300 mx-auto rounded-full overflow-hidden">
                            <Image alt={`Imagem do usuário ${usuarioIdentificado.nome}`} src={usuarioIdentificado.imagem} fill className="object-cover" />
                        </div>
                        <ul className="flex flex-col gap-2 mx-auto">
                            <li className="flex font-bold text-xl items-center">
                                <p className="leading-6"><strong className="uppercase">Nome:</strong> {usuarioIdentificado.nome}</p>
                            </li>
                            <li className="flex font-bold text-xl items-center">
                                <p className="leading-6 flex"><strong className="uppercase">Nickname:</strong> {usuarioIdentificado.email}</p>
                            </li>
                            <li className="flex font-bold text-xl items-center">
                                <p className="leading-6 flex"><strong className="uppercase">Email:</strong> {usuarioIdentificado.email}</p>
                            </li>
                            <li className="flex flex-col font-bold text-xl items-center">
                                <strong className="uppercase self-start">Biografia:</strong>
                                <span>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </span>
                            </li>
                        </ul>
                        <div className="flex gap-2">
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
            <button onClick={() => {
                if (logout) {
                    logout('/')
                }
            }}>Logaut</button>
        </Template>
    )
}