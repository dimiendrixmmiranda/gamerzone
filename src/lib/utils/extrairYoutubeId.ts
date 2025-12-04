export function extrairYoutubeId(url: string): string {
    // Shorts
    const shortsMatch = url.match(/\/shorts\/([^?]+)/);
    if (shortsMatch) return shortsMatch[1];

    // Vídeo normal
    const normalMatch = url.match(/v=([^&]+)/);
    if (normalMatch) return normalMatch[1];

    // Último fallback (nunca retorna null)
    return "";
}