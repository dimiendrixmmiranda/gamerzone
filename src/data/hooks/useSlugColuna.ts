import { listaColunas } from "core";
import Coluna from "core/colunas/coluna";
import { useEffect, useState } from "react";

interface useSlugColunaProps{
    slug: string
}

export function useSlugColuna({slug}: useSlugColunaProps){
    const elementoSlug = typeof slug === 'string' ? slug : slug?.[0];
    const [coluna, setColuna] = useState<Coluna | null>(null)

    useEffect(() => {
        if (elementoSlug) {
            const colunaId = elementoSlug?.split('-')[0];
            const colunaEncontrada = listaColunas.find(n => n.id === Number(colunaId));
            colunaEncontrada != null ? setColuna(colunaEncontrada) : null
        }
    }, [elementoSlug]);

    return {
        coluna, setColuna
    }
}