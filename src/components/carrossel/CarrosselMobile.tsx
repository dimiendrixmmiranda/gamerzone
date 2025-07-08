"use client"; // se estiver usando app router

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Noticia from "@/interfaces/Noticia";
import Image from "next/image";
import identificarEsporte from "@/utils/identificarEsporte";
import Link from "next/link";
import { createSlug } from "@/utils/createSlug";

interface CarrosselProps {
    noticias: Noticia[]
}

export default function CarrosselMobile({ noticias }: CarrosselProps) {
    return (
        <div className="w-full mx-auto md:hidden">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                className="bg-zinc-500 h-[200px] sm:h-[260px]"
            >
                {
                    noticias.map((noticia, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <Link href={`/noticia/${createSlug(noticia.id)}`}>
                                    <div className="bg-zinc-500 h-full w-full flex justify-center items-center">
                                        <div className="relative w-full h-full">
                                            <Image alt="imagem da noticia" src={noticia.imagem ?? '/logo/logo-gamer-zone.png'} fill className="object-cover" />
                                        </div>
                                        <p className="absolute bottom-6 text-center font-bold text-lg leading-5 text-white max-w-[90%]" style={{ textShadow: '1px 1px 2px black' }}>
                                            {noticia.titulo}
                                        </p>
                                        <div className="absolute top-2 right-2 w-6 h-6 bg-zinc-200 rounded-full flex justify-center items-center">
                                            <Image alt="logo" src={`${identificarEsporte(noticia.esporte)}`} width={20} height={20} />
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}
