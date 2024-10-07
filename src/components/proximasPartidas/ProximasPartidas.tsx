import Link from "next/link";
import { MdOutlineLiveTv } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import style from './proximasPartidas.module.css'
import proximasPartidas from "data/proximasPartidas";

export default function ProximasPartidas() {
    return (
        <div className={`h-fit ${style.proximasPartidas}`} style={{ border: 'solid 2px black' }}>
            <h2 className="flex justify-center items-center bg-[--preto-claro] p-2 font-bold text-xl lg:text-2xl">Próximas Partidas</h2>
            <ul className="flex flex-col">
                {
                    proximasPartidas.map((jogo, index) => {
                        return (
                            <li key={index} className="px-2 py-1 h-[90px] bg-[--cinza-medio]" style={{ borderBottom: 'solid 2px black' }}>
                                <div className="flex gap-[2px] justify-center items-center overflow-hidden" style={{ display: 'grid', gridTemplateColumns: '1fr 20px 1fr' }}>
                                    <div className=" w-full h-full gap-[2px] justify-center" style={{ display: 'grid', gridTemplateRows: '1fr 20px' }}>
                                        <div className="flex justify-center items-center w-[48px] h-[48px] mx-auto">
                                            <img src={jogo.times.time1.imgSrc} alt="" className="p-1" />
                                        </div>
                                        <div>
                                            <h2 className="text-[.75em] font-bold text-center w-full leading-3 -mt-[4px]">{jogo.times.time1.nome}</h2>
                                        </div>
                                    </div>
                                    <div className="w-full h-full flex justify-center items-center font-bold">X</div>
                                    <div className=" w-full h-full justify-center" style={{ display: 'grid', gridTemplateRows: '1fr 20px' }}>
                                        <div className="flex justify-center items-center w-[48px] h-[48px] mx-auto">
                                            <img src={jogo.times.time2.imgSrc} alt="" className="p-1" />
                                        </div>
                                        <div>
                                            <h2 className="text-[.75em] font-bold text-center w-full leading-3 -mt-[4px]">{jogo.times.time2.nome}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center gap-1">
                                    <h2 className="leading-4 font-bold text-center">{jogo.competicao}</h2>
                                    <span className="text-sm text-center">{jogo.hora}, {jogo.data}</span>
                                    <span className="text-sm text-center font-semibold leading-3">{jogo.canal}</span>
                                </div>
                                <div className="flex justify-center items-center h-full w-full">
                                    <Link href={'/'}><MdOutlineLiveTv className="text-2xl" /></Link>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            <Link href={'/'} className="text-white font-black text-center bg-[--cor-principal] p-1 flex justify-center items-center gap-2 cursor-pointer lg:p-2 lg:text-xl">Todas as Partidas <FaCalendarAlt className="text-md" /></Link>
        </div>
    )
}