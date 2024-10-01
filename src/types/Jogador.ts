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
        monitor: string,
        mouse: string,
        mousepad: string,
        teclado: string,
        fone: string,
    } | null,
    mouse: {
        dpi: string,
        sensibilidade: string,
        edpi: string,
        zoom_sensitivity_ratio_mouse: string,
        sensibilidade_no_Windows: string,
    } | null,
    mira: {
        cl_crosshairsize: string | null;
        cl_crosshairgap: string | null;
        cl_crosshairthickness: string | null;
        cl_crosshairstyle: string | null;
        cl_crosshaircolor: string | null;
        cl_crosshairalpha: string | null;
        cl_crosshaircolor_r: string | null;
        cl_crosshaircolor_g: string | null;
        cl_crosshaircolor_b: string | null;
        cl_crosshair_drawoutline: string | null;
        cl_crosshair_outlinethickness: string | null;
        cl_crosshairdot: string | null;
        cl_crosshair_sniper_width: string | null;
        cl_crosshair_dynamic_maxdist_splitratio: string | null;
        cl_crosshair_dynamic_splitalpha_innermod: string | null;
        cl_crosshair_dynamic_splitalpha_outermod: string | null;
        cl_crosshair_dynamic_splitdist: string | null;
        cl_crosshair_t: string | null;
    } | null,
    codigoMira: string | null
}
