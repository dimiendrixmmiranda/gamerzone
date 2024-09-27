import listaDeJogadores from "./jogadores"
interface Time {
    nome: string
    listaJogadores: {
        nick: string,
        nome: string,
        idade: number,
        nacionalidade: string,
        imagem: string,
        timeAtual: string,
        posicao: string
    }[]
}
const listaDeTimes: Time[] = []

function adicionarTime(time: Time) {
    return listaDeTimes.push(time)
}

adicionarTime({
    nome: 'Vitality',
    listaJogadores: []
})
adicionarTime({
    nome: 'Faze Clan',
    listaJogadores: []
})

listaDeTimes.map(time => {
    const jogadoresDoTime = listaDeJogadores.filter(jogador => jogador.timeAtual.toLocaleLowerCase() === time.nome.toLocaleLowerCase())
    time.listaJogadores.push(...jogadoresDoTime)
})

export default listaDeTimes