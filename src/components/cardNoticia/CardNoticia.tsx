import Noticia from "@/interfaces/Noticia";
import { createSlug } from "@/utils/createSlug";
import identificarEsporte from "@/utils/identificarEsporte";
import Image from "next/image";
import Link from "next/link";

interface CardNoticiaProps {
    noticia: Noticia
}

export default function CardNoticia({ noticia }: CardNoticiaProps) {
    return (
        <li className="border-t border-zinc-400 pt-2">
            <Link href={`/noticia/${createSlug(noticia.id)}`} className="relative">
                <div className="h-[300px] bg-white grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 md:h-[230px]">
                    {/* Texto */}
                    <div className="p-2 flex flex-col gap-2 sm:p-4">
                        <h2 className="font-bold text-lg leading-5 line-clamp-4 md:text-xl md:leading-6">
                            {
                                noticia.titulo
                            }
                        </h2>
                        <p className="leading-5 line-clamp-2 md:line-clamp-5 lg:line-clamp-3">
                            {
                                noticia.subtitulo
                            }
                        </p>
                        <div className="hidden lg:flex mt-auto text-sm">
                            <p>Por {noticia.autor}, {noticia.data.toDate().toLocaleString('pt-br')}</p>
                        </div>
                    </div>
                    {/* IMG */}
                    <div className="w-full h-full relative bg-zinc-500 flex items-center justify-center">
                        <Image src={noticia.imagem} alt="imagem da noticia" fill className="object-cover"></Image>
                    </div>
                </div>
                <div className="flex items-center text-sm gap-2 md:hidden">
                    <p>Por {noticia.autor}, {noticia.data.toDate().toLocaleString('pt-br')}</p>
                </div>
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-zinc-200 rounded-full flex justify-center items-center opacity-70">
                    <Image alt="logo" src={`${identificarEsporte(noticia.esporte)}`} width={20} height={20} />
                </div>
            </Link>
        </li>
    )
}