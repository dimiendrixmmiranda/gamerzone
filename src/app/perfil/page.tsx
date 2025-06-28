'use client'
import Template from "@/components/template/Template"
import useAuth from "@/data/hooks/useAuth"
import useUsuarioIdentificado from "@/data/hooks/useUsuarioIndentificado"
import Image from "next/image"

export default function Page() {
    const { logout } = useAuth()
    const usuarioIdentificado = useUsuarioIdentificado()
    console.log(usuarioIdentificado)
    return (
        <Template logo={true} textoLogo={true} menuSuperior={true}>
            {
                usuarioIdentificado ? (
                    <div className="p-4 flex flex-col min-h-screen">
                        <h2 className="font-black text-2xl text-center">Bem vindo {usuarioIdentificado?.nick}</h2>
                        <div className="relative w-[150px] h-[150px] bg-blue-300 mx-auto rounded-full overflow-hidden">
                            <Image alt={`Imagem do usuário ${usuarioIdentificado.nome}`} src={usuarioIdentificado.imagem} fill className="object-cover" />
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