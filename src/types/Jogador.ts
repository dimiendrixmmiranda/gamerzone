export type Jogador = {
    nick: string,
    nome: string,
    idade: number,
    nacionalidade: string,
    imagem: string,
    timeAtual: string,
    logoTimeAtual: string,
    posicao: string,
    equipamentos: {
        monitor: string | null,
        mouse: string | null,
        mousepad: string | null,
        teclado: string | null,
        fone: string | null,
    } | null,
    mouse: {
        dpi: string,
        sensibilidade: string,
        edpi: string,
        zoom_sensitivity_ratio_mouse: string,
        sensibilidade_no_Windows: string,
    } | null,
    viewmodel:{
        fov: string,
        offsetx: string,
        offsety: string,
        offsetz: string,
        prosetpos: string,
        codigo: string
    }
    codigoMira: string | null
}
