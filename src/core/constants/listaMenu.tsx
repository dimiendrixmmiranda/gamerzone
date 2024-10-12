import Menu from "core/menu/menu";
import { MdScoreboard } from "react-icons/md";
import { GiChampions } from "react-icons/gi";
import { FaGear } from "react-icons/fa6";
import { PiRankingFill } from "react-icons/pi";
import { GiPistolGun } from "react-icons/gi";

export const listaMenu: Menu[] = [
    {
        titulo:{
            texto: 'Resultados',
            link: '',
            icone: <MdScoreboard className="text-2xl"/>,
        },
        subtititulo: [
            {
                subtitulo: {
                    nome: 'Ao vivo',
                    link: '/'
                }
            },
            {
                subtitulo: {
                    nome: 'Proximas Partidas',
                    link: '/'
                }
            },
            {
                subtitulo: {
                    nome: 'Resultados',
                    link: '/'
                }
            }
        ]
    },
    {
        titulo:{
            texto: 'Campeonatos',
            link: '/',
            icone: <GiChampions className="text-2xl"/>
        },
        subtititulo: [
            {
                subtitulo: {
                    nome: 'ESL Chalenger Katowice',
                    link: '/'
                }
            },
            {
                subtitulo: {
                    nome: 'IEM Rio 2024',
                    link: '/'
                }
            },
            {
                subtitulo: {
                    nome: 'ESL Chalanger League Season 24',
                    link: '/'
                }
            }
        ]
    },
    {
        titulo:{
            texto: 'CFG dos PRO',
            link: '/',
            icone: <FaGear className="text-2xl"/>
        },
        subtititulo: [
            {
                subtitulo: {
                    nome: 'CS2',
                    link: '/menus/cfgPro/cs2'
                }
            },
            {
                subtitulo: {
                    nome: 'Valorant',
                    link: '/'
                }
            },
            {
                subtitulo: {
                    nome: 'LOL',
                    link: '/'
                }
            },
            {
                subtitulo: {
                    nome: 'Raibow Six Siege',
                    link: '/'
                }
            }
        ]
    },
    {
        titulo:{
            texto: 'Rankings',
            link: '/',
            icone: <PiRankingFill className="text-2xl"/>
        },
        subtititulo: [
            {
                subtitulo: {
                    nome: 'Ranking da Valve',
                    link: '/'
                }
            },
            {
                subtitulo: {
                    nome: 'Ranking da ESL',
                    link: '/'
                }
            },
            {
                subtitulo: {
                    nome: 'Rank Riot',
                    link: '/'
                }
            },
        ]
    },
    {
        titulo:{
            texto: 'Skins',
            link: '/',
            icone: <GiPistolGun className="text-2xl"/>
        },
        subtititulo: [
            {
                subtitulo: {
                    nome: 'CS2',
                    link: '/menus/skins/cs2'
                }
            },
            {
                subtitulo: {
                    nome: 'Valorant',
                    link: '/'
                }
            },
        ]
    },
]