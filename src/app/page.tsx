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
import useTamanhoDaTela from "@/data/hooks/useTamanhoDaTela";
import Noticia from "@/interfaces/Noticia";
import { useEffect, useState } from "react";

export default function Home() {
	const noticias = useNoticias()
	const { width } = useTamanhoDaTela();
	const [noticiasFiltradasCarrossel, setNoticiasFiltradasCarrossel] = useState<Noticia[]>([])
	const [noticiasFiltradasGeral, setNoticiasFiltradasGeral] = useState<Noticia[]>([])

	useEffect(() => {
		if (width < 768) {
			setNoticiasFiltradasCarrossel(noticias.slice(0, 5))
			setNoticiasFiltradasGeral(noticias.slice(5))
		} else {
			setNoticiasFiltradasCarrossel(noticias.slice(0, 9))
			setNoticiasFiltradasGeral(noticias.slice(9))
		}
	}, [width, noticias])
	console.log(noticiasFiltradasCarrossel)
	return (
		<>
			<Template logo={true} textoLogo={true} menuSuperior={true}>
				<CarrosselMobile noticias={noticiasFiltradasCarrossel} />
				<CarrosselWeb noticias={noticiasFiltradasCarrossel} />
				<div className="lg:grid lg:grid-cols-4 lg:grid-rows-[640px_410px_1fr] xl:grid-cols-6 xl:grid-rows-[650px_420px_1fr] 2xl:grid-rows-[620px_420px_1fr]">
					<Noticias noticias={noticiasFiltradasGeral} filtroPorJogo={true} noticiasPorPagina={6} />
					<ClubeDoCoracao />
					<Transferencias />
					<Jogos />
				</div>
				<MenuInferior />
			</Template>
		</>
	)
}

/*
 * 1º ==> Craque da semana 
 * 2º ==> Time da semana 
 * 3º ==> Colunas de autores falando de e-sports 
 * 4º ==> Reduzir o código (há muito código duplicado) 
 * aqui
 */