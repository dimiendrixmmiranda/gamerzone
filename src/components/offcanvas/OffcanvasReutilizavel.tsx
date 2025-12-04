
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

interface OffcanvasReutilizavelProps {
    icone: React.ReactElement
    tituloCabecalho: React.ReactElement
    children: React.ReactNode
}

export default function OffcanvasReutilizavel({ icone, tituloCabecalho, children }: OffcanvasReutilizavelProps) {
    const [visibleBottom, setVisibleBottom] = useState(false);

    return (
        <div className="card">
            <div className="flex gap-2 justify-content-center w-full h-full">
                <Button icon={icone} onClick={() => setVisibleBottom(true)} className='w-full h-full'/>
            </div>

            <Sidebar header={tituloCabecalho} visible={visibleBottom} position="bottom" onHide={() => setVisibleBottom(false)} className='h-full'>
                {children}
            </Sidebar>
        </div>
    )
}
