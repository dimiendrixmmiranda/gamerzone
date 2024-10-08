import { listaDeTimes } from "core";
import Image from "next/image";

interface TimeFavoritoProps{
    style?:string
}

export default function TimeFavorito({style}: TimeFavoritoProps) {
    return (
        <div className={`p-2 flex-col gap-3 bg-[--azul] xl:py-4 ${style}`}>
            <h1 className="uppercase font-black text-xl text-center leading-5 xl:mb-2">Qual seu time do Coração?</h1>
            <ul className="w-full grid grid-cols-4 gap-2">
                {
                    listaDeTimes.map((time => {
                        return (
                            <li key={time.id} className="hover:scale-[1.05] transition-all bg-[--preto-skins] rounded-md py-1 cursor-pointer">
                                <div className="flex justify-center items-center relative w-full h-[60px]">
                                    <Image src={time.logo} alt={time.nome} fill className="object-contain p-2"></Image>
                                </div>
                                <h2 className="text-center leading-4 text-sm">{time.nome}</h2>
                            </li>
                        )
                    }))
                }
            </ul>
        </div>
    )
}