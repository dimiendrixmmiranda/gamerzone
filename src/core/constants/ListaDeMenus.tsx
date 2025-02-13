import { MdScoreboard } from "react-icons/md";
import Menu from "../menu/Menu";
import { FaGear } from "react-icons/fa6";
import { GiChampions } from "react-icons/gi";
import { PiRankingFill } from "react-icons/pi";

const listaDeMenus: Menu[] = [
    {
        nome: 'Resultados',
        icone: <MdScoreboard />,
        linkMenu: '/'
    },
    {
        nome: 'Campeonatos',
        icone: <GiChampions />,
        submenu: [
            {
                nome: 'ESL Challenger League',
                imagem: '/camps/esl-challenger-league.png',
                link: '/'
            },
            {
                nome: 'ESL Challenger League',
                imagem: '/camps/esl-challenger-league.png',
                link: '/'
            },
            {
                nome: 'ESL Challenger League',
                imagem: '/camps/esl-challenger-league.png',
                link: '/'
            },
            {
                nome: 'ESL Challenger League',
                imagem: '/camps/esl-challenger-league.png',
                link: '/'
            },
            {
                nome: 'ESL Challenger League',
                imagem: '/camps/esl-challenger-league.png',
                link: '/'
            },
            {
                nome: 'ESL Challenger League',
                imagem: '/camps/esl-challenger-league.png',
                link: '/'
            },
        ]
    },
    {
        nome: 'Rankings',
        icone: <PiRankingFill />,
        submenu: [
            {
                nome: 'Iem Cologne',
                link: '/'
            },
            {
                nome: 'Iem Cologne',
                link: '/'
            },
            {
                nome: 'Iem Cologne',
                link: '/'
            },
        ]
    },
    {
        nome: 'CFG dos Pro',
        icone: <FaGear />,
        submenu: [
            {
                nome: 'Iem Cologne',
                link: '/'
            },
            {
                nome: 'Iem Cologne',
                link: '/'
            },
            {
                nome: 'Iem Cologne',
                link: '/'
            },
        ]
    },
]

export default listaDeMenus