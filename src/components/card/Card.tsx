// Card.tsx
import Noticia from "core/noticias/noticia";
import Link from "next/link";
import { createSlugWithId } from "utils/createSlugWithId";

interface CardProps {
    noticia: Noticia
}

export default function Card({ noticia }: CardProps) {
    return (
        <li className="h-36 w-full flex p-2 gap-1 pb-6 max-w-[540px] md:max-w-none sm:h-44 md:h-52 lg:h-48 lg:p-3 lg:gap-2 xl:h-60 xl:pb-8 overflow-hidden" style={{ borderBottom: 'solid 2px var(--cor-principal)' }}>
            <Link href={`/noticias/${createSlugWithId(noticia.titulo, noticia.id)}`} className="flex gap-2">
                <div className="h-full w-[45%] overflow-hidden relative" style={{ borderBottom: 'solid 2px var(--cor-principal)' }}>
                    <img src={noticia.thumbnail} alt={noticia.titulo} className="w-full h-full object-cover" />
                    <div className="rounded-full overflow-hidden w-5 h-5 z-10 top-1 left-1 absolute lg:w-8 lg:h-8">
                        <img src={noticia.tagLogo} alt={noticia.tag} className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="h-full w-[55%] text-[--cor-principal] px-1 flex flex-col gap-1 -mt-1 lg:px-2">
                    <h2 className="font-black text-[.8em] leading-4 md:text-xl md:leading-6 xl:text-2xl xl:leading-7">{noticia.titulo}</h2>
                    <p className="text-[.5em] leading-3 flex-1 font-semibold sm:text-[.8em] sm:leading-4 md:text-[1em] md:leading-5 md:mt-1 xl:text-[1.2em] xl:leading-6">
                        {noticia.descricao}
                    </p>
                    <span className="text-[.5em] sm:text-[.6em] xl:text-[.8em]">Por {noticia.autor} - {noticia.data}</span>
                </div>
            </Link>
        </li>
    );
}
