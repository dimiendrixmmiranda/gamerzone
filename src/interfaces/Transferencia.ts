import { Timestamp } from "firebase/firestore"

export default interface Transferencia{
    id: string
    nome: string
    fotoDoJogador: string
    posicao: string
    situacao: string
    timeAtual: {nome: string, escudo: string}
    novoTime: {nome: string, escudo: string}
    data: Timestamp
}