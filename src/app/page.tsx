'use client'

import Blogs from "@/components/blogs/Blogs"
import ClubeDoCoracao from "@/components/clubeDoCoracao/ClubeDoCoracao"
import MenuInferior from "@/components/menuInferior/MenuInferior"
import Noticias from "@/components/noticias/Noticias"
import CarrosselMobile from "@/components/slider/CarrosselMobile"
import CarrosselWeb from "@/components/slider/CarrosselWeb"
import Template from "@/components/template/Template"
import VideosCurtos from "@/components/videosCurtos/VideosCurtos"
import MenuSuperiorDeJogos from "@/components/menuSuperiorDeJogos/MenuSuperiorDeJogos"
import Jogos from "@/components/jogos/Jogos"
import useNoticias from "@/lib/hooks/useNoticias"
import CraqueDaSemana from "@/components/craqueDaSemana/CraqueDaSemana"

export default function Home() {
	const { noticias } = useNoticias();

	return (
		<Template paginaClube={false}>
			<MenuSuperiorDeJogos />
			<CarrosselMobile noticias={noticias} />
			<CarrosselWeb noticias={noticias} />
			<ClubeDoCoracao estilo="p-4 md:h-[380px] xl:hidden" />
			<div className="mt-4 xl:grid xl:grid-cols-3 xl:grid-rows-[auto_auto_1fr] xl:gap-4 xl:gap-y-8">
				<Noticias
					noticias={noticias}
					filtroPorJogo={true}
					noticiasPorPagina={8}
				/>
				<ClubeDoCoracao estilo="hidden lg:pr-4 lg:h-[440px] xl:block" />
				<div className="p-2 flex flex-col gap-4 md:p-0 md:grid md:grid-cols-2 md:gap-4 md:mx-4 xl:flex xl:flex-col xl:mx-0">
					<Blogs />
					<Jogos />
				</div>
			</div>
			<CraqueDaSemana />
			<VideosCurtos />
			<MenuInferior />
		</Template>
	)
}

