'use client'
import CarrosselMobile from "@/components/carrossel/CarrosselMobile";
import CarrosselWeb from "@/components/carrossel/CarrosselWeb";
import Elenco from "@/components/elenco/Elenco";
import Jogos from "@/components/jogos/Jogos";
import MenuInferior from "@/components/menuInferior/MenuInferior";
import Noticias from "@/components/noticias/Noticias";
import Template from "@/components/template/Template";
import clubesDoCoracao from "@/constants/clubesDoCoracao";
import useNoticias from "@/hooks/useNoticias";
import Clube from "@/interfaces/Clube";
import Noticia from "@/interfaces/Noticia";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const params = useParams();
    const id = typeof params.slug === 'string' ? params.slug : params.slug?.[0]
    const noticias = useNoticias()
    const [clubeSelecionado, setClubeSelecionado] = useState<Clube | null>(null)
    const [noticiasClubeSelecionado, setNoticiasClubeSelecionado] = useState<Noticia[]>([])

    useEffect(() => {
        if (clubeSelecionado && noticias.length > 0) {
            const filtradas = noticias.filter(noticia =>
                noticia.tags?.includes(clubeSelecionado.id)
            )
            setNoticiasClubeSelecionado(filtradas)
        }
    }, [clubeSelecionado, noticias])

    useEffect(() => {
        const clube = clubesDoCoracao.filter(clube => clube.id === id)[0]
        setClubeSelecionado(clube)
    }, [clubeSelecionado, clubesDoCoracao])

    return (
        <Template logo={true} clube={clubeSelecionado} menuSuperior={false}>
            <CarrosselMobile noticias={noticiasClubeSelecionado} />
            <CarrosselWeb noticias={noticiasClubeSelecionado} />
            <Elenco elenco={clubeSelecionado?.elenco}/>
            <div className="lg:grid lg:grid-cols-4 lg:grid-rows-[600px_1fr] xl:grid-cols-6 xl:grid-rows-[620px_1fr] 2xl:grid-rows-[600px_1fr]">
                <Noticias noticias={noticiasClubeSelecionado} filtroPorJogo={false} noticiasPorPagina={6} />
                <Jogos/>
            </div>
            <MenuInferior />
        </Template>
    )
}