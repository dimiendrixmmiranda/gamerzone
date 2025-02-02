import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import style from './style.module.css';
import { useState } from 'react';
import Noticia from '@/core/noticia/Noticia';
import listaDeNoticias from '@/core/constants/ListaDeNoticias';
import Link from 'next/link';
import { createSlugWithId } from '@/utils/createSlug';

export default function SliderWeb() {
    const [noticias] = useState<Noticia[]>(listaDeNoticias.slice(0, 9))
    const grupoDeNoticias = [
        noticias.slice(0, 3),
        noticias.slice(3, 6),
        noticias.slice(6, 9),
    ];

    const [paginaAtual, setPaginaAtual] = useState(0);

    const proximaPagina = () => {
        setPaginaAtual((prev) => (prev < grupoDeNoticias.length - 1 ? prev + 1 : 0));
    };

    const paginaAnterior = () => {
        setPaginaAtual((prev) => (prev > 0 ? prev - 1 : grupoDeNoticias.length - 1));
    };

    return (
        <div className="w-full h-[340px] relative hidden max-w-[1200px] mx-auto md:block overflow-hidden lg:h-[450px] xl:h-[540px]">
            <div className="h-full flex w-[300%]" style={{ overflow: 'hidden' }}>
                {grupoDeNoticias.map((grupo, grupoIndex) => (

                    <div
                        key={grupoIndex}
                        className={`${style.containerSlider} transition-transform duration-500 ease-in-out`}
                        style={{
                            transform: `translateX(-${(paginaAtual) * 100}%)`,
                        }}
                    >
                        {grupo.map((noticia, noticiaIndex) => (
                            <div
                                key={noticiaIndex}
                                className="w-full h-full bg-black flex items-center justify-center text-white relative hover:scale-[1.02]"
                                style={{transition: '.6s ease'}}
                            >
                                <Link href={`/noticias/${createSlugWithId(noticia.titulo, noticia.id)}`} className='w-full h-full'>
                                    <div className='flex flex-col absolute left-[50%] max-w-[90%] w-full text-center bottom-4 lg:bottom-6 xl:gap-3' style={{ transform: 'translate(-50%)' }}>
                                        <h1 className=''>{noticia.titulo}</h1>
                                        <h2 className='hidden xl:block'>{noticia.subtitulo}</h2>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <button
                onClick={proximaPagina}
                className="absolute top-[50%] right-5 text-5xl text-[--azul] lg:text-6xl"
                style={{ transform: 'translate(0,-50%)' }}
            >
                <IoIosArrowForward />
            </button>
            <button
                onClick={paginaAnterior}
                className="absolute top-[50%] left-5 text-5xl text-[--azul] lg:text-6xl"
                style={{ transform: 'translate(0,-50%)' }}
            >
                <IoIosArrowBack />
            </button>
        </div>
    );
}
