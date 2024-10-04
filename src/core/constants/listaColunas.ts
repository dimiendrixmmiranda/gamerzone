import { adicionarElemento } from "@/utils/adicionarElemento";
import Coluna from "../colunas/coluna";

export const listaColunas: Coluna[] = []

adicionarElemento(
    listaColunas,
    {
        id: 1,
        imagem: '/wireframe.png',
        nome: 'Leis do Cs',
        tituloColuna: 'As Leis do Counter-Strike: O pioneirismo francês em relação ao esporte eletrônico'
    }
)

adicionarElemento(
    listaColunas,
    {
        id: 2,
        imagem: '/wireframe.png',
        nome: 'Estrategistas de Battlefield',
        tituloColuna: 'Como os comandantes fazem a diferença em Battlefield: Estratégia e Coordenação'
    }
)

adicionarElemento(
    listaColunas,
    {
        id: 3,
        imagem: '/wireframe.png',
        nome: 'Modding no Arma 3',
        tituloColuna: 'A importância da comunidade de modding em Arma 3: Criando novos cenários de combate'
    }
)

adicionarElemento(
    listaColunas,
    {
        id: 4,
        imagem: '/wireframe.png',
        nome: 'Heróis do Overwatch',
        tituloColuna: 'Os personagens mais populares e suas habilidades em Overwatch: Como dominar o jogo'
    }
)

adicionarElemento(
    listaColunas,
    {
        id: 5,
        imagem: '/wireframe.png',
        nome: 'Regras de Rainbow Six',
        tituloColuna: 'Entenda as regras não escritas que todo jogador de Rainbow Six Siege precisa conhecer'
    }
)

adicionarElemento(
    listaColunas,
    {
        id: 6,
        imagem: '/wireframe.png',
        nome: 'História de Call of Duty',
        tituloColuna: 'Evolução de Call of Duty: Desde a Segunda Guerra Mundial até o combate moderno'
    }
)
