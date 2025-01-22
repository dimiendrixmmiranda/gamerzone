import Link from "next/link";
import style from './style.module.css'

export default function Jogo() {
    return (
        <Link href={'https://www.twitch.tv/gaules'} className={style.jogo}>
            <h2 className='text-[.6em] overflow-hidden whitespace-nowrap text-ellipsis'>CCT Season 2 South American Series #6 </h2>
            <div className='row-start-2 row-end-3'>
                <div className='flex items-center gap-1 text-[.8em] font-semibold'>
                    <div className='flex items-center gap-1'>
                        <div className='w-4 h-4 rounded-full bg-zinc-500'></div>
                        <h2>SKGaming</h2>
                    </div>
                    <div className='ml-auto'>
                        <p>2</p>
                    </div>
                </div>
                <div className='flex items-center gap-1 text-[.8em] font-semibold'>
                    <div className='flex items-center gap-1'>
                        <div className='w-4 h-4 rounded-full bg-zinc-500'></div>
                        <h2>Complexity</h2>
                    </div>
                    <div className='ml-auto'>
                        <p>1</p>
                    </div>
                </div>
            </div>
            <div className='text-[.5em] text-center font-bold'>
                <p>17/01 - 21:30</p>
            </div>
            {/* Pode Variar podendo ser md1, md3, kings league entre outros */}
            <div className='overflow-hidden px-1 h-[38px]'>
                <p className='text-[.5em] uppercase font-bold text-center'>Mapas</p>
                <div className='w-full grid grid-cols-3 gap-1 h-[25px]'>
                    <div className='flex flex-col'>
                        <div className='w-full h-full bg-red-500 flex justify-center items-center rounded-sm'>
                            <p className='text-[.4em] text-center font-bold'>12x3</p>
                        </div>
                        <p className='text-[.5em] overflow-hidden whitespace-nowrap text-ellipsis'>Inferno</p>
                    </div>
                    <div className='flex flex-col'>
                        <div className='w-full h-full bg-green-500 flex justify-center items-center rounded-sm'>
                            <p className='text-[.4em] text-center font-bold'>12x10</p>
                        </div>
                        <p className='text-[.5em] overflow-hidden whitespace-nowrap text-ellipsis'>DustII</p>
                    </div>
                    <div className='flex flex-col'>
                        <div className='w-full h-full bg-blue-500 flex justify-center items-center rounded-sm'>
                            <p className='text-[.4em] text-center font-bold'>12x3</p>
                        </div>
                        <p className='text-[.5em] overflow-hidden whitespace-nowrap text-ellipsis'>Mirage</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}