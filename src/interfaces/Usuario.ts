import { Timestamp } from "firebase/firestore"

export type Usuario = {
    uid: string
    email: string
    nome: string
    nick: string
    dataNascimento: string | Timestamp
    token: string
    provedor: string
    imagemURL: string
    telefone: string
    sexo: string
    tipo: 'usuario' | 'adm'
}