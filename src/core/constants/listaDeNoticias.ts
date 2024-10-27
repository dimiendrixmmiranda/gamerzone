import { adicionarElemento } from "utils/adicionarElemento";
import Noticia from "../noticias/noticia";

export const listaDeNoticias: Noticia[] = []

adicionarElemento(
    listaDeNoticias,
    {
        game: "valorant",
        gameLogo: "./games/valorant.png",
        titulo: "Gen.G anuncia contratação de foxy9",
        descricao: "Jogador chega após passar duas temporadas vestindo a camisa da DRX",
        conteudoDaMateria: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elit sem, laoreet at tincidunt sit amet, scelerisque a diam. Aenean at massa vitae nisl gravida consectetur. Vivamus malesuada blandit est quis pulvinar. Nulla in odio vel sapien tempus hendrerit. Nullam nec luctus nulla, ut ultricies mi. Sed viverra scelerisque justo ut consequat. Donec sagittis purus quis dolor sollicitudin porta. Ut eros justo, ultricies in tristique ac, scelerisque nec nulla. Suspendisse vel nisi risus. Nulla id libero pulvinar neque porttitor consectetur. Ut id sodales elit. Cras pellentesque, tellus ac pellentesque mollis, ligula felis euismod lacus, vel mollis diam lectus condimentum justo.',
            'Integer ullamcorper justo non ligula sodales egestas. Aenean venenatis enim vitae ullamcorper viverra. Mauris ultrices orci eget ipsum consequat, in tristique nibh suscipit. Integer porta pulvinar auctor. Maecenas at tincidunt sem. Quisque posuere arcu sed augue consectetur sagittis. Donec sed volutpat odio. Nunc viverra ut mauris ac sodales. Nullam augue nulla, pulvinar eu lorem et, mattis facilisis ante. Vivamus laoreet elit a sapien egestas porta. Praesent commodo lobortis risus, ut tempor mauris fermentum a. Aliquam tincidunt interdum risus eget sagittis. In dictum non sem eu laoreet. In laoreet, mi eu hendrerit dignissim, ex leo venenatis massa, et eleifend arcu nibh luctus nibh. In hac habitasse platea dictumst.',

            'Cras semper mauris quis erat finibus, quis semper est sollicitudin. Aenean ullamcorper leo nec ex imperdiet, egestas condimentum mi ullamcorper. Vivamus viverra, quam a pellentesque pulvinar, libero diam condimentum felis, quis tincidunt nibh odio et ligula. Praesent vel ex nec sem ullamcorper rutrum. Vestibulum porta hendrerit efficitur. Donec eget enim convallis, convallis arcu sed, tincidunt augue. Vestibulum eu felis est. Mauris sagittis tincidunt eros. Sed consectetur dignissim metus eget lacinia. Sed sed metus ante. Suspendisse elementum, purus sit amet auctor interdum, ligula justo porta quam, eget suscipit nisi ligula eu sem. Proin laoreet porttitor nibh id scelerisque. Nam quis congue mi, quis lacinia tellus. Suspendisse in dui vitae arcu gravida elementum sit amet non orci. Suspendisse nunc diam, pellentesque vel orci et, tristique suscipit nunc.'
        ],
        autor: "João Silva",
        data: "2024-10-27",
        hora: "15:30",
        thumbnail: "/wireframe-2.png",
        id: 9,
        time: ['gen-g', 'drx']
    },
)
adicionarElemento(
    listaDeNoticias,
    {
        game: "valorant",
        gameLogo: "./games/valorant.png",
        titulo: "Less revela motivos da escolha pela Vitality: “criaram uma equipe muito legal”",
        descricao: "Jogador brasileiro fala pela primeira vez como atleta da Vitality e demonstra empolgação com novo projeto",
        conteudoDaMateria: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elit sem, laoreet at tincidunt sit amet, scelerisque a diam. Aenean at massa vitae nisl gravida consectetur. Vivamus malesuada blandit est quis pulvinar. Nulla in odio vel sapien tempus hendrerit. Nullam nec luctus nulla, ut ultricies mi. Sed viverra scelerisque justo ut consequat. Donec sagittis purus quis dolor sollicitudin porta. Ut eros justo, ultricies in tristique ac, scelerisque nec nulla. Suspendisse vel nisi risus. Nulla id libero pulvinar neque porttitor consectetur. Ut id sodales elit. Cras pellentesque, tellus ac pellentesque mollis, ligula felis euismod lacus, vel mollis diam lectus condimentum justo.',
            'Integer ullamcorper justo non ligula sodales egestas. Aenean venenatis enim vitae ullamcorper viverra. Mauris ultrices orci eget ipsum consequat, in tristique nibh suscipit. Integer porta pulvinar auctor. Maecenas at tincidunt sem. Quisque posuere arcu sed augue consectetur sagittis. Donec sed volutpat odio. Nunc viverra ut mauris ac sodales. Nullam augue nulla, pulvinar eu lorem et, mattis facilisis ante. Vivamus laoreet elit a sapien egestas porta. Praesent commodo lobortis risus, ut tempor mauris fermentum a. Aliquam tincidunt interdum risus eget sagittis. In dictum non sem eu laoreet. In laoreet, mi eu hendrerit dignissim, ex leo venenatis massa, et eleifend arcu nibh luctus nibh. In hac habitasse platea dictumst.',

            'Cras semper mauris quis erat finibus, quis semper est sollicitudin. Aenean ullamcorper leo nec ex imperdiet, egestas condimentum mi ullamcorper. Vivamus viverra, quam a pellentesque pulvinar, libero diam condimentum felis, quis tincidunt nibh odio et ligula. Praesent vel ex nec sem ullamcorper rutrum. Vestibulum porta hendrerit efficitur. Donec eget enim convallis, convallis arcu sed, tincidunt augue. Vestibulum eu felis est. Mauris sagittis tincidunt eros. Sed consectetur dignissim metus eget lacinia. Sed sed metus ante. Suspendisse elementum, purus sit amet auctor interdum, ligula justo porta quam, eget suscipit nisi ligula eu sem. Proin laoreet porttitor nibh id scelerisque. Nam quis congue mi, quis lacinia tellus. Suspendisse in dui vitae arcu gravida elementum sit amet non orci. Suspendisse nunc diam, pellentesque vel orci et, tristique suscipit nunc.'
        ],
        autor: "João Silva",
        data: "2024-10-27",
        hora: "15:30",
        thumbnail: "/wireframe-2.png",
        id: 8,
        time: ['vitality']
    },
)
adicionarElemento(
    listaDeNoticias,
    {
        game: "valorant",
        gameLogo: "./games/valorant.png",
        titulo: "Evil Geniuses comunica saída de apoth",
        descricao: "Jogador permaneceu na organização por quase três anos",
        conteudoDaMateria: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elit sem, laoreet at tincidunt sit amet, scelerisque a diam. Aenean at massa vitae nisl gravida consectetur. Vivamus malesuada blandit est quis pulvinar. Nulla in odio vel sapien tempus hendrerit. Nullam nec luctus nulla, ut ultricies mi. Sed viverra scelerisque justo ut consequat. Donec sagittis purus quis dolor sollicitudin porta. Ut eros justo, ultricies in tristique ac, scelerisque nec nulla. Suspendisse vel nisi risus. Nulla id libero pulvinar neque porttitor consectetur. Ut id sodales elit. Cras pellentesque, tellus ac pellentesque mollis, ligula felis euismod lacus, vel mollis diam lectus condimentum justo.',
            'Integer ullamcorper justo non ligula sodales egestas. Aenean venenatis enim vitae ullamcorper viverra. Mauris ultrices orci eget ipsum consequat, in tristique nibh suscipit. Integer porta pulvinar auctor. Maecenas at tincidunt sem. Quisque posuere arcu sed augue consectetur sagittis. Donec sed volutpat odio. Nunc viverra ut mauris ac sodales. Nullam augue nulla, pulvinar eu lorem et, mattis facilisis ante. Vivamus laoreet elit a sapien egestas porta. Praesent commodo lobortis risus, ut tempor mauris fermentum a. Aliquam tincidunt interdum risus eget sagittis. In dictum non sem eu laoreet. In laoreet, mi eu hendrerit dignissim, ex leo venenatis massa, et eleifend arcu nibh luctus nibh. In hac habitasse platea dictumst.',

            'Cras semper mauris quis erat finibus, quis semper est sollicitudin. Aenean ullamcorper leo nec ex imperdiet, egestas condimentum mi ullamcorper. Vivamus viverra, quam a pellentesque pulvinar, libero diam condimentum felis, quis tincidunt nibh odio et ligula. Praesent vel ex nec sem ullamcorper rutrum. Vestibulum porta hendrerit efficitur. Donec eget enim convallis, convallis arcu sed, tincidunt augue. Vestibulum eu felis est. Mauris sagittis tincidunt eros. Sed consectetur dignissim metus eget lacinia. Sed sed metus ante. Suspendisse elementum, purus sit amet auctor interdum, ligula justo porta quam, eget suscipit nisi ligula eu sem. Proin laoreet porttitor nibh id scelerisque. Nam quis congue mi, quis lacinia tellus. Suspendisse in dui vitae arcu gravida elementum sit amet non orci. Suspendisse nunc diam, pellentesque vel orci et, tristique suscipit nunc.'
        ],
        autor: "João Silva",
        data: "2024-10-27",
        hora: "15:30",
        thumbnail: "/wireframe-2.png",
        id: 7,
        time: ['eg']
    },
)
adicionarElemento(
    listaDeNoticias,
    {
        game: "valorant",
        gameLogo: "./games/valorant.png",
        titulo: "MIBR fecha acordo com Leviatán para contratação de aspas, aponta site",
        descricao: "Negociação entre MIBR e aspas está em andamento após aval da organização argentina",
        conteudoDaMateria: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elit sem, laoreet at tincidunt sit amet, scelerisque a diam. Aenean at massa vitae nisl gravida consectetur. Vivamus malesuada blandit est quis pulvinar. Nulla in odio vel sapien tempus hendrerit. Nullam nec luctus nulla, ut ultricies mi. Sed viverra scelerisque justo ut consequat. Donec sagittis purus quis dolor sollicitudin porta. Ut eros justo, ultricies in tristique ac, scelerisque nec nulla. Suspendisse vel nisi risus. Nulla id libero pulvinar neque porttitor consectetur. Ut id sodales elit. Cras pellentesque, tellus ac pellentesque mollis, ligula felis euismod lacus, vel mollis diam lectus condimentum justo.',
            'Integer ullamcorper justo non ligula sodales egestas. Aenean venenatis enim vitae ullamcorper viverra. Mauris ultrices orci eget ipsum consequat, in tristique nibh suscipit. Integer porta pulvinar auctor. Maecenas at tincidunt sem. Quisque posuere arcu sed augue consectetur sagittis. Donec sed volutpat odio. Nunc viverra ut mauris ac sodales. Nullam augue nulla, pulvinar eu lorem et, mattis facilisis ante. Vivamus laoreet elit a sapien egestas porta. Praesent commodo lobortis risus, ut tempor mauris fermentum a. Aliquam tincidunt interdum risus eget sagittis. In dictum non sem eu laoreet. In laoreet, mi eu hendrerit dignissim, ex leo venenatis massa, et eleifend arcu nibh luctus nibh. In hac habitasse platea dictumst.',

            'Cras semper mauris quis erat finibus, quis semper est sollicitudin. Aenean ullamcorper leo nec ex imperdiet, egestas condimentum mi ullamcorper. Vivamus viverra, quam a pellentesque pulvinar, libero diam condimentum felis, quis tincidunt nibh odio et ligula. Praesent vel ex nec sem ullamcorper rutrum. Vestibulum porta hendrerit efficitur. Donec eget enim convallis, convallis arcu sed, tincidunt augue. Vestibulum eu felis est. Mauris sagittis tincidunt eros. Sed consectetur dignissim metus eget lacinia. Sed sed metus ante. Suspendisse elementum, purus sit amet auctor interdum, ligula justo porta quam, eget suscipit nisi ligula eu sem. Proin laoreet porttitor nibh id scelerisque. Nam quis congue mi, quis lacinia tellus. Suspendisse in dui vitae arcu gravida elementum sit amet non orci. Suspendisse nunc diam, pellentesque vel orci et, tristique suscipit nunc.'
        ],
        autor: "João Silva",
        data: "2024-10-27",
        hora: "15:30",
        thumbnail: "/wireframe-2.png",
        id: 6,
        time: ['mibr', 'leviatan']
    },
)
adicionarElemento(
    listaDeNoticias,
    {
        game: "CS2",
        gameLogo: "./games/cs2.png",
        titulo: "FalleN tem maior tempo médio de inimigos cegos por rodada em 2024",
        descricao: "Astro da FURIA está à frente de nomes como Jame, apEX e device",
        conteudoDaMateria: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elit sem, laoreet at tincidunt sit amet, scelerisque a diam. Aenean at massa vitae nisl gravida consectetur. Vivamus malesuada blandit est quis pulvinar. Nulla in odio vel sapien tempus hendrerit. Nullam nec luctus nulla, ut ultricies mi. Sed viverra scelerisque justo ut consequat. Donec sagittis purus quis dolor sollicitudin porta. Ut eros justo, ultricies in tristique ac, scelerisque nec nulla. Suspendisse vel nisi risus. Nulla id libero pulvinar neque porttitor consectetur. Ut id sodales elit. Cras pellentesque, tellus ac pellentesque mollis, ligula felis euismod lacus, vel mollis diam lectus condimentum justo.',
            'Integer ullamcorper justo non ligula sodales egestas. Aenean venenatis enim vitae ullamcorper viverra. Mauris ultrices orci eget ipsum consequat, in tristique nibh suscipit. Integer porta pulvinar auctor. Maecenas at tincidunt sem. Quisque posuere arcu sed augue consectetur sagittis. Donec sed volutpat odio. Nunc viverra ut mauris ac sodales. Nullam augue nulla, pulvinar eu lorem et, mattis facilisis ante. Vivamus laoreet elit a sapien egestas porta. Praesent commodo lobortis risus, ut tempor mauris fermentum a. Aliquam tincidunt interdum risus eget sagittis. In dictum non sem eu laoreet. In laoreet, mi eu hendrerit dignissim, ex leo venenatis massa, et eleifend arcu nibh luctus nibh. In hac habitasse platea dictumst.',

            'Cras semper mauris quis erat finibus, quis semper est sollicitudin. Aenean ullamcorper leo nec ex imperdiet, egestas condimentum mi ullamcorper. Vivamus viverra, quam a pellentesque pulvinar, libero diam condimentum felis, quis tincidunt nibh odio et ligula. Praesent vel ex nec sem ullamcorper rutrum. Vestibulum porta hendrerit efficitur. Donec eget enim convallis, convallis arcu sed, tincidunt augue. Vestibulum eu felis est. Mauris sagittis tincidunt eros. Sed consectetur dignissim metus eget lacinia. Sed sed metus ante. Suspendisse elementum, purus sit amet auctor interdum, ligula justo porta quam, eget suscipit nisi ligula eu sem. Proin laoreet porttitor nibh id scelerisque. Nam quis congue mi, quis lacinia tellus. Suspendisse in dui vitae arcu gravida elementum sit amet non orci. Suspendisse nunc diam, pellentesque vel orci et, tristique suscipit nunc.'
        ],
        autor: "João Silva",
        data: "2024-10-27",
        hora: "15:30",
        thumbnail: "/wireframe-2.png",
        id: 5,
        time: ['furia']
    },
)
adicionarElemento(
    listaDeNoticias,
    {
        game: "CS2",
        gameLogo: "./games/cs2.png",
        titulo: "Sharks e ODDIK farão grande final do CBCS Invitational 2024",
        descricao: " Durante a tarde e noite desse sábado (26), a dupla desbancou Fluxo e inSanitY, respectivamente, para sacramentar suas vagas finalíssima da competição.",
        conteudoDaMateria: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elit sem, laoreet at tincidunt sit amet, scelerisque a diam. Aenean at massa vitae nisl gravida consectetur. Vivamus malesuada blandit est quis pulvinar. Nulla in odio vel sapien tempus hendrerit. Nullam nec luctus nulla, ut ultricies mi. Sed viverra scelerisque justo ut consequat. Donec sagittis purus quis dolor sollicitudin porta. Ut eros justo, ultricies in tristique ac, scelerisque nec nulla. Suspendisse vel nisi risus. Nulla id libero pulvinar neque porttitor consectetur. Ut id sodales elit. Cras pellentesque, tellus ac pellentesque mollis, ligula felis euismod lacus, vel mollis diam lectus condimentum justo.',
            'Integer ullamcorper justo non ligula sodales egestas. Aenean venenatis enim vitae ullamcorper viverra. Mauris ultrices orci eget ipsum consequat, in tristique nibh suscipit. Integer porta pulvinar auctor. Maecenas at tincidunt sem. Quisque posuere arcu sed augue consectetur sagittis. Donec sed volutpat odio. Nunc viverra ut mauris ac sodales. Nullam augue nulla, pulvinar eu lorem et, mattis facilisis ante. Vivamus laoreet elit a sapien egestas porta. Praesent commodo lobortis risus, ut tempor mauris fermentum a. Aliquam tincidunt interdum risus eget sagittis. In dictum non sem eu laoreet. In laoreet, mi eu hendrerit dignissim, ex leo venenatis massa, et eleifend arcu nibh luctus nibh. In hac habitasse platea dictumst.',

            'Cras semper mauris quis erat finibus, quis semper est sollicitudin. Aenean ullamcorper leo nec ex imperdiet, egestas condimentum mi ullamcorper. Vivamus viverra, quam a pellentesque pulvinar, libero diam condimentum felis, quis tincidunt nibh odio et ligula. Praesent vel ex nec sem ullamcorper rutrum. Vestibulum porta hendrerit efficitur. Donec eget enim convallis, convallis arcu sed, tincidunt augue. Vestibulum eu felis est. Mauris sagittis tincidunt eros. Sed consectetur dignissim metus eget lacinia. Sed sed metus ante. Suspendisse elementum, purus sit amet auctor interdum, ligula justo porta quam, eget suscipit nisi ligula eu sem. Proin laoreet porttitor nibh id scelerisque. Nam quis congue mi, quis lacinia tellus. Suspendisse in dui vitae arcu gravida elementum sit amet non orci. Suspendisse nunc diam, pellentesque vel orci et, tristique suscipit nunc.'
        ],
        autor: "João Silva",
        data: "2024-10-27",
        hora: "15:30",
        thumbnail: "/wireframe-2.png",
        id: 4,
        time: ['sharks', 'oddik']
    },
)
adicionarElemento(
    listaDeNoticias,
    {
        game: "CS2",
        gameLogo: "./games/cs2.png",
        titulo: "Legacy luta até o fim, mas perde para Monte e é eliminada da ESL Challenger Katowice 2024",
        descricao: "Time brasileiro sofreu 'apagão' no terceiro mapa e foi atropelado pelos poloneses",
        conteudoDaMateria: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elit sem, laoreet at tincidunt sit amet, scelerisque a diam. Aenean at massa vitae nisl gravida consectetur. Vivamus malesuada blandit est quis pulvinar. Nulla in odio vel sapien tempus hendrerit. Nullam nec luctus nulla, ut ultricies mi. Sed viverra scelerisque justo ut consequat. Donec sagittis purus quis dolor sollicitudin porta. Ut eros justo, ultricies in tristique ac, scelerisque nec nulla. Suspendisse vel nisi risus. Nulla id libero pulvinar neque porttitor consectetur. Ut id sodales elit. Cras pellentesque, tellus ac pellentesque mollis, ligula felis euismod lacus, vel mollis diam lectus condimentum justo.',
            'Integer ullamcorper justo non ligula sodales egestas. Aenean venenatis enim vitae ullamcorper viverra. Mauris ultrices orci eget ipsum consequat, in tristique nibh suscipit. Integer porta pulvinar auctor. Maecenas at tincidunt sem. Quisque posuere arcu sed augue consectetur sagittis. Donec sed volutpat odio. Nunc viverra ut mauris ac sodales. Nullam augue nulla, pulvinar eu lorem et, mattis facilisis ante. Vivamus laoreet elit a sapien egestas porta. Praesent commodo lobortis risus, ut tempor mauris fermentum a. Aliquam tincidunt interdum risus eget sagittis. In dictum non sem eu laoreet. In laoreet, mi eu hendrerit dignissim, ex leo venenatis massa, et eleifend arcu nibh luctus nibh. In hac habitasse platea dictumst.',

            'Cras semper mauris quis erat finibus, quis semper est sollicitudin. Aenean ullamcorper leo nec ex imperdiet, egestas condimentum mi ullamcorper. Vivamus viverra, quam a pellentesque pulvinar, libero diam condimentum felis, quis tincidunt nibh odio et ligula. Praesent vel ex nec sem ullamcorper rutrum. Vestibulum porta hendrerit efficitur. Donec eget enim convallis, convallis arcu sed, tincidunt augue. Vestibulum eu felis est. Mauris sagittis tincidunt eros. Sed consectetur dignissim metus eget lacinia. Sed sed metus ante. Suspendisse elementum, purus sit amet auctor interdum, ligula justo porta quam, eget suscipit nisi ligula eu sem. Proin laoreet porttitor nibh id scelerisque. Nam quis congue mi, quis lacinia tellus. Suspendisse in dui vitae arcu gravida elementum sit amet non orci. Suspendisse nunc diam, pellentesque vel orci et, tristique suscipit nunc.'
        ],
        autor: "João Silva",
        data: "2024-10-27",
        hora: "15:30",
        thumbnail: "/wireframe-2.png",
        id: 3,
        time: ['legacy', 'monte']
    },
)
adicionarElemento(
    listaDeNoticias,
    {
        game: "CS2",
        gameLogo: "./games/cs2.png",
        titulo: "Imperial perde pra The Mongolz e está eliminada da Thunderpick World Championship 2024",
        descricao: "Confronto entre brasileiros e chineses foi bastante disputado.",
        conteudoDaMateria: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elit sem, laoreet at tincidunt sit amet, scelerisque a diam. Aenean at massa vitae nisl gravida consectetur. Vivamus malesuada blandit est quis pulvinar. Nulla in odio vel sapien tempus hendrerit. Nullam nec luctus nulla, ut ultricies mi. Sed viverra scelerisque justo ut consequat. Donec sagittis purus quis dolor sollicitudin porta. Ut eros justo, ultricies in tristique ac, scelerisque nec nulla. Suspendisse vel nisi risus. Nulla id libero pulvinar neque porttitor consectetur. Ut id sodales elit. Cras pellentesque, tellus ac pellentesque mollis, ligula felis euismod lacus, vel mollis diam lectus condimentum justo.',
            'Integer ullamcorper justo non ligula sodales egestas. Aenean venenatis enim vitae ullamcorper viverra. Mauris ultrices orci eget ipsum consequat, in tristique nibh suscipit. Integer porta pulvinar auctor. Maecenas at tincidunt sem. Quisque posuere arcu sed augue consectetur sagittis. Donec sed volutpat odio. Nunc viverra ut mauris ac sodales. Nullam augue nulla, pulvinar eu lorem et, mattis facilisis ante. Vivamus laoreet elit a sapien egestas porta. Praesent commodo lobortis risus, ut tempor mauris fermentum a. Aliquam tincidunt interdum risus eget sagittis. In dictum non sem eu laoreet. In laoreet, mi eu hendrerit dignissim, ex leo venenatis massa, et eleifend arcu nibh luctus nibh. In hac habitasse platea dictumst.',

            'Cras semper mauris quis erat finibus, quis semper est sollicitudin. Aenean ullamcorper leo nec ex imperdiet, egestas condimentum mi ullamcorper. Vivamus viverra, quam a pellentesque pulvinar, libero diam condimentum felis, quis tincidunt nibh odio et ligula. Praesent vel ex nec sem ullamcorper rutrum. Vestibulum porta hendrerit efficitur. Donec eget enim convallis, convallis arcu sed, tincidunt augue. Vestibulum eu felis est. Mauris sagittis tincidunt eros. Sed consectetur dignissim metus eget lacinia. Sed sed metus ante. Suspendisse elementum, purus sit amet auctor interdum, ligula justo porta quam, eget suscipit nisi ligula eu sem. Proin laoreet porttitor nibh id scelerisque. Nam quis congue mi, quis lacinia tellus. Suspendisse in dui vitae arcu gravida elementum sit amet non orci. Suspendisse nunc diam, pellentesque vel orci et, tristique suscipit nunc.'
        ],
        autor: "João Silva",
        data: "2024-10-27",
        hora: "15:30",
        thumbnail: "/wireframe-2.png",
        id: 2,
        time: ['imperial', 'the-mongolz']
    },
)
adicionarElemento(
    listaDeNoticias,
    {
        game: "CS2",
        gameLogo: "./games/cs2.png",
        titulo: "paiN perde para B8 na semifinal e se despede da ESL Challenger Katowice 2024",
        descricao: "Confronto entre brasileiros e ucranianos foi bastante disputado.",
        conteudoDaMateria: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elit sem, laoreet at tincidunt sit amet, scelerisque a diam. Aenean at massa vitae nisl gravida consectetur. Vivamus malesuada blandit est quis pulvinar. Nulla in odio vel sapien tempus hendrerit. Nullam nec luctus nulla, ut ultricies mi. Sed viverra scelerisque justo ut consequat. Donec sagittis purus quis dolor sollicitudin porta. Ut eros justo, ultricies in tristique ac, scelerisque nec nulla. Suspendisse vel nisi risus. Nulla id libero pulvinar neque porttitor consectetur. Ut id sodales elit. Cras pellentesque, tellus ac pellentesque mollis, ligula felis euismod lacus, vel mollis diam lectus condimentum justo.',
            'Integer ullamcorper justo non ligula sodales egestas. Aenean venenatis enim vitae ullamcorper viverra. Mauris ultrices orci eget ipsum consequat, in tristique nibh suscipit. Integer porta pulvinar auctor. Maecenas at tincidunt sem. Quisque posuere arcu sed augue consectetur sagittis. Donec sed volutpat odio. Nunc viverra ut mauris ac sodales. Nullam augue nulla, pulvinar eu lorem et, mattis facilisis ante. Vivamus laoreet elit a sapien egestas porta. Praesent commodo lobortis risus, ut tempor mauris fermentum a. Aliquam tincidunt interdum risus eget sagittis. In dictum non sem eu laoreet. In laoreet, mi eu hendrerit dignissim, ex leo venenatis massa, et eleifend arcu nibh luctus nibh. In hac habitasse platea dictumst.',

            'Cras semper mauris quis erat finibus, quis semper est sollicitudin. Aenean ullamcorper leo nec ex imperdiet, egestas condimentum mi ullamcorper. Vivamus viverra, quam a pellentesque pulvinar, libero diam condimentum felis, quis tincidunt nibh odio et ligula. Praesent vel ex nec sem ullamcorper rutrum. Vestibulum porta hendrerit efficitur. Donec eget enim convallis, convallis arcu sed, tincidunt augue. Vestibulum eu felis est. Mauris sagittis tincidunt eros. Sed consectetur dignissim metus eget lacinia. Sed sed metus ante. Suspendisse elementum, purus sit amet auctor interdum, ligula justo porta quam, eget suscipit nisi ligula eu sem. Proin laoreet porttitor nibh id scelerisque. Nam quis congue mi, quis lacinia tellus. Suspendisse in dui vitae arcu gravida elementum sit amet non orci. Suspendisse nunc diam, pellentesque vel orci et, tristique suscipit nunc.'
        ],
        autor: "João Silva",
        data: "2024-10-27",
        hora: "15:30",
        thumbnail: "/wireframe-2.png",
        id: 3,
        time: ['pain', 'b8']
    },
)
adicionarElemento(
    listaDeNoticias,
    {
        game: "valorant",
        gameLogo: "./games/valorant.png",
        titulo: "Gen.G anuncia contratação de foxy9",
        descricao: "Jogador chega após passar duas temporadas vestindo a camisa da DRX",
        conteudoDaMateria: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elit sem, laoreet at tincidunt sit amet, scelerisque a diam. Aenean at massa vitae nisl gravida consectetur. Vivamus malesuada blandit est quis pulvinar. Nulla in odio vel sapien tempus hendrerit. Nullam nec luctus nulla, ut ultricies mi. Sed viverra scelerisque justo ut consequat. Donec sagittis purus quis dolor sollicitudin porta. Ut eros justo, ultricies in tristique ac, scelerisque nec nulla. Suspendisse vel nisi risus. Nulla id libero pulvinar neque porttitor consectetur. Ut id sodales elit. Cras pellentesque, tellus ac pellentesque mollis, ligula felis euismod lacus, vel mollis diam lectus condimentum justo.',
            'Integer ullamcorper justo non ligula sodales egestas. Aenean venenatis enim vitae ullamcorper viverra. Mauris ultrices orci eget ipsum consequat, in tristique nibh suscipit. Integer porta pulvinar auctor. Maecenas at tincidunt sem. Quisque posuere arcu sed augue consectetur sagittis. Donec sed volutpat odio. Nunc viverra ut mauris ac sodales. Nullam augue nulla, pulvinar eu lorem et, mattis facilisis ante. Vivamus laoreet elit a sapien egestas porta. Praesent commodo lobortis risus, ut tempor mauris fermentum a. Aliquam tincidunt interdum risus eget sagittis. In dictum non sem eu laoreet. In laoreet, mi eu hendrerit dignissim, ex leo venenatis massa, et eleifend arcu nibh luctus nibh. In hac habitasse platea dictumst.',

            'Cras semper mauris quis erat finibus, quis semper est sollicitudin. Aenean ullamcorper leo nec ex imperdiet, egestas condimentum mi ullamcorper. Vivamus viverra, quam a pellentesque pulvinar, libero diam condimentum felis, quis tincidunt nibh odio et ligula. Praesent vel ex nec sem ullamcorper rutrum. Vestibulum porta hendrerit efficitur. Donec eget enim convallis, convallis arcu sed, tincidunt augue. Vestibulum eu felis est. Mauris sagittis tincidunt eros. Sed consectetur dignissim metus eget lacinia. Sed sed metus ante. Suspendisse elementum, purus sit amet auctor interdum, ligula justo porta quam, eget suscipit nisi ligula eu sem. Proin laoreet porttitor nibh id scelerisque. Nam quis congue mi, quis lacinia tellus. Suspendisse in dui vitae arcu gravida elementum sit amet non orci. Suspendisse nunc diam, pellentesque vel orci et, tristique suscipit nunc.'
        ],
        autor: "João Silva",
        data: "2024-10-27",
        hora: "15:30",
        thumbnail: "/wireframe-2.png",
        id: 9,
        time: ['gen-g', 'drx']
    },
)
adicionarElemento(
    listaDeNoticias,
    {
        game: "valorant",
        gameLogo: "./games/valorant.png",
        titulo: "Less revela motivos da escolha pela Vitality: “criaram uma equipe muito legal”",
        descricao: "Jogador brasileiro fala pela primeira vez como atleta da Vitality e demonstra empolgação com novo projeto",
        conteudoDaMateria: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elit sem, laoreet at tincidunt sit amet, scelerisque a diam. Aenean at massa vitae nisl gravida consectetur. Vivamus malesuada blandit est quis pulvinar. Nulla in odio vel sapien tempus hendrerit. Nullam nec luctus nulla, ut ultricies mi. Sed viverra scelerisque justo ut consequat. Donec sagittis purus quis dolor sollicitudin porta. Ut eros justo, ultricies in tristique ac, scelerisque nec nulla. Suspendisse vel nisi risus. Nulla id libero pulvinar neque porttitor consectetur. Ut id sodales elit. Cras pellentesque, tellus ac pellentesque mollis, ligula felis euismod lacus, vel mollis diam lectus condimentum justo.',
            'Integer ullamcorper justo non ligula sodales egestas. Aenean venenatis enim vitae ullamcorper viverra. Mauris ultrices orci eget ipsum consequat, in tristique nibh suscipit. Integer porta pulvinar auctor. Maecenas at tincidunt sem. Quisque posuere arcu sed augue consectetur sagittis. Donec sed volutpat odio. Nunc viverra ut mauris ac sodales. Nullam augue nulla, pulvinar eu lorem et, mattis facilisis ante. Vivamus laoreet elit a sapien egestas porta. Praesent commodo lobortis risus, ut tempor mauris fermentum a. Aliquam tincidunt interdum risus eget sagittis. In dictum non sem eu laoreet. In laoreet, mi eu hendrerit dignissim, ex leo venenatis massa, et eleifend arcu nibh luctus nibh. In hac habitasse platea dictumst.',

            'Cras semper mauris quis erat finibus, quis semper est sollicitudin. Aenean ullamcorper leo nec ex imperdiet, egestas condimentum mi ullamcorper. Vivamus viverra, quam a pellentesque pulvinar, libero diam condimentum felis, quis tincidunt nibh odio et ligula. Praesent vel ex nec sem ullamcorper rutrum. Vestibulum porta hendrerit efficitur. Donec eget enim convallis, convallis arcu sed, tincidunt augue. Vestibulum eu felis est. Mauris sagittis tincidunt eros. Sed consectetur dignissim metus eget lacinia. Sed sed metus ante. Suspendisse elementum, purus sit amet auctor interdum, ligula justo porta quam, eget suscipit nisi ligula eu sem. Proin laoreet porttitor nibh id scelerisque. Nam quis congue mi, quis lacinia tellus. Suspendisse in dui vitae arcu gravida elementum sit amet non orci. Suspendisse nunc diam, pellentesque vel orci et, tristique suscipit nunc.'
        ],
        autor: "João Silva",
        data: "2024-10-27",
        hora: "15:30",
        thumbnail: "/wireframe-2.png",
        id: 8,
        time: ['vitality']
    },
)
adicionarElemento(
    listaDeNoticias,
    {
        game: "valorant",
        gameLogo: "./games/valorant.png",
        titulo: "Evil Geniuses comunica saída de apoth",
        descricao: "Jogador permaneceu na organização por quase três anos",
        conteudoDaMateria: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elit sem, laoreet at tincidunt sit amet, scelerisque a diam. Aenean at massa vitae nisl gravida consectetur. Vivamus malesuada blandit est quis pulvinar. Nulla in odio vel sapien tempus hendrerit. Nullam nec luctus nulla, ut ultricies mi. Sed viverra scelerisque justo ut consequat. Donec sagittis purus quis dolor sollicitudin porta. Ut eros justo, ultricies in tristique ac, scelerisque nec nulla. Suspendisse vel nisi risus. Nulla id libero pulvinar neque porttitor consectetur. Ut id sodales elit. Cras pellentesque, tellus ac pellentesque mollis, ligula felis euismod lacus, vel mollis diam lectus condimentum justo.',
            'Integer ullamcorper justo non ligula sodales egestas. Aenean venenatis enim vitae ullamcorper viverra. Mauris ultrices orci eget ipsum consequat, in tristique nibh suscipit. Integer porta pulvinar auctor. Maecenas at tincidunt sem. Quisque posuere arcu sed augue consectetur sagittis. Donec sed volutpat odio. Nunc viverra ut mauris ac sodales. Nullam augue nulla, pulvinar eu lorem et, mattis facilisis ante. Vivamus laoreet elit a sapien egestas porta. Praesent commodo lobortis risus, ut tempor mauris fermentum a. Aliquam tincidunt interdum risus eget sagittis. In dictum non sem eu laoreet. In laoreet, mi eu hendrerit dignissim, ex leo venenatis massa, et eleifend arcu nibh luctus nibh. In hac habitasse platea dictumst.',

            'Cras semper mauris quis erat finibus, quis semper est sollicitudin. Aenean ullamcorper leo nec ex imperdiet, egestas condimentum mi ullamcorper. Vivamus viverra, quam a pellentesque pulvinar, libero diam condimentum felis, quis tincidunt nibh odio et ligula. Praesent vel ex nec sem ullamcorper rutrum. Vestibulum porta hendrerit efficitur. Donec eget enim convallis, convallis arcu sed, tincidunt augue. Vestibulum eu felis est. Mauris sagittis tincidunt eros. Sed consectetur dignissim metus eget lacinia. Sed sed metus ante. Suspendisse elementum, purus sit amet auctor interdum, ligula justo porta quam, eget suscipit nisi ligula eu sem. Proin laoreet porttitor nibh id scelerisque. Nam quis congue mi, quis lacinia tellus. Suspendisse in dui vitae arcu gravida elementum sit amet non orci. Suspendisse nunc diam, pellentesque vel orci et, tristique suscipit nunc.'
        ],
        autor: "João Silva",
        data: "2024-10-27",
        hora: "15:30",
        thumbnail: "/wireframe-2.png",
        id: 7,
        time: ['eg']
    },
)
adicionarElemento(
    listaDeNoticias,
    {
        game: "valorant",
        gameLogo: "./games/valorant.png",
        titulo: "MIBR fecha acordo com Leviatán para contratação de aspas, aponta site",
        descricao: "Negociação entre MIBR e aspas está em andamento após aval da organização argentina",
        conteudoDaMateria: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elit sem, laoreet at tincidunt sit amet, scelerisque a diam. Aenean at massa vitae nisl gravida consectetur. Vivamus malesuada blandit est quis pulvinar. Nulla in odio vel sapien tempus hendrerit. Nullam nec luctus nulla, ut ultricies mi. Sed viverra scelerisque justo ut consequat. Donec sagittis purus quis dolor sollicitudin porta. Ut eros justo, ultricies in tristique ac, scelerisque nec nulla. Suspendisse vel nisi risus. Nulla id libero pulvinar neque porttitor consectetur. Ut id sodales elit. Cras pellentesque, tellus ac pellentesque mollis, ligula felis euismod lacus, vel mollis diam lectus condimentum justo.',
            'Integer ullamcorper justo non ligula sodales egestas. Aenean venenatis enim vitae ullamcorper viverra. Mauris ultrices orci eget ipsum consequat, in tristique nibh suscipit. Integer porta pulvinar auctor. Maecenas at tincidunt sem. Quisque posuere arcu sed augue consectetur sagittis. Donec sed volutpat odio. Nunc viverra ut mauris ac sodales. Nullam augue nulla, pulvinar eu lorem et, mattis facilisis ante. Vivamus laoreet elit a sapien egestas porta. Praesent commodo lobortis risus, ut tempor mauris fermentum a. Aliquam tincidunt interdum risus eget sagittis. In dictum non sem eu laoreet. In laoreet, mi eu hendrerit dignissim, ex leo venenatis massa, et eleifend arcu nibh luctus nibh. In hac habitasse platea dictumst.',

            'Cras semper mauris quis erat finibus, quis semper est sollicitudin. Aenean ullamcorper leo nec ex imperdiet, egestas condimentum mi ullamcorper. Vivamus viverra, quam a pellentesque pulvinar, libero diam condimentum felis, quis tincidunt nibh odio et ligula. Praesent vel ex nec sem ullamcorper rutrum. Vestibulum porta hendrerit efficitur. Donec eget enim convallis, convallis arcu sed, tincidunt augue. Vestibulum eu felis est. Mauris sagittis tincidunt eros. Sed consectetur dignissim metus eget lacinia. Sed sed metus ante. Suspendisse elementum, purus sit amet auctor interdum, ligula justo porta quam, eget suscipit nisi ligula eu sem. Proin laoreet porttitor nibh id scelerisque. Nam quis congue mi, quis lacinia tellus. Suspendisse in dui vitae arcu gravida elementum sit amet non orci. Suspendisse nunc diam, pellentesque vel orci et, tristique suscipit nunc.'
        ],
        autor: "João Silva",
        data: "2024-10-27",
        hora: "15:30",
        thumbnail: "/wireframe-2.png",
        id: 6,
        time: ['mibr', 'leviatan']
    },
)
adicionarElemento(
    listaDeNoticias,
    {
        game: "CS2",
        gameLogo: "./games/cs2.png",
        titulo: "FalleN tem maior tempo médio de inimigos cegos por rodada em 2024",
        descricao: "Astro da FURIA está à frente de nomes como Jame, apEX e device",
        conteudoDaMateria: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elit sem, laoreet at tincidunt sit amet, scelerisque a diam. Aenean at massa vitae nisl gravida consectetur. Vivamus malesuada blandit est quis pulvinar. Nulla in odio vel sapien tempus hendrerit. Nullam nec luctus nulla, ut ultricies mi. Sed viverra scelerisque justo ut consequat. Donec sagittis purus quis dolor sollicitudin porta. Ut eros justo, ultricies in tristique ac, scelerisque nec nulla. Suspendisse vel nisi risus. Nulla id libero pulvinar neque porttitor consectetur. Ut id sodales elit. Cras pellentesque, tellus ac pellentesque mollis, ligula felis euismod lacus, vel mollis diam lectus condimentum justo.',
            'Integer ullamcorper justo non ligula sodales egestas. Aenean venenatis enim vitae ullamcorper viverra. Mauris ultrices orci eget ipsum consequat, in tristique nibh suscipit. Integer porta pulvinar auctor. Maecenas at tincidunt sem. Quisque posuere arcu sed augue consectetur sagittis. Donec sed volutpat odio. Nunc viverra ut mauris ac sodales. Nullam augue nulla, pulvinar eu lorem et, mattis facilisis ante. Vivamus laoreet elit a sapien egestas porta. Praesent commodo lobortis risus, ut tempor mauris fermentum a. Aliquam tincidunt interdum risus eget sagittis. In dictum non sem eu laoreet. In laoreet, mi eu hendrerit dignissim, ex leo venenatis massa, et eleifend arcu nibh luctus nibh. In hac habitasse platea dictumst.',

            'Cras semper mauris quis erat finibus, quis semper est sollicitudin. Aenean ullamcorper leo nec ex imperdiet, egestas condimentum mi ullamcorper. Vivamus viverra, quam a pellentesque pulvinar, libero diam condimentum felis, quis tincidunt nibh odio et ligula. Praesent vel ex nec sem ullamcorper rutrum. Vestibulum porta hendrerit efficitur. Donec eget enim convallis, convallis arcu sed, tincidunt augue. Vestibulum eu felis est. Mauris sagittis tincidunt eros. Sed consectetur dignissim metus eget lacinia. Sed sed metus ante. Suspendisse elementum, purus sit amet auctor interdum, ligula justo porta quam, eget suscipit nisi ligula eu sem. Proin laoreet porttitor nibh id scelerisque. Nam quis congue mi, quis lacinia tellus. Suspendisse in dui vitae arcu gravida elementum sit amet non orci. Suspendisse nunc diam, pellentesque vel orci et, tristique suscipit nunc.'
        ],
        autor: "João Silva",
        data: "2024-10-27",
        hora: "15:30",
        thumbnail: "/wireframe-2.png",
        id: 5,
        time: ['furia']
    },
)
adicionarElemento(
    listaDeNoticias,
    {
        game: "CS2",
        gameLogo: "./games/cs2.png",
        titulo: "Sharks e ODDIK farão grande final do CBCS Invitational 2024",
        descricao: " Durante a tarde e noite desse sábado (26), a dupla desbancou Fluxo e inSanitY, respectivamente, para sacramentar suas vagas finalíssima da competição.",
        conteudoDaMateria: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elit sem, laoreet at tincidunt sit amet, scelerisque a diam. Aenean at massa vitae nisl gravida consectetur. Vivamus malesuada blandit est quis pulvinar. Nulla in odio vel sapien tempus hendrerit. Nullam nec luctus nulla, ut ultricies mi. Sed viverra scelerisque justo ut consequat. Donec sagittis purus quis dolor sollicitudin porta. Ut eros justo, ultricies in tristique ac, scelerisque nec nulla. Suspendisse vel nisi risus. Nulla id libero pulvinar neque porttitor consectetur. Ut id sodales elit. Cras pellentesque, tellus ac pellentesque mollis, ligula felis euismod lacus, vel mollis diam lectus condimentum justo.',
            'Integer ullamcorper justo non ligula sodales egestas. Aenean venenatis enim vitae ullamcorper viverra. Mauris ultrices orci eget ipsum consequat, in tristique nibh suscipit. Integer porta pulvinar auctor. Maecenas at tincidunt sem. Quisque posuere arcu sed augue consectetur sagittis. Donec sed volutpat odio. Nunc viverra ut mauris ac sodales. Nullam augue nulla, pulvinar eu lorem et, mattis facilisis ante. Vivamus laoreet elit a sapien egestas porta. Praesent commodo lobortis risus, ut tempor mauris fermentum a. Aliquam tincidunt interdum risus eget sagittis. In dictum non sem eu laoreet. In laoreet, mi eu hendrerit dignissim, ex leo venenatis massa, et eleifend arcu nibh luctus nibh. In hac habitasse platea dictumst.',

            'Cras semper mauris quis erat finibus, quis semper est sollicitudin. Aenean ullamcorper leo nec ex imperdiet, egestas condimentum mi ullamcorper. Vivamus viverra, quam a pellentesque pulvinar, libero diam condimentum felis, quis tincidunt nibh odio et ligula. Praesent vel ex nec sem ullamcorper rutrum. Vestibulum porta hendrerit efficitur. Donec eget enim convallis, convallis arcu sed, tincidunt augue. Vestibulum eu felis est. Mauris sagittis tincidunt eros. Sed consectetur dignissim metus eget lacinia. Sed sed metus ante. Suspendisse elementum, purus sit amet auctor interdum, ligula justo porta quam, eget suscipit nisi ligula eu sem. Proin laoreet porttitor nibh id scelerisque. Nam quis congue mi, quis lacinia tellus. Suspendisse in dui vitae arcu gravida elementum sit amet non orci. Suspendisse nunc diam, pellentesque vel orci et, tristique suscipit nunc.'
        ],
        autor: "João Silva",
        data: "2024-10-27",
        hora: "15:30",
        thumbnail: "/wireframe-2.png",
        id: 4,
        time: ['sharks', 'oddik']
    },
)
adicionarElemento(
    listaDeNoticias,
    {
        game: "CS2",
        gameLogo: "./games/cs2.png",
        titulo: "Legacy luta até o fim, mas perde para Monte e é eliminada da ESL Challenger Katowice 2024",
        descricao: "Time brasileiro sofreu 'apagão' no terceiro mapa e foi atropelado pelos poloneses",
        conteudoDaMateria: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elit sem, laoreet at tincidunt sit amet, scelerisque a diam. Aenean at massa vitae nisl gravida consectetur. Vivamus malesuada blandit est quis pulvinar. Nulla in odio vel sapien tempus hendrerit. Nullam nec luctus nulla, ut ultricies mi. Sed viverra scelerisque justo ut consequat. Donec sagittis purus quis dolor sollicitudin porta. Ut eros justo, ultricies in tristique ac, scelerisque nec nulla. Suspendisse vel nisi risus. Nulla id libero pulvinar neque porttitor consectetur. Ut id sodales elit. Cras pellentesque, tellus ac pellentesque mollis, ligula felis euismod lacus, vel mollis diam lectus condimentum justo.',
            'Integer ullamcorper justo non ligula sodales egestas. Aenean venenatis enim vitae ullamcorper viverra. Mauris ultrices orci eget ipsum consequat, in tristique nibh suscipit. Integer porta pulvinar auctor. Maecenas at tincidunt sem. Quisque posuere arcu sed augue consectetur sagittis. Donec sed volutpat odio. Nunc viverra ut mauris ac sodales. Nullam augue nulla, pulvinar eu lorem et, mattis facilisis ante. Vivamus laoreet elit a sapien egestas porta. Praesent commodo lobortis risus, ut tempor mauris fermentum a. Aliquam tincidunt interdum risus eget sagittis. In dictum non sem eu laoreet. In laoreet, mi eu hendrerit dignissim, ex leo venenatis massa, et eleifend arcu nibh luctus nibh. In hac habitasse platea dictumst.',

            'Cras semper mauris quis erat finibus, quis semper est sollicitudin. Aenean ullamcorper leo nec ex imperdiet, egestas condimentum mi ullamcorper. Vivamus viverra, quam a pellentesque pulvinar, libero diam condimentum felis, quis tincidunt nibh odio et ligula. Praesent vel ex nec sem ullamcorper rutrum. Vestibulum porta hendrerit efficitur. Donec eget enim convallis, convallis arcu sed, tincidunt augue. Vestibulum eu felis est. Mauris sagittis tincidunt eros. Sed consectetur dignissim metus eget lacinia. Sed sed metus ante. Suspendisse elementum, purus sit amet auctor interdum, ligula justo porta quam, eget suscipit nisi ligula eu sem. Proin laoreet porttitor nibh id scelerisque. Nam quis congue mi, quis lacinia tellus. Suspendisse in dui vitae arcu gravida elementum sit amet non orci. Suspendisse nunc diam, pellentesque vel orci et, tristique suscipit nunc.'
        ],
        autor: "João Silva",
        data: "2024-10-27",
        hora: "15:30",
        thumbnail: "/wireframe-2.png",
        id: 3,
        time: ['legacy', 'monte']
    },
)
adicionarElemento(
    listaDeNoticias,
    {
        game: "CS2",
        gameLogo: "./games/cs2.png",
        titulo: "Imperial perde pra The Mongolz e está eliminada da Thunderpick World Championship 2024",
        descricao: "Confronto entre brasileiros e chineses foi bastante disputado.",
        conteudoDaMateria: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elit sem, laoreet at tincidunt sit amet, scelerisque a diam. Aenean at massa vitae nisl gravida consectetur. Vivamus malesuada blandit est quis pulvinar. Nulla in odio vel sapien tempus hendrerit. Nullam nec luctus nulla, ut ultricies mi. Sed viverra scelerisque justo ut consequat. Donec sagittis purus quis dolor sollicitudin porta. Ut eros justo, ultricies in tristique ac, scelerisque nec nulla. Suspendisse vel nisi risus. Nulla id libero pulvinar neque porttitor consectetur. Ut id sodales elit. Cras pellentesque, tellus ac pellentesque mollis, ligula felis euismod lacus, vel mollis diam lectus condimentum justo.',
            'Integer ullamcorper justo non ligula sodales egestas. Aenean venenatis enim vitae ullamcorper viverra. Mauris ultrices orci eget ipsum consequat, in tristique nibh suscipit. Integer porta pulvinar auctor. Maecenas at tincidunt sem. Quisque posuere arcu sed augue consectetur sagittis. Donec sed volutpat odio. Nunc viverra ut mauris ac sodales. Nullam augue nulla, pulvinar eu lorem et, mattis facilisis ante. Vivamus laoreet elit a sapien egestas porta. Praesent commodo lobortis risus, ut tempor mauris fermentum a. Aliquam tincidunt interdum risus eget sagittis. In dictum non sem eu laoreet. In laoreet, mi eu hendrerit dignissim, ex leo venenatis massa, et eleifend arcu nibh luctus nibh. In hac habitasse platea dictumst.',

            'Cras semper mauris quis erat finibus, quis semper est sollicitudin. Aenean ullamcorper leo nec ex imperdiet, egestas condimentum mi ullamcorper. Vivamus viverra, quam a pellentesque pulvinar, libero diam condimentum felis, quis tincidunt nibh odio et ligula. Praesent vel ex nec sem ullamcorper rutrum. Vestibulum porta hendrerit efficitur. Donec eget enim convallis, convallis arcu sed, tincidunt augue. Vestibulum eu felis est. Mauris sagittis tincidunt eros. Sed consectetur dignissim metus eget lacinia. Sed sed metus ante. Suspendisse elementum, purus sit amet auctor interdum, ligula justo porta quam, eget suscipit nisi ligula eu sem. Proin laoreet porttitor nibh id scelerisque. Nam quis congue mi, quis lacinia tellus. Suspendisse in dui vitae arcu gravida elementum sit amet non orci. Suspendisse nunc diam, pellentesque vel orci et, tristique suscipit nunc.'
        ],
        autor: "João Silva",
        data: "2024-10-27",
        hora: "15:30",
        thumbnail: "/wireframe-2.png",
        id: 2,
        time: ['imperial', 'the-mongolz']
    },
)
adicionarElemento(
    listaDeNoticias,
    {
        game: "CS2",
        gameLogo: "./games/cs2.png",
        titulo: "paiN perde para B8 na semifinal e se despede da ESL Challenger Katowice 2024",
        descricao: "Confronto entre brasileiros e ucranianos foi bastante disputado.",
        conteudoDaMateria: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elit sem, laoreet at tincidunt sit amet, scelerisque a diam. Aenean at massa vitae nisl gravida consectetur. Vivamus malesuada blandit est quis pulvinar. Nulla in odio vel sapien tempus hendrerit. Nullam nec luctus nulla, ut ultricies mi. Sed viverra scelerisque justo ut consequat. Donec sagittis purus quis dolor sollicitudin porta. Ut eros justo, ultricies in tristique ac, scelerisque nec nulla. Suspendisse vel nisi risus. Nulla id libero pulvinar neque porttitor consectetur. Ut id sodales elit. Cras pellentesque, tellus ac pellentesque mollis, ligula felis euismod lacus, vel mollis diam lectus condimentum justo.',
            'Integer ullamcorper justo non ligula sodales egestas. Aenean venenatis enim vitae ullamcorper viverra. Mauris ultrices orci eget ipsum consequat, in tristique nibh suscipit. Integer porta pulvinar auctor. Maecenas at tincidunt sem. Quisque posuere arcu sed augue consectetur sagittis. Donec sed volutpat odio. Nunc viverra ut mauris ac sodales. Nullam augue nulla, pulvinar eu lorem et, mattis facilisis ante. Vivamus laoreet elit a sapien egestas porta. Praesent commodo lobortis risus, ut tempor mauris fermentum a. Aliquam tincidunt interdum risus eget sagittis. In dictum non sem eu laoreet. In laoreet, mi eu hendrerit dignissim, ex leo venenatis massa, et eleifend arcu nibh luctus nibh. In hac habitasse platea dictumst.',

            'Cras semper mauris quis erat finibus, quis semper est sollicitudin. Aenean ullamcorper leo nec ex imperdiet, egestas condimentum mi ullamcorper. Vivamus viverra, quam a pellentesque pulvinar, libero diam condimentum felis, quis tincidunt nibh odio et ligula. Praesent vel ex nec sem ullamcorper rutrum. Vestibulum porta hendrerit efficitur. Donec eget enim convallis, convallis arcu sed, tincidunt augue. Vestibulum eu felis est. Mauris sagittis tincidunt eros. Sed consectetur dignissim metus eget lacinia. Sed sed metus ante. Suspendisse elementum, purus sit amet auctor interdum, ligula justo porta quam, eget suscipit nisi ligula eu sem. Proin laoreet porttitor nibh id scelerisque. Nam quis congue mi, quis lacinia tellus. Suspendisse in dui vitae arcu gravida elementum sit amet non orci. Suspendisse nunc diam, pellentesque vel orci et, tristique suscipit nunc.'
        ],
        autor: "João Silva",
        data: "2024-10-27",
        hora: "15:30",
        thumbnail: "/wireframe-2.png",
        id: 3,
        time: ['pain', 'b8']
    },
)