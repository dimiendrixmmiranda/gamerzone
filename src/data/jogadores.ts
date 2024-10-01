import { Jogador } from "@/types/Jogador"

const listaDeJogadores: Jogador[] = []

function adicionarJogador(jogador: Jogador) {
    listaDeJogadores.push(jogador)
}

adicionarJogador({
    nick: 'ZiwOo',
    nome: 'Mathieu Herbaut',
    idade: 23,
    nacionalidade: 'FR',
    imagem: '/vitality/zywoo.png',
    timeAtual: 'Vitality',
    logoTimeAtual: 'https://images.seeklogo.com/logo-png/52/2/team-vitality-logo-png_seeklogo-529026.png',
    posicao:'AWP',
    codigoMira: null,
    equipamentos: null,
    mira: null,
    mouse: null
})
adicionarJogador({
    nick: 'apEX',
    nome: 'Dan Madesclaire',
    idade: 31,
    nacionalidade: 'FR',
    imagem: '/vitality/apex.jpg',
    timeAtual: 'Vitality',
    logoTimeAtual: 'https://images.seeklogo.com/logo-png/52/2/team-vitality-logo-png_seeklogo-529026.png',
    posicao:'IGL',
    codigoMira: null,
    equipamentos: null,
    mira: null,
    mouse: null
})
adicionarJogador({
    nick: 'Spinx',
    nome: 'Lotan Giladi',
    idade: 24,
    nacionalidade: 'IL',
    imagem: '/vitality/spinx.jpg',
    timeAtual: 'Vitality',
    logoTimeAtual: 'https://images.seeklogo.com/logo-png/52/2/team-vitality-logo-png_seeklogo-529026.png',
    posicao:'RIFLER',
    codigoMira: null,
    equipamentos: null,
    mira: null,
    mouse: null
})
adicionarJogador({
    nick: 'flameZ',
    nome: 'Shahar Shushan',
    idade: 21,
    nacionalidade: 'IL',
    imagem: '/vitality/flamez.jpg',
    timeAtual: 'Vitality',
    logoTimeAtual: 'https://images.seeklogo.com/logo-png/52/2/team-vitality-logo-png_seeklogo-529026.png',
    posicao:'RIFLER',
    codigoMira: null,
    equipamentos: null,
    mira: null,
    mouse: null
})
adicionarJogador({
    nick: 'mezii',
    nome: 'William Merriman',
    idade: 25,
    nacionalidade: 'EN',
    imagem: '/vitality/mezzi.jpg',
    timeAtual: 'Vitality',
    logoTimeAtual: 'https://images.seeklogo.com/logo-png/52/2/team-vitality-logo-png_seeklogo-529026.png',
    posicao:'RIFLER',
    codigoMira: null,
    equipamentos: null,
    mira: null,
    mouse: null
})
adicionarJogador({
    nick: 'XTQZZZ',
    nome: 'Rémy Quoniam',
    idade: 35,
    nacionalidade: 'FR',
    imagem: '/vitality/xtqzzz.jpg',
    timeAtual: 'Vitality',
    logoTimeAtual: 'https://images.seeklogo.com/logo-png/52/2/team-vitality-logo-png_seeklogo-529026.png',
    posicao:'COACH',
    codigoMira: null,
    equipamentos: null,
    mira: null,
    mouse: null
})

export default listaDeJogadores