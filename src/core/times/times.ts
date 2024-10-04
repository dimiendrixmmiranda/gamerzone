import { Jogador } from "@/types/Jogador"

export default interface Time {
    id: number
    posicao: number
    nome: string
    pontos: number
    logo: string
    regiao: string
    jogadores: Jogador[]
}