import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Noticia from "@/interfaces/Noticia";

export default function useNoticias() {
    const [noticias, setNoticias] = useState<Noticia[]>([]);

    useEffect(() => {
        const fetchNoticias = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "noticias"));
                const noticiasFirestore: Noticia[] = querySnapshot.docs.map((doc) => {
                    const dados = doc.data();

                    return {
                        id: doc.id,
                        autor: dados.autor,
                        conteudoDaNoticia: dados.conteudoDaNoticia,
                        data: dados.data,
                        esporte: dados.esporte,
                        imagem: dados.imagem,
                        subtitulo: dados.subtitulo,
                        titulo: dados.titulo,
                        tags: dados.tags
                    };
                });

                noticiasFirestore.sort(
                    (a, b) => b.data.toDate().getTime() - a.data.toDate().getTime()
                );

                setNoticias(noticiasFirestore);
            } catch (error) {
                console.error("Erro ao buscar notícias:", error);
            }
        };

        fetchNoticias();
    }, []);

    return noticias;
}
