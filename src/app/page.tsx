'use client'
import CarrosselMobile from "@/components/carrossel/CarrosselMobile";
import CarrosselWeb from "@/components/carrossel/CarrosselWeb";
import ClubeDoCoracao from "@/components/clubeDoCoracao/ClubeDoCoracao";
import MenuInferior from "@/components/menuInferior/MenuInferior";
import Noticias from "@/components/noticias/Noticias";
import Template from "@/components/template/Template";
import Transferencias from "@/components/transferencias/Transferencias";
import useNoticias from "@/hooks/useNoticias";

export default function Home() {
	const noticias = useNoticias()
	console.log(noticias)
	return (
		<>
			<Template logo={true} textoLogo={true} menuSuperior={true}>
				<CarrosselMobile noticias={noticias} />

				<CarrosselMobile noticias={noticias} />
				<CarrosselWeb noticias={noticias} />
				<div className="lg:grid lg:grid-cols-4 lg:grid-rows-[640px_1fr] xl:grid-cols-6 xl:grid-rows-[650px_1fr] 2xl:grid-rows-[620px_1fr]">
					<Noticias noticias={noticias} filtroPorJogo={true} noticiasPorPagina={6}/>
					<ClubeDoCoracao />
					<Transferencias />
				</div>
				<MenuInferior />
			</Template>
		</>
	)
}