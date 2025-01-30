import Link from "next/link";

export default function Ancoras() {
    return (
        <div className="flex justify-between text-white mt-4 sm:justify-end sm:gap-4">
            <Link href={'#topo'} className="bg-[--azul] p-2 rounded-lg uppercase font-bold">Voltar ao Topo</Link>
            <Link href={'/'} className="bg-[--azul] p-2 rounded-lg uppercase font-bold">Voltar</Link>
        </div>
    )
}