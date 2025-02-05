import Image from "next/image";
import Link from "next/link";
import style from './style.module.css'
import listaDeRedesSociais from "@/core/constants/ListaDeRedesSociais";

export default function Footer() {
    return (
        <footer className={style.rodape}>
            <Link href={'/'} className="sm:col-start-1 sm:col-end-3 sm:flex sm:justify-center md:col-start-1 md:col-end-4 lg:col-start-1 lg:col-end-2">
                <div className="flex items-center">
                    <div className="w-[80px] h-[80px] relative">
                        <Image alt="Logo da GamerZone" src={'/logo/logo-gamer-zone.png'} fill className="object-cover" ></Image>
                    </div>
                    <div className="w-[160px] h-[60px] relative">
                        <Image alt="Texto GamerZone" src={'/logo/texto-gamer-zone.png'} fill className="object-cover" ></Image>
                    </div>
                </div>
            </Link>
            <div className="w-full flex flex-col gap-1 sm:self-start">
                <h2 className="uppercase font-bold">Contato:</h2>
                <ul>
                    <li>Imprensa: press@draft5.gg</li>
                    <li>Contato: contato@draft5.gg</li>
                    <li>Comercial: comercial@draft5.gg</li>
                </ul>
            </div>
            <div className="w-full flex flex-col gap-1 sm:self-start">
                <h2 className="uppercase font-bold">Útils:</h2>
                <ul>
                    <li>Sobre nós</li>
                    <li>Avisos importantes</li>
                    <li>Termos de uso</li>
                </ul>
            </div>
            <div className="w-full flex flex-col gap-1 sm:self-start">
                <h2 className="uppercase font-bold">Links:</h2>
                <ul>
                    <li>Política de privacidade</li>
                    <li>Trabalhe com a gente</li>
                    <li>Termos de uso</li>
                </ul>
            </div>
            <div className="sm:col-start-1 sm:col-end-3 md:col-start-1 md:col-end-3 lg:col-end-4 xl:col-end-6">
                <p className="font-black text-center leading-6 text-lg">© 2017-2025 • Todos os direitos reservados</p>
            </div>

            <div className="w-full sm:col-start-1 sm:col-end-3 md:col-start-3 md:col-end-4 lg:col-start-4 lg:col-end-5 xl:col-start-5 xl:col-end-6 xl:row-start-1 xl:self-start xl:h-full">
                <ul className="grid grid-cols-6 justify-center items-center xl:grid-cols-3 xl:h-full">
                    {
                        listaDeRedesSociais.map((rede, i) => {
                            return (
                                <li key={i} className="self-center justify-self-center text-2xl transition-all hover:scale-[1.1] xl:text-3xl">
                                    <Link href={rede.link}>
                                        {rede.icone}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </footer>
    )
}   