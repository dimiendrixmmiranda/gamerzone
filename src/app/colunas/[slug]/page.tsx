'use client'
import Ancoras from "@/components/ancoras/Ancoras";
import Template from "@/components/template/Template";
import Coluna from "@/core/colunas/Coluna";
import { listaDeColunas } from "@/core/constants/ListaDeColunas";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const params = useParams();
    const slug = typeof params.slug === 'string' ? params.slug : params.slug?.[0];
    const id = slug != undefined ? slug.split(/-(.*)/i)[0] : null
    const [coluna, setColuna] = useState<Coluna | null>(null)

    useEffect(() => {
        if (id !== null) {
            const idColunaSelecionada = listaDeColunas.find(coluna => coluna.id === parseInt(id));
            setColuna(idColunaSelecionada || null);
        }
    }, [id])

    console.log(coluna)
    return (
        <Template>
            <div className="text-black p-4 max-w-[1200px] mx-auto flex flex-col gap-2">
                <h1 className="uppercase font-black text-3xl leading-8 text-center xl:text-5xl">{coluna?.titulo}</h1>
                <div className="border border-b-[--azul] flex w-full justify-center relative overflow-hidden h-[120px] mt-2 sm:h-[150px] sm:mt-4 xl:h-[200px]">
                    <div className="w-[140px] h-[140px] rounded-full overflow-hidden absolute -bottom-8 sm:w-[180px] sm:h-[180px] xl:w-[230px] xl:h-[230px] bg-black">
                    </div>
                </div>
                <p className="text-center uppercase font-bold text-sm">Por {coluna?.autor}</p>
                <div className="flex flex-col gap-4 mt-4 mx-auto">
                    <h2 className="text-xl font-bold text-center leading-6 xl:text-3xl">{coluna?.enunciadoColuna}</h2>
                    <ul className="flex flex-col gap-4 max-w-[1000px] mx-auto lg:text-lg">
                        {coluna?.conteudo.map((p, i) => {
                            return (
                                <li key={i} className="indent-[2em]">{p}</li>
                            )
                        })}
                    </ul>
                    <p className="max-w-[1000px] mx-auto text-start w-full">Por {coluna?.autor} - {coluna?.data}, ás {coluna?.hora}</p>
                </div>
                <Ancoras></Ancoras>
            </div>
        </Template>
    )
}