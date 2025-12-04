import Noticia from "@/interfaces/Noticia";
import { createSlug } from "@/lib/utils/createSlug";
import Image from "next/image";
import Link from "next/link";

interface CardNoticiaProps {
    noticia: Noticia
}

export default function CardNoticia({ noticia }: CardNoticiaProps) {
    function identificarEsporte(esporte: string) {
        switch (esporte) {
            case 'cs2':
                return {
                    imagem: '/esporte/cs2.png',
                    cor: 'bg-white'
                }
            case 'valorant':
                return {
                    imagem: '/esporte/cs2.png',
                    cor: 'bg-blue-500'
                }
            case 'raimbowSix':
                return {
                    imagem: '/esporte/cs2.png',
                    cor: 'bg-blue-500'
                }
            default:
                return {
                    imagem: '/logo/logo.png',
                    cor: 'bg-blue-500'
                }
        }
    }

    return (
        <li className="border-t border-zinc-400 pt-2 transition-all duration-700 hover:scale-[1.02]">
            <Link href={`/noticia/${createSlug(noticia.titulo, noticia.id)}`} className="relative">
                <div className="h-[300px] bg-white flex flex-col gap-4 md:grid md:grid-cols-2 md:grid-rows-1 md:h-[230px] lg:h-[270px]">
                    {/* Texto */}
                    <div className="p-2 flex flex-col gap-2 sm:p-4">
                        <h2 className="font-bold text-lg leading-5 line-clamp-4 md:text-xl md:leading-6 lg:text-2xl">
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
                    <div className="w-full h-full relative flex items-center justify-center">
                        <div className="w-full h-full bg-zinc-500">
                            <Image src={noticia.imagem} alt="imagem da noticia" fill className="object-cover"></Image>
                        </div>
                    </div>
                </div>
                <div className="flex items-center text-sm gap-2 md:hidden">
                    <p>Por {noticia.autor}, {noticia.data.toDate().toLocaleString('pt-br')}</p>
                </div>
                <div className={`absolute bottom-7 right-2 w-6 h-6 ${identificarEsporte(noticia.esporte).cor} rounded-full flex justify-center items-center opacity-70 md:bottom-2 md:right-2`}>
                    <Image alt="logo" src={`${identificarEsporte(noticia.esporte).imagem}`} width={20} height={20} />
                </div>
            </Link>
        </li>
    )
}