import Link from 'next/link';
import { useState } from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import styles from './Ranking.module.css'
import { listaDeTimes } from 'core';

export default function Ranking() {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);
    const [botaoSelecionado, setBotaoSelecionado] = useState('geral')

    const toggleOpen = (index: number) => {
        if (openIndexes.includes(index)) {
            setOpenIndexes(openIndexes.filter(i => i !== index)); // Fechar
        } else {
            setOpenIndexes([...openIndexes, index]); // Abrir
        }
    };
    
    const timesSelecionados = botaoSelecionado === 'geral' ?
        listaDeTimes.sort((a, b) => a.posicao - b.posicao):
        listaDeTimes
            .filter(time => time.regiao.toLocaleLowerCase() === botaoSelecionado.toLocaleLowerCase()) // Filtra por região
            .sort((a, b) => a.posicao - b.posicao);  // Ordena os times pela propriedade 'posicao'

    return (
        <div className={`h-fit w-full bg-[--preto-claro] p-2 ${styles.ranking}`}>
            <h1 className="text-center font-black w-full uppercase text-xl py-2 xl:text-[1.7em] xl:pb-5">Ranking da Valve (CS2)</h1>
            <div className='flex'>
                <button className={`flex-1 border px-2 border-zinc-300 font-bold mb-3 hover:bg-white hover:text-[--preto-claro] ${botaoSelecionado == 'geral' ? 'bg-white text-[--preto-claro]' : ''}`} style={{ transition: '.4s ease' }} onClick={() => setBotaoSelecionado('geral')}>MUNDIAL</button>
                <button className={`flex-1 border border-zinc-300 font-bold mb-3 hover:bg-white hover:text-[--preto-claro] ${botaoSelecionado == 'eu' ? 'bg-white text-[--preto-claro]' : ''}`} style={{ transition: '.4s ease' }} onClick={() => setBotaoSelecionado('eu')}>EU</button>
                <button className={`flex-1 border border-zinc-300 font-bold mb-3 hover:bg-white hover:text-[--preto-claro] ${botaoSelecionado == 'sa' ? 'bg-white text-[--preto-claro]' : ''}`} style={{ transition: '.4s ease' }} onClick={() => setBotaoSelecionado('sa')}>SA</button>
                <button className={`flex-1 border border-zinc-300 font-bold mb-3 hover:bg-white hover:text-[--preto-claro] ${botaoSelecionado == 'na' ? 'bg-white text-[--preto-claro]' : ''}`} style={{ transition: '.4s ease' }} onClick={() => setBotaoSelecionado('na')}>NA</button>
                <button className={`flex-1 border border-zinc-300 font-bold mb-3 hover:bg-white hover:text-[--preto-claro] ${botaoSelecionado == 'oc' ? 'bg-white text-[--preto-claro]' : ''}`} style={{ transition: '.4s ease' }} onClick={() => setBotaoSelecionado('oc')}>OC</button>
                <button className={`flex-1 border border-zinc-300 font-bold mb-3 hover:bg-white hover:text-[--preto-claro] ${botaoSelecionado == 'as' ? 'bg-white text-[--preto-claro]' : ''}`} style={{ transition: '.4s ease' }} onClick={() => setBotaoSelecionado('as')}>AS</button>
            </div>
            <ul>
                {timesSelecionados.map((time, index) => {
                    return (
                        <li className='w-full bg-[--cinza-medio]' key={index}>
                            <div>
                                <div className='w-full h-full flex justify-center items-center'>
                                    <h4 className='text-center uppercase font-black text-2xl md:text-3xl lg:text-2xl'>{time.posicao}</h4>
                                </div>
                                <div className='w-full h-full flex flex-col justify-center items-center leading-3 text-[.7em] font-bold md:text-[.9em] md:leading-4 lg:text-[.7em]'>
                                    <span>{time.pontos}</span>
                                    <span>{time.regiao.toUpperCase()}</span>
                                </div>
                                <div className='h-full w-full overflow-hidden flex justify-center items-center'>
                                    <img src={time.logo} alt={`Escudo do ${time.nome}`} className='h-[80%]' />
                                </div>
                                <div className='w-full h-full flex justify-center items-center'>
                                    <h3 className='font-bold text-xl leading-5 text-center xl:text-2xl xl:leading-6'>{time.nome}</h3>
                                </div>
                                <div className='w-full h-full flex justify-center items-center text-2xl cursor-pointer' onClick={() => toggleOpen(index)}>
                                    <IoIosArrowDropdownCircle />
                                </div>
                            </div>
                            <ul className={`w-full h-[67px] ${openIndexes.includes(index) ? 'flex' : 'hidden'}`}>
                                {
                                    time.jogadores.map((jogador, index) => {
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
