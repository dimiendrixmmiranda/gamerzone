import Link from "next/link";
import CardJogo from "../cardJogo/CardJogo";

export default function Jogos() {
    const jogos = [1, 2, 3, 4, 5, 6]
    return (
        <div className="xl:mr-4 flex flex-col gap-2 bg-zinc-900 p-4 h-fit xl:m-0">
            <h2 className="text-3xl uppercase font-bold text-white">Partidas</h2>
            <ul className="flex flex-col gap-2">
                {
                    jogos.map((jogo, i) => {
                        return (
                            <CardJogo key={i}/>
                        )
                    })
                }
            </ul>
            <Link href={'/'} className="bg-blue-700 w-full flex text-center mt-2 p-1 justify-center items-center text-white">Confira todos os jogos</Link>
        </div>
    )
}