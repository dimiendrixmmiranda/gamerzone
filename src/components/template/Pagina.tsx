'use client'
import { ReactNode } from "react";
import Cabecalho from "./cabecalho/Cabecalho";
import Rodape from "./rodape/Rodape";

type PaginaProps = {
    children: ReactNode;
};

export default function Pagina(props: PaginaProps) {
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