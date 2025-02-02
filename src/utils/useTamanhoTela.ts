import { useState, useEffect } from "react";

export function useTamanhoTela() {
    const [size, setSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        // Função para atualizar o tamanho
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Define o tamanho inicial
        handleResize();

        // Adiciona o listener para mudanças no tamanho da janela
        window.addEventListener("resize", handleResize);

        // Remove o listener ao desmontar
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return size;
}
