import listaDeRedesSociais from "@/core/constants/ListaDeRedesSociais";
import Image from "next/image";
import Link from "next/link";
import style from './style.module.css'

export default function Footer() {
    return (
        <footer className={style.rodape}>
            <Link href={'/'}>
                <div className="flex items-center">
                    <div className="w-[45px] h-[45px] relative sm:w-[70px] sm:h-[70px]">
                        <Image alt="Logo da GamerZone" src={'/logo/logo-gamer-zone.png'} fill className="object-cover" ></Image>
                    </div>
                    <div className="relative w-[100px] h-[40px] sm:w-[130px] sm:h-[70px]">
                        <Image alt="Texto GamerZone" src={'/logo/texto-gamer-zone.png'} fill className="object-cover" ></Image>
                    </div>
                </div>
            </Link>
            <div className="md:col-start-2 md:col-end-4 xl:col-start-2 xl:col-end-3">
                <h2 className="text-center sm:text-2xl">Porque cada jogada conta.</h2>
            </div>
            <div className="col-start-1 col-end-3 md:col-start-1 md:col-end-2 xl:col-start-3 xl:col-end-4">
                <h3 className="text-lg uppercase font-bold">Contato</h3>
                <ul>
                    <li>Imprensa: press@draft5.gg</li>
                    <li>Imprensa: press@draft5.gg</li>
                    <li>Imprensa: press@draft5.gg</li>
                </ul>
            </div>
            <div className="col-start-1 col-end-3 md:col-start-2 md:col-end-3 xl:col-start-4 xl:col-end-5">
                <h3 className="text-lg uppercase font-bold">Links</h3>
                <ul>
                    <li>Sobre nós</li>
                    <li>Termos de Uso</li>
                    <li>Política de Privacidade</li>
                    <li>Avisos</li>
                    <li>Trabalhe com Agente</li>
                </ul>
            </div>
            <ul className='grid grid-cols-6 text-2xl col-start-1 col-end-3 md:max-h-[90px] md:col-start-3 md:col-end-4 md:grid-cols-3 xl:col-start-5 xl:col-end-6'>
                {
                    listaDeRedesSociais.map((rede, i) => {
                        return (
                            <li key={i} className="flex justify-center items-end md:self-center md:text-3xl">
                                <Link href={rede.link}>
                                    {rede.icone}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <h2 className="text-center italic font-bold leading-5 col-start-1 col-end-3 md:col-start-1 md:col-end-4 xl:col-start-1 xl:col-end-6">© 2024-2025 • Todos os direitos reservados</h2>
        </footer>
    )
}   