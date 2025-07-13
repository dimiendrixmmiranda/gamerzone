'use client'

import { db } from "@/lib/firebase"
import handleImagemChange from "@/utils/handleImageChange"
import { addDoc, collection, Timestamp } from "firebase/firestore"
import { useState } from "react"

export default function Page() {
    const [titulo, setTitulo] = useState('')
    const [subTitulo, setSubTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [conteudoDaNoticia, setConteudoDaNoticia] = useState('')
    const [esporte, setEsporte] = useState('')
    const [imagemBase64, setImagemBase64] = useState('');
    const [imagemPreview, setImagemPreview] = useState('');
    const [erroImagemTamanho, setErroImagemTamanho] = useState<string | null>(null);
    const [tag, setTag] = useState('')
    const [tags, setTags] = useState<string[]>([])

    async function salvarNoticia(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        if (
            !titulo.trim() ||
            !subTitulo.trim() ||
            !autor.trim() ||
            !conteudoDaNoticia.trim() ||
            !esporte ||
            tags.length === 0 ||
            !imagemBase64
        ) {
            alert("Preencha todos os campos obrigatórios antes de enviar a notícia.");
            return;
        }

        if (erroImagemTamanho) {
            alert(erroImagemTamanho)
            return
        }

        try {
            const noticia = {
                titulo: titulo,
                subtitulo: subTitulo,
                autor: autor,
                conteudoDaNoticia: conteudoDaNoticia.split('\n').filter(linha => linha.trim() !== ''),
                esporte: esporte,
                tags: tags,
                imagem: imagemBase64,
                data: Timestamp.now(),
            }
            const docRef = await addDoc(collection(db, "noticias"), noticia)
            console.log("Pedido salvo com ID:", docRef.id)
            console.log(noticia)
        } catch (error) {
            console.error("Erro ao salvar pedido:", error)
        }
    }

    function adicionarTag(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        if (!tag.trim()) return; // não adiciona se estiver vazio

        if (tags != undefined) {
            // Evita tags duplicadas
            if (tags.includes(tag.trim())) return;
            setTags(prevTags => [...prevTags, tag.trim()]);
        }
        setTag('');
    }

    function limparCampos() {
        setTitulo('')
        setSubTitulo('')
        setAutor('')
        setConteudoDaNoticia('')
        setEsporte('')
        setTags([])
        setImagemBase64('')
        setImagemPreview('')
        window.location.reload()
    }
    console.log(tags)
    return (
        <div className="bg-azul-escuro min-h-screen w-full p-4">
            <form className="">
                <fieldset>
                    <label htmlFor="titulo">Título da notícia:</label>
                    <input type="text" name="titulo" id="titulo" className="w-full h-[30px] text-black rounded-lg p-2 text-sm" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="subTitulo">Subtítulo da notícia:</label>
                    <input type="text" name="subTitulo" id="subTitulo" className="w-full h-[30px] text-black rounded-lg p-2 text-sm" value={subTitulo} onChange={(e) => setSubTitulo(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="autor">Autor da notícia:</label>
                    <input type="text" name="autor" id="autor" className="w-full h-[30px] text-black rounded-lg p-2 text-sm" value={autor} onChange={(e) => setAutor(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="conteudoDaNoticia">Conteudo da Noticia:</label>
                    <textarea name="conteudoDaNoticia" id="conteudoDaNoticia" className="w-full h-[200px] text-black rounded-lg p-2 text-sm" value={conteudoDaNoticia} onChange={(e) => setConteudoDaNoticia(e.target.value)} />
                </fieldset>
                <fieldset className="flex flex-col">
                    <label htmlFor="esporte">Esporte:</label>
                    <select name="esporte" id="esporte" className="h-[30px] px-2 text-black" value={esporte} onChange={(e) => setEsporte(e.target.value)}>
                        <option value="">Selecione</option>
                        <option value="cs2">CS2</option>
                        <option value="valorant">Valorant</option>
                        <option value="rainbowSix">Rainbow Six</option>
                        <option value="outros">Outros</option> {/* geral vai pegar todas as categorias, inclusive outros */}
                    </select>
                </fieldset>
                <fieldset>
                    <label htmlFor="tags">Tags:</label>
                    <div className="flex items-center">
                        <input type="text" name="tags" id="tags" className="w-full h-[30px] text-black rounded-lg p-2 text-sm" value={tag} onChange={(e) => setTag(e.target.value)} />
                        <button onClick={(e) => adicionarTag(e)}>Adicionar</button>
                    </div>
                    <div>
                        {
                            tags.map((tag, i) => {
                                return (
                                    <p key={i} className="text-sm">{tag}</p>
                                )
                            })
                        }
                    </div>
                </fieldset>
                <fieldset>
                    <label htmlFor="imagens">Imagem da Notícia</label>
                    <input className="flex flex-col" type="file" id="imagens" accept="image/*" onChange={(e) => handleImagemChange(e, setErroImagemTamanho, setImagemBase64, setImagemPreview)} />
                    {imagemPreview && (
                        <div className="mt-2">
                            <label>Prévia da Imagem:</label>
                            <img src={imagemPreview} alt="Prévia" className="max-w-[100px] max-h-[100px]" />
                        </div>
                    )}
                </fieldset>
                <button
                    className="bg-[--verde] py-1 text-2xl uppercase font-bold text-white"
                    onClick={(e) => {
                        salvarNoticia(e)
                        setTimeout(() => {
                            limparCampos()
                        }, 1000);
                    }}
                >
                    Enviar
                </button>
            </form>
        </div>
    )
}