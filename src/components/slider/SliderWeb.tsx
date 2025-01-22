import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import style from './style.module.css';
import { useState } from 'react';

export default function SliderWeb() {
    const listaDeNoticias = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const grupoDeNoticias = [
        listaDeNoticias.slice(0, 3),
        listaDeNoticias.slice(3, 6),
        listaDeNoticias.slice(6, 9),
    ];

    const [paginaAtual, setPaginaAtual] = useState(0);

    const proximaPagina = () => {
        setPaginaAtual((prev) => (prev < grupoDeNoticias.length - 1 ? prev + 1 : 0));
    };

    const paginaAnterior = () => {
        setPaginaAtual((prev) => (prev > 0 ? prev - 1 : grupoDeNoticias.length - 1));
    };
    
    return (
        <div className="w-full h-[340px] relative hidden max-w-[1200px] mx-auto md:block overflow-hidden lg:h-[450px] xl:h-[540px]">
            <div className="h-full flex w-[300%]" style={{ overflow: 'hidden' }}>
                {grupoDeNoticias.map((grupo, grupoIndex) => (
                    
                    <div
                        key={grupoIndex}
                        className={`${style.containerSlider} transition-transform duration-500 ease-in-out`}
                        style={{
                            transform: `translateX(-${(paginaAtual) * 100}%)`,
                        }}
                    >
                        {grupo.map((noticia, noticiaIndex) => (
                            <div
                                key={noticiaIndex}
                                className="w-full h-full bg-black flex items-center justify-center text-white"
                            >
                                Notícia {noticia}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Botões de navegação */}
            <button
                onClick={proximaPagina}
                className="absolute top-[50%] right-5 text-5xl lg:text-6xl"
                style={{ transform: 'translate(0,-50%)' }}
            >
                <IoIosArrowForward />
            </button>
            <button
                onClick={paginaAnterior}
                className="absolute top-[50%] left-5 text-5xl lg:text-6xl"
                style={{ transform: 'translate(0,-50%)' }}
            >
                <IoIosArrowBack />
            </button>
        </div>
    );
}
