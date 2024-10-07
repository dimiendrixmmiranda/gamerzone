import { adicionarElemento } from "utils/adicionarElemento";
import Craque from "../craque/craque";
import { listaDeJogadores } from "./listaDeJogadores";

export const listaDeCraquesSemanal: Craque[] = []

adicionarElemento(listaDeCraquesSemanal, {
    semana: 1,
    jogadores: [
        listaDeJogadores.find(jogador => jogador.nick.toLowerCase() === 'niko'.toLowerCase()),
        listaDeJogadores.find(jogador => jogador.nick.toLowerCase() === 'Snax'.toLowerCase()),
        listaDeJogadores.find(jogador => jogador.nick.toLowerCase() === 'huNter'.toLowerCase()),
        listaDeJogadores.find(jogador => jogador.nick.toLowerCase() === 'm0NESY'.toLowerCase()),
        listaDeJogadores.find(jogador => jogador.nick.toLowerCase() === 'malbs'.toLowerCase()),
    ]
})