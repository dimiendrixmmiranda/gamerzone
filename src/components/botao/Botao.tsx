import Link from "next/link"

interface BotaoProps{
    label: string
    link: string
    icone: React.ReactElement
}

export default function Botao({label, link, icone}: BotaoProps){
    return(
        <Link href={link} className="flex items-center gap-1 text-2xl bg-azul-escuro py-2 px-6 rounded-[8px] w-fit ml-auto text-white" style={{textShadow: '1px 1px 2px black'}}>
            <div>
                {icone}
            </div>
            <p>{label}</p>
        </Link>
    )
}