import ranking from '@/data/ranking';
import Link from 'next/link';
import { useState } from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import styles from './Ranking.module.css'
import listaDeTimes from '@/data/times';

export default function Ranking() {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    console.log(listaDeTimes)

    const toggleOpen = (index: number) => {
        if (openIndexes.includes(index)) {
            setOpenIndexes(openIndexes.filter(i => i !== index)); // Fechar
        } else {
            setOpenIndexes([...openIndexes, index]); // Abrir
        }
    };

    return (
        <div className={`h-fit w-full bg-[--preto-claro] p-2 ${styles.ranking}`}>
            <h1 className="text-center font-black w-full text-xl pb-2 xl:text-3xl xl:pb-4">Ranking da Valve (CS2)</h1>
            <ul>
                {ranking.map((clube, index) => {
                    return (
                        <li className='w-full bg-[--cinza-medio]' key={index}>
                            <div>
                                <div className='w-full h-full flex justify-center items-center'>
                                    <h4 className='text-center uppercase font-black text-2xl md:text-3xl lg:text-2xl'>{clube.position}</h4>
                                </div>
                                <div className='w-full h-full flex flex-col justify-center items-center leading-3 text-[.7em] font-bold md:text-[.9em] md:leading-4 lg:text-[.7em]'>
                                    <span>{clube.points}</span>
                                    <span>{clube.region}</span>
                                </div>
                                <div className='w-full h-full flex justify-center items-center'>
                                    <img src={clube.imgSrc} alt={`Escudo do ${clube.teamName}`} className='w-[50px]' />
                                </div>
                                <div className='w-full h-full flex justify-center items-center'>
                                    <h3 className='font-bold text-xl leading-5 text-center xl:text-2xl xl:leading-6'>{clube.teamName}</h3>
                                </div>
                                <div className='w-full h-full flex justify-center items-center text-2xl cursor-pointer' onClick={() => toggleOpen(index)}>
                                    <IoIosArrowDropdownCircle />
                                </div>
                            </div>
                            <ul className={`w-full h-[67px] ${openIndexes.includes(index) ? 'flex' : 'hidden'}`}>
                                {
                                    listaDeTimes[0].listaJogadores.map((jogador, index) => {
                                        return (
                                            <li key={index} className='flex-1' style={{ border: 'solid 1px black' }}>
                                                <img src={jogador.imagem} alt={jogador.nome} className='h-full mx-auto' />
                                                <h2 className=' font-bold text-[.7em] justify-self-center md:text-[.9em]'>{jogador.nick}</h2>
                                                <span className='text-[.5em] leading-3 font-semibold justify-self-center'>{jogador.posicao}</span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                    )
                })}
            </ul>
            <Link href={'/'} className='w-full flex justify-center items-center uppercase py-2 font-bold bg-[--cor-principal] mt-2'>Ver Ranking Completo</Link>
        </div>
    );
}
