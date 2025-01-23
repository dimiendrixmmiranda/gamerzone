import Link from "next/link";
import style from './style.module.css';
import Noticia from "@/core/noticia/Noticia";

// falta imagem
export default function CardNoticia({ titulo, subtitulo, autor, data, hora}: Noticia) {
    return (
        <Link href={'/'}>
            <div className={`${style.containerNoticia} border-t-2 border-zinc-600`}>
                <div className="w-full h-full bg-zinc-900" style={{ boxShadow: '1px 1px 2px black' }}>
                    {1}
                </div>
                <div className={style.containerNoticiaTexto}>
                    <h2 className="font-bold leading-4 text-sm sm:text-md md:text-xl xl:text-2xl">{titulo}</h2>
                    <p className="text-[.55em] leading-3 sm:text-sm md:text-md xl:text-lg xl:leading-6">{subtitulo}</p>
                    <p className="text-[.5em] text-center sm:text-[.6em] sm:text-start md:text-start xl:text-md">Por {autor} - {data}, ás {hora}</p>
                </div>
                <div className="w-5 h-5 rounded-full bg-zinc-700 absolute top-2 left-2 md:top-3 md:left-3 lg:w-8 lg:h-8 xl:top-4 xl:left-4"></div>
            </div>
        </Link>
    )
}