import Jogador from "./Jogador"

export default interface Clube {
    nome: string
    id: string
    regiao: string
    abreviacao: string
    enderecoImagem: string
    elenco?: Jogador[]
}