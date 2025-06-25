import { Timestamp } from "firebase/firestore";

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
}