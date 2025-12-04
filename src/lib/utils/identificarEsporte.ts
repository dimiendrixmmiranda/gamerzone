export default function identificarEsporte(esporte: string){
    switch (esporte) {
        case 'outros':
            return '/esportes/geral.png'
        case 'valorant':
            return '/esportes/valorant.png'
        case 'cs2':
            return '/esportes/cs2.png'
        case 'rainbowSix':
            return '/esportes/rainbow-six.png'
        default:
            return null
    }
}