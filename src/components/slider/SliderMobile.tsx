'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Noticia from '@/core/noticia/Noticia';
import listaDeNoticias from '@/core/constants/ListaDeNoticias';

export default function SliderMobile() {
    const [noticias] = useState<Noticia[]>(listaDeNoticias.slice(0, 5))

    return (
        <div className='md:hidden'>
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                className='w-[100%] h-[250px] mt-4 sm:h-[280px]'
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
            >
                {
                    noticias.map((noticia, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className='flex justify-center items-center bg-zinc-600 h-[100%] relative'>
                                    <div className='flex flex-col gap-2 absolute bottom-7 left-[50%] w-full max-w-[90%] text-center' style={{transform: 'translate(-50%)'}}>
                                        <h1 className='text-2xl font-bold leading-6'>{noticia.titulo}</h1>
                                        <h2 className='hidden sm:block'>{noticia.subtitulo}</h2>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
};
