// Card.tsx
import Noticia from "core/noticias/noticia";
import Link from "next/link";
import { createSlugWithId } from "utils/createSlugWithId";

interface CardProps {
    noticia: Noticia
    estilo: string
    estiloTitulo: string
    estiloSubtitulo: string
    estiloTagLogo: string
    cor:string
}

export default function Card({ noticia, estilo, estiloSubtitulo, estiloTitulo, estiloTagLogo, cor }: CardProps) {
    return (
        <li className={estilo} style={{ borderBottom: `solid 2px ${cor}` }}>
            <Link href={`/noticias/${createSlugWithId(noticia.titulo, noticia.id)}`} className="flex gap-2">
                <div className="h-full w-[45%] overflow-hidden relative" style={{ borderBottom: 'solid 2px var(--cor-principal)' }}>
                    <img src={noticia.thumbnail} alt={noticia.titulo} className="w-full h-full object-cover" />
                    <div className={estiloTagLogo}>
                        <img src={noticia.tagLogo} alt={noticia.tag} className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="h-full w-[55%] px-1 flex flex-col gap-1 -mt-1 lg:px-2">
                    <h2 className={estiloTitulo}>{noticia.titulo}</h2>
                    <p className={estiloSubtitulo}>
                        {noticia.descricao}
                    </p>
                    <span className="text-[.5em] sm:text-[.6em] xl:text-[.8em]">Por {noticia.autor} - {noticia.data}</span>
                </div>
            </Link>
        </li>
    );
}
