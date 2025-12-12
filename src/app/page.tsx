'use client'

import Blogs from "@/components/blogs/Blogs"
import ClubeDoCoracao from "@/components/clubeDoCoracao/ClubeDoCoracao"
import Noticias from "@/components/noticias/Noticias"
import CarrosselMobile from "@/components/slider/CarrosselMobile"
import CarrosselWeb from "@/components/slider/CarrosselWeb"
import Template from "@/components/template/Template"
import VideosCurtos from "@/components/videosCurtos/VideosCurtos"
import MenuSuperiorDeJogos from "@/components/menuSuperiorDeJogos/MenuSuperiorDeJogos"
import Jogos from "@/components/jogos/Jogos"
import useNoticias from "@/lib/hooks/useNoticias"
import CraqueDaSemana from "@/components/craqueDaSemana/CraqueDaSemana"
import RankingORGComunidadeMobile from "@/components/rankingORGComunidade/RankingORGComunidadeMobile"
import VaiEVemDaBala from "@/components/vaiEVemDaBala/VaiEVemDaBala"
import RankingORGComunidadeWeb from "@/components/rankingORGComunidade/RankingORGComunidadeWeb"
import { useEffect, useState } from "react"
import Noticia from "@/interfaces/Noticia"
import useLarguraDaTela from "@/lib/hooks/useLarguraDaTela"

export default function Home() {
	const { noticias } = useNoticias();
	const [noticiasCarrosselMobile, setNoticiasCarrosselMobile] = useState<Noticia[]>([])
	const [noticiasCarrosselWeb, setNoticiasCarrosselWeb] = useState<Noticia[]>([])
	const [noticiasCards, setNoticiasCards] = useState<Noticia[]>([])
	const { width } = useLarguraDaTela()

	useEffect(() => {
		setNoticiasCarrosselMobile(noticias.slice(0, 5))
		setNoticiasCarrosselWeb(noticias.slice(0, 9))
		if (width <= 768) {
			setNoticiasCards(noticias.slice(5))
		} else {
			setNoticiasCards(noticias.slice(9))
		}
	}, [noticias, width])

	return (
		<Template paginaClube={false}>
			<MenuSuperiorDeJogos />
			<CarrosselMobile noticias={noticiasCarrosselMobile} />
			<CarrosselWeb noticias={noticiasCarrosselWeb} />
			<ClubeDoCoracao estilo="p-4 md:h-[380px] xl:hidden" />
			<div className="mt-4 xl:grid xl:grid-cols-3 xl:grid-rows-[auto_auto_auto_1fr] xl:gap-4 xl:gap-y-8">
				<Noticias
					noticias={noticiasCards}
					filtroPorJogo={true}
					noticiasPorPagina={8}
				/>
				<ClubeDoCoracao estilo="hidden lg:pr-4 lg:h-[440px] xl:block" />
				<div className="p-2 flex flex-col gap-4 md:p-0 md:grid md:grid-cols-2 md:gap-4 md:mx-4 xl:flex xl:flex-col xl:mx-0">
					<Blogs />
					<Jogos />
					<VaiEVemDaBala />
				</div>
			</div>
			<CraqueDaSemana />
			<RankingORGComunidadeWeb />
			<RankingORGComunidadeMobile />
			<VideosCurtos />
		</Template>
	)
}

