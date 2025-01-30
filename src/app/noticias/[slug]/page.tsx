'use client'
import Ancoras from "@/components/ancoras/Ancoras";
import Template from "@/components/template/Template";
import listaDeNoticias from "@/core/constants/ListaDeNoticias";
import Noticia from "@/core/noticia/Noticia";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const params = useParams();
    const slug = typeof params.slug === 'string' ? params.slug : params.slug?.[0];
    const [noticiaAtual, setNoticiaAtual] = useState<Noticia | null>(null)

    useEffect(() => {
        if (slug) {
            pegarNoticias(slug);
        }
    }, [slug]);

    function pegarNoticias(slug: string) {
        const match = slug.match(/^(\d+)-/);
        if (match) {
            const id = match[1];
            const noticia = listaDeNoticias.find((noticia) => noticia.id === parseInt(id));
            if (noticia) {
                setNoticiaAtual(noticia);
            }
        }
    }

    return (
        <Template>
            <div className="text-black p-4 flex flex-col gap-2 max-w-[1000px] mx-auto lg:gap-4 xl:gap-6">
                <h2 className="text-2xl font-black leading-7 md:text-4xl">{noticiaAtual?.titulo}</h2>
                <p className="font-bold md:text-lg">{noticiaAtual?.subtitulo}</p>
                <div className="w-full h-[220px] max-w-[340px] bg-black self-center sm:max-w-[500px] sm:h-[300px] md:max-w-[700px] md:h-[390px]"></div>
                <ul className="flex flex-col gap-1 md:mt-4 md:gap-5">
                    {
                        noticiaAtual != null && noticiaAtual.conteudoDaMateria.map((conteudo, i) => {
                            return (
                                <li key={i} className="xl:text-lg">
                                    <p>{conteudo}</p>
                                </li>
                            )
                        })
                    }
                </ul>
                <div>
                    <p>Por {noticiaAtual?.autor} - {noticiaAtual?.data} ás {noticiaAtual?.hora}</p>
                </div>
                <Ancoras></Ancoras>
            </div>
        </Template>
    )
}