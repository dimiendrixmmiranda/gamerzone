import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

export default function SliderMobile() {
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
                <SwiperSlide>
                    <div className='flex justify-center items-center bg-zinc-600 h-[100%]'>
                        Slide 1
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center bg-zinc-600 h-[100%]'>
                        Slide 1
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center bg-zinc-600 h-[100%]'>
                        Slide 1
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center bg-zinc-600 h-[100%]'>
                        Slide 1
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
