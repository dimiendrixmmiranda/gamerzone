import { Nacionalidade } from "./Nacionalidade";

export interface Jogador {
    nome: string;
    nick: string;
    idade: string; // pode virar number se desejar
    imagem: string;
    nacionalidade: Nacionalidade;
    linkHLTV: string
    posicao: string
    votos?: number
    usuariosQueVotaram?: string[]
}