import { Timestamp } from "firebase/firestore"
import { Jogador } from "./Jogador"

export default interface ListaDeCraques {
    id: string
    data: string | Timestamp
    encerrado: boolean
    listaDeCraquesDaSemana: Jogador[]
    semanaCorrente: boolean
    usuariosQueJaVotaram: string[]
}