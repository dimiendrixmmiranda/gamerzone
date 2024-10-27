'use client'

import Colunas from "components/colunas/Colunas";
import CraqueRodada from "components/craqueRodada/CraqueRodada";
import Noticias from "components/noticias/Noticias";
import ProximasPartidas from "components/proximasPartidas/ProximasPartidas";
import RankingComunidade from "components/rankingComunidade/RankingComunidade";
import Ranking from "components/rankings/Ranking";
import Resultados from "components/resultados/Resultados";
import Slider from "components/slider/Slider";
import SliderPersonalizado from "components/sliderPersonalizado/SliderPersonalizado";
import Pagina from "components/template/Pagina";
import TimeFavorito from "components/timeFavorito/TimeFavorito";

export default function Home() {
	return (
		<Pagina>
			<SliderPersonalizado></SliderPersonalizado>
			<Slider></Slider>
			<div className="max-w-[95%] mx-auto flex flex-col">
				<div className="containerCraqueRanking">
					<CraqueRodada></CraqueRodada>
					<RankingComunidade></RankingComunidade>
				</div>
				<div className="containerAside">
					<Noticias></Noticias>
					<TimeFavorito display="hidden md:flex"></TimeFavorito>
					<ProximasPartidas></ProximasPartidas>
					<Resultados></Resultados>
					<Ranking></Ranking>
					<Colunas></Colunas>
				</div>
			</div>
		</Pagina>
	);
}
