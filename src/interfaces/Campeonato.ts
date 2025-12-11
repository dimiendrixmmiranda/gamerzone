export interface Campeonato {
    nome: string;
    imagem: string; // URL da imagem
    dataDeInicio: string; // Formato DD/MM/AA
    dataDeFim: string; // Formato DD/MM/AA
    local: 'lan' | 'online' | string; // 'lan', 'online' ou outro valor se não for um dos dois
}