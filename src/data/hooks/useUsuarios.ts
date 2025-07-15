import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import UsuarioElemento from "@/interfaces/UsuarioElemento";

export default function useUsuarios() {
    const [usuarios, setUsuarios] = useState<UsuarioElemento[]>([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "usuarios"));
                const usuariosFirestore: UsuarioElemento[] = querySnapshot.docs.map((doc) => {
                    const dados = doc.data();

                    return {
                        id: doc.id,
                        nome: dados.nome,
                        email: dados.email,
                        nick: dados.nick,
                        tipo: dados.tipo,
                        imagem: dados.imagem,
                        bio: dados.bio || ''
                    }
                })


                setUsuarios(usuariosFirestore);
            } catch (error) {
                console.error("Erro ao buscar notícias:", error);
            }
        };

        fetchUsuarios();
    }, []);

    return usuarios;
}
