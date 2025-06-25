export const createSlug = (valor: string) => {
    return `${valor.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')}`;
}