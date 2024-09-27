interface Jogador {
    nick: string,
    nome: string,
    idade: number,
    nacionalidade: string,
    imagem: string,
    timeAtual: string,
    posicao:string
}

const listaDeJogadores: Jogador[] = []

function adicionarJogador(jogador: {
    nick: string,
    nome: string,
    idade: number,
    nacionalidade: string,
    imagem: string,
    timeAtual: string,
    posicao: string
}) {
    listaDeJogadores.push(jogador)
}

adicionarJogador({
    nick: 'ZiwOo',
    nome: 'Mathieu Herbaut',
    idade: 23,
    nacionalidade: 'FR',
    imagem: './vitality/zywoo.jpg',
    timeAtual: 'Vitality',
    posicao:'AWP'
})
adicionarJogador({
    nick: 'apEX',
    nome: 'Dan Madesclaire',
    idade: 31,
    nacionalidade: 'FR',
    imagem: './vitality/apex.jpg',
    timeAtual: 'Vitality',
    posicao:'IGL'
})
adicionarJogador({
    nick: 'Spinx',
    nome: 'Lotan Giladi',
    idade: 24,
    nacionalidade: 'IL',
    imagem: './vitality/spinx.jpg',
    timeAtual: 'Vitality',
    posicao:'RIFLER'
})
adicionarJogador({
    nick: 'flameZ',
    nome: 'Shahar Shushan',
    idade: 21,
    nacionalidade: 'IL',
    imagem: './vitality/flamez.jpg',
    timeAtual: 'Vitality',
    posicao:'RIFLER'
})
adicionarJogador({
    nick: 'mezii',
    nome: 'William Merriman',
    idade: 25,
    nacionalidade: 'EN',
    imagem: './vitality/mezzi.jpg',
    timeAtual: 'Vitality',
    posicao:'RIFLER'
})
adicionarJogador({
    nick: 'XTQZZZ',
    nome: 'Rémy Quoniam',
    idade: 35,
    nacionalidade: 'FR',
    imagem: './vitality/xtqzzz.jpg',
    timeAtual: 'Vitality',
    posicao:'COACH'
})

export default listaDeJogadores