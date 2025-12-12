'use client'
import { FaBars } from "react-icons/fa";
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import Menu from "../menu/Menu";
import Login from "../login/Login";
import Redes from "../redes/Redes";

export default function OffCanvas() {
    const [visibleRight, setVisibleRight] = useState(false);

    return (
        <div className="card absolute top-[50%] left-2 md:hidden" style={{transform: 'translate(0,-50%)'}}>
            <div className="flex gap-2 justify-content-center text-3xl">
                <Button onClick={() => setVisibleRight(true)}>
                    <FaBars />
                </Button>
            </div>
            <Sidebar header={<h2 className="text-4xl text-black font-bold">Menu</h2>} visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                <div className="w-full h-full flex flex-col gap-6 text-black">
                    <Menu visibilidade="flex justify-start h-fit" estilo="flex flex-col w-full text-2xl gap-2" />
                    <div className="bg-azul-escuro p-2 rounded-[8px] text-white">
                        <Login estilo="flex w-full" larguraPerfil="10" visibilidadeLabel="flex" />
                    </div>
                    <div className="mt-auto">
                        <Redes
                            estilo="grid grid-cols-4 text-4xl"
                            visibilidadeLabel={false}
                            linkInstagram="/"
                            linkFacebook="/"
                            linkEmail="/"
                            linkTiktok="/"
                        />
                    </div>
                </div>
            </Sidebar>
        </div>
    )
}
