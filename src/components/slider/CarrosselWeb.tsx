import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import style from './style.module.css';
import { useState } from 'react';
import Link from 'next/link';
import { createSlug } from '@/lib/utils/createSlug';
import Noticia from '@/interfaces/Noticia';
import Image from 'next/image';
import identificarEsporte from '@/lib/utils/identificarEsporte';

interface CarrosselWebProps {
    noticias: Noticia[]
}


export default function CarrosselWeb({ noticias }: CarrosselWebProps) {
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
        <div className="w-full relative hidden mx-auto md:block overflow-hidden md:h-[400px] lg:h-[450px] xl:h-[550px] 2xl:h-[620px]">
            <div className="h-full flex w-[300%]" style={{ overflow: 'hidden' }}>
                {grupoDeNoticias.map((grupo, grupoIndex) => (
                    <div
                        key={grupoIndex}
                        className={`${style.containerSlider} transition-transform duration-500 ease-in-out`}
                        style={{
                            transform: `translateX(-${(paginaAtual) * 100}%)`,
                        }}
                    >
                        {
                            grupo.map((noticia, noticiaIndex) => {
                                return (
                                    <div
                                        key={noticiaIndex}
                                        className="w-full h-full bg-black flex items-center justify-center text-white relative hover:scale-[1.02]"
                                        style={{ transition: '.6s ease' }}
                                    >
                                        <Link href={`/noticia/${createSlug(noticia.titulo, noticia.id)}`} className='w-full h-full bg-red-400 relative'>
                                            <div className='relative w-full h-full'>
                                                <div className="w-full h-full bg-red-500">
                                                    <Image alt='imagem' src={noticia.imagem} fill className='object-cover' />
                                                </div>
                                            </div>
                                            <div className='flex flex-col absolute left-[50%] max-w-[90%] w-full text-center bottom-4 lg:bottom-6 xl:gap-3' style={{ transform: 'translate(-50%)' }}>
                                                <h1 className='' style={{ textShadow: '1px 1px 3px black' }}>{noticia.titulo}</h1>
                                                <h2 className='hidden xl:block' style={{ textShadow: '1px 1px 3px black' }}>{noticia.subtitulo}</h2>
                                            </div>
                                            <div className="absolute top-2 right-2 w-6 h-6 bg-zinc-200 rounded-full flex justify-center items-center">
                                                <div className="w-full h-full"></div>
                                                <Image alt="logo" src={`${identificarEsporte(noticia.esporte)}`} width={20} height={20} />
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                ))}
            </div>
            <button
                onClick={proximaPagina}
                className="absolute top-[50%] right-5 text-5xl text-amarelo lg:text-6xl"
                style={{ transform: 'translate(0,-50%)' }}
            >
                <IoIosArrowForward />
            </button>
            <button
                onClick={paginaAnterior}
                className="absolute top-[50%] left-5 text-5xl text-amarelo lg:text-6xl"
                style={{ transform: 'translate(0,-50%)' }}
            >
                <IoIosArrowBack />
            </button>
        </div>
    );
}
