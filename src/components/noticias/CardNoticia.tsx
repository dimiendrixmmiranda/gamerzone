import Link from "next/link";
import style from './style.module.css';
import Noticia from "@/core/noticia/Noticia";
import { createSlugWithId } from "@/utils/createSlug";
import Image from "next/image";

// falta imagem
export default function CardNoticia({ titulo, subtitulo, autor, data, hora, id, logoGame, game }: Noticia) {
    return (
        <Link href={`/noticias/${createSlugWithId(titulo, id)}`}>
            <div className={`${style.containerNoticia} border-t-2 border-zinc-600`}>
                <div className="w-full h-full bg-zinc-900" style={{ boxShadow: '1px 1px 2px black' }}>

                </div>
                <div className={style.containerNoticiaTexto}>
                    <h2 className="font-bold leading-4 text-sm sm:text-md md:text-xl xl:text-2xl">{titulo}</h2>
                    <p className="text-[.55em] leading-3 sm:text-sm md:text-md xl:text-lg xl:leading-6">{subtitulo}</p>
                    <p className="text-[.5em] text-center sm:text-[.6em] sm:text-start md:text-start xl:text-md">Por {autor} - {data}, ás {hora}</p>
                </div>
                {/* imagem */}
                <div className="w-5 h-5 rounded-full absolute top-3 left-3 md:top-4 md:left-4 lg:w-7 lg:h-7 xl:top-5 xl:left-5">
                    <Image alt={`Logo do jogo ${game}`} src={logoGame} fill className="object-contain"></Image>
                </div>
            </div>
        </Link>
    )
}