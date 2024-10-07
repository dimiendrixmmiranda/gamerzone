import jogosConcluidos from "data/jogosConcluidos";
import Link from "next/link";
import { MdScoreboard } from "react-icons/md";

export default function Resultados() {
    return (
        <div className="resultados h-fit text-black" style={{ border: 'solid 2px black' }}>
            <h2 className="flex justify-center items-center bg-[--preto-claro] p-2 font-bold text-xl text-white lg:text-2xl ">Resultados</h2>
            <ul className="flex flex-col">
                {
                    jogosConcluidos.map((jogo, index) => {
                        return (
                            <li key={index} className="h-[95px] bg-[--cinza-medio] text-white" style={{ display: 'grid', gridTemplateColumns: '30% 40% 30%', borderBottom: 'solid 2px black' }}>
                                <div className="p-2 flex justify-center items-center flex-col gap-2">
                                    <img src={jogo.times.time1.imgSrc} alt="" className="w-[40px]" />
                                    <h2 className="font-bold leading-4 text-center">{jogo.times.time1.nome}</h2>
                                </div>
                                <div className="w-full flex flex-col gap-1">
                                    <div className="flex w-full mt-1 justify-center">
                                        <h4 className={`bg-black text-white py-1 px-2 font-bold rounded-md ${jogo.placar.time1 > jogo.placar.time2 ? 'bg-green-600' : 'bg-red-600'}`} style={{ boxShadow: '0 0 2px 1px black' }}>{jogo.placar.time1}</h4>
                                        <span className="px-2">x</span>
                                        <h4 className={`bg-black text-white py-1 px-2 font-bold rounded-md ${jogo.placar.time2 > jogo.placar.time1 ? 'bg-green-600' : 'bg-red-600'}`} style={{ boxShadow: '0 0 2px 1px black' }}>{jogo.placar.time2}</h4>
                                    </div>
                                    <div className="flex overflow-hidden justify-center items-center">
                                        <h3 className="overflow-x-scroll whitespace-nowrap font-bold text-sm text-center">{jogo.competicao}</h3>
                                    </div>
                                    <div className="flex gap-[2px] xl:gap-2">
                                        {
                                            jogo.placar.mapas.map((mapa, i) => {
                                                return (
                                                    <div key={i} className="flex flex-col justify-center items-center flex-1 w-full">
                                                        <div className="h-4 w-full flex justify-center items-center rounded-sm" style={{ backgroundImage: 'url(https://files.bo3.gg/uploads/news/24598/title_image/960x480-05cf99ea4c4631e5435da58aa71e975d.webp)', backgroundPosition: 'center', backgroundSize: 'cover', border: 'solid 1px black' }}>
                                                            <p className="text-[.7em] bg-black leading-3 px-[2px]" style={{textShadow: '1px 1px 2px black'}}>{mapa.placar}</p>
                                                        </div>
                                                        <p className="leading-3 font-bold text-[.6em]">{mapa.nome}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="p-2 flex justify-center items-center flex-col gap-2">
                                    <img src={jogo.times.time2.imgSrc} alt="" className="w-[40px]" />
                                    <h2 className="font-bold leading-4 text-center">{jogo.times.time2.nome}</h2>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            <Link href={'/'} className="text-white font-black text-center bg-[--cor-principal] p-1 flex justify-center items-center gap-2 cursor-pointer lg:p-2 lg:text-xl">Todas os Resultados <MdScoreboard className="text-md" /></Link>
        </div>
    )
}