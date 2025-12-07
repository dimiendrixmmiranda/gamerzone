export const identificarSituacaoTransferencia = (situacao: string) => {
    switch (situacao) {
        case 'rumor':
            return 'var(--laranja)'
        case 'interesse':
            return 'var(--amarelo)'
        case 'negociando':
            return 'var(--amarelo)'
        case 'fechado':
            return 'var(--verder)'
        case 'melou':
            return 'var(--vermelho)'
    } 
}