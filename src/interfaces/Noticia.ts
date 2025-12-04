import { Timestamp } from "firebase/firestore";
import Comentario from "./Comentario";
import Time from "./Time";

export default interface Noticia {
    id: string
    autor: string;
    conteudoDaNoticia: string[];
    data: Timestamp;
    esporte: string;
    timesEnvolvidos: Time[]
    imagem: string;
    subtitulo: string;
    titulo: string;
    comentarios: Comentario[]
    tipo?: string
}