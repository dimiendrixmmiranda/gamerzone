import { listaDeCraquesSemanal } from "@/core";
import Image from "next/image";

export default function Craque() {
    return (
        <div className="bg-[--preto-skins] w-full h-fit" style={{ boxShadow: '1px 1px 2px 2px black' }}>
            <h3 className="uppercase text-center font-black text-2xl leading-6 py-2 lg:mb-2 lg:text-3xl">Vote no Craque da Semana</h3>
            <form action="" className="flex flex-wrap gap-2 justify-center xl:justify-around">
                {
                    listaDeCraquesSemanal[0].jogadores.map((jogador) => {
                        return (
                            <fieldset key={jogador.id} className="bg-zinc-600 h-[100px] max-w-[80px] w-full p-1 flex flex-col gap-1 relative md:max-w-[130px] md:h-[180px] lg:max-w-[160px] lg:h-[200px] xl:max-w-[160px] xl:h-[220px]">
                                <div className="w-full h-[85%] bg-orange-400 relative">
                                    <Image src={jogador.imagem} fill alt={jogador.nome} className="w-full h-full object-cover"></Image>
                                </div>
                                <div className="w-full h-[15%] bg-black">
                                    <h2 className="text-center text-[.6em] font-bold leading-3 md:text-xl">{jogador.nick}</h2>
                                </div>
                                <input type="radio" name="craqueDaSemana" id="craqueDaSemana" className="absolute" />
                            </fieldset>
                        )
                    })
                }
                <button className="w-full uppercase text-2xl font-black bg-[--azul] py-1 xl:mt-2">Votar!</button>
            </form>
        </div>
    )
}