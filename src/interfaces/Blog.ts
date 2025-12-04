import { Timestamp } from "firebase/firestore"
import Comentario from "./Comentario"

export default interface Blog {
    id: string
    nomeDaColuna: 'econ&strat' | 'operatorsmeta' | 'championstour' | 'proscene'
    titulo: string
    autor: string
    conteudo: string[]
    imagem: string
    comentarios: Comentario[]
    data:  Timestamp
}