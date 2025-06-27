'use client'
import CarrosselMobile from "@/components/carrossel/CarrosselMobile";
import CarrosselWeb from "@/components/carrossel/CarrosselWeb";
import ClubeDoCoracao from "@/components/clubeDoCoracao/ClubeDoCoracao";
import Jogos from "@/components/jogos/Jogos";
import MenuInferior from "@/components/menuInferior/MenuInferior";
import Noticias from "@/components/noticias/Noticias";
import Template from "@/components/template/Template";
import Transferencias from "@/components/transferencias/Transferencias";
import useNoticias from "@/data/hooks/useNoticias";

export default function Home() {
	const noticias = useNoticias()
	return (
		<>
			<Template logo={true} textoLogo={true} menuSuperior={true}>
				<CarrosselMobile noticias={noticias} />
				<CarrosselWeb noticias={noticias} />
				<div className="lg:grid lg:grid-cols-4 lg:grid-rows-[640px_410px_1fr] xl:grid-cols-6 xl:grid-rows-[650px_420px_1fr] 2xl:grid-rows-[620px_420px_1fr]">
					<Noticias noticias={noticias} filtroPorJogo={true} noticiasPorPagina={6}/>
					<ClubeDoCoracao />
					<Transferencias />
					<Jogos/>
				</div>
				<MenuInferior />
			</Template>
		</>
	)
}