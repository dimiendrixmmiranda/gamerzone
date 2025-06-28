'use client'

import { useEffect, useState } from "react"
import useAuth from "./useAuth"
import useUsuarios from "./useUsuarios"
import UsuarioElemento from "@/interfaces/UsuarioElemento"

export default function useUsuarioIdentificado() {
    const { usuario } = useAuth()
    const listaDeUsuarios = useUsuarios()
    const [usuarioIdentificado, setUsuarioIdentificado] = useState<UsuarioElemento | null>(null)

    useEffect(() => {
        if (!usuario || listaDeUsuarios.length === 0) return

        const encontrado = listaDeUsuarios.find(u => u.id === usuario.uid)
        setUsuarioIdentificado(encontrado ?? null)
    }, [usuario, listaDeUsuarios])

    return usuarioIdentificado
}
