import Link from "next/link";
import style from './style.module.css'
export default function Colunas() {
    const listaDeColunas = [1, 2, 3, 4]
    return (
        <div className="w-full h-full bg-[--azul] p-2 py-4 flex flex-col gap-3 md:h-fit" style={{ boxShadow: '0 0 2px 2px black' }}>
            <h2 className="text-2xl font-bold uppercase ml-6">Colunas</h2>
            <ul className="flex flex-col gap-2 mt-auto">
                {
                    listaDeColunas.map((coluna, i) => {
                        return (
                            <li key={i} className={`pb-3 ${listaDeColunas.length - 1 <= i ? '' : 'border-b-2 border-[--preto-fosco]'}`}>
                                <Link href={'/'}>
                                    <div className={style.containerColuna}>
                                        <div className="w-12 h-12 bg-black rounded-full row-start-2 row-end-3 self-center justify-self-center"></div>
                                        <h3 className="text-sm row-start-1 row-end-2 col-start-2 col-end-3">Titulo da Coluna</h3>
                                        <h4 className="col-start-2 col-end-3 overflow-hidden text-ellipsis break-words line-clamp-3 leading-5">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy
                                        </h4>
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}