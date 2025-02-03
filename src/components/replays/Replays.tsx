import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import React, { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { listaDeJogos } from '@/core/constants/ListaDeJogos';
import Image from 'next/image';
import { Jogos } from '@/core/jogos/Jogos';

export default function Replays() {
    const [visible, setVisible] = useState(false);
    const [jogo, setJogo] = useState<Jogos | null>(null)

    return (
        <div className='flex flex-col bg-[--preto-fosco] p-4 gap-2 md:gap-4 md:mt-4 lg:col-start-1 lg:col-end-3'>
            <h2 className='text-center uppercase font-bold text-xl sm:text-2xl md:text-3xl'>Melhores Momentos</h2>
            <div className='w-full h-[220px] lg:h-full xl:h-[240px] xl:mt-2'>
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
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    className='w-full h-full'
                >
                    {
                        listaDeJogos.map((jogo) => {
                            return (
                                <div key={jogo.id} >
                                    <SwiperSlide className='max-w-[320px] cursor-pointer mx-auto xl:max-w-[400px]' onClick={() => {
                                        setVisible(true)
                                        setJogo(jogo)
                                    }}>
                                        <div className='flex flex-col justify-center items-center bg-zinc-600 h-full w-full relative overflow-hidden' style={{boxShadow: '0 0 3px 2px black'}}>
                                            <div className='relative w-full h-full'>
                                                <Image
                                                    src={`https://img.youtube.com/vi/${jogo.idVideo}/hqdefault.jpg`}
                                                    alt="Thumbnail do vídeo"
                                                    fill
                                                    className='object-cover'
                                                />
                                            </div>
                                            <h2 className='uppercase font-black text-xl w-full overflow-hidden whitespace-nowrap text-ellipsis text-center bg-black pb-2 pt-1 mx-auto z-10'>
                                                G2 2 x 1 Falcons
                                            </h2>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            )
                        })
                    }
                </Swiper>
            </div>

            <div className="card flex justify-content-center">
                <Dialog header={jogo?.titulo} visible={visible} className='w-[95%] h-[350px] max-w-[700px] md:h-[500px] xl:max-w-[900px] xl:h-[600px]' onHide={() => { if (!visible) return; setVisible(false); }}>
                    <div>
                        <div className="w-full h-60 bg-black md:h-[400px] xl:h-[480px]">
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${jogo?.idVideo}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </Dialog>
            </div>
        </div>
    );
};
