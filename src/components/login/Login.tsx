import React, { useContext, useRef } from 'react';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { FaUser, FaUserPlus } from 'react-icons/fa';
import { IoLogInSharp, IoLogOutSharp } from "react-icons/io5";
import { useRouter } from 'next/navigation'
import Auth from '@/lib/context/Auth';
import { BsPersonSquare } from "react-icons/bs";

interface LoginProps {
    estilo: string
    larguraPerfil: string
    visibilidadeLabel: string
}

export default function Login({ estilo, larguraPerfil, visibilidadeLabel }: LoginProps) {
    const menuLeft = useRef<Menu>(null);
    const toast = useRef<Toast>(null);
    const router = useRouter()
    const { usuario, logout } = useContext(Auth);

    const items = [
        {
            label: 'Crie uma conta ou faça Login',
            items: [
                {
                    label: 'Entrar',
                    icon: <IoLogInSharp />,
                    command: () => router.push('/login')
                },
                {
                    label: 'Criar Conta',
                    icon: <FaUserPlus />,
                    command: () => router.push('/criarConta')
                }
            ]
        }
    ];
    const itemsUsuario = [
        {
            label: `Bem vindo ${usuario?.nick}`,
            items: [
                {
                    label: 'Meu Perfil',
                    icon: <BsPersonSquare />,
                    command: () => router.push('/perfil')
                },
                {
                    label: 'Logaut',
                    icon: <IoLogOutSharp />,
                    command: () => logout && logout('/')
                },
            ]
        }
    ];

    return (
        <div className={`${estilo}`}>
            {
                usuario ? (
                    <div className="card w-full items-center gap-2">
                        <Toast ref={toast} />
                        <Menu model={itemsUsuario} popup ref={menuLeft} id="popup_menu_left" />
                        <Button
                            label=""
                            icon={
                                <div className='flex text-center gap-2 w-full'>
                                    <div className={`w-${larguraPerfil} h-${larguraPerfil} rounded-full overflow-hidden bg-zinc-900`}>
                                        <img src={usuario.imagemURL} alt="Usuário" className="w-full h-full object-cover" />
                                    </div>
                                    <div className={`${visibilidadeLabel} flex-col my-auto`}>
                                        <p className='text-[.5em] text-start'>Bem vindo</p>
                                        <h2 className="leading-4 truncate max-w-[9ch]">{usuario.nick}</h2>
                                    </div>
                                </div>
                            }
                            className="gap-2 w-full"
                            onClick={(event) => menuLeft.current?.toggle(event)}
                            aria-controls="popup_menu_left"
                            aria-haspopup
                        />
                    </div>
                ) : (
                    <div className="card justify-content-center items-center">
                        <Toast ref={toast} />
                        <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
                        <Button
                            label="Entrar"
                            icon={<FaUser />}
                            className="gap-2 w-full"
                            onClick={(event) => menuLeft.current?.toggle(event)}
                            aria-controls="popup_menu_left"
                            aria-haspopup
                        />
                    </div>
                )
            }
        </div>
    )
}