import { Timestamp } from "firebase/firestore"
import Time from "./Time"

export default interface ListaDeTimes {
    id: string
    data: Timestamp | Date | null | undefined
    encerrado: boolean
    listaDeTimesDaRodada: Time[]
    semanaCorrente: boolean
    usuariosQueJaVotaram: string[]
}