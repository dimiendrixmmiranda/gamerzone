'use client';
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';
import { listaMenu } from 'core';

export default function Offcanvas() {
    const [visibleRight, setVisibleRight] = useState(false);

    return (
        <div className="card relative md:hidden offcanvas">
            <Sidebar className='offcanvas' visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                <h2 className='w-full text-3xl font-black text-center absolute' style={{ top: '2%', left: '50%', transform: 'translate(-50%, 0%)' }}>Menu</h2>
                <ul className='flex flex-col'>
                    {
                        listaMenu.map((item, index) => {
                            return (
                                <li key={index} className="px-2 py-1 rounded-md flex">
                                    <Link href={item.titulo.link} className="flex justify-center items-center text-xl font-bold gap-1 lg:text-lg">
                                        {item.titulo.icone}
                                        <p>{item.titulo.texto}</p>
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
