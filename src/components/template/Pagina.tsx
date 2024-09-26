'use client'
import Cabecalho from "./cabecalho/Cabecalho";
import Rodape from "./rodape/Rodape";

export default function Pagina(props: any) {
    return (
        <div className="min-h-screen bg-zinc-200">
            <Cabecalho></Cabecalho>
            <main>
                {props.children}
            </main>
            <Rodape></Rodape>
        </div>
    )
}