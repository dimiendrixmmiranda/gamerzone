'use client'
import MenuInferior from "@/components/menuInferior/MenuInferior";
import RedesSociais from "@/components/redesSociais/RedesSociais";
import Template from "@/components/template/Template";
import clubesDoCoracao from "@/constants/clubesDoCoracao";
import useAuth from "@/data/hooks/useAuth";
import useNoticias from "@/data/hooks/useNoticias";
import useUsuarios from "@/data/hooks/useUsuarios";
import Clube from "@/interfaces/Clube";
import Noticia from "@/interfaces/Noticia";
import UsuarioElemento from "@/interfaces/UsuarioElemento";
import { db } from "@/lib/firebase";
import { arrayUnion, doc, Timestamp, updateDoc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaExclamationCircle } from "react-icons/fa";
import { RiQuestionAnswerFill } from "react-icons/ri";

export default function Page() {
    const { usuario } = useAuth()
    const listaDeUsuarios = useUsuarios()
    const params = useParams()
    const id = typeof params.slug === 'string' ? params.slug : params.slug?.[0]
    const noticias = useNoticias()
    const [noticiaAtual, setNoticiaAtual] = useState<Noticia | null>(null)
    const [clubeSelecionado, setClubeSelecionado] = useState<Clube | null>(null)
    const [comentario, setComentario] = useState('')
    const [usuarioIndentificado, setUsuarioIndentificado] = useState<UsuarioElemento | null>(null)
    const [comentarioIndexRespondido, setComentarioIndexRespondido] = useState<number | null>(null)
    const [visibleresponderComentario, setVisibleResponderComentario] = useState<'visivel' | 'nao-visivel'>('nao-visivel')
    const [responderComentario, setResponderComentario] = useState('')

    useEffect(() => {
        if (!usuario || listaDeUsuarios.length === 0) return;

        const usuarioEncontrado = listaDeUsuarios.find(u => u.id === usuario.uid);

        if (usuarioEncontrado) {
            setUsuarioIndentificado(usuarioEncontrado);
        }
    }, [usuario, listaDeUsuarios]);

    useEffect(() => {
        const noticia = noticias.filter(not => not.id.toLowerCase() == id?.toLowerCase())[0]
        if (noticia) {
            setNoticiaAtual(noticia)
            console.log(noticiaAtual)
        }
    }, [noticias])

    useEffect(() => {
        if (!noticiaAtual) return

        const clube = clubesDoCoracao.find(clube =>
            noticiaAtual.tags?.includes(clube.id)
        )

        console.log("Clube identificado:", clube)
        setClubeSelecionado(clube ?? null)
    }, [noticiaAtual])

    async function enviarComentario() {
        if (!comentario.trim()) return;

        if (!usuarioIndentificado || !noticiaAtual) return;

        const comentarioObj = {
            nome: usuarioIndentificado.nome,
            imagem: usuarioIndentificado.imagem,
            nick: usuarioIndentificado.nick,
            nomeFormatado: `${usuarioIndentificado.nome.split(' ')[0]} "${usuarioIndentificado.nick}" ${usuarioIndentificado.nome.split(' ').at(-1)}`,
            mensagem: comentario.trim(),
            data: Timestamp.fromDate(new Date()),
            likes: [],
            deslikes: []
        }

        try {
            const ref = doc(db, "noticias", noticiaAtual.id)
            await updateDoc(ref, {
                comentarios: arrayUnion(comentarioObj)
            })
            setNoticiaAtual({
                ...noticiaAtual,
                comentarios: [...(noticiaAtual.comentarios ?? []), comentarioObj]
            })
            setComentario('')
        } catch (error) {
            console.error("Erro ao enviar comentário:", error)
        }
    }

    async function toggleLike(index: number) {
        if (!usuario || !noticiaAtual) return;

        const uid = usuario.uid;
        const comentarios = [...noticiaAtual.comentarios];
        const comentario = { ...comentarios[index] };

        const curtiu = comentario.likes?.includes(uid) ?? false;
        const descurtiu = comentario.deslikes?.includes(uid) ?? false;

        comentario.likes = curtiu
            ? comentario.likes.filter(id => id !== uid)
            : [...(comentario.likes || []), uid];

        if (descurtiu) {
            comentario.deslikes = comentario.deslikes.filter(id => id !== uid);
        }

        comentarios[index] = comentario;

        try {
            const ref = doc(db, "noticias", noticiaAtual.id);
            await updateDoc(ref, { comentarios });
            setNoticiaAtual({ ...noticiaAtual, comentarios });
        } catch (error) {
            console.error("Erro ao curtir:", error);
        }
    }

    async function toggleDeslike(index: number) {
        if (!usuario || !noticiaAtual) return;

        const uid = usuario.uid;
        const comentarios = [...noticiaAtual.comentarios];
        const comentario = { ...comentarios[index] };

        const descurtiu = comentario.deslikes?.includes(uid) ?? false;
        const curtiu = comentario.likes?.includes(uid) ?? false;

        comentario.deslikes = descurtiu
            ? comentario.deslikes.filter(id => id !== uid)
            : [...(comentario.deslikes || []), uid];

        if (curtiu) {
            comentario.likes = comentario.likes.filter(id => id !== uid);
        }

        comentarios[index] = comentario;

        try {
            const ref = doc(db, "noticias", noticiaAtual.id);
            await updateDoc(ref, { comentarios });
            setNoticiaAtual({ ...noticiaAtual, comentarios });
        } catch (error) {
            console.error("Erro ao descurtir:", error);
        }
    }

    function mostrarCampoDeRespostaDeComentario(index: number) {
        setComentarioIndexRespondido(prev => prev === index ? null : index)
        setVisibleResponderComentario('visivel')
    }

    async function responder(e: React.FormEvent) {
        e.preventDefault()

        if (
            !usuarioIndentificado ||
            !noticiaAtual ||
            responderComentario.trim() === '' ||
            comentarioIndexRespondido === null
        ) return

        const novaResposta = {
            nome: usuarioIndentificado.nome,
            imagem: usuarioIndentificado.imagem,
            nick: usuarioIndentificado.nick,
            nomeFormatado: `${usuarioIndentificado.nome.split(' ')[0]} "${usuarioIndentificado.nick}" ${usuarioIndentificado.nome.split(' ').at(-1)}`,
            mensagem: responderComentario.trim(),
            data: Timestamp.fromDate(new Date()),
            likes: [],
            deslikes: []
        }

        const comentarios = [...noticiaAtual.comentarios]
        const comentarioOriginal = { ...comentarios[comentarioIndexRespondido] }

        // Garante que o campo `respostas` exista
        comentarioOriginal.respostas = comentarioOriginal.respostas || []
        comentarioOriginal.respostas.push(novaResposta)
        comentarios[comentarioIndexRespondido] = comentarioOriginal

        try {
            const ref = doc(db, "noticias", noticiaAtual.id)
            await updateDoc(ref, { comentarios })
            setNoticiaAtual({ ...noticiaAtual, comentarios })
            setResponderComentario('')
            setVisibleResponderComentario('nao-visivel')
            setComentarioIndexRespondido(null)
        } catch (error) {
            console.error("Erro ao responder comentário:", error)
        }
    }


    return (
        <Template logo={true} clube={clubeSelecionado} menuSuperior={false}>
            {
                noticiaAtual != null ? (
                    <div className="p-4 max-w-[1100px] mx-auto flex flex-col gap-2 md:p-8 lg:p-12 lg:gap-4">
                        <h2 className="font-bold text-2xl leading-6 md:text-4xl md:leading-9 lg:text-5xl lg:leading-[1.1em]">{noticiaAtual.titulo}</h2>
                        <p className="text-lg leading-6 md:text-xl md:leading-6">{noticiaAtual.subtitulo}</p>
                        <div className="flex flex-col md:flex-row md:gap-4">
                            <p className="leading-5 text-sm md:text-base">Por {noticiaAtual.autor}, {noticiaAtual.data.toDate().toLocaleString('pt-br')}</p>
                            {/* Redes sociais do autor da noticia */}
                            <div className="flex md:-mt-[10px]">
                                <RedesSociais style="mx-auto flex" />
                            </div>
                        </div>
                        <div className="relative w-full max-w-[480px] mx-auto h-[200px] sm:h-[280px] md:max-w-[600px] md:h-[360px] lg:max-w-[720px] lg:h-[450px]">
                            <Image alt="image" src={noticiaAtual.imagem} fill className="object-cover" />
                        </div>
                        <ul className="max-w-[900px] mx-auto flex flex-col gap-4 md:text-lg lg:text-xl lg:gap-5">
                            {
                                noticiaAtual.conteudoDaNoticia.map((paragrafo, i) => {
                                    return (
                                        <li key={i}>{paragrafo}</li>
                                    )
                                })
                            }
                        </ul>
                        <div className="max-w-[900px] mx-auto flex flex-col gap-2">
                            <h3 className="text-xl font-bold">Comentarios ({noticiaAtual.comentarios.length})</h3>
                            <p className="text-xs">Os comentários são de inteira responsabilidade de seus autores e não refletem a opinião deste site. Caso identifique algo que viole os termos de uso, denuncie. Consulte as perguntas frequentes para entender o que é considerado inadequado ou ilegal!</p>
                            {
                                usuarioIndentificado ? (
                                    <div className="flex flex-col">
                                        <div className="flex flex-col gap-2">
                                            <textarea name="comentario" id="comentario" className="h-[300px]  rounded-md p-3 sm:h-[280px] sm:text-lg md:h-[200px] lg:h-[150px]" maxLength={300} value={comentario} onChange={(e) => setComentario(e.target.value)}></textarea>
                                            <button
                                                className="bg-azul-escuro text-white uppercase font-bold text-xl py-1"
                                                onClick={enviarComentario}
                                            >
                                                Comentar!
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="border-2 border-black p-4 flex flex-col gap-2 md:items-center">
                                        <span className="text-lg leading-5">Crie ou acesse sua conta para participar da conversa</span>
                                        <Link href={'/cadastro'} className="text-2xl uppercase font-bold bg-azul-escuro text-white py-1 w-full max-w-[300px] mx-auto text-center">
                                            Participe!
                                        </Link>
                                    </div>
                                )
                            }
                            <ul className="flex flex-col gap-4 mt-4">
                                {
                                    noticiaAtual.comentarios.length > 0 ? noticiaAtual.comentarios
                                        .sort((a, b) => b.data.toDate().getTime() - a.data.toDate().getTime())
                                        .map((com, i) => (
                                            <li key={i} className="flex flex-col gap-2 bg-zinc-100 p-2 rounded-md">
                                                <div className="flex items-center gap-2">
                                                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                                        <Image alt="aqui" src={com.imagem} fill className="object-cover"></Image>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold leading-5">{com.nomeFormatado}</h3>
                                                        <p className="text-xs leading-5">{com.data.toDate().toLocaleString('pt-BR')}</p>
                                                    </div>
                                                </div>
                                                <div className="p-2">
                                                    <p className="md:text-xl">{com.mensagem}</p>
                                                </div>
                                                <div className="w-full grid grid-cols-4">
                                                    <button onClick={() => toggleLike(i)} className="relative flex items-center justify-self-center md:gap-1">
                                                        <AiFillLike className="text-2xl" />
                                                        <p className="hidden text-lg uppercase font-bold mt-[2px] md:block">Like</p>
                                                        <p className="absolute -top-2 right-0 font-bold text-xs md:-right-2">
                                                            {com.likes?.length || 0}
                                                        </p>
                                                    </button>
                                                    <button onClick={() => toggleDeslike(i)} className="relative flex items-center justify-self-center md:gap-1">
                                                        <AiFillDislike className="text-2xl" />
                                                        <p className="hidden text-lg uppercase font-bold mt-[2px] md:block">Deslike</p>
                                                        <p className="absolute -top-2 -right-1 font-bold text-xs md:-right-2">
                                                            {com.deslikes?.length || 0}
                                                        </p>
                                                    </button>

                                                    {
                                                        usuarioIndentificado ? (
                                                            <button
                                                                className="relative flex items-center justify-self-center md:gap-1"
                                                                onClick={() => mostrarCampoDeRespostaDeComentario(i)}
                                                            >
                                                                <RiQuestionAnswerFill className="text-2xl" />
                                                                <p className="hidden text-lg uppercase font-bold mt-[2px] md:block">Responder</p>
                                                            </button>
                                                        ) : (
                                                            <div className="flex flex-col items-center text-center text-xs text-red-600 font-bold">
                                                                <RiQuestionAnswerFill className="text-xl" />
                                                                <span className="hidden md:block">Entre para responder</span>
                                                            </div>
                                                        )
                                                    }

                                                    <button className="relative flex items-center justify-self-center md:gap-1">
                                                        <FaExclamationCircle className="text-2xl" />
                                                        <p className="hidden text-lg uppercase font-bold mt-[2px] md:block">Denúnciar</p>
                                                    </button>
                                                </div>
                                                {com.respostas != undefined && com.respostas?.length > 0 && (
                                                    <div className="ml-6 mt-4 border-l-2 border-zinc-300 pl-4">
                                                        {com.respostas.map((resposta, rIdx) => (
                                                            <div key={rIdx} className="bg-white border p-2 rounded-md mb-2">
                                                                <div className="flex items-center gap-2">
                                                                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                                                        <Image alt="resposta" src={resposta.imagem} fill className="object-cover" />
                                                                    </div>
                                                                    <div>
                                                                        <p className="font-bold text-sm">{resposta.nomeFormatado}</p>
                                                                        <p className="text-xs">{resposta.data.toDate().toLocaleString('pt-BR')}</p>
                                                                    </div>
                                                                </div>
                                                                <p className="mt-1 text-sm">{resposta.mensagem}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                                {
                                                    visibleresponderComentario === 'visivel' &&
                                                    comentarioIndexRespondido === i &&
                                                    usuarioIndentificado && (
                                                        <div className="mt-4">
                                                            <form className="flex flex-col gap-2" onSubmit={(e) => responder(e)}>
                                                                <fieldset>
                                                                    <textarea
                                                                        name="responder"
                                                                        id="responder"
                                                                        className="flex w-full border border-zinc-400 h-[200px] rounded-md p-4 sm:h-[280px] sm:text-lg md:h-[200px] lg:h-[150px]"
                                                                        maxLength={300}
                                                                        value={responderComentario}
                                                                        onChange={(e) => setResponderComentario(e.target.value)}
                                                                    />
                                                                </fieldset>
                                                                <div className="grid grid-cols-2 gap-2">
                                                                    <button
                                                                        className="uppercase font-bold w-full flex justify-center text-center py-2 bg-red-600 text-white"
                                                                        onClick={() => {
                                                                            setVisibleResponderComentario('nao-visivel')
                                                                            setComentarioIndexRespondido(null)
                                                                        }}
                                                                        type="button"
                                                                    >
                                                                        Cancelar
                                                                    </button>
                                                                    <button
                                                                        className="uppercase font-bold w-full flex justify-center text-center py-2 bg-green-600 text-white"
                                                                        type="submit"
                                                                    >
                                                                        Responder
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    )
                                                }
                                            </li>
                                        ))
                                        :
                                        ''}
                            </ul>
                        </div>
                    </div>
                ) : ('')
            }
            <MenuInferior />
        </Template>
    )
}