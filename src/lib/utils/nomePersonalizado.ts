import { Jogador } from "@/interfaces/Jogador";

export default function nomePersonalizado(jogador: Jogador) {
    const personalizado = `${jogador.nome.split(' ')[0]} "${jogador.nick}" ${jogador.nome.split(' ')[jogador.nome.split(' ').length - 1]}`
    return personalizado
}