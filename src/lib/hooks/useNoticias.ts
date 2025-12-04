"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import Noticia from "@/interfaces/Noticia";

export default function useNoticias() {
    const [noticias, setNoticias] = useState<Noticia[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function carregarNoticias() {
            try {
                const noticiasRef = collection(db, "listaDeNoticias");

                // 🔥 Ordenar pelo campo "data" de forma decrescente (mais novo primeiro)
                const q = query(noticiasRef, orderBy("data", "desc"));

                const snapshot = await getDocs(q);

                const lista: Noticia[] = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                })) as Noticia[];

                setNoticias(lista);
            } catch (err) {
                console.error("Erro ao carregar notícias:", err);
                setError("Erro ao carregar notícias");
            } finally {
                setLoading(false);
            }
        }

        carregarNoticias();
    }, []);

    return { noticias, loading, error };
}