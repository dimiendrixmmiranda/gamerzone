'use client'
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

interface SidebarComponentProps {
    titulo: React.ReactElement
    styleTitulo?: string
    children?: React.ReactNode
}

export default function SidebarComponent({ titulo, styleTitulo, children }: SidebarComponentProps) {
    const [visibleRight, setVisibleRight] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                {
                    children
                }
            </Sidebar>
            <Button onClick={() => setVisibleRight(true)}>
                <div className={`${styleTitulo}`}>
                    {titulo}
                </div>
            </Button>
        </div>
    )
}