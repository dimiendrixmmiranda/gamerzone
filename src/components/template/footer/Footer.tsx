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
        </footer>
    )
}   