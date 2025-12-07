"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import ListaDeTimes from "@/interfaces/ListaDeTimes";

export default function useListaTimesDaRodada() {
    const [listaDeTimesDaRodada, setListaDeTimesDaRodada] = useState<ListaDeTimes | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function carregarListaTimesDaRodada() {
            try {
                const listaTimesDaRodadaRef = collection(db, "listaDeTimesDaRodada");

                const snapshot = await getDocs(listaTimesDaRodadaRef);

                const lista = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...(doc.data() as Omit<ListaDeTimes, "id">)
                })) as ListaDeTimes[]

                const listaAtual = lista.find(item => item.semanaCorrente);

                if (listaAtual) {
                    setListaDeTimesDaRodada(listaAtual)
                }

            } catch (err) {
                console.error("Erro ao carregar listaCraqueDaSemana:", err);
                setError("Erro ao carregar listaCraqueDaSemana");
            } finally {
                setLoading(false);
            }
        }

        carregarListaTimesDaRodada();
    }, []);

    return { listaDeTimesDaRodada, loading, error };
}