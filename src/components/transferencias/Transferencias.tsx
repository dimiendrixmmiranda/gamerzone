'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import useTransferencias from "@/data/hooks/useTransferencias";
import Image from "next/image";

export default function Transferencias() {
    const transferencias = useTransferencias()
    
    function pegarTresLetras(texto: string): string {
        return texto.slice(0, 3);
    }

    function identificarSituacao(situacao: string) {
        switch (situacao) {
            case 'rumor':
                return 'bg-gray-400'
            case 'interesse':
                return 'bg-blue-500'
            case 'negociando':
                return 'bg-yellow-500'
            case 'fechado':
                return 'bg-green-600'
            case 'melou':
                return 'bg-red-600'
            default:
                return 'bg-gray-200'
        }
    }

    return (
        <div className="w-full mx-auto p-2 mb-6 h-fit lg:row-start-2 lg:row-end-3 xl:col-start-5 xl:col-end-7">
            <h2 className="font-bold uppercase text-2xl text-center mb-2 leading-6 xl:text-3xl">Vai e vem da bala!</h2>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 1,
                    },
                }}
                loop={true}
                className="overflow-hidden h-[330px] w-full"
            >
                {
                    transferencias.map((transferencia, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className="bg-preto p-4 h-full w-full max-w-[280px] mx-auto flex flex-col gap-3 text-white pb-6">
                                    {/* Imagem do jogador */}
                                    <div className="w-32 h-40 self-center relative">
                                        <Image alt={transferencia.nome} src={transferencia.fotoDoJogador} fill className="object-cover" unoptimized/>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <h2 className="text-xl leading-5 text-center">{transferencia.nome}</h2>
                                        <p className="text-sm leading-5">{transferencia.posicao}</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="flex items-center gap-2">
                                            <div className="flex flex-col justify-center items-center">
                                                <div className="w-8 h-8 relative lg:w-6 lg:h-6 xl:w-8 xl:h-8">
                                                    <Image alt="imagem do jogador" src={transferencia.timeAtual.escudo} fill className="object-cover" unoptimized/>
                                                </div>
                                                <p className="uppercase font-bold text-sm">{pegarTresLetras(transferencia.timeAtual.nome)}</p>
                                            </div>
                                            <div>
                                                <p><FaArrowRightLong className="text-4xl lg:text-2xl" /></p>
                                            </div>
                                            <div className="flex flex-col justify-center items-center">
                                                <div className="w-8 h-8 relative lg:w-6 lg:h-6 xl:w-8 xl:h-8">
                                                    <Image alt="imagem do jogador" src={transferencia.novoTime.escudo} fill className="object-cover" unoptimized/>
                                                </div>
                                                <p className="uppercase font-bold text-sm">{pegarTresLetras(transferencia.novoTime.nome)}</p>
                                            </div>
                                        </div>
                                        <div className={`flex w-full h-fit self-center py-2 justify-center items-center rounded-lg ${identificarSituacao(transferencia.situacao)}`}>
                                            <h3 className="uppercase font-bold lg:text-sm xl:text-lg" style={{textShadow: '1px 1px 2px black'}}>{transferencia.situacao}</h3>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center bg-zinc-400 text-black font-semibold py-1 transition-all duration-300 hover:bg-blue-500 hover:text-white cursor-pointer">
                                        <Link href={'/'}>Saiba mais!</Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}