
import { listaColunas } from "core";
import Image from "next/image";
import Link from "next/link";
import { createSlugWithId } from "utils/createSlugWithId";

export default function Colunas() {

    const colunasFiltradas = listaColunas.slice(0, 4)

    return (
        <div className="mx-auto w-full mt-6 text-black xl:-mt-2 border border-black h-fit">
            <h3 className="uppercase font-black text-xl pl-4 pb-3 bg-[--cor-principal] text-white py-1">Colunas</h3>
            <ul className="flex flex-col">

                {
                    colunasFiltradas.map(coluna => {
                        return (
                            <li key={coluna.id} className="bg-white" style={{ borderBottom: 'solid 2px var(--cor-principal)' }}>
                                <Link href={`/colunas/${createSlugWithId(coluna.nome, coluna.id)}`} className="gap-x-2 gap-y-1 p-2" style={{ display: 'grid', gridTemplateColumns: '35px 1fr' }}>
                                    <h2 className="uppercase font-bold text-[.7em] leading-3 md:text-[.9em]" style={{ gridColumn: '2/3' }}>{coluna.nome}</h2>
                                    <div className="w-[35px] h-[35px] rounded-full bg-zinc-600 self-center overflow-hidden flex justify-center items-center" style={{ gridRow: '2/3' }}>
                                        <Image src={coluna.imagem} width={35} height={35} alt={coluna.nome}/>
                                    </div>
                                    <h4 className="font-semibold leading-4 text-sm md:text-lg md:leading-5" style={{ gridRow: '2/3' }}>{coluna.tituloColuna}</h4>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}