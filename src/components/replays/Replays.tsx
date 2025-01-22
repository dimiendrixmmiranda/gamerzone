import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';

export default function Replays() {
    return (
        <div className='flex flex-col bg-[--preto-fosco] p-4 gap-2 md:gap-4 md:mt-4 lg:col-start-1 lg:col-end-3'>
            <h2 className='text-center uppercase font-bold text-xl sm:text-2xl md:text-3xl'>Melhores Momentos</h2>
            <div className='w-full h-[230px] lg:h-full'>
                <Swiper
                    modules={[Autoplay, Navigation]}
                    navigation
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2, // Exibe 2 slides a partir de 640px
                            spaceBetween: 20, // Espaçamento entre os slides
                        },
                        1024: {
                            slidesPerView: 3, // Exibe 3 slides a partir de 768px
                            spaceBetween: 30,
                        },
                    }}
                    className='w-full h-full'
                >
                    <SwiperSlide className='max-w-[320px] mx-auto xl:max-w-[400px]'>
                        <div className='flex justify-center items-center bg-zinc-600 h-full w-full'>
                            Slide 1
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='max-w-[320px] mx-auto xl:max-w-[400px]'>
                        <div className='flex justify-center items-center bg-zinc-600 h-full w-full'>
                            Slide 1
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='max-w-[320px] mx-auto xl:max-w-[400px]'>
                        <div className='flex justify-center items-center bg-zinc-600 h-full w-full'>
                            Slide 1
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='max-w-[320px] mx-auto xl:max-w-[400px]'>
                        <div className='flex justify-center items-center bg-zinc-600 h-full w-full'>
                            Slide 1
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='max-w-[320px] mx-auto xl:max-w-[400px]'>
                        <div className='flex justify-center items-center bg-zinc-600 h-full w-full'>
                            Slide 1
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='max-w-[320px] mx-auto xl:max-w-[400px]'>
                        <div className='flex justify-center items-center bg-zinc-600 h-full w-full'>
                            Slide 1
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};
