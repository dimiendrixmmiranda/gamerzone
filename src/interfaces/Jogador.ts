/* eslint-disable @typescript-eslint/no-explicit-any */

import { Nacionalidade } from "./Nacionalidade";

export interface Jogador {
    nome: string;
    nick: string;
    idade: string;
    imagem: string;
    nacionalidade: Nacionalidade;
    linkHLTV: string
    posicao: string
    imagemTime: string
    time: string
    descricao?: string
    votos?: number
    usuariosQueVotaram?: string[]
    configs?: any
    redes?: any
}