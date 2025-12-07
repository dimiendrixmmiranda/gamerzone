"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import Transferencia from "@/interfaces/Transferencia";

export default function useTransferencias() {
    const [transferencias, setTransferencias] = useState<Transferencia[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function carregartransferencias() {
            try {
                const transferenciasRef = collection(db, "listaDeTransferencias");

                // 🔥 Ordenar pelo campo "data" de forma decrescente (mais novo primeiro)
                const q = query(transferenciasRef, orderBy("data", "desc"));

                const snapshot = await getDocs(q);

                const lista: Transferencia[] = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                })) as Transferencia[];

                setTransferencias(lista);
            } catch (err) {
                console.error("Erro ao carregar notícias:", err);
                setError("Erro ao carregar notícias");
            } finally {
                setLoading(false);
            }
        }

        carregartransferencias();
    }, []);

    return { transferencias, loading, error };
}