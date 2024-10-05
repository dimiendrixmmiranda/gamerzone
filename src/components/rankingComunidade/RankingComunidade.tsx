'use client';
import React, { useState } from 'react';
import { OrderList } from 'primereact/orderlist';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import { listaDeTimes } from '@/core';
import Image from 'next/image';
import Time from '@/core/times/times';

export default function RankingComunidade() {
    const [items, setItems] = useState(listaDeTimes);

    const itemTemplate = (item: Time) => {
        // Encontre o índice do item na lista
        const index = items.findIndex(i => i.id === item.id);

        return (
            <div className="w-full h-fit relative" style={{ display: 'grid', gridTemplateColumns: '40px 40px 1fr' }}>
                <span>{index + 1}</span> {/* Mostra a posição atual do item */}
                <Image src={item.logo} alt={item.nome} fill className='object-contain' style={{ gridColumn: '2/3' }} />
                <span style={{ gridColumn: '3/4' }}>{item.nome}</span>
            </div>
        );
    };

    const handleGetOrder = () => {
        const currentOrder = items.map(item => item.nome);
        console.log(items)
        console.log("Ordem atual:", currentOrder);
        alert(`Ordem atual: ${currentOrder.join(', ')}`);
    };

    return (
        <div className={`w-full flex-col teste`}>
            <h2 className='bg-[--azul] uppercase text-center text-lg leading-5 py-2 border border-b'>Vote no Ranking da Comunidade</h2>
            <OrderList
                value={items}
                onChange={(e) => setItems(e.value)}
                itemTemplate={itemTemplate} // Apenas um parâmetro aqui
                dataKey="id"  // Definindo o campo de chave única para cada item
                dragdrop      // Habilitando arrastar e soltar
            />
            <button onClick={handleGetOrder} className='w-full bg-[--azul] uppercase font-bold text-white py-2'>
                Votar!
            </button>
        </div>
    );
}