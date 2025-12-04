import Time from "@/interfaces/Time";
import { useEffect, useState } from "react";

export function useClubeSelecionado() {
    const [clube, setClube] = useState<Time | null>(null);

    useEffect(() => {
        const salvo = localStorage.getItem("clubeFavorito");
        if (salvo) {
            setClube(JSON.parse(salvo));
        }
    }, []);

    function selecionarClube(time: Time) {
        setClube(time);
        localStorage.setItem("clubeFavorito", JSON.stringify(time));
    }

    function removerClube() {
        setClube(null);
        localStorage.removeItem("clubeFavorito");
    }

    return { clube, selecionarClube, removerClube };
}
