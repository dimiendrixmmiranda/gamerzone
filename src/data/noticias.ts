const noticias: { tituloNoticia: string, descricaoNoticia: string, autor: string, data: string, thumbnail: string, gameNoticia: string, logoNoticia: string, id: number, conteudoDaMateria: { titulo: string, conteudo: string[] } }[] = []

function adicionarNoticia(tituloNoticia: string, descricaoNoticia: string, autor: string, data: string, thumbnail: string, gameNoticia: string, logoNoticia:string, id: number, conteudoDaMateria: { titulo: string, conteudo: string[] }) {
    const noticia = {
        tituloNoticia,
        descricaoNoticia,
        autor,
        data,
        thumbnail,
        gameNoticia,
        logoNoticia,
        id,
        conteudoDaMateria
    }
    noticias.unshift(noticia)
}
// ID COM PROBLEMA - MUDA TODA VEZ QUE RECARREGA A PAGINA
adicionarNoticia(
    'RED Canids bate ENCE e vence a primeira na ESL Pro League Season 20 - 1',
    'Time brasileiro agora enfrentará a FURIA',
    'Dimi Martins',
    '12/09/24 - 14:20',
    './coldzera-redcanids.png',
    'cs2',
    '/cs2.png',
    1,
    {
        titulo: 'O Jogo',
        conteudo: [
            'A RED Canids conquistou sua primeira vitória na ESL Pro League Season 20. Na tarde dessa quinta-feira (12), o esquadrão brasileiro de Marcelo "coldzera" David derrotou a ENCE por 2-1 e mandou o time polonês para o Last Chance Stage.',
            'O duelo começou na Ancient, mapa de escolha da ENCE, mas que desde o início foi completamente dominado pelo time brasileiro. Com um verdadeiro paredão na defesa, a RED Canids anotou seis pontos seguidos e fechou o half em 9-3.',
            'Na troca de lados, a vitória no pistol praticamente sacramentou a vitória da matilha, que pouco precisou fazer para fechar o mapa em 13-3 e anotar o 1-0 na série.',
            'Já na Vertigo, foi a vez da ENCE devolver o atropelo sofrido no mapa passado e controlar todas as ações da primeira metade. Com uma aula de Paavo "podi" Heiskanen, o time europeu devolveu "na mesma moeda" e fechou o placar em 9-3.',
            'Apesar dos esforços por parte da RED Canids em anotar três pontos consecutivos, o mapa ficou mesmo com a ENCE, que fechou em 13-6 e empatou a série em 1-1.',
            'Tudo então se resumiu a Anubis, onde o time brasileiro voltou a tomar as rédeas do mapa desde o começo, anotando um bom lado contraterrorista para abrir 6-1 no placar e fechar a primeira etapa com 7-5 no marcador.',
            'Na troca de lados, a vitória no forçado após a derrota no round pistol facilitou, e muito, a vida da RED Canids, que logo abriu 10-6 no placar. Sem dar chances a ENCE, a matilha logo fechou o mapa em 13-8 e finalizou o 2-0 na série.',
            'Agora, a RED Canids enfrentará a FURIA pelas semifinais lower do grupo D, enquanto a derrotada ENCE terá de duelar contra a ATOX no Last Chance Stage.'
        ]
    }
)
adicionarNoticia(
    'Estou muito decepcionado com a falta de desenvolvimento no CS2", dispara NiKo',
    'Atleta ainda falou sobre falta de melhorias significativas e sua adaptação ao novo jogo',
    'Dimi Martins',
    '12/09/24 - 14:20',
    'https://static.draft5.gg/news/2024/08/11165131/G2-NiKo-IEM-Cologne-2024.jpg',
    'cs2',
    '/cs2.png',
    2,
    {
        titulo: 'O Jogo',
        conteudo: [
            'A RED Canids conquistou sua primeira vitória na ESL Pro League Season 20. Na tarde dessa quinta-feira (12), o esquadrão brasileiro de Marcelo "coldzera" David derrotou a ENCE por 2-1 e mandou o time polonês para o Last Chance Stage.',
            'O duelo começou na Ancient, mapa de escolha da ENCE, mas que desde o início foi completamente dominado pelo time brasileiro. Com um verdadeiro paredão na defesa, a RED Canids anotou seis pontos seguidos e fechou o half em 9-3.',
            'Na troca de lados, a vitória no pistol praticamente sacramentou a vitória da matilha, que pouco precisou fazer para fechar o mapa em 13-3 e anotar o 1-0 na série.',
            'Já na Vertigo, foi a vez da ENCE devolver o atropelo sofrido no mapa passado e controlar todas as ações da primeira metade. Com uma aula de Paavo "podi" Heiskanen, o time europeu devolveu "na mesma moeda" e fechou o placar em 9-3.',
            'Apesar dos esforços por parte da RED Canids em anotar três pontos consecutivos, o mapa ficou mesmo com a ENCE, que fechou em 13-6 e empatou a série em 1-1.',
            'Tudo então se resumiu a Anubis, onde o time brasileiro voltou a tomar as rédeas do mapa desde o começo, anotando um bom lado contraterrorista para abrir 6-1 no placar e fechar a primeira etapa com 7-5 no marcador.',
            'Na troca de lados, a vitória no forçado após a derrota no round pistol facilitou, e muito, a vida da RED Canids, que logo abriu 10-6 no placar. Sem dar chances a ENCE, a matilha logo fechou o mapa em 13-8 e finalizou o 2-0 na série.',
            'Agora, a RED Canids enfrentará a FURIA pelas semifinais lower do grupo D, enquanto a derrotada ENCE terá de duelar contra a ATOX no Last Chance Stage.'
        ]
    }
)
adicionarNoticia(
    'Precisamos de resultados para atrair os melhores jogadores", diz gerente da NIP',
    'Mandatário ainda afirmou que equipe tem que ser "realista sobre onde está agora"',
    'Dimi Martins',
    '12/09/24 - 14:20',
    'https://static.draft5.gg/news/2021/07/09094246/Ninjas-in-Pyjamas-THREAT-Bootcamp-2021.jpg',
    'cs2',
    '/cs2.png',
    3,
    {
        titulo: 'O Jogo',
        conteudo: [
            'A RED Canids conquistou sua primeira vitória na ESL Pro League Season 20. Na tarde dessa quinta-feira (12), o esquadrão brasileiro de Marcelo "coldzera" David derrotou a ENCE por 2-1 e mandou o time polonês para o Last Chance Stage.',
            'O duelo começou na Ancient, mapa de escolha da ENCE, mas que desde o início foi completamente dominado pelo time brasileiro. Com um verdadeiro paredão na defesa, a RED Canids anotou seis pontos seguidos e fechou o half em 9-3.',
            'Na troca de lados, a vitória no pistol praticamente sacramentou a vitória da matilha, que pouco precisou fazer para fechar o mapa em 13-3 e anotar o 1-0 na série.',
            'Já na Vertigo, foi a vez da ENCE devolver o atropelo sofrido no mapa passado e controlar todas as ações da primeira metade. Com uma aula de Paavo "podi" Heiskanen, o time europeu devolveu "na mesma moeda" e fechou o placar em 9-3.',
            'Apesar dos esforços por parte da RED Canids em anotar três pontos consecutivos, o mapa ficou mesmo com a ENCE, que fechou em 13-6 e empatou a série em 1-1.',
            'Tudo então se resumiu a Anubis, onde o time brasileiro voltou a tomar as rédeas do mapa desde o começo, anotando um bom lado contraterrorista para abrir 6-1 no placar e fechar a primeira etapa com 7-5 no marcador.',
            'Na troca de lados, a vitória no forçado após a derrota no round pistol facilitou, e muito, a vida da RED Canids, que logo abriu 10-6 no placar. Sem dar chances a ENCE, a matilha logo fechou o mapa em 13-8 e finalizou o 2-0 na série.',
            'Agora, a RED Canids enfrentará a FURIA pelas semifinais lower do grupo D, enquanto a derrotada ENCE terá de duelar contra a ATOX no Last Chance Stage.'
        ]
    }
)
adicionarNoticia(
    'Fundador da Valve e dono da Steam, Gabe Newell aumenta patrimônio para R$ 51 bilhões',
    'Gabe Newell tinha $5,5 bilhões de fortuna em 2017',
    'Dimi Martins',
    '12/09/24 - 14:20',
    'https://static.draft5.gg/news/2024/09/21105400/gabe-newell-valve-e-steam.jpg',
    'cs2',
    '/cs2.png',
    4,
    {
        titulo: 'O Jogo',
        conteudo: [
            'A RED Canids conquistou sua primeira vitória na ESL Pro League Season 20. Na tarde dessa quinta-feira (12), o esquadrão brasileiro de Marcelo "coldzera" David derrotou a ENCE por 2-1 e mandou o time polonês para o Last Chance Stage.',
            'O duelo começou na Ancient, mapa de escolha da ENCE, mas que desde o início foi completamente dominado pelo time brasileiro. Com um verdadeiro paredão na defesa, a RED Canids anotou seis pontos seguidos e fechou o half em 9-3.',
            'Na troca de lados, a vitória no pistol praticamente sacramentou a vitória da matilha, que pouco precisou fazer para fechar o mapa em 13-3 e anotar o 1-0 na série.',
            'Já na Vertigo, foi a vez da ENCE devolver o atropelo sofrido no mapa passado e controlar todas as ações da primeira metade. Com uma aula de Paavo "podi" Heiskanen, o time europeu devolveu "na mesma moeda" e fechou o placar em 9-3.',
            'Apesar dos esforços por parte da RED Canids em anotar três pontos consecutivos, o mapa ficou mesmo com a ENCE, que fechou em 13-6 e empatou a série em 1-1.',
            'Tudo então se resumiu a Anubis, onde o time brasileiro voltou a tomar as rédeas do mapa desde o começo, anotando um bom lado contraterrorista para abrir 6-1 no placar e fechar a primeira etapa com 7-5 no marcador.',
            'Na troca de lados, a vitória no forçado após a derrota no round pistol facilitou, e muito, a vida da RED Canids, que logo abriu 10-6 no placar. Sem dar chances a ENCE, a matilha logo fechou o mapa em 13-8 e finalizou o 2-0 na série.',
            'Agora, a RED Canids enfrentará a FURIA pelas semifinais lower do grupo D, enquanto a derrotada ENCE terá de duelar contra a ATOX no Last Chance Stage.'
        ]
    }
)
adicionarNoticia(
    'cadiaN fala sobre polêmica com stavn e jabbi: "Sabemos o quanto fazemos bem um ao outro, por isso nos reunimos"',
    'O capitão também falou revelou que abriria mão da AWP para quatro jogadores, device é um deles',
    'Dimi Martins',
    '12/09/24 - 14:20',
    'https://static.draft5.gg/news/2023/05/14111932/heroic.jpg',
    'cs2',
    '/cs2.png',
    5,
    {
        titulo: 'O Jogo',
        conteudo: [
            'A RED Canids conquistou sua primeira vitória na ESL Pro League Season 20. Na tarde dessa quinta-feira (12), o esquadrão brasileiro de Marcelo "coldzera" David derrotou a ENCE por 2-1 e mandou o time polonês para o Last Chance Stage.',
            'O duelo começou na Ancient, mapa de escolha da ENCE, mas que desde o início foi completamente dominado pelo time brasileiro. Com um verdadeiro paredão na defesa, a RED Canids anotou seis pontos seguidos e fechou o half em 9-3.',
            'Na troca de lados, a vitória no pistol praticamente sacramentou a vitória da matilha, que pouco precisou fazer para fechar o mapa em 13-3 e anotar o 1-0 na série.',
            'Já na Vertigo, foi a vez da ENCE devolver o atropelo sofrido no mapa passado e controlar todas as ações da primeira metade. Com uma aula de Paavo "podi" Heiskanen, o time europeu devolveu "na mesma moeda" e fechou o placar em 9-3.',
            'Apesar dos esforços por parte da RED Canids em anotar três pontos consecutivos, o mapa ficou mesmo com a ENCE, que fechou em 13-6 e empatou a série em 1-1.',
            'Tudo então se resumiu a Anubis, onde o time brasileiro voltou a tomar as rédeas do mapa desde o começo, anotando um bom lado contraterrorista para abrir 6-1 no placar e fechar a primeira etapa com 7-5 no marcador.',
            'Na troca de lados, a vitória no forçado após a derrota no round pistol facilitou, e muito, a vida da RED Canids, que logo abriu 10-6 no placar. Sem dar chances a ENCE, a matilha logo fechou o mapa em 13-8 e finalizou o 2-0 na série.',
            'Agora, a RED Canids enfrentará a FURIA pelas semifinais lower do grupo D, enquanto a derrotada ENCE terá de duelar contra a ATOX no Last Chance Stage.'
        ]
    }
)
adicionarNoticia(
    'Vanguard, anticheat do VALORANT, recebe melhorias para combater trapaceiros',
    'Sistema Vanguard do VALORANT passa por atualizações para aumentar a segurança no jogo e enfrentar novos desafios',
    'Dimi Martins',
    '12/09/24 - 14:20',
    'https://static.valorantzone.gg/news/2024/05/02150850/vanguard-valorant.jpg',
    'valorant',
    './valorant.png',
    6,
    {
        titulo: 'O Jogo',
        conteudo: [
            'A RED Canids conquistou sua primeira vitória na ESL Pro League Season 20. Na tarde dessa quinta-feira (12), o esquadrão brasileiro de Marcelo "coldzera" David derrotou a ENCE por 2-1 e mandou o time polonês para o Last Chance Stage.',
            'O duelo começou na Ancient, mapa de escolha da ENCE, mas que desde o início foi completamente dominado pelo time brasileiro. Com um verdadeiro paredão na defesa, a RED Canids anotou seis pontos seguidos e fechou o half em 9-3.',
            'Na troca de lados, a vitória no pistol praticamente sacramentou a vitória da matilha, que pouco precisou fazer para fechar o mapa em 13-3 e anotar o 1-0 na série.',
            'Já na Vertigo, foi a vez da ENCE devolver o atropelo sofrido no mapa passado e controlar todas as ações da primeira metade. Com uma aula de Paavo "podi" Heiskanen, o time europeu devolveu "na mesma moeda" e fechou o placar em 9-3.',
            'Apesar dos esforços por parte da RED Canids em anotar três pontos consecutivos, o mapa ficou mesmo com a ENCE, que fechou em 13-6 e empatou a série em 1-1.',
            'Tudo então se resumiu a Anubis, onde o time brasileiro voltou a tomar as rédeas do mapa desde o começo, anotando um bom lado contraterrorista para abrir 6-1 no placar e fechar a primeira etapa com 7-5 no marcador.',
            'Na troca de lados, a vitória no forçado após a derrota no round pistol facilitou, e muito, a vida da RED Canids, que logo abriu 10-6 no placar. Sem dar chances a ENCE, a matilha logo fechou o mapa em 13-8 e finalizou o 2-0 na série.',
            'Agora, a RED Canids enfrentará a FURIA pelas semifinais lower do grupo D, enquanto a derrotada ENCE terá de duelar contra a ATOX no Last Chance Stage.'
        ]
    }
)
adicionarNoticia(
    'Libertadores LoL: brasileiros lutaram pelo título contra a FXS',
    'Jogos foram equilibrados e o vencedor só foi definido no quinto game',
    'Dimi Martins',
    '12/09/24 - 14:20',
    'https://cdn-62cb22a2c1ac1835ecef9f37.closte.com/wp-content/uploads/2024/09/54012257519_3c360a0225_o.jpg',
    'lol',
    './lol.png',
    7,
    {
        titulo: 'O Jogo',
        conteudo: [
            'A RED Canids conquistou sua primeira vitória na ESL Pro League Season 20. Na tarde dessa quinta-feira (12), o esquadrão brasileiro de Marcelo "coldzera" David derrotou a ENCE por 2-1 e mandou o time polonês para o Last Chance Stage.',
            'O duelo começou na Ancient, mapa de escolha da ENCE, mas que desde o início foi completamente dominado pelo time brasileiro. Com um verdadeiro paredão na defesa, a RED Canids anotou seis pontos seguidos e fechou o half em 9-3.',
            'Na troca de lados, a vitória no pistol praticamente sacramentou a vitória da matilha, que pouco precisou fazer para fechar o mapa em 13-3 e anotar o 1-0 na série.',
            'Já na Vertigo, foi a vez da ENCE devolver o atropelo sofrido no mapa passado e controlar todas as ações da primeira metade. Com uma aula de Paavo "podi" Heiskanen, o time europeu devolveu "na mesma moeda" e fechou o placar em 9-3.',
            'Apesar dos esforços por parte da RED Canids em anotar três pontos consecutivos, o mapa ficou mesmo com a ENCE, que fechou em 13-6 e empatou a série em 1-1.',
            'Tudo então se resumiu a Anubis, onde o time brasileiro voltou a tomar as rédeas do mapa desde o começo, anotando um bom lado contraterrorista para abrir 6-1 no placar e fechar a primeira etapa com 7-5 no marcador.',
            'Na troca de lados, a vitória no forçado após a derrota no round pistol facilitou, e muito, a vida da RED Canids, que logo abriu 10-6 no placar. Sem dar chances a ENCE, a matilha logo fechou o mapa em 13-8 e finalizou o 2-0 na série.',
            'Agora, a RED Canids enfrentará a FURIA pelas semifinais lower do grupo D, enquanto a derrotada ENCE terá de duelar contra a ATOX no Last Chance Stage.'
        ]
    }
)
adicionarNoticia(
    'Jogador alerta para fim do competitivo de VALORANT e gera polêmica',
    'Críticas ao formato restritivo de torneios e ligas do competitivo de VALORANT dividem opiniões na comunidade',
    'Dimi Martins',
    '12/09/24 - 14:20',
    'https://static.valorantzone.gg/news/2024/08/30134324/edg-champions-2024.jpg',
    'valorant',
    './valorant.png',
    8,
    {
        titulo: 'O Jogo',
        conteudo: [
            'A RED Canids conquistou sua primeira vitória na ESL Pro League Season 20. Na tarde dessa quinta-feira (12), o esquadrão brasileiro de Marcelo "coldzera" David derrotou a ENCE por 2-1 e mandou o time polonês para o Last Chance Stage.',
            'O duelo começou na Ancient, mapa de escolha da ENCE, mas que desde o início foi completamente dominado pelo time brasileiro. Com um verdadeiro paredão na defesa, a RED Canids anotou seis pontos seguidos e fechou o half em 9-3.',
            'Na troca de lados, a vitória no pistol praticamente sacramentou a vitória da matilha, que pouco precisou fazer para fechar o mapa em 13-3 e anotar o 1-0 na série.',
            'Já na Vertigo, foi a vez da ENCE devolver o atropelo sofrido no mapa passado e controlar todas as ações da primeira metade. Com uma aula de Paavo "podi" Heiskanen, o time europeu devolveu "na mesma moeda" e fechou o placar em 9-3.',
            'Apesar dos esforços por parte da RED Canids em anotar três pontos consecutivos, o mapa ficou mesmo com a ENCE, que fechou em 13-6 e empatou a série em 1-1.',
            'Tudo então se resumiu a Anubis, onde o time brasileiro voltou a tomar as rédeas do mapa desde o começo, anotando um bom lado contraterrorista para abrir 6-1 no placar e fechar a primeira etapa com 7-5 no marcador.',
            'Na troca de lados, a vitória no forçado após a derrota no round pistol facilitou, e muito, a vida da RED Canids, que logo abriu 10-6 no placar. Sem dar chances a ENCE, a matilha logo fechou o mapa em 13-8 e finalizou o 2-0 na série.',
            'Agora, a RED Canids enfrentará a FURIA pelas semifinais lower do grupo D, enquanto a derrotada ENCE terá de duelar contra a ATOX no Last Chance Stage.'
        ]
    }
)
adicionarNoticia(
    'VALORANT: Equipe brasileira enfrentou M80 na final do VCT Americas Ascension',
    '2GAME Esports lutou pelo título e promoção',
    'Dimi Martins',
    '12/09/24 - 14:20',
    'https://cdn-62cb22a2c1ac1835ecef9f37.closte.com/wp-content/uploads/2024/09/461039086_1063727995161452_8683828653629242163_n.jpg',
    'valorant',
    './valorant.png',
    9,
    {
        titulo: 'O Jogo',
        conteudo: [
            'A RED Canids conquistou sua primeira vitória na ESL Pro League Season 20. Na tarde dessa quinta-feira (12), o esquadrão brasileiro de Marcelo "coldzera" David derrotou a ENCE por 2-1 e mandou o time polonês para o Last Chance Stage.',
            'O duelo começou na Ancient, mapa de escolha da ENCE, mas que desde o início foi completamente dominado pelo time brasileiro. Com um verdadeiro paredão na defesa, a RED Canids anotou seis pontos seguidos e fechou o half em 9-3.',
            'Na troca de lados, a vitória no pistol praticamente sacramentou a vitória da matilha, que pouco precisou fazer para fechar o mapa em 13-3 e anotar o 1-0 na série.',
            'Já na Vertigo, foi a vez da ENCE devolver o atropelo sofrido no mapa passado e controlar todas as ações da primeira metade. Com uma aula de Paavo "podi" Heiskanen, o time europeu devolveu "na mesma moeda" e fechou o placar em 9-3.',
            'Apesar dos esforços por parte da RED Canids em anotar três pontos consecutivos, o mapa ficou mesmo com a ENCE, que fechou em 13-6 e empatou a série em 1-1.',
            'Tudo então se resumiu a Anubis, onde o time brasileiro voltou a tomar as rédeas do mapa desde o começo, anotando um bom lado contraterrorista para abrir 6-1 no placar e fechar a primeira etapa com 7-5 no marcador.',
            'Na troca de lados, a vitória no forçado após a derrota no round pistol facilitou, e muito, a vida da RED Canids, que logo abriu 10-6 no placar. Sem dar chances a ENCE, a matilha logo fechou o mapa em 13-8 e finalizou o 2-0 na série.',
            'Agora, a RED Canids enfrentará a FURIA pelas semifinais lower do grupo D, enquanto a derrotada ENCE terá de duelar contra a ATOX no Last Chance Stage.'
        ]
    }
)
adicionarNoticia(
    'piria é o novo jogador do Fluxo',
    'Jovem de 21 anos chega para o lugar de lucaozy que vai para o MIBR',
    'Dimi Martins',
    '12/09/24 - 14:20',
    'https://static.draft5.gg/news/2022/07/10002417/Rafael-Veiga-6762.jpg',
    'cs2',
    '/cs2.png',
    10,
    {
        titulo: 'O Jogo',
        conteudo: [
            'A RED Canids conquistou sua primeira vitória na ESL Pro League Season 20. Na tarde dessa quinta-feira (12), o esquadrão brasileiro de Marcelo "coldzera" David derrotou a ENCE por 2-1 e mandou o time polonês para o Last Chance Stage.',
            'O duelo começou na Ancient, mapa de escolha da ENCE, mas que desde o início foi completamente dominado pelo time brasileiro. Com um verdadeiro paredão na defesa, a RED Canids anotou seis pontos seguidos e fechou o half em 9-3.',
            'Na troca de lados, a vitória no pistol praticamente sacramentou a vitória da matilha, que pouco precisou fazer para fechar o mapa em 13-3 e anotar o 1-0 na série.',
            'Já na Vertigo, foi a vez da ENCE devolver o atropelo sofrido no mapa passado e controlar todas as ações da primeira metade. Com uma aula de Paavo "podi" Heiskanen, o time europeu devolveu "na mesma moeda" e fechou o placar em 9-3.',
            'Apesar dos esforços por parte da RED Canids em anotar três pontos consecutivos, o mapa ficou mesmo com a ENCE, que fechou em 13-6 e empatou a série em 1-1.',
            'Tudo então se resumiu a Anubis, onde o time brasileiro voltou a tomar as rédeas do mapa desde o começo, anotando um bom lado contraterrorista para abrir 6-1 no placar e fechar a primeira etapa com 7-5 no marcador.',
            'Na troca de lados, a vitória no forçado após a derrota no round pistol facilitou, e muito, a vida da RED Canids, que logo abriu 10-6 no placar. Sem dar chances a ENCE, a matilha logo fechou o mapa em 13-8 e finalizou o 2-0 na série.',
            'Agora, a RED Canids enfrentará a FURIA pelas semifinais lower do grupo D, enquanto a derrotada ENCE terá de duelar contra a ATOX no Last Chance Stage.'
        ]
    }
)
adicionarNoticia(
    'Na mira do MIBR, Lucaozy deixa o Fluxo',
    'Atleta de 22 anos estava no clube desde 2022',
    'Dimi Martins',
    '12/09/24 - 14:20',
    'https://static.draft5.gg/news/2024/04/03182530/Fluxo-Lucaozy-BLAST.tv-Paris-Major-2023.jpeg',
    'cs2',
    '/cs2.png',
    11,
    {
        titulo: 'O Jogo',
        conteudo: [
            'A RED Canids conquistou sua primeira vitória na ESL Pro League Season 20. Na tarde dessa quinta-feira (12), o esquadrão brasileiro de Marcelo "coldzera" David derrotou a ENCE por 2-1 e mandou o time polonês para o Last Chance Stage.',
            'O duelo começou na Ancient, mapa de escolha da ENCE, mas que desde o início foi completamente dominado pelo time brasileiro. Com um verdadeiro paredão na defesa, a RED Canids anotou seis pontos seguidos e fechou o half em 9-3.',
            'Na troca de lados, a vitória no pistol praticamente sacramentou a vitória da matilha, que pouco precisou fazer para fechar o mapa em 13-3 e anotar o 1-0 na série.',
            'Já na Vertigo, foi a vez da ENCE devolver o atropelo sofrido no mapa passado e controlar todas as ações da primeira metade. Com uma aula de Paavo "podi" Heiskanen, o time europeu devolveu "na mesma moeda" e fechou o placar em 9-3.',
            'Apesar dos esforços por parte da RED Canids em anotar três pontos consecutivos, o mapa ficou mesmo com a ENCE, que fechou em 13-6 e empatou a série em 1-1.',
            'Tudo então se resumiu a Anubis, onde o time brasileiro voltou a tomar as rédeas do mapa desde o começo, anotando um bom lado contraterrorista para abrir 6-1 no placar e fechar a primeira etapa com 7-5 no marcador.',
            'Na troca de lados, a vitória no forçado após a derrota no round pistol facilitou, e muito, a vida da RED Canids, que logo abriu 10-6 no placar. Sem dar chances a ENCE, a matilha logo fechou o mapa em 13-8 e finalizou o 2-0 na série.',
            'Agora, a RED Canids enfrentará a FURIA pelas semifinais lower do grupo D, enquanto a derrotada ENCE terá de duelar contra a ATOX no Last Chance Stage.'
        ]
    }
)
adicionarNoticia(
    'OG completa elenco com ex-Astralis',
    'Jovem atleta passa por período de testes e se junta à equipe em definitivo',
    'Dimi Martins',
    '12/09/24 - 14:20',
    'https://static.draft5.gg/news/2024/01/06105234/Astralis-Buzz-IEM-Dallas-2023.jpg',
    'cs2',
    '/cs2.png',
    12,
    {
        titulo: 'O Jogo',
        conteudo: [
            'A RED Canids conquistou sua primeira vitória na ESL Pro League Season 20. Na tarde dessa quinta-feira (12), o esquadrão brasileiro de Marcelo "coldzera" David derrotou a ENCE por 2-1 e mandou o time polonês para o Last Chance Stage.',
            'O duelo começou na Ancient, mapa de escolha da ENCE, mas que desde o início foi completamente dominado pelo time brasileiro. Com um verdadeiro paredão na defesa, a RED Canids anotou seis pontos seguidos e fechou o half em 9-3.',
            'Na troca de lados, a vitória no pistol praticamente sacramentou a vitória da matilha, que pouco precisou fazer para fechar o mapa em 13-3 e anotar o 1-0 na série.',
            'Já na Vertigo, foi a vez da ENCE devolver o atropelo sofrido no mapa passado e controlar todas as ações da primeira metade. Com uma aula de Paavo "podi" Heiskanen, o time europeu devolveu "na mesma moeda" e fechou o placar em 9-3.',
            'Apesar dos esforços por parte da RED Canids em anotar três pontos consecutivos, o mapa ficou mesmo com a ENCE, que fechou em 13-6 e empatou a série em 1-1.',
            'Tudo então se resumiu a Anubis, onde o time brasileiro voltou a tomar as rédeas do mapa desde o começo, anotando um bom lado contraterrorista para abrir 6-1 no placar e fechar a primeira etapa com 7-5 no marcador.',
            'Na troca de lados, a vitória no forçado após a derrota no round pistol facilitou, e muito, a vida da RED Canids, que logo abriu 10-6 no placar. Sem dar chances a ENCE, a matilha logo fechou o mapa em 13-8 e finalizou o 2-0 na série.',
            'Agora, a RED Canids enfrentará a FURIA pelas semifinais lower do grupo D, enquanto a derrotada ENCE terá de duelar contra a ATOX no Last Chance Stage.'
        ]
    }
)
adicionarNoticia(
    'Sensação do Major de Copenhagen, ECSTATIC acerta com ex-MAD Lions',
    'Atleta chega para substituir Tauson, que deve rumar à GamerLegion',
    'Dimi Martins',
    '12/09/24 - 14:20',
    'https://static.draft5.gg/news/2024/09/23110101/Preasy-TMB-PGL-Major-Copenhagen-2024-European-RMR-B.jpg',
    'cs2',
    '/cs2.png',
    13,
    {
        titulo: 'O Jogo',
        conteudo: [
            'A RED Canids conquistou sua primeira vitória na ESL Pro League Season 20. Na tarde dessa quinta-feira (12), o esquadrão brasileiro de Marcelo "coldzera" David derrotou a ENCE por 2-1 e mandou o time polonês para o Last Chance Stage.',
            'O duelo começou na Ancient, mapa de escolha da ENCE, mas que desde o início foi completamente dominado pelo time brasileiro. Com um verdadeiro paredão na defesa, a RED Canids anotou seis pontos seguidos e fechou o half em 9-3.',
            'Na troca de lados, a vitória no pistol praticamente sacramentou a vitória da matilha, que pouco precisou fazer para fechar o mapa em 13-3 e anotar o 1-0 na série.',
            'Já na Vertigo, foi a vez da ENCE devolver o atropelo sofrido no mapa passado e controlar todas as ações da primeira metade. Com uma aula de Paavo "podi" Heiskanen, o time europeu devolveu "na mesma moeda" e fechou o placar em 9-3.',
            'Apesar dos esforços por parte da RED Canids em anotar três pontos consecutivos, o mapa ficou mesmo com a ENCE, que fechou em 13-6 e empatou a série em 1-1.',
            'Tudo então se resumiu a Anubis, onde o time brasileiro voltou a tomar as rédeas do mapa desde o começo, anotando um bom lado contraterrorista para abrir 6-1 no placar e fechar a primeira etapa com 7-5 no marcador.',
            'Na troca de lados, a vitória no forçado após a derrota no round pistol facilitou, e muito, a vida da RED Canids, que logo abriu 10-6 no placar. Sem dar chances a ENCE, a matilha logo fechou o mapa em 13-8 e finalizou o 2-0 na série.',
            'Agora, a RED Canids enfrentará a FURIA pelas semifinais lower do grupo D, enquanto a derrotada ENCE terá de duelar contra a ATOX no Last Chance Stage.'
        ]
    }
)
adicionarNoticia(
    'Sensação do Major de Copenhagen, ECSTATIC acerta com ex-MAD Lions',
    'Atleta chega para substituir Tauson, que deve rumar à GamerLegion',
    'Dimi Martins',
    '12/09/24 - 14:20',
    'https://static.draft5.gg/news/2024/09/23110101/Preasy-TMB-PGL-Major-Copenhagen-2024-European-RMR-B.jpg',
    'cs2',
    '/cs2.png',
    14,
    {
        titulo: 'O Jogo',
        conteudo: [
            'A RED Canids conquistou sua primeira vitória na ESL Pro League Season 20. Na tarde dessa quinta-feira (12), o esquadrão brasileiro de Marcelo "coldzera" David derrotou a ENCE por 2-1 e mandou o time polonês para o Last Chance Stage.',
            'O duelo começou na Ancient, mapa de escolha da ENCE, mas que desde o início foi completamente dominado pelo time brasileiro. Com um verdadeiro paredão na defesa, a RED Canids anotou seis pontos seguidos e fechou o half em 9-3.',
            'Na troca de lados, a vitória no pistol praticamente sacramentou a vitória da matilha, que pouco precisou fazer para fechar o mapa em 13-3 e anotar o 1-0 na série.',
            'Já na Vertigo, foi a vez da ENCE devolver o atropelo sofrido no mapa passado e controlar todas as ações da primeira metade. Com uma aula de Paavo "podi" Heiskanen, o time europeu devolveu "na mesma moeda" e fechou o placar em 9-3.',
            'Apesar dos esforços por parte da RED Canids em anotar três pontos consecutivos, o mapa ficou mesmo com a ENCE, que fechou em 13-6 e empatou a série em 1-1.',
            'Tudo então se resumiu a Anubis, onde o time brasileiro voltou a tomar as rédeas do mapa desde o começo, anotando um bom lado contraterrorista para abrir 6-1 no placar e fechar a primeira etapa com 7-5 no marcador.',
            'Na troca de lados, a vitória no forçado após a derrota no round pistol facilitou, e muito, a vida da RED Canids, que logo abriu 10-6 no placar. Sem dar chances a ENCE, a matilha logo fechou o mapa em 13-8 e finalizou o 2-0 na série.',
            'Agora, a RED Canids enfrentará a FURIA pelas semifinais lower do grupo D, enquanto a derrotada ENCE terá de duelar contra a ATOX no Last Chance Stage.'
        ]
    }
)
adicionarNoticia(
    'Sensação do Major de Copenhagen, ECSTATIC acerta com ex-MAD Lions',
    'Atleta chega para substituir Tauson, que deve rumar à GamerLegion',
    'Dimi Martins',
    '12/09/24 - 14:20',
    'https://static.draft5.gg/news/2024/09/23110101/Preasy-TMB-PGL-Major-Copenhagen-2024-European-RMR-B.jpg',
    'cs2',
    '/cs2.png',
    15,
    {
        titulo: 'O Jogo',
        conteudo: [
            'A RED Canids conquistou sua primeira vitória na ESL Pro League Season 20. Na tarde dessa quinta-feira (12), o esquadrão brasileiro de Marcelo "coldzera" David derrotou a ENCE por 2-1 e mandou o time polonês para o Last Chance Stage.',
            'O duelo começou na Ancient, mapa de escolha da ENCE, mas que desde o início foi completamente dominado pelo time brasileiro. Com um verdadeiro paredão na defesa, a RED Canids anotou seis pontos seguidos e fechou o half em 9-3.',
            'Na troca de lados, a vitória no pistol praticamente sacramentou a vitória da matilha, que pouco precisou fazer para fechar o mapa em 13-3 e anotar o 1-0 na série.',
            'Já na Vertigo, foi a vez da ENCE devolver o atropelo sofrido no mapa passado e controlar todas as ações da primeira metade. Com uma aula de Paavo "podi" Heiskanen, o time europeu devolveu "na mesma moeda" e fechou o placar em 9-3.',
            'Apesar dos esforços por parte da RED Canids em anotar três pontos consecutivos, o mapa ficou mesmo com a ENCE, que fechou em 13-6 e empatou a série em 1-1.',
            'Tudo então se resumiu a Anubis, onde o time brasileiro voltou a tomar as rédeas do mapa desde o começo, anotando um bom lado contraterrorista para abrir 6-1 no placar e fechar a primeira etapa com 7-5 no marcador.',
            'Na troca de lados, a vitória no forçado após a derrota no round pistol facilitou, e muito, a vida da RED Canids, que logo abriu 10-6 no placar. Sem dar chances a ENCE, a matilha logo fechou o mapa em 13-8 e finalizou o 2-0 na série.',
            'Agora, a RED Canids enfrentará a FURIA pelas semifinais lower do grupo D, enquanto a derrotada ENCE terá de duelar contra a ATOX no Last Chance Stage.'
        ]
    }
)
adicionarNoticia(
    'Sensação do Major de Copenhagen, ECSTATIC acerta com ex-MAD Lions',
    'Atleta chega para substituir Tauson, que deve rumar à GamerLegion',
    'Dimi Martins',
    '12/09/24 - 14:20',
    'https://static.draft5.gg/news/2024/09/23110101/Preasy-TMB-PGL-Major-Copenhagen-2024-European-RMR-B.jpg',
    'cs2',
    '/cs2.png',
    16,
    {
        titulo: 'O Jogo',
        conteudo: [
            'A RED Canids conquistou sua primeira vitória na ESL Pro League Season 20. Na tarde dessa quinta-feira (12), o esquadrão brasileiro de Marcelo "coldzera" David derrotou a ENCE por 2-1 e mandou o time polonês para o Last Chance Stage.',
            'O duelo começou na Ancient, mapa de escolha da ENCE, mas que desde o início foi completamente dominado pelo time brasileiro. Com um verdadeiro paredão na defesa, a RED Canids anotou seis pontos seguidos e fechou o half em 9-3.',
            'Na troca de lados, a vitória no pistol praticamente sacramentou a vitória da matilha, que pouco precisou fazer para fechar o mapa em 13-3 e anotar o 1-0 na série.',
            'Já na Vertigo, foi a vez da ENCE devolver o atropelo sofrido no mapa passado e controlar todas as ações da primeira metade. Com uma aula de Paavo "podi" Heiskanen, o time europeu devolveu "na mesma moeda" e fechou o placar em 9-3.',
            'Apesar dos esforços por parte da RED Canids em anotar três pontos consecutivos, o mapa ficou mesmo com a ENCE, que fechou em 13-6 e empatou a série em 1-1.',
            'Tudo então se resumiu a Anubis, onde o time brasileiro voltou a tomar as rédeas do mapa desde o começo, anotando um bom lado contraterrorista para abrir 6-1 no placar e fechar a primeira etapa com 7-5 no marcador.',
            'Na troca de lados, a vitória no forçado após a derrota no round pistol facilitou, e muito, a vida da RED Canids, que logo abriu 10-6 no placar. Sem dar chances a ENCE, a matilha logo fechou o mapa em 13-8 e finalizou o 2-0 na série.',
            'Agora, a RED Canids enfrentará a FURIA pelas semifinais lower do grupo D, enquanto a derrotada ENCE terá de duelar contra a ATOX no Last Chance Stage.'
        ]
    }
)
adicionarNoticia(
    'Sensação do Major de Copenhagen, ECSTATIC acerta com ex-MAD Lions',
    'Atleta chega para substituir Tauson, que deve rumar à GamerLegion',
    'Dimi Martins',
    '12/09/24 - 14:20',
    'https://static.draft5.gg/news/2024/09/23110101/Preasy-TMB-PGL-Major-Copenhagen-2024-European-RMR-B.jpg',
    'cs2',
    '/cs2.png',
    17,
    {
        titulo: 'O Jogo',
        conteudo: [
            'A RED Canids conquistou sua primeira vitória na ESL Pro League Season 20. Na tarde dessa quinta-feira (12), o esquadrão brasileiro de Marcelo "coldzera" David derrotou a ENCE por 2-1 e mandou o time polonês para o Last Chance Stage.',
            'O duelo começou na Ancient, mapa de escolha da ENCE, mas que desde o início foi completamente dominado pelo time brasileiro. Com um verdadeiro paredão na defesa, a RED Canids anotou seis pontos seguidos e fechou o half em 9-3.',
            'Na troca de lados, a vitória no pistol praticamente sacramentou a vitória da matilha, que pouco precisou fazer para fechar o mapa em 13-3 e anotar o 1-0 na série.',
            'Já na Vertigo, foi a vez da ENCE devolver o atropelo sofrido no mapa passado e controlar todas as ações da primeira metade. Com uma aula de Paavo "podi" Heiskanen, o time europeu devolveu "na mesma moeda" e fechou o placar em 9-3.',
            'Apesar dos esforços por parte da RED Canids em anotar três pontos consecutivos, o mapa ficou mesmo com a ENCE, que fechou em 13-6 e empatou a série em 1-1.',
            'Tudo então se resumiu a Anubis, onde o time brasileiro voltou a tomar as rédeas do mapa desde o começo, anotando um bom lado contraterrorista para abrir 6-1 no placar e fechar a primeira etapa com 7-5 no marcador.',
            'Na troca de lados, a vitória no forçado após a derrota no round pistol facilitou, e muito, a vida da RED Canids, que logo abriu 10-6 no placar. Sem dar chances a ENCE, a matilha logo fechou o mapa em 13-8 e finalizou o 2-0 na série.',
            'Agora, a RED Canids enfrentará a FURIA pelas semifinais lower do grupo D, enquanto a derrotada ENCE terá de duelar contra a ATOX no Last Chance Stage.'
        ]
    }
)
adicionarNoticia(
    'Sensação do Major de Copenhagen, ECSTATIC acerta com ex-MAD Lions',
    'Atleta chega para substituir Tauson, que deve rumar à GamerLegion',
    'Dimi Martins',
    '12/09/24 - 14:20',
    'https://static.draft5.gg/news/2024/09/23110101/Preasy-TMB-PGL-Major-Copenhagen-2024-European-RMR-B.jpg',
    'cs2',
    '/cs2.png',
    18,
    {
        titulo: 'O Jogo',
        conteudo: [
            'A RED Canids conquistou sua primeira vitória na ESL Pro League Season 20. Na tarde dessa quinta-feira (12), o esquadrão brasileiro de Marcelo "coldzera" David derrotou a ENCE por 2-1 e mandou o time polonês para o Last Chance Stage.',
            'O duelo começou na Ancient, mapa de escolha da ENCE, mas que desde o início foi completamente dominado pelo time brasileiro. Com um verdadeiro paredão na defesa, a RED Canids anotou seis pontos seguidos e fechou o half em 9-3.',
            'Na troca de lados, a vitória no pistol praticamente sacramentou a vitória da matilha, que pouco precisou fazer para fechar o mapa em 13-3 e anotar o 1-0 na série.',
            'Já na Vertigo, foi a vez da ENCE devolver o atropelo sofrido no mapa passado e controlar todas as ações da primeira metade. Com uma aula de Paavo "podi" Heiskanen, o time europeu devolveu "na mesma moeda" e fechou o placar em 9-3.',
            'Apesar dos esforços por parte da RED Canids em anotar três pontos consecutivos, o mapa ficou mesmo com a ENCE, que fechou em 13-6 e empatou a série em 1-1.',
            'Tudo então se resumiu a Anubis, onde o time brasileiro voltou a tomar as rédeas do mapa desde o começo, anotando um bom lado contraterrorista para abrir 6-1 no placar e fechar a primeira etapa com 7-5 no marcador.',
            'Na troca de lados, a vitória no forçado após a derrota no round pistol facilitou, e muito, a vida da RED Canids, que logo abriu 10-6 no placar. Sem dar chances a ENCE, a matilha logo fechou o mapa em 13-8 e finalizou o 2-0 na série.',
            'Agora, a RED Canids enfrentará a FURIA pelas semifinais lower do grupo D, enquanto a derrotada ENCE terá de duelar contra a ATOX no Last Chance Stage.'
        ]
    }
)
adicionarNoticia(
    'Sensação do Major de Copenhagen, ECSTATIC acerta com ex-MAD Lions',
    'Atleta chega para substituir Tauson, que deve rumar à GamerLegion',
    'Dimi Martins',
    '12/09/24 - 14:20',
    'https://static.draft5.gg/news/2024/09/23110101/Preasy-TMB-PGL-Major-Copenhagen-2024-European-RMR-B.jpg',
    'cs2',
    '/cs2.png',
    19,
    {
        titulo: 'O Jogo',
        conteudo: [
            'A RED Canids conquistou sua primeira vitória na ESL Pro League Season 20. Na tarde dessa quinta-feira (12), o esquadrão brasileiro de Marcelo "coldzera" David derrotou a ENCE por 2-1 e mandou o time polonês para o Last Chance Stage.',
            'O duelo começou na Ancient, mapa de escolha da ENCE, mas que desde o início foi completamente dominado pelo time brasileiro. Com um verdadeiro paredão na defesa, a RED Canids anotou seis pontos seguidos e fechou o half em 9-3.',
            'Na troca de lados, a vitória no pistol praticamente sacramentou a vitória da matilha, que pouco precisou fazer para fechar o mapa em 13-3 e anotar o 1-0 na série.',
            'Já na Vertigo, foi a vez da ENCE devolver o atropelo sofrido no mapa passado e controlar todas as ações da primeira metade. Com uma aula de Paavo "podi" Heiskanen, o time europeu devolveu "na mesma moeda" e fechou o placar em 9-3.',
            'Apesar dos esforços por parte da RED Canids em anotar três pontos consecutivos, o mapa ficou mesmo com a ENCE, que fechou em 13-6 e empatou a série em 1-1.',
            'Tudo então se resumiu a Anubis, onde o time brasileiro voltou a tomar as rédeas do mapa desde o começo, anotando um bom lado contraterrorista para abrir 6-1 no placar e fechar a primeira etapa com 7-5 no marcador.',
            'Na troca de lados, a vitória no forçado após a derrota no round pistol facilitou, e muito, a vida da RED Canids, que logo abriu 10-6 no placar. Sem dar chances a ENCE, a matilha logo fechou o mapa em 13-8 e finalizou o 2-0 na série.',
            'Agora, a RED Canids enfrentará a FURIA pelas semifinais lower do grupo D, enquanto a derrotada ENCE terá de duelar contra a ATOX no Last Chance Stage.'
        ]
    }
)
export default noticias