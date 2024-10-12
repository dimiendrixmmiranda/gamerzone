
'use client'
import BotaoAncora from 'components/botaoAncora/BotaoAncora';
import Card from 'components/card/Card';
import Pagina from 'components/template/Pagina';
import { listaDeNoticias } from 'core';
import Noticia from 'core/noticias/noticia';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaArrowLeft,FaArrowUp  } from "react-icons/fa";

export default function NoticiaDetalhe() {
    const params = useParams(); // extrai os parâmetros da URL
    const slug = typeof params.slug === 'string' ? params.slug : params.slug?.[0];
    const [noticia, setNoticia] = useState<Noticia | null>(null);

    const outrasNoticias = listaDeNoticias.filter(outraNoticia => {
        return noticia != null ? outraNoticia.id != noticia.id : null
    }).slice(0, 5)

    useEffect(() => {
        if (slug) {
            const noticiaId = slug?.split('-')[0];
            const noticiaEncontrada = listaDeNoticias.find(n => n.id === Number(noticiaId));
            noticiaEncontrada != null ? setNoticia(noticiaEncontrada) : ''
        }
    }, [slug]);

    return (
        noticia != undefined ? (
            <Pagina>
                <div className='text-black flex flex-col gap-6 max-w-[95%] mx-auto lg:max-w-[80%] xl:max-w-[60%]'>
                    <div className='mt-2 flex flex-col gap-2'>
                        <h1 className='text-2xl font-black leading-7'>{noticia.titulo}</h1>
                        <h2 className='font-semibold leading-5'>{noticia.descricao}</h2>
                    </div>
                    <div className="relative w-full h-full max-w-[700px] max-h-[400px] flex justify-center items-center object-cover overflow-hidden mx-auto" >
                        <img src={noticia.thumbnail} alt={noticia.titulo} />
                    </div>
                    <div>
                        <ul className='flex flex-col gap-4'>
                            {noticia.conteudoDaMateria.map((p, i) => {
                                return (
                                    <li key={i}>
                                        <p className='indent-[2em]'>{p}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='flex justify-around mb-6 md:justify-end md:gap-6'>
                        <BotaoAncora href='/' icone={<FaArrowLeft />} texto='Voltar'></BotaoAncora>
                        <BotaoAncora href='#topo' icone={<FaArrowUp />} texto='Voltar Ao topo'></BotaoAncora>
                    </div>
                </div>
                <div className='w-full flex justify-center bg-zinc-400 xl:mt-10'>
                    <div className='w-[95%] mx-auto text-black lg:max-w-[80%] xl:max-w-[60%]'>
                        <h2 className='text-center uppercase font-black text-2xl py-3 text-white xl:text-4xl xl:mb-3' style={{ textShadow: '1px 1px 2px black' }}>Veja mais Notícias!</h2>
                        <ul>
                            {
                                outrasNoticias.map((noticia) => {
                                    return (
                                        <Card key={noticia.id} noticia={noticia} estilo="h-36 w-full flex p-2 gap-1 pb-6 max-w-[540px] text-[--cor-principal] md:max-w-none sm:h-44 md:h-52 lg:h-48 lg:p-3 lg:gap-2 xl:h-60 xl:pb-8 overflow-hidden`" estiloTitulo="font-black text-[.8em] leading-4 md:text-xl md:leading-6 xl:text-2xl xl:leading-7" estiloSubtitulo="flex-1 text-[.5em] leading-3 flex-1 font-semibold sm:text-[.8em] sm:leading-4 md:text-[1em] md:leading-5 md:mt-1 xl:text-[1.2em] xl:leading-6" estiloTagLogo="rounded-full overflow-hidden w-5 h-5 z-10 top-1 left-1 absolute lg:w-8 lg:h-8" cor="var(--cor-principal)"></Card>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </Pagina>
        ) : ''
    );
}
