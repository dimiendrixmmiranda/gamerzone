import Image from "next/image";
import { FiTv } from "react-icons/fi";

export default function CardJogo() {
    return (
        <li className="grid grid-cols-[1fr_40px] bg-zinc-200 p-2 rounded-[6px]">
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                    <div>
                        <div className="flex items-center gap-1">
                            <div className="w-5 h-5 relative">
                                <Image alt="img" src={'/logo.png'} fill className="object-contain" />
                            </div>
                            <span className="line-clamp-1">Imperial</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-5 h-5 relative">
                                <Image alt="img" src={'/logo.png'} fill className="object-contain" />
                            </div>
                            <span className="line-clamp-1">Imperial</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 h-full gap-2">
                        <div className="w-6 h-4 lg:w-8 lg:h-5 bg-red-500 relative rounded-[6px] overflow-hidden" style={{ boxShadow: '1px 1px 2px black' }}>
                            <Image alt="mapa" src={'/mapas/nuke.png'} fill className="object-cover" />
                        </div>
                        <div className="w-6 h-4 lg:w-8 lg:h-5 bg-red-500 relative rounded-[6px] overflow-hidden" style={{ boxShadow: '1px 1px 2px black' }}>
                            <Image alt="mapa" src={'/mapas/dust-2.png'} fill className="object-cover" />
                        </div>
                        <div className="w-6 h-4 lg:w-8 lg:h-5 bg-red-500 relative rounded-[6px] overflow-hidden" style={{ boxShadow: '1px 1px 2px black' }}>
                            <Image alt="mapa" src={'/mapas/mirage.png'} fill className="object-cover" />
                        </div>
                        <div className="w-6 h-4 lg:w-8 lg:h-5 bg-red-500 relative rounded-[6px] overflow-hidden" style={{ boxShadow: '1px 1px 2px black' }}>
                            <Image alt="mapa" src={'/mapas/mirage.png'} fill className="object-cover" />
                        </div>
                        <div className="w-6 h-4 lg:w-8 lg:h-5 bg-red-500 relative rounded-[6px] overflow-hidden" style={{ boxShadow: '1px 1px 2px black' }}>
                            <Image alt="mapa" src={'/mapas/mirage.png'} fill className="object-cover" />
                        </div>
                    </div>
                    <div className="ml-auto mr-2">
                        <p>2</p>
                        <p>1</p>
                    </div>
                </div>
                <div className="grid grid-cols-[1fr_90px] items-center gap-2">
                    <p className="text-xs truncate">ESL Challenger League Season 50: Europe</p>
                    <span className="text-xs mx-auto">18/11 - 22:00</span>
                </div>
            </div>
            <div className="flex justify-center items-center text-2xl cursor-pointer duration-300 transition-all rounded-r-[6px] hover:bg-red-500 hover:text-white">
                <FiTv />
            </div>
        </li>
    )
}