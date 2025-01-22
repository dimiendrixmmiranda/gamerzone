import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { GiHamburgerMenu } from 'react-icons/gi';
import listaDeMenus from '@/core/constants/ListaDeMenus';
import Link from 'next/link';
import styles from './style.module.css';
import listaDeRedesSociais from '@/core/constants/ListaDeRedesSociais';

export default function Offcanvas() {
    const [visibleLeft, setVisibleLeft] = useState(false);
    const [visibleSubmenus, setVisibleSubmenus] = useState<Record<number, boolean>>({});

    const toggleSubmenu = (index: number) => {
        setVisibleSubmenus((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (
        <div className="card">
            <div className="flex w-full h-full gap-2 justify-center items-center md:hidden">
                <Button onClick={() => setVisibleLeft(true)} className="text-4xl mx-auto">
                    <GiHamburgerMenu />
                </Button>
            </div>

            <Sidebar visible={visibleLeft} position="left" onHide={() => setVisibleLeft(false)}>
                <div className={styles.offcanvas}>
                    <h2 className="uppercase font-bold text-3xl absolute top-5 left-6">Menu</h2>
                    <ul className="flex flex-col gap-2 overflow-y-auto">
                        {listaDeMenus.map((menu, index) => (
                            <li key={index}>
                                {menu.linkMenu ? (
                                    <Link href={menu.linkMenu} className="flex gap-1 items-center text-xl">
                                        <div className="flex gap-1 items-center">
                                            {menu.icone}
                                            {menu.nome}
                                        </div>
                                    </Link>
                                ) : (
                                    <div className={styles.menu}>
                                        <div
                                            className="flex gap-1 items-center cursor-pointer"
                                            onClick={() => toggleSubmenu(index)}
                                        >
                                            {menu.icone}
                                            {menu.nome}
                                        </div>
                                        {menu.submenu && (
                                            <ul className={`${visibleSubmenus[index] ? 'flex' : 'hidden'} flex-col pl-6 gap-2`}>
                                                {menu.submenu.map((sub, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link href={sub.link}>{sub.nome}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                    <ul className="grid grid-cols-6">
                        {listaDeRedesSociais.map((rede, i) => (
                            <li key={i} className="flex justify-center items-center">
                                <Link href={rede.link} className="text-2xl">
                                    {rede.icone}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Sidebar>
        </div>
    );
}
