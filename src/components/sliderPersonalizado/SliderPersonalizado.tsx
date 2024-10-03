'use client';
import noticias from "@/data/noticias";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from './slider.module.css'
import Image from "next/image";

export default function SliderPersonalizado() {
    const [slideAtual, setSlideAtual] = useState(0)
    const noticiasSlider = noticias.slice(0, 9)
    const grupoDeNoticias = [
        noticiasSlider.slice(0, 3),  // Pega os 3 primeiros itens
        noticiasSlider.slice(3, 6),  // Pega os 3 primeiros itens
        noticiasSlider.slice(6, 9),  // Pega os 3 primeiros itens
    ];

    const totalSlides = grupoDeNoticias.length

    const handleProximoSlide = () => {
        setSlideAtual((prev) => prev < (totalSlides - 1) ? prev + 1 : prev = 0);
    };

    const handleAnteriorSlide = () => {
        setSlideAtual((prev) => (prev < 1 ? prev = (totalSlides - 1) : prev - 1));
    };
    return (
        <div className="h-[450px] w-[90%] mx-auto relative my-6 overflow-hidden hidden lg:block xl:w-[85%] xl:h-[530px]">
            <div
                className="flex transition-transform duration-500 h-full"
                style={{ transform: `translateX(-${(slideAtual * 100)}%)` }}
            >
                {
                    grupoDeNoticias.map((grupo, i) => {
                        return (
                            <div key={i} className={`flex-shrink-0 w-full ${styles.sliderPersonalizado}`} >
                                {
                                    grupo.map((noticia, j) => {
                                        return (
                                            <Link key={j} href={'/'} className={`relative overflow-hidden rounded-md ${j <= 0 ? 'row-start-1 row-end-3' : ''}`} style={{boxShadow: '0 0 2px 1px black'}}>
                                                <Image src={noticia.thumbnail} fill alt={'Imagem do Produto'} className="object-cover w-full"></Image>
                                                <div className="absolute w-full max-w-[95%] left-[50%] bottom-3" style={{transform: 'translate(-50%)', textShadow: '2px 2px 3px black'}}>
                                                    <h2 className="font-bold text-2xl">{noticia.tituloNoticia}</h2>
                                                    <p className="border-t border-zinc-800 mt-4 pt-2">
                                                        Por {noticia.autor}, {noticia.data}
                                                    </p>
                                                </div>
                                                <img src={noticia.logoNoticia} alt="" className="w-6 absolute top-2 right-2 rounded-full" />
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>

            {/* Botões de navegação */}
            <button
                className="absolute top-[50%] left-0 rounded-full text-6xl p-2 text-[--azul-botao]"
                style={{ transform: 'translate(0,-50%)'}}
                onClick={handleAnteriorSlide}
            >
                <IoIosArrowBack />
            </button>
            <button
                className="absolute top-[50%] right-0 rounded-full text-6xl p-2 text-[--azul-botao]"
                style={{ transform: 'translate(0,-50%)'}}
                onClick={handleProximoSlide}
            >
                <IoIosArrowForward />
            </button>
        </div>
    )
}