export default function handleImagemChange(
    event: React.ChangeEvent<HTMLInputElement>,
    setErroImagemTamanho: (valor: string | null) => void,
    setImagemBase64: (valor: string) => void,
    setImagemPreview: (valor: string) => void
): Promise<string | null> {

    return new Promise((resolve) => {
        const file = event.target.files?.[0];
        setErroImagemTamanho(null);

        if (!file) {
            setImagemBase64('');
            setImagemPreview('');
            resolve(null);
            return;
        }

        const MAX_MB = 1;
        const MAX_BYTES = MAX_MB * 1024 * 1024;

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.src = e.target?.result as string;

            img.onload = () => {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d")!;

                if (ctx === null) {
                    setErroImagemTamanho("Erro ao processar imagem. Tente outra foto.");
                    resolve(null);
                    return;
                }
                let quality = 0.9; // começa qualidade alta
                let width = img.width;
                let height = img.height;
                let base64 = "";

                function compress() {
                    canvas.width = width;
                    canvas.height = height;
                    ctx.clearRect(0, 0, width, height);
                    ctx.drawImage(img, 0, 0, width, height);

                    base64 = canvas.toDataURL("image/jpeg", quality);
                    const sizeInBytes = Math.ceil((base64.length * 3) / 4);

                    // Se já estiver dentro do limite → sucesso
                    if (sizeInBytes <= MAX_BYTES) {
                        setImagemBase64(base64);
                        setImagemPreview(base64);
                        resolve(base64);
                        return;
                    }

                    // Primeiro reduz a qualidade
                    if (quality > 0.2) {
                        quality -= 0.1;
                        return compress();
                    }

                    // Depois reduz a resolução drasticamente
                    if (width > 300 || height > 300) {
                        width = Math.floor(width * 0.8);
                        height = Math.floor(height * 0.8);
                        return compress();
                    }

                    // Se chegou aqui → impossível reduzir abaixo de 1MB
                    setErroImagemTamanho("Não foi possível reduzir a imagem para menos de 1MB.");
                    setImagemBase64('');
                    setImagemPreview('');
                    event.target.value = '';
                    resolve(null);
                }

                compress();
            };
        };

        reader.readAsDataURL(file);
    });
}
