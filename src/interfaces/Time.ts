import { Jogador } from "./Jogador";

export default interface Time {
    time: string;
    abreviacao: string;
    regiao: string;
    id: string
    logo: string
    cor: string
    elenco: Jogador[];
    votos?:number
}