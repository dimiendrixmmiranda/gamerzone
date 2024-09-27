'use client';
import Pagina from '@/components/template/Pagina';
import noticias from '@/data/noticias';
import { createSlugWithId } from '@/utils/createSlug';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function NoticiaPage() {
    const { slug } = useParams(); // Pega o slug da URL

    // Expressão regular para capturar o número após o último traço
    const regex = /-(\s*\d+)$/;
    const match = slug.toString().match(regex);

    // Verifique se o regex encontrou algo e armazene o ID da notícia clicada
    const idNoticiaClicada = match ? parseInt(match[1].trim(), 10) : null;

    // Filtra a notícia baseada no ID
    const noticiaFiltrada = idNoticiaClicada
        ? noticias.find(noticia => noticia.id == idNoticiaClicada)
        : null;

    if (!noticiaFiltrada) {
        return <div>Notícia não encontrada.</div>;
    }

    const outrasNoticias = noticias.filter(noticia => noticia.id != noticiaFiltrada.id).slice(0,5)

    return (
        <Pagina>
            <div className='text-[--cor-principal] font-bold max-w-[95%] mx-auto flex gap-2'>
                <div className='flex flex-col gap-2 w-fit max-w-[700px] bg-white p-2 rounded-md mt-4 lg:p-4 xl:max-w-[900px] lg:gap-4'>
                    <h1 className='text-xl font-black leading-6  lg:text-3xl'>{noticiaFiltrada.tituloNoticia}</h1>
                    <h2 className='text-md font-semibold leading-5 lg:text-lg'>{noticiaFiltrada.descricaoNoticia}</h2>
                    <img src={noticiaFiltrada.thumbnail} alt="" className='max-w-[600px] w-full self-center min-h-fit' />
                    <ul className='flex flex-col gap-2 leading-5 mt-2'>
                        {noticiaFiltrada.conteudoDaMateria.conteudo.map((paragrafo, i) => {
                            return (
                                <li key={i} className='indent-6 xl:text-lg'>{paragrafo}</li>
                            )
                        })}
                    </ul>
                    <p className='text-sm font-medium text-center mt-1 sm:text-start'>{`${noticiaFiltrada.autor}, ${noticiaFiltrada.data}`}</p>
                    <div className='flex w-full justify-around mt-3 sm:justify-end sm:gap-3 md:gap-5'>
                        <Link href={'/'} className='bg-[--cor-principal] text-white py-2 px-4 rounded-sm'>Voltar</Link>
                        <Link href={'/'} className='bg-[--cor-principal] text-white py-2 px-4 rounded-sm'>Voltar ao Topo</Link>
                    </div>
                </div>
                <div></div>
            </div>
            <div className='text-[--cor-principal] font-bold max-w-[95%] mt-6 mx-auto flex flex-col gap-2'>
                <h3 className='uppercase font-black text-xl ml-2 text-[--cor-principal]'>Outras Notícias</h3>
                <ul className='flex flex-col max-w-[800px]'>
                    {outrasNoticias.map((noticia, index) => {
                        return (
                            <li key={index} className="h-36 w-full flex p-2 gap-1 pb-6 max-w-[540px] md:max-w-none sm:h-44 md:h-48 lg:h-52 lg:p-3 lg:gap-2 xl:h-60 xl:pb-8 overflow-hidden" style={{ borderBottom: 'solid 2px var(--cor-principal)' }}>
                                <Link href={`/noticias/${createSlugWithId(noticia.tituloNoticia, noticia.id)}`} className="flex gap-2">
                                    <div className="h-full w-[45%] overflow-hidden" style={{ boxShadow: '0 0 1px 1px var(--cor-principal)' }}>
                                        <img src={noticia.thumbnail} alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="h-full w-[55%] text-[--cor-principal] px-1 flex flex-col gap-1 -mt-1 lg:px-2">
                                        <h2 className="font-black text-[.8em] leading-4 md:text-xl md:leading-6 xl:text-2xl xl:leading-7">{noticia.tituloNoticia}</h2>
                                        <p className="text-[.5em] leading-3 flex-1 font-semibold sm:text-[.8em] sm:leading-4 md:text-[1em] md:leading-5 md:mt-1 xl:text-[1.2em] xl:leading-6">
                                            {noticia.descricaoNoticia}
                                        </p>
                                        <span className="text-[.5em] sm:text-[.6em] xl:text-[.8em]">Por {noticia.autor} - {noticia.data}</span>
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Pagina>
    );
}
