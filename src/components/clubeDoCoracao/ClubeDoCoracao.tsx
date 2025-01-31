'use client'
import { useState } from 'react';
import style from './style.module.css'
import Jogos from '../jogos/Jogos';
import listaDeNoticias from '@/core/constants/ListaDeNoticias';
import Link from 'next/link';
import { TiArrowSyncOutline } from 'react-icons/ti';
import Image from 'next/image';
import { createSlugWithId } from '@/utils/createSlug';

export default function ClubeDoCoracao() {
    const listaDeClubes = Array.from({ length: 20 }, (_, i) => i + 1);
    const [active, setActive] = useState(false)
    // noticias de um time especifico
    const noticias = listaDeNoticias.slice(0, 3)

    return (
        <div className={style.containerClube}>
            <div className={`flex justify-center items-center text-center row-start-1 row-end-2 ${active ? 'hidden' : 'flex'}`}>
                <h2 className='uppercase font-bold text-2xl leading-7'>Escolha seu Clube do Coração</h2>
            </div>
            <div className={`row-start-2 row-end-4 h-full w-full ${active ? 'hidden' : 'flex'}`}>
                <ul className='grid grid-cols-4 w-full md:gap-2'>
                    {
                        listaDeClubes.map((clube, i) => {
                            return (
                                <li key={i} className='flex flex-col justify-center items-center'>
                                    <button className='relative w-10 h-10' onClick={() => setActive(true)}>
                                        <Image alt='time' src={'/default/escudo-default.png'} fill className='object-contain'></Image>
                                    </button>
                                    <h2>COR</h2>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className={`row-start-1 row-end-4 gap-2 h-full ${active ? 'grid' : 'hidden'}`} style={{ gridTemplateRows: '80px 1fr 35px' }}>
                <div className='row-start-1 row-end-2 overflow-hidden'>
                    <Jogos br425={2} br768={2} br1024={2} br1280={2}></Jogos>
                </div>
                <ul className='self-center row-start-2 row-end-3'>
                    {
                        noticias.map((noticia, i) => {
                            return (
                                <li key={i}>
                                    <Link href={`/noticias/${createSlugWithId(noticia.titulo, noticia.id)}`}>
                                        <div className={`${style.containerNoticiaClube}`}>
                                            <div className="w-full h-full bg-zinc-900" style={{ boxShadow: '1px 1px 2px black' }}></div>
                                            <div className='flex flex-col gap-2 xl:gap-1'>
                                                <h2 className="font-bold leading-4 text-sm sm:text-lg md:text-sm lg:leading-5 xl:text-lg">{noticia.titulo}</h2>
                                                <h3 className='hidden text-[.6em] md:block lg:hidden xl:block xl:text-[.7em]'>{noticia.subtitulo}</h3>
                                                <p className="hidden text-[.5em] text-center">Por {noticia.autor} - {noticia.data}, ás {noticia.hora}</p>
                                            </div>
                                            {/* imagem */}
                                            <div className="w-5 h-5 rounded-full absolute top-3 left-3">
                                                <Image alt={`Logo do jogo ${noticia.game}`} src={noticia.logoGame} fill className="object-contain"></Image>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className='self-center justify-self-center w-full pl-2 row-start-3 row-end-4 md:-mt-4' style={{ display: 'grid', gridTemplateColumns: '1fr 40px' }}>
                    <Link href={'/'} className='uppercase font-bold text-sm sm:text-md'>Ver Página Completa</Link>
                    <button onClick={() => setActive(false)}><TiArrowSyncOutline /></button>
                </div>
            </div>
        </div>
    )
}