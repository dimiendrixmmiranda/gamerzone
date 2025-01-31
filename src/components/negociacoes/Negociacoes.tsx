import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Image from "next/image";
import { listaDePaises } from "@/core/constants/listaDePaises";

export default function Negociacoes() {
    const negociacoes = [1, 2, 3, 4]
    return (
        <div className="bg-black p-4 flex flex-col gap-4 mb-6 overflow-hidden xl:py-8 xl:px-2" style={{ boxShadow: '0 0 2px 2px black' }}>
            <h2 className="uppercase font-black leading-7 text-2xl text-center">Confira o Vai e Vem do Mundo dos E-sports</h2>
            <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                className='w-[100%]'
                autoplay={{
                    delay: 20000,
                    disableOnInteraction: false,
                }}
            >
                {
                    negociacoes.map((negociacao, i) => {
                        return (
                            <div key={i}>
                                <SwiperSlide>
                                    <li className="flex flex-col items-center gap-3 p-4 bg-[--preto-fosco] rounded-lg max-w-[320px] mx-auto relative">
                                        {/* e-sport */}
                                        <div className="w-7 h-7 rounded-full absolute top-2 right-2">
                                            <Image alt="game" src={'/icones/counter-strike.png'} fill className="object-contain"></Image>
                                        </div>
                                        <div className="w-full h-40">
                                            <div className="relative h-full w-full mx-auto">
                                                <Image alt="Jogador" src={'/default/default-negociacoes.png'} fill className="object-contain"></Image>
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-full">
                                            <h2 className="text-lg font-bold leading-6 overflow-hidden whitespace-nowrap text-ellipsis">Danil &quot;donk&quot; Kryshkovets</h2>
                                            <div className="flex items-center">
                                                <p>Posição: Rifler</p>
                                                <div className="relative w-6 h-4 bg-black ml-auto">
                                                    {/* Endereço vai mudar */}
                                                    <Image alt={listaDePaises[0].nome} src={listaDePaises[0].imagem} fill className="object-contain"></Image>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center w-full gap-2 sm:gap-4 xl:flex-row">
                                            <div className="flex">
                                                <div className="w-12 h-12 rounded-full relative">
                                                    <Image alt="org" src={'/default/escudo-default.png'} fill className="object-contain"></Image>
                                                </div>
                                                <div className="flex justify-center items-center font-black text-2xl">
                                                    <MdOutlineArrowForwardIos />
                                                    <MdOutlineArrowForwardIos className="-ml-4 text-4xl" />
                                                    <MdOutlineArrowForwardIos className="-ml-4" />
                                                </div>
                                                <div className="w-12 h-12 rounded-full relative">
                                                    <Image alt="org" src={'/default/escudo-default.png'} fill className="object-contain"></Image>
                                                </div>
                                            </div>
                                            <div className="w-full h-[50px] flex justify-center items-center bg-[--amarelo] rounded-lg" style={{ boxShadow: '0 0 2px 1px black' }}>
                                                <h2 className="font-bold uppercase text-lg xl:text-[1em]" style={{ textShadow: '1px 1px 2px black' }}>negociando</h2>
                                            </div>
                                        </div>
                                        <div className="w-full h-40 bg-black">
                                            <iframe
                                                className="w-full h-full"
                                                src="https://www.youtube.com/embed/47oeB53AdKc"
                                                title="YouTube video player"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                        <Link href={'/'}>Saiba mais!</Link>
                                    </li>
                                </SwiperSlide>
                            </div>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}
