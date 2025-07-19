import Image from "next/image";

export default function CraqueDaSemana() {
    return (
        <div className="p-4 lg:col-start-1 lg:col-end-4 xl:col-end-5">
            <div className="bg-azul-escuro text-white">
                <div className="relative w-full h-[100px] sm:h-[140px] xl:h-[200px] 2xl:h-[220px]">
                    <Image alt="banner craque da semana" src={'/banners/banner-craque-semana.png'} fill className="object-contain" />
                </div>
                <h2 className="uppercase font-semibold text-center xl:text-xl">Eleja o craque da semana! (20/07 há 27/07):</h2>
                <ul className="flex gap-2 p-2 overflow-x-auto overflow-y-hidden w-full flex-nowrap">
                    <li className="w-[115px] h-[150px] bg-zinc-700 border-2 border-zinc-900 shrink-0 rounded-lg sm:h-[170px] sm:w-[125px] md:w-[145px] md:h-[190px]"></li>
                    <li className="w-[115px] h-[150px] bg-zinc-700 border-2 border-zinc-900 shrink-0 rounded-lg sm:h-[170px] sm:w-[125px] md:w-[145px] md:h-[190px]"></li>
                    <li className="w-[115px] h-[150px] bg-zinc-700 border-2 border-zinc-900 shrink-0 rounded-lg sm:h-[170px] sm:w-[125px] md:w-[145px] md:h-[190px]"></li>
                    <li className="w-[115px] h-[150px] bg-zinc-700 border-2 border-zinc-900 shrink-0 rounded-lg sm:h-[170px] sm:w-[125px] md:w-[145px] md:h-[190px]"></li>
                    <li className="w-[115px] h-[150px] bg-zinc-700 border-2 border-zinc-900 shrink-0 rounded-lg sm:h-[170px] sm:w-[125px] md:w-[145px] md:h-[190px]"></li>
                    <li className="w-[115px] h-[150px] bg-zinc-700 border-2 border-zinc-900 shrink-0 rounded-lg sm:h-[170px] sm:w-[125px] md:w-[145px] md:h-[190px]"></li>
                </ul>
                <button className="text-center bg-amarelo w-full uppercase font-bold text-2xl py-1">Votar</button>
            </div>
        </div>
    )
}