import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Image from "next/image";
import { listaDeNegociacoes } from "@/core/constants/ListaDeNegociacoes";

export default function Negociacoes() {

    function identificarSituacaoCor(situacao: string) {
        if (situacao === 'negociando') {
            return 'bg-yellow-600'
        } else if (situacao === 'fechado') {
            return 'bg-green-600'
        } else if (situacao == 'melou') {
            return 'bg-red-600'
        } else {
            return 'bg-black'
        }
    }

    return (
        <div className="bg-black p-4 flex flex-col gap-4 mb-6 overflow-hidden md:col-start-1 md:col-end-3 lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-2 xl:py-8 xl:px-2" style={{ boxShadow: '0 0 2px 2px black' }}>
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
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 1,
                    },
                }}
            >
                {
                    listaDeNegociacoes.map((negociacao) => {
                        return (
                            <div key={negociacao.id}>
                                <SwiperSlide>
                                    <li className="flex flex-col items-center gap-3 p-4 bg-[--preto-fosco] rounded-lg max-w-[320px] mx-auto relative">
                                        {/* e-sport */}
                                        <div className="w-7 h-7 rounded-full absolute top-2 right-2">
                                            <Image alt="game" src={negociacao.game} fill className="object-contain"></Image>
                                        </div>
                                        <div className="w-full h-40">
                                            <div className="relative h-full w-full mx-auto">
                                                <Image alt="Jogador" src={negociacao.imagemJogador} fill className="object-contain"></Image>
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-full">
                                            <h2 className="text-lg font-bold leading-6 overflow-hidden whitespace-nowrap text-ellipsis">{negociacao.nome}</h2>
                                            <div className="flex items-center">
                                                <p>Posição: {negociacao.posicao}</p>
                                                <div className="relative w-6 h-4 bg-black ml-auto">
                                                    {/* Endereço vai mudar */}
                                                    <Image alt="Pais" src={negociacao.pais} fill className="object-contain"></Image>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center w-full gap-2 sm:gap-4 xl:flex-row">
                                            <div className="flex">
                                                <div className="w-12 h-12 rounded-full relative">
                                                    <Image alt="org" src={negociacao.timeAtual} fill className="object-contain"></Image>
                                                </div>
                                                <div className="flex justify-center items-center font-black text-2xl">
                                                    <MdOutlineArrowForwardIos />
                                                    <MdOutlineArrowForwardIos className="-ml-4 text-4xl" />
                                                    <MdOutlineArrowForwardIos className="-ml-4" />
                                                </div>
                                                <div className="w-12 h-12 rounded-full relative">
                                                    <Image alt="org" src={negociacao.novoTime} fill className="object-contain"></Image>
                                                </div>
                                            </div>
                                            <div className={`w-full h-[50px] flex justify-center items-center rounded-lg ${identificarSituacaoCor(negociacao.situacao)}`} style={{ boxShadow: '0 0 2px 1px black' }}>
                                                <h2 className="font-bold uppercase text-lg xl:text-[1em]" style={{ textShadow: '1px 1px 2px black' }}>{negociacao.situacao}</h2>
                                            </div>
                                        </div>
                                        <div className="w-full h-40 bg-black">
                                            <iframe
                                                className="w-full h-full"
                                                src={negociacao.videoHighlights}
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
