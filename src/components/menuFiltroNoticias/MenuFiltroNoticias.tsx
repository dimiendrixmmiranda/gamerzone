import { IoLogoGameControllerB } from "react-icons/io"
import { SiCounterstrike, SiUbisoft, SiValorant } from "react-icons/si"

interface MenuFiltroNoticias {
    filtroPorJogo: boolean
    esporteSelecionado: 'geral' | 'cs2' | 'valorant' | 'rainbowSix'
    setEsporteSelecionado: (valor: 'geral' | 'cs2' | 'valorant' | 'rainbowSix') => void
}

export default function MenuFiltroNoticias({ filtroPorJogo, esporteSelecionado, setEsporteSelecionado }: MenuFiltroNoticias) {
    return (
        <>
            {
                filtroPorJogo ? (

                    <div className="flex gap-2">
                        <button
                            className={`flex items-center flex-1 justify-center gap-1 p-1 ${esporteSelecionado === "geral" ? "bg-blue-700 text-white" : ""}`}
                            onClick={() => setEsporteSelecionado("geral")}
                        >
                            <IoLogoGameControllerB />
                            <p className="font-bold sm:text-lg">Geral</p>
                        </button>
                        <button
                            className={`flex items-center flex-1 justify-center gap-1 p-1 ${esporteSelecionado === "cs2" ? "bg-orange-500 text-white" : ""}`}
                            onClick={() => setEsporteSelecionado("cs2")}
                        >
                            <SiCounterstrike />
                            <p className="font-bold sm:text-lg">CS2</p>
                        </button>
                        <button
                            className={`flex items-center flex-1 justify-center gap-1 p-1 ${esporteSelecionado === "valorant" ? "bg-pink-700 text-white" : ""}`}
                            onClick={() => setEsporteSelecionado("valorant")}
                        >
                            <SiValorant />
                            <p className="font-bold sm:text-lg">Valorant</p>
                        </button>
                        <button
                            className={`flex items-center flex-1 justify-center gap-1 p-1 ${esporteSelecionado === "rainbowSix" ? "bg-slate-900 text-white" : ""}`}
                            onClick={() => setEsporteSelecionado("rainbowSix")}
                        >
                            <SiUbisoft />
                            <p className="font-bold sm:text-lg">R6S</p>
                        </button>
                    </div>
                ) : ''
            }
        </>
    )
}