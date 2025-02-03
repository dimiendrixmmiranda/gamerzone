import extractYouTubeId from "@/utils/extrairIdThumbnailVideo";
import { Jogos } from "../jogos/Jogos";

const lista: Jogos[] = [
    {
        id: 1,
        titulo: 'G2 2X1 Falcons',
        video: 'https://www.youtube.com/watch?v=cp4x-93J8e4',
        idVideo: ''
    },
    {
        id: 2,
        titulo: 'G2 2X1 Falcons',
        video: 'https://www.youtube.com/watch?v=cp4x-93J8e4',
        idVideo: ''
    },
    {
        id: 3,
        titulo: 'G2 2X1 Falcons',
        video: 'https://www.youtube.com/watch?v=cp4x-93J8e4',
        idVideo: ''
    },
    {
        id: 4,
        titulo: 'G2 2X1 Falcons',
        video: 'https://www.youtube.com/watch?v=cp4x-93J8e4',
        idVideo: ''
    },
]

const listaDeJogos = lista.map((jogo => {
    return {
        ...jogo,
        idVideo: extractYouTubeId(jogo.video)
    }
}))

export {
    listaDeJogos
}