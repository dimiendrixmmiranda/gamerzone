'use client'
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



    return (
        <Template logo={true} clube={clubeSelecionado} menuSuperior={false}>
            {
                noticiaAtual != null ? (
                    <div className="p-4 max-w-[1100px] mx-auto flex flex-col gap-2 md:p-8 lg:p-12 lg:gap-4">
                        <h2 className="font-bold text-2xl leading-6 md:text-4xl md:leading-9 lg:text-5xl lg:leading-[1.1em]">{noticiaAtual.titulo}</h2>
                        <p className="text-lg leading-6 md:text-xl md:leading-6">{noticiaAtual.subtitulo}</p>
                        <div>
                            <p className="leading-5 text-sm md:text-base">Por {noticiaAtual.autor}, {noticiaAtual.data.toDate().toLocaleString('pt-br')}</p>
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

                                                    <button className="relative flex items-center justify-self-center md:gap-1">
                                                        <RiQuestionAnswerFill className="text-2xl" />
                                                        <p className="hidden text-lg uppercase font-bold mt-[2px] md:block">Responder</p>
                                                    </button>
                                                    <button className="relative flex items-center justify-self-center md:gap-1">
                                                        <FaExclamationCircle className="text-2xl" />
                                                        <p className="hidden text-lg uppercase font-bold mt-[2px] md:block">Denúnciar</p>
                                                    </button>
                                                </div>
                                            </li>
                                        ))
                                        :
                                        ''}
                            </ul>
                        </div>
                    </div>
                ) : ('')
            }
        </Template>
    )
}