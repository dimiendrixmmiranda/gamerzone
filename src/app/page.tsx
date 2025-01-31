'use client'
import ClubeDoCoracao from '@/components/clubeDoCoracao/ClubeDoCoracao';
import Colunas from '@/components/colunas/Colunas';
import Jogos from '@/components/jogos/Jogos';
import Negociacoes from '@/components/negociacoes/Negociacoes';
import Noticias from '@/components/noticias/Noticias';
import Replays from '@/components/replays/Replays';
import SliderMobile from '@/components/slider/SliderMobile';
import SliderWeb from '@/components/slider/SliderWeb';
import Template from '@/components/template/Template'
import style from './style.module.css'
export default function App() {
    return (
        <Template>
            <Jogos br425={2} br768={3} br1024={4} br1280={5}></Jogos>
            <SliderMobile></SliderMobile>
            <SliderWeb></SliderWeb>
            <div className={style.container}>
                <Noticias></Noticias>
                <div className={style.subContainer}>
                    <ClubeDoCoracao></ClubeDoCoracao>
                    <Colunas></Colunas>
                    <Negociacoes></Negociacoes>
                </div>
                <Replays></Replays>
            </div>
        </Template>
    );
}
