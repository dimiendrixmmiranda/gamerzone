import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CardJogo from "../cardJogo/CardJogo";

export default function MenuSuperiorDeJogos() {
    const jogos = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <div className="bg-zinc-900 p-4 jogos">
            <div className="w-full mx-auto">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    className="h-[90px] w-full"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        425: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {jogos.map((jogo, i) => (
                        <SwiperSlide key={i} className="w-full h-full">
                            <CardJogo></CardJogo>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}