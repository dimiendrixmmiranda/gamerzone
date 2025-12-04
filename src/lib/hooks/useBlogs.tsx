"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import Blog from "@/interfaces/Blog";

export default function useBlogs() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function carregarBlogs() {
            try {
                const blogsRef = collection(db, "listaDeColunas");

                // 🔥 Ordenar pelo campo "data" de forma decrescente (mais novo primeiro)
                const q = query(blogsRef, orderBy("data", "desc"));

                const snapshot = await getDocs(q);

                const lista: Blog[] = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                })) as Blog[];

                setBlogs(lista);
            } catch (err) {
                console.error("Erro ao carregar blogs:", err);
                setError("Erro ao carregar blogs");
            } finally {
                setLoading(false);
            }
        }

        carregarBlogs();
    }, []);

    return { blogs, loading, error };
}