export function identificarEsporte(esporte: string) {
    switch (esporte) {
        case 'cs2':
            return {
                imagem: '/esportes/cs2.png',
                cor: 'bg-white'
            }
        case 'valorant':
            return {
                imagem: '/esportes/cs2.png',
                cor: 'bg-blue-500'
            }
        case 'raimbowSix':
            return {
                imagem: '/esportes/cs2.png',
                cor: 'bg-blue-500'
            }
        default:
            return {
                imagem: '/logo/logo.png',
                cor: 'bg-blue-500'
            }
    }
}