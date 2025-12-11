'use client'
import Template from "@/components/template/Template";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CardCampeonato from "@/components/cardCampeonato/CardCampeonato";
import Botao from "@/components/botao/Botao";
import { listaDeCampeonatos } from "@/constants/listaDeCampeonatos";
import { useEffect, useState } from "react";
import { Campeonato } from "@/interfaces/Campeonato";


export default function Page() {
    const [campeonatosEmAndamento, setCampeonatosEmAndamento] = useState<Campeonato[]>([])
    const [campeonatosAgrupados, setCampeonatosAgrupados] = useState<Record<string, Campeonato[]>>({});

    useEffect(() => {
        const ordenados = ordenarPorData(listaDeCampeonatos);
        const agrupados = agruparPorMes(ordenados);
        setCampeonatosAgrupados(agrupados);
    }, []);

    useEffect(() => {
        setCampeonatosEmAndamento(listaDeCampeonatos.slice(0, 3))
    }, [listaDeCampeonatos])

    const titulo = (texto: string) => {
        return (
            <h2 className="font-bold text-2xl leading-7">{texto}</h2>
        )
    }

    function parseDataBR(data: string) {
        const [dia, mes, ano] = data.split("/").map(Number);
        return new Date(2000 + ano, mes - 1, dia);
    }

    function ordenarPorData(lista: Campeonato[]) {
        return lista.sort((a, b) =>
            parseDataBR(a.dataDeInicio).getTime() -
            parseDataBR(b.dataDeInicio).getTime()
        );
    }

    function agruparPorMes(lista: Campeonato[]) {
        const grupos: Record<string, Campeonato[]> = {};

        lista.forEach(camp => {
            const data = parseDataBR(camp.dataDeInicio);
            const nomeMes = data.toLocaleString("pt-BR", { month: "long" });
            const chave = `${nomeMes} ${data.getFullYear()}`;

            if (!grupos[chave]) grupos[chave] = [];
            grupos[chave].push(camp);
        });

        return grupos;
    }

    return (
        <Template paginaClube={false} estiloContainer="max-w-full" >
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 p-4 md:p-8">
                    {titulo('Confira os principais campeonatos de Counter Strike')}
                    <div className=" bg-zinc-900 text-white p-2">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            loop={true}
                            className="h-[300px] md:h-[450px] xl:h-[550px]"
                        >
                            {
                                campeonatosEmAndamento.map((camp, i) => {
                                    return (
                                        <SwiperSlide key={i} className="flex justify-center items-center mx-auto p-4">
                                            <CardCampeonato
                                                campeonato={camp}
                                                estilo="w-full h-full flex flex-col gap-4 relative"
                                                estiloImagem="relative w-full h-full mx-auto"
                                                estiloTitulo="md:text-3xl"
                                                estiloData="md:text-xl"
                                            />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
                <div className="flex flex-col gap-4 p-4 md:p-8">
                    {titulo('Confira a lista de todos os campeonatos:')}
                    <ul className="flex flex-col gap-4 lg:gap-6">
                        {Object.entries(campeonatosAgrupados).map(([mes, lista]) => (
                            <li key={mes} className="flex flex-col gap-4">
                                <h2 className="text-2xl font-bold text-black capitalize">{mes}</h2>

                                <div className="flex flex-wrap gap-4 lg:gap-6">
                                    {lista.map((camp, i) => (
                                        <CardCampeonato
                                            campeonato={camp}
                                            key={i}
                                            estiloImagem="relative w-full h-[200px] mx-auto"
                                            estilo="bg-zinc-900 text-white p-2 w-full max-w-[340px]"
                                        />
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>
                    <Botao label="Voltar" icone={<FaRegArrowAltCircleLeft />} link="/" />
                </div>
            </div>
        </Template>
    )
}