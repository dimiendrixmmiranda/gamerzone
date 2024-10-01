'use client';
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { MdScoreboard } from "react-icons/md";
import { GiChampions } from "react-icons/gi";
import { FaGear } from "react-icons/fa6";
import { PiRankingFill } from "react-icons/pi";
import { GiPistolGun } from "react-icons/gi";
import Link from 'next/link';
import { menu } from '@/constants/constantes';

export default function Offcanvas() {
    const [visibleRight, setVisibleRight] = useState(false);

    const renderizarIcone = (icone: string) => {
        switch (icone) {
            case '<MdScoreboard className="text-xl"/>':
                return <MdScoreboard className="lg:text-xl" />;
            case '<GiChampions className="text-xl" />':
                return <GiChampions className="lg:text-xl" />;
            case '<FaGear className="text-xl" />':
                return <FaGear className="lg:text-xl" />;
            case '<PiRankingFill className="text-xl" />':
                return <PiRankingFill className="lg:text-xl" />;
            case '<GiPistolGun className="text-xl" />':
                return <GiPistolGun className="lg:text-xl" />;
            default:
                return null;
        }
    }

    return (
        <div className="card relative md:hidden">
            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                <h2 className='w-full text-3xl font-black text-center absolute' style={{ top: '2%', left: '50%', transform: 'translate(-50%, 0%)' }}>Menu</h2>
                <ul className='flex flex-col'>
                    {
                        menu.map((item, index) => {
                            return (
                                <li key={index} className="px-2 py-1 rounded-md flex">
                                    <Link href={item.link} className="flex justify-center items-center text-xl font-bold gap-1 lg:text-lg">
                                        {renderizarIcone(item.icone)}
                                        <p>{item.nome}</p>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className="flex justify-around absolute bottom-2 left-0 w-full">
                    <li className="text-4xl">
                        <Link href={'/'}><FaFacebookSquare /></Link>
                    </li>
                    <li className="text-4xl">
                        <Link href={'/'}><FaSquareInstagram /></Link>
                    </li>
                    <li className="text-4xl">
                        <Link href={'/'}><AiFillTikTok /></Link>
                    </li>
                    <li className="text-4xl">
                        <Link href={'/'}><FaXTwitter /></Link>
                    </li>
                </ul>
            </Sidebar>
            <Button onClick={() => setVisibleRight(true)} className='w-16 flex justify-center items-center'>
                <GiHamburgerMenu className='h-full w-full p-2' />
            </Button>
        </div>
    )
}
