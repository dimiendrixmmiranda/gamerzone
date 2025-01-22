import ClubeDoCoracao from "../clubeDoCoracao/ClubeDoCoracao";
import Colunas from "../colunas/Colunas";
import Jogos from "../jogos/Jogos";
import Negociacoes from "../negociacoes/Negociacoes";
import Noticias from "../noticias/Noticias";
import Replays from "../replays/Replays";
import SliderMobile from "../slider/SliderMobile";
import SliderWeb from "../slider/SliderWeb";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";
import style from './template.module.css'

export default function Template() {
    return (
        <>
            <Header></Header>
            <Main>
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
            </Main>
            <Footer></Footer>
        </>
    )
}