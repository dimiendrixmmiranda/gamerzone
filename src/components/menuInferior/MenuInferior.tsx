import Link from "next/link";
import { FaGamepad, FaHome, FaPlayCircle, FaTrophy } from "react-icons/fa";
import { FaShieldHeart } from "react-icons/fa6";
import OffcanvasReutilizavel from "../offcanvas/OffcanvasReutilizavel";
import Videos from "../videosCurtos/Videos";
import ClubeDoCoracao from "../clubeDoCoracao/ClubeDoCoracao";

export default function MenuInferior() {
    return (
        <section className="fixed z-40 bottom-0 left-0 w-full bg-azul-escuro text-white grid grid-cols-5 xl:hidden" style={{ boxShadow: '0 0 3px 2px white' }}>
            <Link href={'/'}>
                <div className="w-full h-full flex flex-col justify-center items-center p-2 gap-1 font-semibold">
                    <FaHome className="text-xl" />
                    <p className="text-xs">Home</p>
                </div>
            </Link>
            <OffcanvasReutilizavel
                icone={
                    <div className="w-full h-full flex flex-col justify-center items-center p-2 gap-1 font-semibold">
                        <FaShieldHeart className="text-xl" />
                          <p className="text-xs">Org</p>
                    </div>
                }
                tituloCabecalho={<h2 className="font-bold text-2xl">Escolha sua ORG!</h2>}
                cor="bg-laranja text-white"
            >
                <ClubeDoCoracao estilo="" />
            </OffcanvasReutilizavel>
            <OffcanvasReutilizavel
                icone={
                    <div className="w-full h-full flex flex-col justify-center items-center p-2 gap-1 font-semibold">
                        <FaPlayCircle className="text-2xl" />
                        <p className="text-xs">Videos</p>
                    </div>
                }
                tituloCabecalho={<h2 className="font-bold text-2xl">Vídeos da Comunidade</h2>}
            >
                <Videos />
            </OffcanvasReutilizavel>

            <OffcanvasReutilizavel
                icone={
                    <div className="w-full h-full flex flex-col justify-center items-center p-2 gap-1 font-semibold">
                        <FaGamepad className="text-xl" />
                        <p className="text-xs">Agenda</p>
                    </div>
                }
                tituloCabecalho={<h2 className="font-bold text-2xl">Agenda de Jogos</h2>}
            >
                <h2>Agenda</h2>
            </OffcanvasReutilizavel>

            <OffcanvasReutilizavel
                icone={
                    <div className="w-full h-full flex flex-col justify-center items-center p-2 gap-1 font-semibold">
                        <FaTrophy className="text-xl" />
                        <p className="text-xs">Camps</p>
                    </div>
                }
                tituloCabecalho={<h2 className="font-bold text-2xl">Campeonatos</h2>}
            >
                <h2>Campeonatos</h2>
            </OffcanvasReutilizavel>
        </section>
    )
}