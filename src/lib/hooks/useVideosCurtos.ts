'use client'

import { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import VideoCurto from "@/interfaces/VideoCurto";
import { db } from "../firebase/firebase";

export default function useVideosCurtos() {
    const [videos, setVideos] = useState<VideoCurto[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            const videosRef = collection(db, "listaDeVideosCurtos");

            // 🔥 ordenando pela data (mais recente primeiro)
            const q = query(videosRef, orderBy("data", "desc"));

            const unsub = onSnapshot(
                q,
                (snapshot) => {
                    const lista: VideoCurto[] = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    })) as VideoCurto[];

                    setVideos(lista);
                    setLoading(false);
                },
                (err) => {
                    console.error("Erro ao buscar vídeos curtos:", err);
                    setError("Erro ao carregar vídeos.");
                    setLoading(false);
                }
            );

            return () => unsub();

        } catch (err) {
            console.error(err);
            setError("Erro inesperado.");
            setLoading(false);
        }
    }, []);

    return { videos, loading, error };
}
