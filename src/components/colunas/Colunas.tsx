import Link from "next/link";

export default function Colunas() {
    return (
        <div className="max-w-[90%] mx-auto w-full mt-6 text-black xl:-mt-2">
            <h3 className="uppercase font-black text-xl pl-4 mb-3 bg-[--cor-principal] text-white py-1">Colunas</h3>
            <ul className="flex flex-col">
                <li className="bg-white" style={{borderBottom: 'solid 2px var(--cor-principal)'}}>
                    <Link href={'/'} className="gap-x-2 gap-y-1 p-2" style={{display: 'grid', gridTemplateColumns: '35px 1fr'}}>
                        <h2 className="uppercase font-bold text-[.7em] leading-3 md:text-[.9em]" style={{gridColumn: '2/3'}}>Leis do CS</h2>
                        <div className="w-[35px] h-[35px] rounded-full bg-zinc-600 self-center" style={{gridRow: '2/3'}}>
                            <img src="./avatar-homem.png" alt="" />
                        </div>
                        <h4 className="font-semibold leading-4 text-sm md:text-lg md:leading-5" style={{gridRow: '2/3'}}>As Leis do Counter-Strike: O pioneirismo francês em relação ao esporte eletrônico</h4>
                    </Link>
                </li>
                <li className="bg-white" style={{borderBottom: 'solid 2px var(--cor-principal)'}}>
                    <Link href={'/'} className="gap-x-2 gap-y-1 p-2" style={{display: 'grid', gridTemplateColumns: '35px 1fr'}}>
                        <h2 className="uppercase font-bold text-[.7em] leading-3 md:text-[.9em]" style={{gridColumn: '2/3'}}>Leis do CS</h2>
                        <div className="w-[35px] h-[35px] rounded-full bg-zinc-600 self-center" style={{gridRow: '2/3'}}>
                            <img src="./avatar-homem.png" alt="" />
                        </div>
                        <h4 className="font-semibold leading-4 text-sm md:text-lg md:leading-5" style={{gridRow: '2/3'}}>As Leis do Counter-Strike: O pioneirismo francês em relação ao esporte eletrônico</h4>
                    </Link>
                </li>
                <li className="bg-white" style={{borderBottom: 'solid 2px var(--cor-principal)'}}>
                    <Link href={'/'} className="gap-x-2 gap-y-1 p-2" style={{display: 'grid', gridTemplateColumns: '35px 1fr'}}>
                        <h2 className="uppercase font-bold text-[.7em] leading-3 md:text-[.9em]" style={{gridColumn: '2/3'}}>Leis do CS</h2>
                        <div className="w-[35px] h-[35px] rounded-full bg-zinc-600 self-center" style={{gridRow: '2/3'}}>
                            <img src="./avatar-homem.png" alt="" />
                        </div>
                        <h4 className="font-semibold leading-4 text-sm md:text-lg md:leading-5" style={{gridRow: '2/3'}}>As Leis do Counter-Strike: O pioneirismo francês em relação ao esporte eletrônico</h4>
                    </Link>
                </li>
                <li className="bg-white" style={{borderBottom: 'solid 2px var(--cor-principal)'}}>
                    <Link href={'/'} className="gap-x-2 gap-y-1 p-2" style={{display: 'grid', gridTemplateColumns: '35px 1fr'}}>
                        <h2 className="uppercase font-bold text-[.7em] leading-3 md:text-[.9em]" style={{gridColumn: '2/3'}}>Leis do CS</h2>
                        <div className="w-[35px] h-[35px] rounded-full bg-zinc-600 self-center" style={{gridRow: '2/3'}}>
                            <img src="./avatar-homem.png" alt="" />
                        </div>
                        <h4 className="font-semibold leading-4 text-sm md:text-lg md:leading-5" style={{gridRow: '2/3'}}>As Leis do Counter-Strike: O pioneirismo francês em relação ao esporte eletrônico</h4>
                    </Link>
                </li>
            </ul>
        </div>
    )
}