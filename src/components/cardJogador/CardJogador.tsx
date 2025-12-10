import { Jogador } from "@/interfaces/Jogador"
import Image from "next/image"
import Link from "next/link"

interface CardJogadorProps {
    jogador: Jogador
    jogadorAtual?: Jogador | null
    setJogadorAtual?: (jogador: Jogador) => void
    onclick?: () => void
}

export default function CardJogador({ jogador, jogadorAtual, setJogadorAtual, onclick }: CardJogadorProps) {
    return (
        <li className={`group cursor-pointer relative flex-shrink-0 w-[130px] h-[170px] sm:w-[150px] sm:h-[200px] lg:w-[170px] lg:h-[220px] xl:w-[200px] xl:h-[250px] overflow-hidden ${jogadorAtual === jogador ? 'border-4 border-laranja' : ''}`} onClick={() => {
            if(setJogadorAtual){
                setJogadorAtual(jogador)
            }
            if(onclick){
                onclick()
            }
        }}>
            {/* CARD PRINCIPAL */}
            <div className="grid grid-rows-[1fr_35px] w-full h-full">
                <div className="relative w-full h-full bg-zinc-800">
                    <Image alt={jogador.nome} src={jogador.imagem} fill className="object-cover" />
                </div>
                <div className="w-full h-full bg-zinc-950 text-white flex justify-center items-center font-bold">
                    <h2>{jogador.nick}</h2>
                </div>
            </div>

            {/* INFO QUE SOBE NO HOVER */}
            <div className="absolute bottom-[-120%] left-0 w-full h-full bg-black text-white p-4 text-sm flex flex-col gap-2 transition-all duration-700 ease-in-out group-hover:bottom-0 opacity-90">
                <p>Nome: {jogador.nome}</p>
                <p>Nick: {jogador.nick}</p>
                <p>Idade: {jogador.idade}</p>
                <div className="flex items-center gap-1">
                    País: <div className="relative w-5 h-4"><Image alt="nacionalidade" src={jogador.nacionalidade.imagem} fill className="object-contain" /></div> {jogador.nacionalidade.pais}
                </div>
                <p>Posição: {jogador.posicao}</p>
                <Link href={'jogador.linkHLTV'} className="cursor-pointer text-laranja">Link no HLTV</Link>
            </div>
        </li>
    )
}