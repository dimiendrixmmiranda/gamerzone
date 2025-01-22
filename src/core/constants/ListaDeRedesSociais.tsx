import Redes from "../redes/Redes";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const listaDeRedesSociais: Redes[] = [
    {
        icone: <FaFacebook />,
        link: '/',
        texto: 'Facebook'
    },
    {
        icone: <AiFillInstagram />,
        link: '/',
        texto: 'Instagram'
    },
    {
        icone: <FaXTwitter />,
        link: '/',
        texto: 'Twitter'
    },
    {
        icone: <FaYoutube />,
        link: '/',
        texto: 'Youtube'
    },
    {
        icone: <FaTiktok />,
        link: '/',
        texto: 'TikTok'
    },
    {
        icone: <IoMdMail />,
        link: '/',
        texto: 'E-mail'
    },
]

export default listaDeRedesSociais