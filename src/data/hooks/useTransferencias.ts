import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Transferencia from "@/interfaces/Transferencia";

export default function useTransferencias() {
    const [transferencias, setTransferencias] = useState<Transferencia[]>([]);

    useEffect(() => {
        const fetchTransferencias = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "transferencias"));
                const transferenciasFirestore: Transferencia[] = querySnapshot.docs.map((doc) => {
                    const dados = doc.data();

                    return {
                        id: doc.id,
                        nome: dados.nome,
                        fotoDoJogador: dados.fotoDoJogador,
                        posicao: dados.posicao,
                        situacao: dados.situacao,
                        timeAtual: dados.timeAtual,
                        novoTime: dados.novoTime,
                        data: dados.data
                    };
                });

                transferenciasFirestore.sort(
                    (a, b) => b.data.toDate().getTime() - a.data.toDate().getTime()
                );

                setTransferencias(transferenciasFirestore);
            } catch (error) {
                console.error("Erro ao buscar notícias:", error);
            }
        };

        fetchTransferencias();
    }, []);

    return transferencias;
}
