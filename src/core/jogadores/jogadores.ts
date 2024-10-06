export default interface Jogador {
    id: number;
    imagem: string;
    nome: string;
    nick: string;
    posicao: string;
    time: string;
    mouse: {
        modelo: string;
        dpi: number;
        Sensitivity: number;
        eDPI: number;
        Zoom_Sensitivity: number;
        hz: number;
        Windows_Sensitivity: number;
    };
    mira: string;
    viewmodel: {
        fov: number;
        offsetX: number;
        offsetY: number;
        offsetZ: number;
        presetpos: number;
        codigo: string;
    };
    video: {
        resolucao: string;
        aspectRatio: string;
        scalingMode: string;
        Brightness: string;
        Display_Mode: string;
    };
    videoAvancado: {
        Boost_Player_Contrast: string;
        V_Sync: string;
        NVIDIA_Reflex_Low_Latency: string;
        NVIDIA_G_Sync: string;
        Maximum_FPS_In_Game: number;
        Multisampling_Anti_Aliasing_Mode: string;
        Global_Shadow_Quality: string;
        Dynamic_Shadows: string;
        Model_Texture_Detail: string;
        Texture_Filtering_Mode: string;
        Shader_Detail: string;
        Particle_Detail: string;
        Ambient_Occlusion: string;
        High_Dynamic_Range: string;
        FidelityFX_Super_Resolution: string;
    }
}