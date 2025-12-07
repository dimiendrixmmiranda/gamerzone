import Image from "next/image";
import Link from "next/link";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { IoIosArrowForward, IoMdAdd } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useTransferencias from "@/lib/hooks/useTransferencias";
import { extrairYoutubeId } from "@/lib/utils/extrairYoutubeId";
import { identificarSituacaoTransferencia } from "@/lib/utils/identificarSituacaoTransferencia";

export default function VaiEVemDaBala() {
    // const [transferencias, ] = useState([1, 2, 3, 4, 5])
    const { transferencias } = useTransferencias()

    return (
        <div className="bg-zinc-900 text-white p-4 xl:mr-4">
            <h2 className="text-2xl text-center font-bold">Vai e vem da bala</h2>

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
            >
                {
                    transferencias.map((transferencia, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className="flex flex-col gap-2">
                                    <div className="w-full flex justify-center overflow-hidden relative">
                                        <div className="relative w-full h-[250px] -mb-[100px] z-10 sm:w-[300px] sm:h-[300px]">
                                            <Image alt={transferencia.timeAtual.time} src={transferencia.timeAtual.logo} fill className="object-contain" />
                                        </div>
                                        <div className="absolute -bottom-10 left-[50%] z-20 " style={{ transform: 'translate(-50%)' }}>
                                            <div className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px]">
                                                <Image alt={transferencia.jogadorAtual.nick} src={transferencia.jogadorAtual.imagem} fill className="object-contain" />
                                            </div>
                                        </div>
                                        <div className="w-full h-6 absolute bottom-0 left-0 z-30 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        {/* Transferência */}
                                        <div className="flex items-center justify-self-center">
                                            <div className="relative w-[35px] h-[35px]">
                                                <Image alt={transferencia.timeAtual.time} src={transferencia.timeAtual.logo} fill className="object-contain" />
                                            </div>
                                            <div className="flex items-center">
                                                <IoIosArrowForward className="text-xl" />
                                                <IoIosArrowForward className="text-3xl -ml-4" />
                                                <IoIosArrowForward className="text-xl -ml-4" />
                                            </div>
                                            <div className="relative w-[35px] h-[35px]">
                                                <Image alt={transferencia.timeDestino.time} src={transferencia.timeDestino.logo} fill className="object-contain" />
                                            </div>
                                        </div>
                                        {/* Situação */}
                                        <div className={`rounded-[12px] p-2 w-fit justify-self-center lg:px-6`} style={{backgroundColor: identificarSituacaoTransferencia(transferencia.situacaoTransferencia)}}>
                                            <h2 className="capitalize font-bold text-lg" style={{textShadow: '1px 1px 2px black'}}>{transferencia.situacaoTransferencia}</h2>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex flex-col justify-center items-center">
                                            <h2 className="text-xl font-bold text-center">{transferencia.jogadorAtual.nick}</h2>
                                            <span>{transferencia.jogadorAtual.nome}</span>
                                            <p className="text-sm">{transferencia.jogadorAtual.posicao}</p>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <h2 className="text-xl font-bold">R${transferencia.valorDaTransferencia}</h2>
                                        </div>
                                    </div>
                                    <div className="w-full h-[200px] bg-zinc-400 rounded-[8px] xl:h-[250px] overflow-hidden">
                                        <div className="flex flex-col justify-center items-center h-full gap-4">
                                            <div
                                                className={`aspect-video w-full h-full`}
                                            >
                                                <iframe
                                                    className="w-full h-full rounded-lg"
                                                    src={`https://www.youtube.com/embed/${extrairYoutubeId(transferencia.linkHighlight)}?controls=1&rel=0&modestbranding=1`}
                                                    title="YouTube video"
                                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    sandbox="allow-same-origin allow-scripts allow-presentation allow-popups"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <Link href={'/'} className="flex items-center underline">Saiba mais <IoMdAdd /></Link>
                                        <div className="text-2xl flex gap-2">
                                            <button><AiFillLike /></button>
                                            <button><AiFillDislike /></button>
                                        </div>
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

/**
 * melou: #CA2E24
 * negociando: #f09000
 * interesse: #f09000
 * Fechado: #06AA48
 */