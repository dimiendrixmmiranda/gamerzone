import Link from "next/link"

interface BotaoAncoraProps {
    icone: React.ReactElement,
    texto: string
    href: string
}

export default function BotaoAncora({ icone, texto, href }: BotaoAncoraProps) {
    return (
        <Link href={href} className="flex gap-1 justify-center items-center">
            <div className="bg-[--azul] p-1 rounded-full text-white">
                {icone}
            </div>
            <p className="uppercase font-bold mt-1">
                {texto}
            </p>
        </Link>
    )
}