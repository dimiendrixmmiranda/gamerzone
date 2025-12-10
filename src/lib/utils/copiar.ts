export const copiar = (texto: string) => {
    navigator.clipboard.writeText(texto)
        .then(() => {
            console.log("Copiado:", texto)
        })
        .catch((err) => {
            console.error("Erro ao copiar:", err)
        });
};
