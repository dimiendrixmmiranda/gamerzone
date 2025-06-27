import { Timestamp } from "firebase/firestore";
import Comentario from "./Comentario";

export default interface Noticia {
    id: string
    autor: string;
    conteudoDaNoticia: string[];
    data: Timestamp;
    esporte: string;
    imagem: string;
    subtitulo: string;
    titulo: string;
    tags: string[]
    comentarios: Comentario[]
}