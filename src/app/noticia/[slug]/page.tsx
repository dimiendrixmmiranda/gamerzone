'use client'
import Template from "@/components/template/Template";
import useNoticias from "@/hooks/useNoticias";
import Noticia from "@/interfaces/Noticia";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const params = useParams();
    const id = typeof params.slug === 'string' ? params.slug : params.slug?.[0]
    const noticias = useNoticias()
    const [noticiaAtual, setNoticiaAtual] = useState<Noticia | null>(null)

    useEffect(() => {
        const noticia = noticias.filter(not => not.id.toLowerCase() == id?.toLowerCase())[0]
        if (noticia) setNoticiaAtual(noticia)
    }, [noticias])

    return (
        <Template logo={true} textoLogo={true}>
            {
                noticiaAtual != null ? (
                    <div className="p-4 max-w-[1100px] mx-auto flex flex-col gap-2 md:p-8 lg:p-12 lg:gap-4">
                        <h2 className="font-bold text-2xl leading-6 md:text-4xl md:leading-9 lg:text-5xl lg:leading-[1.1em]">{noticiaAtual.titulo}</h2>
                        <p className="text-lg leading-6 md:text-xl md:leading-6">{noticiaAtual.subtitulo}</p>
                        <div>
                            <p className="leading-5 text-sm md:text-base">Por {noticiaAtual.autor}, {noticiaAtual.data.toDate().toLocaleString('pt-br')}</p>
                        </div>
                        <div className="relative w-full max-w-[480px] mx-auto h-[200px] sm:h-[280px] md:max-w-[600px] md:h-[360px] lg:max-w-[720px] lg:h-[450px]">
                            <Image alt="image" src={noticiaAtual.imagem} fill className="object-cover" />
                        </div>
                        <ul className="max-w-[900px] mx-auto flex flex-col gap-4 md:text-lg lg:text-xl lg:gap-5">
                            {
                                noticiaAtual.conteudoDaNoticia.map((paragrafo, i) => {
                                    return (
                                        <li key={i}>{paragrafo}</li>
                                    )
                                })
                            }
                        </ul>
                        <div className="max-w-[900px] mx-auto flex flex-col gap-2">
                            <h3 className="text-xl font-bold">Comentarios</h3>
                            <p>&quot;Os comentários são de inteira responsabilidade de seus autores e não refletem a opinião deste site. Caso identifique algo que viole os termos de uso, denuncie. Consulte as perguntas frequentes para entender o que é considerado inadequado ou ilegal. &ldquo;</p>
                            <div className="border-2 border-black">
                                <span>Entre ou crie uma conta para participar</span>
                                <button>Participe</button>
                            </div>
                            {/* Comentarios */}
                            <ul className="flex flex-col gap-4">
                                <li>
                                    <h3 className="text-lg font-bold">Dimi Endrix Martins Miranda</h3>
                                    {/* 300 caracteres */}
                                    <p>
                                        A tecnologia tem transformado a forma como vivemos, trabalhamos e nos comunicamos. Com o avanço constante das inovações, novas oportunidades surgem a cada dia, facilitando processos e conectando pessoas ao redor do mundo de maneira rápida, eficiente e acessível para todos.
                                    </p>
                                </li>
                                <li>
                                    <h3 className="text-lg font-bold">Dimi Endrix Martins Miranda</h3>
                                    {/* 300 caracteres */}
                                    <p>
                                        A tecnologia tem transformado a forma como vivemos, trabalhamos e nos comunicamos. Com o avanço constante das inovações, novas oportunidades surgem a cada dia, facilitando processos e conectando pessoas ao redor do mundo de maneira rápida, eficiente e acessível para todos.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                ) : ('')
            }
        </Template>
    )
}