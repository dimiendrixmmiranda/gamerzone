export default function extractYouTubeId(url: string): string | null {
    const regex = /(?:youtube\.com\/(?:.*v=|embed\/)|youtu\.be\/)([^?&]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
};