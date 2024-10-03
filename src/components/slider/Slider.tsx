'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useState, useEffect } from 'react';

import Link from 'next/link';
import noticias from '@/data/noticias';
import { createSlugWithId } from '@/utils/createSlug';

export default function Slider() {
    const minhasNoticias = noticias.slice(0, 5)

    const [alturaSlider, setAlturaSlider] = useState(280);

    useEffect(() => {
        function renderHeight() {
            if (window.innerWidth < 425) {
                setAlturaSlider(270);
            } else if (window.innerWidth < 768) {
                setAlturaSlider(300);
            } else if (window.innerWidth < 1024) {
                setAlturaSlider(400);
            } else {
                setAlturaSlider(600);
            }
        }

        renderHeight();

        window.addEventListener('resize', renderHeight);

        return () => {
            window.removeEventListener('resize', renderHeight);
        };
    }, []);

    return (
        <div className={`bg-gray-900 mb-6 md:w-[80%] md:mx-auto md:my-5 lg:hidden`} style={{ boxShadow: '2px 2px 3px black' }}>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                {
                    minhasNoticias.map((noticia, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Link href={`/noticias/${createSlugWithId(noticia.tituloNoticia, noticia.id)}`} className='relative flex justify-center items-center'>
                                    <div className='w-full relative'>
                                        <img
                                            src={noticia.thumbnail}
                                            alt={`Imagem ${index}`}
                                            className='w-full h-full object-cover slider-img'
                                            style={{ height: `${alturaSlider}px` }}
                                        />
                                        <div className='w-8 h-8 rounded-full absolute top-2 left-2 overflow-hidden'>
                                            <img src={noticia.logoNoticia} alt={noticia.gameNoticia} className='w-full h-full'/>
                                        </div>
                                    </div>
                                    <h2 className='absolute left-[50%] bottom-8 max-w-[95%] w-full text-center font-black leading-5p-1 sm:text-lg sm:leading-5 md:text-3xl lg:p-2 lg:bottom-10 xl:bottom-16 xl:max-w-[80%] xl:text-4xl' style={{ transform: 'translate(-50%)', textShadow: '2px 2px 4px black' }}>{noticia.tituloNoticia}</h2>
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}
