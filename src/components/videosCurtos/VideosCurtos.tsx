'use client'

import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { Dialog } from 'primereact/dialog'
import { useState } from "react"
import { IoMdPlay } from "react-icons/io"
import VideoCurto from "@/interfaces/VideoCurto"
import Link from "next/link"
import useVideosCurtos from "@/lib/hooks/useVideosCurtos"

export default function VideosCurtos() {
    const [visible, setVisible] = useState(false);
    const [videoSelecionado, setVideoSelecionado] = useState<VideoCurto | null>(null);
    const { videos } = useVideosCurtos();

    return (
        <div className="p-2 flex flex-col gap-2 md:p-4 md:gap-4 lg:pb-12">
            <h2 className="text-2xl font-bold md:text-4xl">Vídeos Curtos do Cenário</h2>

            <div className="w-full mx-auto">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    className="h-[340px] cursor-pointer md:h-[260px] xl:h-[320px]"
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        425: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                    }}
                >
                    {videos.map((video, i) => (
                        <SwiperSlide
                            key={i}
                            className="w-full h-full"
                            onClick={() => {
                                setVideoSelecionado(video)
                                setVisible(true)
                            }}
                        >
                            <div
                                className="w-full h-full bg-cover bg-center rounded-[12px] relative flex items-end"
                                style={{
                                    backgroundImage: `url(https://img.youtube.com/vi/${video.idDoVideo}/hqdefault.jpg)`
                                }}
                            >
                                <div className="max-w-[90%] mx-auto text-center line-clamp-3 self-end mb-6 bg-black text-white p-1 rounded-[8px] xl:text-xl">
                                    {video.titulo}
                                </div>

                                <button
                                    className="absolute top-[50%] left-[50%] text-5xl p-3 bg-red-500 rounded-full text-white"
                                    style={{ transform: 'translate(-50%,-50%)' }}
                                >
                                    <IoMdPlay />
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* MODAL */}
            <Dialog
                header={videoSelecionado && videoSelecionado.titulo}
                visible={visible}
                className="w-[95%] max-w-[500px] h-[700px]"
                onHide={() => setVisible(false)}
            >
                {videoSelecionado && (
                    <div className="flex flex-col justify-center items-center h-full gap-4">
                        <div className="flex text-center w-full font-bold text-blue-700 leading-5">
                            <Link href={videoSelecionado.linkCanal}>Clique aqui para acessar o Canal do corte</Link>
                        </div>
                        <div
                            className={`w-full aspect-[9/16] max-w-[300px]`}
                        >
                            <iframe
                                className="w-full h-full rounded-lg"
                                src={`https://www.youtube.com/embed/${videoSelecionado.idDoVideo}`}
                                title="YouTube video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}
            </Dialog>
        </div>
    )
}
