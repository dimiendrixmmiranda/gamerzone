'use client'

import Template from "@/components/template/Template";
import Auth from "@/lib/context/Auth";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import { IoMdAdd } from "react-icons/io";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Usuario } from "@/interfaces/Usuario";
import handleImagemChange from "@/lib/utils/handleImageChange";

export default function Page() {
    const { usuario } = useContext(Auth);
    const [usuarioAtual, setUsuarioAtual] = useState<Usuario | null>()

    const [nome, setNome] = useState('')
    const [nick, setNick] = useState('')
    const [telefone, setTelefone] = useState('')
    const [sexo, setSexo] = useState('')
    const [data,] = useState('')

    const [, setImagemBase64] = useState<string>('');
    const [imagemPreview, setImagemPreview] = useState<string>('');
    const [, setErroImagemTamanho] = useState<string | null>(null);

    console.log(usuarioAtual)

    useEffect(() => {
        setUsuarioAtual(usuario)
    }, [usuario])

    const atualizarImagem = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!usuario?.uid) {
            console.error("Usuário sem UID");
            return;
        }

        const base64 = await handleImagemChange(
            event,
            setErroImagemTamanho,
            setImagemBase64,
            setImagemPreview
        );

        // Se não conseguir processar a imagem
        if (!base64) {
            alert("Erro ao processar imagem.");
            return;
        }

        const userRef = doc(db, "usuarios", usuario.uid);

        await updateDoc(userRef, {
            imagemURL: base64
        });

        alert("Imagem atualizada com sucesso!");
    };

    const atualizarTelefone = async () => {
        if (!usuario?.uid) {
            console.error("Usuário sem UID");
            return;
        }
        const userRef = doc(db, "usuarios", usuario.uid);
        setTelefone('')
        await updateDoc(userRef, { telefone });
        alert("Telefone atualizado com sucesso!");
    }

    const atualizarNome = async () => {
        if (!usuario?.uid) {
            console.error("Usuário sem UID");
            return;
        }
        const userRef = doc(db, "usuarios", usuario.uid);
        setNome('')
        await updateDoc(userRef, { nome });
        alert("nome atualizado com sucesso!");
    }

    const atualizarNick = async () => {
        if (!usuario?.uid) {
            console.error("Usuário sem UID");
            return;
        }
        const userRef = doc(db, "usuarios", usuario.uid);
        setNick('')
        await updateDoc(userRef, { nick });
        alert("nick atualizado com sucesso!");
    }

    const atualizarSexo = async () => {
        if (!usuario?.uid) {
            console.error("Usuário sem UID");
            return;
        }
        const userRef = doc(db, "usuarios", usuario.uid);
        setSexo('')
        await updateDoc(userRef, { sexo });
        alert("nick atualizado com sucesso!");
    }

    return (
        <Template paginaClube={false}>
            <div className="p-4 flex flex-col gap-4 md:p-8 xl:min-h-[650px] xl:gap-12">
                <div className="w-full flex flex-col gap-6 md:grid md:grid-cols-2 max-w-[1200px] mx-auto">
                    <div className="flex flex-col justify-center items-center gap-2 md:gap-4">
                        <h2 className="text-3xl font-bold text-center md:text-4xl md:leading-8">
                            Bem vindo {usuarioAtual?.nick}
                        </h2>
                        <div className="flex flex-col relative">
                            <div
                                className="relative w-[170px] h-[170px] rounded-full overflow-hidden md:w-[240px] md:h-[240px] lg:w-[260px] lg:h-[260px]"
                                style={{ boxShadow: "0 0 3px 2px black" }}
                            >
                                {usuario?.imagemURL && (
                                    <Image
                                        alt="imagem do usuário"
                                        src={imagemPreview || usuario?.imagemURL || "/usuario-padrao.png"}
                                        fill
                                        className="object-cover"
                                    />
                                )}
                            </div>
                            <label className="cursor-pointer mt-4 bg-blue-600 text-white p-2 w-fit rounded-full absolute -bottom-2 -right-2">
                                <IoMdAdd />
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={atualizarImagem}
                                />
                            </label>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Atualizar Seus Dados:</h2>
                        <fieldset className="flex flex-col">
                            <label htmlFor="nome">Alterar Nome:</label>
                            <div className="grid grid-cols-[1fr_60px]">
                                <input type="text" name="nome" id="nome" placeholder={usuarioAtual?.nome} className="p-2 h-[35px] rounded-s-[6px] w-full" />
                                <button className="bg-laranja text-white rounded-r-[6px]" onClick={atualizarNome}>Alterar</button>
                            </div>
                        </fieldset>
                        <fieldset className="flex flex-col">
                            <label htmlFor="nick">Alterar Nick:</label>
                            <div className="grid grid-cols-[1fr_60px]">
                                <input type="text" name="nick" id="nick" placeholder={usuarioAtual?.nick} onChange={(e) => setNick(e.target.value)} className="p-2 h-[35px] rounded-s-[6px] w-full" />
                                <button className="bg-laranja text-white rounded-r-[6px]" onClick={atualizarNick}>Alterar</button>
                            </div>
                        </fieldset>
                        <fieldset className="flex flex-col">
                            <label htmlFor="telefone">Alterar Telefone:</label>
                            <div className="grid grid-cols-[1fr_60px]">
                                <input type="text" name="telefone" id="telefone" placeholder={usuarioAtual?.telefone} onChange={(e) => setTelefone(e.target.value)} className="p-2 h-[35px] rounded-s-[6px] w-full" />
                                <button
                                    className="bg-laranja text-white rounded-r-[6px]"
                                    onClick={atualizarTelefone}
                                >
                                    Alterar
                                </button>
                            </div>
                        </fieldset>
                        <fieldset className="flex flex-col">
                            <label htmlFor="sexo">Alterar Sexo:</label>
                            <div className="grid grid-cols-[1fr_60px]">
                                <select name="sexo" id="sexo" value={usuarioAtual?.sexo} onChange={(e) => setSexo(e.target.value)} className="p-2 h-[35px] rounded-s-[6px] w-full">
                                    <option value="">Selecione</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="feminino">Feminino</option>
                                    <option value="nenhum">Prefiro não Dizer</option>
                                </select>
                                <button className="bg-laranja text-white rounded-r-[6px]" onClick={atualizarSexo}>Alterar</button>
                            </div>
                        </fieldset>
                        <fieldset className="flex flex-col">
                            <label htmlFor="data">Alterar Data de Nascimento:</label>
                            <div className="grid grid-cols-[1fr_60px]">
                                <input type="date" name="data" id="data" placeholder={data?.toString()} className="p-2 h-[35px] rounded-s-[6px] w-full" />
                                <button className="bg-laranja text-white rounded-r-[6px]">Alterar</button>
                            </div>
                        </fieldset>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold leading-6">Lista dos seus comentários</h3>
                    {
                        usuarioAtual?.comentarios != undefined && usuarioAtual?.comentarios?.length > 0 ? (
                            <Swiper
                                modules={[Navigation, Pagination]}
                                spaceBetween={10}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                loop={true}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    },
                                    1440: {
                                        slidesPerView: 4,
                                    }
                                }}
                                className="w-full"
                            >
                                {
                                    usuarioAtual.comentarios.map((comentario, i) => {
                                        return (
                                            <SwiperSlide key={i}>
                                                <Link href={comentario.linkDaNoticia}>
                                                    <div className="p-4 bg-white rounded-[12px] m-2" style={{ boxShadow: '0 0 2px 1px black' }}>
                                                        <span className="text-sm">{comentario.data.toDate().toLocaleDateString()}</span>
                                                        <p className="line-clamp-2 text-black font-semibold" >
                                                            {comentario.texto}
                                                        </p>
                                                    </div>
                                                </Link>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        ) : (
                            <div>
                                <h2 className="leading-5">Você ainda não fez nenhum comentário</h2>
                            </div>
                        )
                    }
                </div>
            </div>
        </Template >
    );
}
