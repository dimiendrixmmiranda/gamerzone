/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import { Timestamp } from "firebase/firestore";

function calcularTempoRestante(dataAlvo: Date) {
    const agora = new Date().getTime();
    const alvo = dataAlvo.getTime();
    const diff = alvo - agora;

    if (diff <= 0) return "Encerrado";

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    return `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

export default function useContadorSemanal(
    dataAlvo: Date | Timestamp | null | undefined,
    dependencia?: any
) {
    const [contador, setContador] = useState<string>("--");

    useEffect(() => {
        if (!dataAlvo) return;

        // 🔥 Converte Firebase Timestamp → Date
        const dataFinal =
            dataAlvo instanceof Timestamp
                ? new Date(dataAlvo.toMillis())
                : dataAlvo;

        // 🔥 Adiciona 6 dias (semanal)
        const dataLimite = new Date(
            dataFinal.getTime() + 4 * 24 * 60 * 60 * 1000
            // dataFinal.getTime() + 0
        );

        setContador(calcularTempoRestante(dataLimite));

        const interval = setInterval(() => {
            setContador(calcularTempoRestante(dataLimite));
        }, 1000);

        return () => clearInterval(interval);
    }, [dataAlvo, dependencia]);

    return contador;
}
