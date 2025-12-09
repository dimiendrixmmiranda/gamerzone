import Menu from "@/interfaces/Menu";
import { FaMedal, FaGamepad, FaTrophy, FaCog } from "react-icons/fa";

export const listaDeMenu: Menu[] = [
    {
        icone: <FaMedal />,
        label: 'Rankings',
        link: '/ranking'
    },
    {
        icone: <FaGamepad />,
        label: 'Partidas',
        link: '/'
    },
    {
        icone: <FaTrophy />,
        label: 'Campeonatos',
        link: '/'
    },
    {
        icone: <FaCog />,
        label: 'Config Dos PRO',
        link: '/configdospro'
    },
];
