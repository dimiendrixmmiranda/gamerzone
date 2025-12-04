import Blog from "@/interfaces/Blog";
import useBlogs from "@/lib/hooks/useBlogs";
import { createSlug } from "@/lib/utils/createSlug";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Blogs() {
    const { blogs } = useBlogs();

    const [econEstrat, setEconEstrat] = useState<Blog[]>([])
    const [operatorsmeta, setOperatorsmeta] = useState<Blog[]>([])
    const [championstour, setChampionstour] = useState<Blog[]>([])
    const [proscene, setProscene] = useState<Blog[]>([])

    useEffect(() => {
        const byDate = (a: Blog, b: Blog) =>
            b.data.seconds - a.data.seconds; // 🔥 ordem decrescente

        const blogEcon = blogs.filter(b => b.nomeDaColuna === 'econ&strat').sort(byDate)
        setEconEstrat(blogEcon)

        const operatorsmeta = blogs.filter(b => b.nomeDaColuna === 'operatorsmeta').sort(byDate)
        setOperatorsmeta(operatorsmeta)

        const championstour = blogs.filter(b => b.nomeDaColuna === 'championstour').sort(byDate)
        setChampionstour(championstour)

        const proscene = blogs.filter(b => b.nomeDaColuna === 'proscene').sort(byDate)
        setProscene(proscene)
    }, [blogs])

    return (
        <div className="bg-azul-escuro text-white p-4 flex flex-col gap-4 h-full xl:m-0 xl:mr-4 xl:mt-6 2xl:mt-0">
            <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-bold">Blogs</h2>
                <p className="text-sm">Confira a opinião de nossos reporteres e especialistas</p>
            </div>
            <ul className="flex flex-col gap-4">
                {/* proscene */}
                {
                    proscene[0] && (
                        <li>
                            <Link href={`/blog/${createSlug(proscene[0].titulo, proscene[0].id)}`}>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="relative rounded-full w-20 h-20 sm:w-28 sm:h-28 my-auto mx-auto overflow-hidden md:w-24 md:h-24 lg:w-28 lg:h-28">
                                        <Image alt="Proscene" src={`/blogs/${proscene[0]?.nomeDaColuna}.png`} fill className="object-cover" />
                                    </div>
                                    <div className="col-start-2 col-end-4 h-full flex flex-col gap-1">
                                        <h2 className="capitalize text-lg leading-5">{proscene[0].nomeDaColuna}</h2>
                                        <span className="line-clamp-3 leading-5 my-auto">{proscene[0]?.titulo}</span>
                                        <div>
                                            <p className="text-xs">{proscene[0]?.autor}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )
                }
                {/* operatorsmeta */}
                {
                    operatorsmeta[0] && (
                        <li>
                            <Link href={`/blog/${createSlug(operatorsmeta[0].titulo, operatorsmeta[0].id)}`}>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="relative rounded-full w-20 h-20 sm:w-28 sm:h-28 my-auto mx-auto overflow-hidden md:w-24 md:h-24 lg:w-28 lg:h-28">
                                        <Image alt="operatorsmeta" src={`/blogs/${operatorsmeta[0]?.nomeDaColuna}.png`} fill className="object-cover" />
                                    </div>
                                    <div className="col-start-2 col-end-4 h-full flex flex-col gap-1">
                                        <h2 className="capitalize text-lg leading-5">{operatorsmeta[0].nomeDaColuna}</h2>
                                        <span className="line-clamp-3 leading-5 my-auto">{operatorsmeta[0]?.titulo}</span>
                                        <div>
                                            <p className="text-xs">{operatorsmeta[0]?.autor}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )
                }
                {/* championstour */}
                {
                    championstour[0] && (
                        <li>
                            <Link href={`/blog/${createSlug(championstour[0].titulo, championstour[0].id)}`}>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="relative rounded-full w-20 h-20 sm:w-28 sm:h-28 my-auto mx-auto overflow-hidden md:w-24 md:h-24 lg:w-28 lg:h-28">
                                        <Image alt="championstour" src={`/blogs/${championstour[0]?.nomeDaColuna}.png`} fill className="object-cover" />
                                    </div>
                                    <div className="col-start-2 col-end-4 h-full flex flex-col gap-1">
                                        <h2 className="capitalize text-lg leading-5">{championstour[0].nomeDaColuna}</h2>
                                        <span className="line-clamp-3 leading-5 my-auto">{championstour[0]?.titulo}</span>
                                        <div>
                                            <p className="text-xs">{championstour[0]?.autor}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )
                }
                {/* econ&strat */}
                {
                    econEstrat[0] && (
                        <li>
                            <Link href={`/blog/${createSlug(econEstrat[0].titulo, econEstrat[0].id)}`}>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="relative rounded-full w-20 h-20 sm:w-28 sm:h-28 my-auto mx-auto overflow-hidden md:w-24 md:h-24 lg:w-28 lg:h-28">
                                        <Image alt="econEstrat" src={`/blogs/${econEstrat[0]?.nomeDaColuna}.png`} fill className="object-cover" />
                                    </div>
                                    <div className="col-start-2 col-end-4 h-full flex flex-col gap-1">
                                        <h2 className="capitalize text-lg leading-5">{econEstrat[0].nomeDaColuna}</h2>
                                        <span className="line-clamp-3 leading-5 my-auto">{econEstrat[0]?.titulo}</span>
                                        <div>
                                            <p className="text-xs">{econEstrat[0]?.autor}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}