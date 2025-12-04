"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import ListaDeCraques from "@/interfaces/ListaDeCraques";

export default function useListaCraquesDaSemana() {
    const [listaCraqueDaSemana, setlistaCraqueDaSemana] = useState<ListaDeCraques | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function carregarListaCraqueDaSemana() {
            try {
                const listaCraqueDaSemanaRef = collection(db, "listaDeCraquesDaSemana");

                const snapshot = await getDocs(listaCraqueDaSemanaRef);

                const lista = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...(doc.data() as Omit<ListaDeCraques, "id">)
                })) as ListaDeCraques[]

                const listaAtual = lista.find(item => item.semanaCorrente);

                if (listaAtual) {
                    setlistaCraqueDaSemana(listaAtual)
                }

            } catch (err) {
                console.error("Erro ao carregar listaCraqueDaSemana:", err);
                setError("Erro ao carregar listaCraqueDaSemana");
            } finally {
                setLoading(false);
            }
        }

        carregarListaCraqueDaSemana();
    }, []);

    return { listaCraqueDaSemana, loading, error };
}