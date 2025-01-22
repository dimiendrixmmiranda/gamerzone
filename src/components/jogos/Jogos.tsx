// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Jogo from './Jogo';

interface JogosProps {
    br425: number
    br768: number
    br1024: number
    br1280: number
}

export default function Jogos({ br425, br768, br1024, br1280 }: JogosProps) {
    return (
        <div className='p-3 bg-[--preto-fosco]'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                navigation
                spaceBetween={30}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    425: {
                        slidesPerView: br425,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: br768,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: br1024,
                        spaceBetween: 25,
                    },
                    1280: {
                        slidesPerView: br1280,
                        spaceBetween: 25,
                    },
                }}
                className='w-full h-[70px]'
            >
                <SwiperSlide className='w-full bg-white text-black'>
                    <Jogo></Jogo>
                </SwiperSlide>
                <SwiperSlide className='w-full bg-white text-black'>
                    <Jogo></Jogo>
                </SwiperSlide>
                <SwiperSlide className='w-full bg-white text-black'>
                    <Jogo></Jogo>
                </SwiperSlide>
                <SwiperSlide className='w-full bg-white text-black'>
                    <Jogo></Jogo>
                </SwiperSlide>
                <SwiperSlide className='w-full bg-white text-black'>
                    <Jogo></Jogo>
                </SwiperSlide>
                <SwiperSlide className='w-full bg-white text-black'>
                    <Jogo></Jogo>
                </SwiperSlide>
                <SwiperSlide className='w-full bg-white text-black'>
                    <Jogo></Jogo>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
