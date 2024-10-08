import React from "react"

interface Subtititulo {
    subtitulo: {
        nome: string
        link: string
    }
}

export default interface Menu {
    titulo: {
        texto: string,
        icone: React.ReactElement
        link: string
    }
    subtititulo: Subtititulo[]
}