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
    imagem: '/jogadores/zywoo.png',
    timeAtual: 'Vitality',
    logoTimeAtual: 'https://images.seeklogo.com/logo-png/52/2/team-vitality-logo-png_seeklogo-529026.png',
    posicao:'AWP',
    codigoMira: 'CSGO-Ki3rs-mS8Mv-zTqqc-mOyXo-uTaUN',
    equipamentos: {
        mouse: 'Pulsar Xlite V3 Es',
        fone: null,
        monitor: null,
        mousepad: null,
        teclado: null,
    },
    mouse: {
        dpi: '400',
        sensibilidade: '1.95',
        sensibilidade_no_Windows:'6',
        edpi: '780',
        zoom_sensitivity_ratio_mouse: '1'
    },
    viewmodel:{
        fov: '68',
        offsetx: '2.5',
        offsety: '0',
        offsetz: '-1.5',
        prosetpos: '2',
        codigo: 'viewmodel_fov 68; viewmodel_offset_x 2.5; viewmodel_offset_y 0; viewmodel_offset_z -1.5; viewmodel_presetpos 2;'
    },
})
adicionarJogador({
    nick: 'niko',
    nome: 'Nikola Kovač',
    idade: 27,
    nacionalidade: 'BS',
    imagem: '/jogadores/niko.png',
    timeAtual: 'G2',
    logoTimeAtual: 'https://prosettings.net/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cgravity=auto%2Cheight=36%2Cq=85%2Cwidth=36/wp-content/uploads/g2-esports.png',
    posicao:'Rifler',
    codigoMira: 'CSGO-XUUUD-qw4wB-NQf9H-hKnkA-JdRqJ',
    equipamentos: {
        mouse: 'Razer Viper V3 Pro White',
        fone: null,
        monitor: null,
        mousepad: null,
        teclado: null,
    },
    mouse: {
        dpi: '800',
        sensibilidade: '0.755',
        edpi: '604',
        sensibilidade_no_Windows:'6',
        zoom_sensitivity_ratio_mouse: '0.9'
    },
    viewmodel:{
        fov: '64',
        offsetx: '2',
        offsety: '1.5',
        offsetz: '-1.5',
        prosetpos: '3',
        codigo: 'viewmodel_fov 64; viewmodel_offset_x 2; viewmodel_offset_y 1.5; viewmodel_offset_z -1.5; viewmodel_presetpos 3;'
    },
})
adicionarJogador({
    nick: 'donk',
    nome: 'Danil Kryshkovets',
    idade: 17,
    nacionalidade: 'RS',
    imagem: '/jogadores/donk.png',
    timeAtual: 'Spirit',
    logoTimeAtual: 'https://storage.ensigame.com/logos/teams/4603e4e08f5517404045bd32c3030b7c.png',
    posicao:'Rifler',
    codigoMira: 'CSGO-Jhfkc-4UpR6-DJftC-VfGek-pL3ED',
    equipamentos: {
        mouse: 'Logitech G Pro X Superlight Magenta',
        fone: null,
        monitor: null,
        mousepad: null,
        teclado: null,
    },
    mouse: {
        dpi: '800',
        sensibilidade: '0.755',
        edpi: '604',
        sensibilidade_no_Windows:'6',
        zoom_sensitivity_ratio_mouse: '0.9'
    },
    viewmodel:{
        fov: '64',
        offsetx: '2',
        offsety: '1.5',
        offsetz: '-1.5',
        prosetpos: '3',
        codigo: 'viewmodel_fov 64; viewmodel_offset_x 2; viewmodel_offset_y 1.5; viewmodel_offset_z -1.5; viewmodel_presetpos 3;'
    },
})
adicionarJogador({
    nick: 'jL',
    nome: 'Justinas Lekavicius',
    idade: 25,
    nacionalidade: 'LT',
    imagem: '/jogadores/jL.png',
    timeAtual: 'NaVi',
    logoTimeAtual: 'https://cdn.worldvectorlogo.com/logos/natus-vincere.svg',
    posicao:'Rifler',
    codigoMira: 'CSGO-Jhfkc-4UpR6-DJftC-VfGek-pL3ED',
    equipamentos: {
        mouse: 'Razer DeathAdder V3 HyperSpeed',
        fone: null,
        monitor: null,
        mousepad: null,
        teclado: null,
    },
    mouse: {
        dpi: '800',
        sensibilidade: '0.755',
        edpi: '604',
        sensibilidade_no_Windows:'6',
        zoom_sensitivity_ratio_mouse: '0.9'
    },
    viewmodel:{
        fov: '64',
        offsetx: '2',
        offsety: '1.5',
        offsetz: '-1.5',
        prosetpos: '3',
        codigo: 'viewmodel_fov 64; viewmodel_offset_x 2; viewmodel_offset_y 1.5; viewmodel_offset_z -1.5; viewmodel_presetpos 3;'
    },
})

export default listaDeJogadores