'use client'
import Template from "@/components/template/Template";
import Comentario from "@/interfaces/Comentario";
import Noticia from "@/interfaces/Noticia";
import Auth from "@/lib/context/Auth";
import { db } from "@/lib/firebase/firebase";
import useNoticias from "@/lib/hooks/useNoticias";
import { arrayUnion, doc, Timestamp, updateDoc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { RiQuestionAnswerFill } from "react-icons/ri";
import { FaExclamationCircle, FaRegArrowAltCircleLeft } from "react-icons/fa";
import { createSlug } from "@/lib/utils/createSlug";
import { FaInstagram, FaFacebook, FaTiktok, FaEnvelope } from "react-icons/fa";
import MenuInferior from "@/components/menuInferior/MenuInferior";
import Botao from "@/components/botao/Botao";

export default function Page() {
    const params = useParams();
    const slug = params.slug;
    const { noticias } = useNoticias();
    const [noticiaAtual, setNoticiaAtual] = useState<Noticia | null>(null);
    const { usuario } = useContext(Auth);

    const [comentario, setComentario] = useState('');
    const [responderComentario, setResponderComentario] = useState('');
    const [comentarioIndexRespondido, setComentarioIndexRespondido] = useState<number | null>(null);
    const [visibleResponderComentario, setVisibleResponderComentario] = useState<'visivel' | 'nao-visivel'>('nao-visivel');

    console.log(noticiaAtual)

    // Extrair id da notícia a partir do slug
    const match = slug?.toString().match(/-([^-\s]+)$/);
    const id = match ? match[1] : null;

    useEffect(() => {
        if (!id) return;
        const noticia = noticias.find(n => n.id === id);
        if (noticia) setNoticiaAtual(noticia);
    }, [noticias, id]);


    // Comentarios
    // Enviar novo comentário
    async function enviarComentario() {
        if (!comentario.trim() || !usuario || !noticiaAtual) return;

        const comentarioObj: Comentario = {
            nome: usuario.nome,
            nick: usuario.nick, // ← obrigatório
            imagem: usuario.imagemURL,
            nomeFormatado: `${usuario.nome.split(' ')[0]} ${usuario.nome.split(' ').at(-1)}`,
            mensagem: comentario.trim(),
            data: Timestamp.fromDate(new Date()),
            likes: [],
            deslikes: [],
            respostas: []
        }


        try {
            const ref = doc(db, "listaDeNoticias", noticiaAtual.id);
            await updateDoc(ref, { comentarios: arrayUnion(comentarioObj) });

            setNoticiaAtual({
                ...noticiaAtual,
                comentarios: [...(noticiaAtual.comentarios ?? []), comentarioObj]
            });
            setComentario('');
        } catch (error) {
            console.error("Erro ao enviar comentário:", error);
        }
    }

    // Curtir comentário
    async function toggleLike(index: number) {
        if (!usuario || !noticiaAtual) return;
        const uid = usuario.uid;
        const comentarios = [...(noticiaAtual.comentarios ?? [])];
        const comentario = { ...comentarios[index] };

        const curtiu = comentario.likes?.includes(uid) ?? false;
        const descurtiu = comentario.deslikes?.includes(uid) ?? false;

        comentario.likes = curtiu
            ? comentario.likes.filter(id => id !== uid)
            : [...(comentario.likes || []), uid];

        if (descurtiu) comentario.deslikes = comentario.deslikes.filter(id => id !== uid);

        comentarios[index] = comentario;

        try {
            const ref = doc(db, "listaDeNoticias", noticiaAtual.id);
            await updateDoc(ref, { comentarios });
            setNoticiaAtual({ ...noticiaAtual, comentarios });
        } catch (error) {
            console.error("Erro ao curtir:", error);
        }
    }

    // Descurtir comentário
    async function toggleDeslike(index: number) {
        if (!usuario || !noticiaAtual) return;
        const uid = usuario.uid;
        const comentarios = [...(noticiaAtual.comentarios ?? [])];
        const comentario = { ...comentarios[index] };

        const descurtiu = comentario.deslikes?.includes(uid) ?? false;
        const curtiu = comentario.likes?.includes(uid) ?? false;

        comentario.deslikes = descurtiu
            ? comentario.deslikes.filter(id => id !== uid)
            : [...(comentario.deslikes || []), uid];

        if (curtiu) comentario.likes = comentario.likes.filter(id => id !== uid);

        comentarios[index] = comentario;

        try {
            const ref = doc(db, "listaDeNoticias", noticiaAtual.id);
            await updateDoc(ref, { comentarios });
            setNoticiaAtual({ ...noticiaAtual, comentarios });
        } catch (error) {
            console.error("Erro ao descurtir:", error);
        }
    }

    // Mostrar campo para responder comentário
    function mostrarCampoDeRespostaDeComentario(index: number) {
        setComentarioIndexRespondido(prev => prev === index ? null : index);
        setVisibleResponderComentario('visivel');
    }

    // Responder comentário
    async function responder(e: React.FormEvent) {
        e.preventDefault();
        if (!usuario || !noticiaAtual || !responderComentario.trim() || comentarioIndexRespondido === null) return;

        const novaResposta: Comentario = {
            nome: usuario.nome,
            nick: usuario.nick, // ← obrigatório
            imagem: usuario.imagemURL,
            nomeFormatado: `${usuario.nome.split(' ')[0]} ${usuario.nome.split(' ').at(-1)}`,
            mensagem: responderComentario.trim(),
            data: Timestamp.fromDate(new Date()),
            likes: [],
            deslikes: [],
            respostas: []
        };


        const comentarios = [...(noticiaAtual.comentarios ?? [])];
        const comentarioOriginal = { ...comentarios[comentarioIndexRespondido] };
        comentarioOriginal.respostas = comentarioOriginal.respostas || [];
        comentarioOriginal.respostas.push(novaResposta);
        comentarios[comentarioIndexRespondido] = comentarioOriginal;

        try {
            const ref = doc(db, "listaDeNoticias", noticiaAtual.id);
            await updateDoc(ref, { comentarios });
            setNoticiaAtual({ ...noticiaAtual, comentarios });
            setResponderComentario('');
            setVisibleResponderComentario('nao-visivel');
            setComentarioIndexRespondido(null);
        } catch (error) {
            console.error("Erro ao responder comentário:", error);
        }
    }


    return (
        <Template paginaClube={false}>
            <div className="w-full max-w-[1440px] p-4 flex flex-col gap-2 lg:gap-4">
                <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">{noticiaAtual?.titulo}</h1>
                <h2 className="text-lg md:text-xl lg:text-2xl">{noticiaAtual?.subtitulo}</h2>
                <div className="flex flex-wrap items-center gap-2">
                    <p>{noticiaAtual?.autor}, {noticiaAtual?.data.toDate().toLocaleDateString('pt-br')}</p>
                    <div>
                        <ul className="flex gap-1">
                            <li>
                                <Link href={'/'}>
                                    <div>
                                        <FaFacebook />
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'}>
                                    <div>
                                        <FaInstagram />
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'}>
                                    <div>
                                        <FaTiktok />
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'}>
                                    <div>
                                        <FaEnvelope />
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="relative w-full max-w-[350px] h-[250px] mx-auto sm:max-w-[480px] sm:h-[300px] md:max-w-[750px] md:h-[400px] lg:max-w-[900px] lg:h-[500px]" style={{ boxShadow: '0px 0px 4px 2px black' }}>
                    <Image alt="imagem" src={noticiaAtual?.imagem || '/logo/logo.png'} fill className="object-cover"></Image>
                </div>
                <ul className="flex flex-col gap-4">
                    {
                        noticiaAtual?.conteudoDaNoticia.map((p, i) => {
                            return (
                                <li key={i} className="md:text-lg lg:text-xl">
                                    <p className="indent-6 md:indent-12">{p}</p>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="my-4 flex flex-col gap-2">
                    <h4 className="text-2xl font-black">Times Envolvidos:</h4>
                    <ul className="flex flex-wrap justify-start gap-2">
                        {
                            noticiaAtual?.timesEnvolvidos.map((time, i) => {
                                return (
                                    <li key={i}>
                                        <Link href={`/paginaClube/${createSlug(time.time)}`} className="flex items-center gap-1 p-2 rounded-[8px] transition-all duration-300 hover:bg-zinc-600 hover:text-white">
                                            <div className="relative w-7 h-7 rounded-full">
                                                <Image alt="Logo do time" src={time.logo} fill className="object-contain" />
                                            </div>
                                            <p className="text-xl font-bold">{time.time}</p>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <Botao label="Voltar" icone={<FaRegArrowAltCircleLeft />} link="/" />

                {/* Seção de comentários */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold">
                        Comentários ({noticiaAtual?.comentarios?.length ?? 0})
                    </h3>
                    <p className="text-xs">
                        Os comentários são de inteira responsabilidade de seus autores e não refletem a opinião deste site...
                    </p>

                    {/* Formulário para comentar */}
                    {usuario ? (
                        <div className="flex flex-col gap-2">
                            <textarea
                                name="comentario"
                                className="h-[150px] rounded-md p-3 sm:text-lg border-2 border-azul-escuro"
                                maxLength={300}
                                value={comentario}
                                onChange={(e) => setComentario(e.target.value)}
                            />
                            <button className="bg-azul-escuro text-white uppercase font-bold text-xl py-1" onClick={enviarComentario}>
                                Comentar!
                            </button>
                        </div>
                    ) : (
                        <div className="border-2 border-black p-4 flex flex-col gap-2 md:items-center">
                            <span className="text-lg leading-5">
                                Crie ou acesse sua conta para participar da conversa
                            </span>
                            <Link href="/login" className="text-2xl uppercase font-bold bg-azul-escuro text-white py-1 w-full max-w-[300px] mx-auto text-center">
                                Participe!
                            </Link>
                        </div>
                    )}

                    {/* Lista de comentários */}
                    <ul className="flex flex-col gap-4 mt-4">
                        {noticiaAtual != undefined && noticiaAtual?.comentarios?.length > 0 &&
                            noticiaAtual?.comentarios
                                .sort((a, b) => b.data.toDate().getTime() - a.data.toDate().getTime())
                                .map((com, i) => (
                                    <li key={i} className="flex flex-col gap-2 bg-zinc-100 p-2 rounded-md">
                                        {/* Cabeçalho do comentário */}
                                        <div className="flex items-center gap-2">
                                            <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                                <Image alt={com.nome} src={com.imagem} fill className="object-cover" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold leading-5">{com.nome}</h3>
                                                <p className="text-xs leading-5">{com.data.toDate().toLocaleString('pt-BR')}</p>
                                            </div>
                                        </div>

                                        {/* Mensagem */}
                                        <div className="p-2">
                                            <p className="md:text-xl">{com.mensagem}</p>
                                        </div>

                                        {/* Botões de ação */}
                                        <div className="w-full grid grid-cols-4">
                                            <button onClick={() => toggleLike(i)} className="relative flex items-center justify-self-center md:gap-1">
                                                <AiFillLike className="text-2xl" />
                                                <p className="absolute -top-2 right-0 font-bold text-xs md:-right-2">{com.likes?.length || 0}</p>
                                            </button>

                                            <button onClick={() => toggleDeslike(i)} className="relative flex items-center justify-self-center md:gap-1">
                                                <AiFillDislike className="text-2xl" />
                                                <p className="absolute -top-2 right-0 font-bold text-xs md:-right-2">{com.deslikes?.length || 0}</p>
                                            </button>

                                            {usuario ? (
                                                <button className="relative flex items-center justify-self-center md:gap-1" onClick={() => mostrarCampoDeRespostaDeComentario(i)}>
                                                    <RiQuestionAnswerFill className="text-2xl" />
                                                </button>
                                            ) : (
                                                <div className="flex flex-col items-center text-center text-xs text-red-600 font-bold">
                                                    <RiQuestionAnswerFill className="text-xl" />
                                                    <span className="hidden md:block">Entre para responder</span>
                                                </div>
                                            )}

                                            <button className="relative flex items-center justify-self-center md:gap-1">
                                                <FaExclamationCircle className="text-2xl" />
                                            </button>
                                        </div>

                                        {/* Respostas */}
                                        {com.respostas != undefined && com.respostas?.length > 0 && (
                                            <div className="ml-6 mt-4 border-l-2 border-zinc-300 pl-4">
                                                {com.respostas.map((resposta, rIdx) => (
                                                    <div key={rIdx} className="bg-white border p-2 rounded-md mb-2">
                                                        <div className="flex items-center gap-2">
                                                            <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                                                <Image alt={resposta.nome} src={resposta.imagem} className="object-cover" />
                                                            </div>
                                                            <div>
                                                                <p className="font-bold text-sm">{resposta.nome}</p>
                                                                <p className="text-xs">{resposta.data.toDate().toLocaleString('pt-BR')}</p>
                                                            </div>
                                                        </div>
                                                        <p className="mt-1 text-sm">{resposta.mensagem}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Campo de resposta */}
                                        {visibleResponderComentario === 'visivel' && comentarioIndexRespondido === i && usuario && (
                                            <form className="mt-4 flex flex-col gap-2" onSubmit={responder}>
                                                <textarea
                                                    className="w-full border border-zinc-400 h-[150px] rounded-md p-4"
                                                    maxLength={300}
                                                    value={responderComentario}
                                                    onChange={(e) => setResponderComentario(e.target.value)}
                                                />
                                                <div className="grid grid-cols-2 gap-2">
                                                    <button
                                                        type="button"
                                                        className="uppercase font-bold w-full py-2 bg-red-500 text-white"
                                                        onClick={() => {
                                                            setVisibleResponderComentario('nao-visivel');
                                                            setComentarioIndexRespondido(null);
                                                        }}
                                                    >
                                                        Cancelar
                                                    </button>
                                                    <button type="submit" className="uppercase font-bold w-full py-2 bg-green-600 text-white">
                                                        Responder
                                                    </button>
                                                </div>
                                            </form>
                                        )}
                                    </li>
                                ))}
                    </ul>
                </div>
            </div>
            <MenuInferior />
        </Template>
    )
}