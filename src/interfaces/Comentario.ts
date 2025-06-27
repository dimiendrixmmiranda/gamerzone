import { Timestamp } from "firebase/firestore"

export default interface Comentario{
    nome: string
    nick: string
    mensagem: string
    imagem: string,
    data: Timestamp
}