import { Timestamp } from "firebase/firestore"
import { Jogador } from "./Jogador"
import Time from "./Time"

export default interface Transferencia {
    id: string
    data: Timestamp
    jogadorAtual: Jogador
    linkHighlight: string
    situacaoTransferencia: string
    timeAtual: Time
    timeDestino: Time
    valorDaTransferencia: string
    likes: string[]
    deslikes: string[]
}