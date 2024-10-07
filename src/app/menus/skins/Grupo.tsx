import Card from "./Card";

type GrupoProps = {
    nomeDoGrupo: string
    itensDoGrupo: { urlArma: string, nomeArma: string, tipo: string}[]
    click: (tipo: string) => void
}

export default function Grupo(props: GrupoProps) {
    
    return (
        <div className="inline-block">
            <h3 className="text-black font-black text-xl uppercase ml-1 mb-2">{props.nomeDoGrupo}</h3>
            <ul className="whitespace-nowrap flex items-center">
                {props.itensDoGrupo.map((card, index) => {
                    return (
                        <Card nomeArma={card.nomeArma} urlArma={card.urlArma} key={index} click={() => props.click(card.tipo)}></Card>
                    )
                })}
            </ul>
        </div>
    )
}