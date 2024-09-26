import listaDeJogadores from "./jogadores"

const listaDeTimes: Time[] = []

function adicionarTime(time: Time){
    return listaDeTimes.push(time)
}

adicionarTime({
    nome:'Vitality',
    listaJogadores: []
})
adicionarTime({
    nome:'Faze Clan',
    listaJogadores: []
})

listaDeTimes.map(time => {
    const jogadoresDoTime = listaDeJogadores.filter(jogador => jogador.timeAtual.toLocaleLowerCase() === time.nome.toLocaleLowerCase())
    time.listaJogadores.push(...jogadoresDoTime)
})

export default listaDeTimes