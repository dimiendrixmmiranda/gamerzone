'use client'

import { useState } from 'react';
import style from './style.module.css'
import Jogos from '../jogos/Jogos';
import listaDeNoticias from '@/core/constants/ListaDeNoticias';
import Link from 'next/link';
import { TiArrowSyncOutline } from 'react-icons/ti';
import Image from 'next/image';

export default function ClubeDoCoracao() {
    const listaDeClubes = Array.from({ length: 20 }, (_, i) => i + 1);
    const [active, setActive] = useState(false)
    // noticias de um time especifico
    const noticias = listaDeNoticias.slice(0, 3)

    return (
        <div className={style.containerClube}>
            <h2 className="text-center uppercase font-bold text-xl leading-6 xl:text-2xl">Escolha seu time do coração!</h2>
            <ul className={`w-full h-full grid-cols-4 bg-[--preto-fosco] py-2 gap-4 ms:py-0 ${active ? 'hidden' : 'grid'}`} style={{ boxShadow: '0 0 3px 2px black' }}>
                {
                    listaDeClubes.map((clube, i) => {
                        return (
                            <li key={i} className="flex justify-center items-center">
                                <button className="flex flex-col justify-center items-center gap-1" onClick={() => setActive(true)}>
                                    <div className="relative w-6 h-6 rounded-full bg-black sm:w-10 sm:h-10 lg:w-8 lg:h-8 xl:w-10 xl:h-10 xl:gap-2">
                                        <Image alt='image' src={'/default/escudo-default.png'} fill></Image>
                                    </div>
                                    <p className="text-center font-bold text-sm">COR</p>
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
            <div className={`w-full h-full bg-[--preto-fosco] flex-col overflow-hidden gap-2 ${active ? 'flex' : 'hidden'}`} style={{ boxShadow: '0 0 3px 2px black' }}>
                <Jogos br425={1} br768={1} br1024={1} br1280={2}></Jogos>
                <ul className='grid grid-rows-3 gap-[3px] w-full h-[300px] md:h-[340px] lg:h-[310px] xl:-mt-2'>
                    {
                        noticias.map((noticia, i) => {
                            return (
                                <li key={i} className='w-full h-full overflow-hidden'>
                                    <Link href={'/'}>
                                        <div className={style.containerNoticiaClube}>
                                            <div className='w-full h-full bg-black'></div>
                                            <div className='flex flex-col gap-1'>
                                                <h2 className="font-bold leading-4 text-sm flex-1 sm:text-lg sm:leading-5 lg:text-sm lg:leading-4 xl:text-lg xl:leading-5">{noticia.titulo}</h2>
                                                <p className="text-[.4em] text-center sm:text-[.6em] md:text-start">Por {noticia.autor} - {noticia.data}, ás {noticia.hora}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className='grid mt-auto px-2 text-white flex-1' style={{gridTemplateColumns: '1fr 50px'}}>
                    <Link href={'/'} className='text-center uppercase font-bold self-center justify-self-center'>Ver Página</Link>
                    <button className='uppercase self-center justify-self-center' onClick={() => setActive(false)}><TiArrowSyncOutline /></button>
                </div>
            </div>
        </div>
    )
}