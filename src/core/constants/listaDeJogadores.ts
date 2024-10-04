import { adicionarElemento } from "@/utils/adicionarElemento";
import Jogador from "../jogadores/jogadores";

export const listaDeJogadores: Jogador[] = []
adicionarElemento(
    listaDeJogadores,
    {
        id: 1,
        imagem: '/wireframe.png',
        nome: 'Janusz "Snax" Pogorzelski',
        nick: "Snax",
        posicao: 'IGL',
        time: 'G2'
    }
);

adicionarElemento(
    listaDeJogadores,
    {
        id: 2,
        imagem: '/wireframe.png',
        nome: 'Nikola "NiKo" Kovač',
        nick: "NiKo",
        posicao: 'Rifler',
        time: 'G2'
    }
);

adicionarElemento(
    listaDeJogadores,
    {
        id: 3,
        imagem: '/wireframe.png', 
        nome: 'Nemanja "huNter-" Kovač',
        nick: "huNter",
        posicao: 'Rifler',
        time: 'G2'
    }
);

adicionarElemento(
    listaDeJogadores,
    {
        id: 4,
        imagem: '/wireframe.png',
        nome: 'Ilya "m0NESY" Osipov',
        nick: "m0NESY",
        posicao: 'AWPer',
        time: 'G2'
    }
);

adicionarElemento(
    listaDeJogadores,
    {
        id: 5,
        imagem: '/wireframe.png',
        nome: 'Mario "malbs" Samayoa',
        nick: "malbs",
        posicao: 'Entry Fragger',
        time: 'G2'
    }
);
