'use client'
import BotaoAncora from "components/botaoAncora/BotaoAncora";
import Pagina from "components/template/Pagina";
import { listaColunas } from "core";
import Coluna from "core/colunas/coluna";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowUp } from "react-icons/fa";

export default function Page() {
    const params = useParams();
    const slug = typeof params.slug === 'string' ? params.slug : params.slug?.[0];
    const [coluna, setColuna] = useState<Coluna | null>(null)

    useEffect(() => {
        if (slug) {
            const colunaId = slug?.split('-')[0];
            const colunaEncontrada = listaColunas.find(n => n.id === Number(colunaId));
            colunaEncontrada != null ? setColuna(colunaEncontrada) : null
        }
    }, [slug]);

    return (
        <Pagina>
            <div className="w-full max-w-[95%] mx-auto text-black mt-4 xl:mt-10">
                <h1 className="uppercase font-black text-3xl leading-7 text-center xl:text-5xl">{coluna?.nome}</h1>
                <div className="border border-b-[--azul] flex w-full justify-center relative overflow-hidden h-[120px] mt-2 sm:h-[150px] sm:mt-4 xl:h-[200px]">
                    <div className="w-[140px] h-[140px] rounded-full overflow-hidden absolute -bottom-8 sm:w-[180px] sm:h-[180px] xl:w-[230px] xl:h-[230px]">
                        <img src={coluna?.imagem} alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
                <p className="text-center uppercase font-bold text-sm">Por {coluna?.autor}</p>
                <div className="flex flex-col gap-4 mt-4 max-w-[1000px] mx-auto">
                    <h2 className="text-xl font-bold text-center leading-6 xl:text-3xl">{coluna?.tituloColuna}</h2>
                    <ul className="flex flex-col gap-4">
                        {coluna?.conteudo.map((p, i) => {
                            return (
                                <li key={i} className="indent-[2em]">{p}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className='flex justify-around my-6 md:justify-end md:gap-6 max-w-[1000px] mx-auto'>
                    <BotaoAncora href='/' icone={<FaArrowLeft />} texto='Voltar'></BotaoAncora>
                    <BotaoAncora href='#topo' icone={<FaArrowUp />} texto='Voltar Ao topo'></BotaoAncora>
                </div>
            </div>
        </Pagina>
    )
}