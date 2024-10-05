'use client'
import Colunas from "@/components/colunas/Colunas";
import Craque from "@/components/craque/Craque";
import Noticias from "@/components/noticias/Noticias";
import ProximasPartidas from "@/components/proximasPartidas/ProximasPartidas";
import RankingComunidade from "@/components/rankingComunidade/RankingComunidade";
import Ranking from "@/components/rankings/Ranking";
import Resultados from "@/components/resultados/Resultados";
import Slider from "@/components/slider/Slider";
import SliderPersonalizado from "@/components/sliderPersonalizado/SliderPersonalizado";
import Pagina from "@/components/template/Pagina";

export default function Home() {
	return (
		<Pagina>
			<SliderPersonalizado></SliderPersonalizado>
			<Slider></Slider>
			<div className="min-w-[95%] mx-auto container">
				<div className="max-w-[95%] gap-6 mx-auto w-full modulo mb-6">
					<Craque></Craque>
					<RankingComunidade></RankingComunidade>
				</div>
				<div>
					<Noticias></Noticias>
				</div>
				<div className="mt-6 w-[95%] max-w-[500px] mx-auto flex flex-col gap-6 lg:max-w-[420px]">
					<ProximasPartidas></ProximasPartidas>
					<Resultados></Resultados>
					<Ranking></Ranking>
					<Colunas></Colunas>
				</div>
				
			</div>
		</Pagina>
	);
}
