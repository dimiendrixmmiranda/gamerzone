'use client';
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdScoreboard } from "react-icons/md";
import { GiChampions } from "react-icons/gi";
import { FaGear } from "react-icons/fa6";
import { PiRankingFill } from "react-icons/pi";
import { GiPistolGun } from "react-icons/gi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

import Link from 'next/link';

export default function Offcanvas() {
    const [visibleRight, setVisibleRight] = useState(false);

    return (
        <div className="card relative md:hidden">
            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                <h2 className='w-full text-3xl font-black text-center absolute' style={{ top: '2%', left: '50%', transform: 'translate(-50%, 0%)' }}>Menu</h2>
                <ul className='flex flex-col'>
                    <li className="px-2 py-1 rounded-md flex">
                        <Link href={'/'} className="flex justify-center items-center text-xl font-bold gap-1 lg:text-lg">
                            <MdScoreboard className="text-xl" />
                            <p>Resultados</p>
                        </Link>
                    </li>
                    <li className="px-2 py-1 rounded-md flex">
                        <Link href={'/'} className="flex justify-center items-center text-xl font-bold gap-1 lg:text-lg">
                            <GiChampions className="text-xl" />
                            <p>Campeonatos</p>
                        </Link>
                    </li>
                    <li className="px-2 py-1 rounded-md flex">
                        <Link href={'/'} className="flex justify-center items-center text-xl font-bold gap-1 lg:text-lg">
                            <FaGear className="text-xl" />
                            <p>CFG dos Pro</p>
                        </Link>
                    </li>
                    <li className="px-2 py-1 rounded-md flex">
                        <Link href={'/'} className="flex justify-center items-center text-xl font-bold gap-1 lg:text-lg">
                            <PiRankingFill className="text-xl" />
                            <p>Rankings</p>
                        </Link>
                    </li>
                    <li className="px-2 py-1 rounded-md flex">
                        <Link href={'/'} className="flex justify-center items-center text-xl font-bold gap-1 lg:text-lg">
                            <GiPistolGun className="text-xl" />
                            <p>Skins</p>
                        </Link>
                    </li>
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
