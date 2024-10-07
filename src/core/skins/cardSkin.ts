export default interface CardSkin {
    nome: string,
    tipo: string,
    raridade: string,
    statTrack: boolean,
    souvenir: boolean,
    operacao: {
        nome: string,
        img: string
    },
    img: string,
    inspecionar: string
}