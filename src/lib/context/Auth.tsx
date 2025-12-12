'use client'

import { createContext, useEffect, useState } from "react";
import { useRouter } from 'next/navigation'; // Usando o useRouter corretamente
import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"; // Importando funções de autenticação
import Cookies from 'js-cookie';
import { doc, getDoc, onSnapshot, setDoc, Timestamp } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { Usuario } from "@/interfaces/Usuario";

interface AuthProps {
    usuario?: Usuario | null
    children?: React.ReactNode
    carregando?: boolean
    login?: (email: string, senha: string) => Promise<void>
    logout?: (encaminhamento: string) => Promise<void>
    cadastrar?: (email: string, senha: string, nome: string, nick: string, dataDeNascimento: string | Timestamp, telefone: string, sexo: string) => Promise<void>
    loginGoogle?: () => Promise<void>
}

const Auth = createContext<AuthProps>({})

export function AuthProvider({ children }: AuthProps) {
    const [carregando, setCarregando] = useState(true)
    const [usuario, setUsuario] = useState<Usuario | null>(null)
    const router = useRouter()

    async function configurarSessao(usuarioFirebase: User | null) {
        if (usuarioFirebase && usuarioFirebase.email) {
            const usuarioRef = doc(db, "usuarios", usuarioFirebase.uid)

            setCarregando(true)

            const unsubscribe = onSnapshot(usuarioRef, async (snapshot) => {
                if (snapshot.exists()) {
                    const dados = snapshot.data()
                    const token = await usuarioFirebase.getIdToken()

                    setUsuario({
                        id: usuarioFirebase.uid,
                        uid: usuarioFirebase.uid,
                        email: dados.email || usuarioFirebase.email || "",
                        nome: dados.nome || usuarioFirebase.displayName || "",
                        nick: dados.nick,
                        provedor: usuarioFirebase.providerData[0]?.providerId || "",
                        token,
                        imagemURL: dados.imagemURL || usuarioFirebase.photoURL || "",
                        dataNascimento: dados.data || "",
                        telefone: dados.telefone || "",
                        sexo: dados.sexo,
                        tipo: dados.tipo
                    });

                    Cookies.set("token", token, { expires: 7 });
                    Cookies.set("tipo", dados.tipo || "usuario", { expires: 7 });

                    setCarregando(false)
                } else {
                    setUsuario(null)
                    setCarregando(false)
                }
            })

            return () => unsubscribe()
        } else {
            setUsuario(null)
            setCarregando(false)
            return false
        }
    }

    async function loginGoogle() {
        try {
            setCarregando(true)

            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user

            const ref = doc(db, "usuarios", user.uid)
            const snap = await getDoc(ref)

            if (!snap.exists()) {
                await setDoc(ref, {
                    nome: user.displayName || "",
                    email: user.email || "",
                    telefone: "",
                    data: "",
                    imagemURL: user.photoURL || "/default/usuario-padrao.png",
                    tipo: "usuario"
                });
            }

            await configurarSessao(user)

            router.push("/acesso/usuario")
        } catch (err) {
            console.error("Erro ao logar com Google:", err)
            throw err
        } finally {
            setCarregando(false)
        }
    }


    async function logout(encaminhamento: string) {
        try {
            setCarregando(true)
            await auth.signOut()
            await configurarSessao(null)
            router.push(`${encaminhamento}`)
        } finally {
            setCarregando(false)
        }
    }

    async function login(email: string, senha: string) {
        try {
            setCarregando(true)
            const result = await signInWithEmailAndPassword(auth, email, senha)
            const user = result.user

            await configurarSessao(user)

            // pega o tipo direto do Firestore
            const docSnap = await getDoc(doc(db, "usuarios", user.uid))
            const dados = docSnap.data()
            const tipo = dados?.tipo || "usuario"

            if (tipo === "admin") {
                router.push("/acesso/administrador")
            } else {
                router.push("/perfil")
            }
        } catch (error) {
            console.error("Erro ao autenticar:", error)
            throw error
        } finally {
            setCarregando(false)
        }
    }

    // function gerenciarCookie(logado: boolean) {
    //     if (logado) {
    //         Cookies.set('admin-auth', JSON.stringify(logado), {
    //             expires: 7
    //         })
    //     } else {
    //         Cookies.remove('admin-auth')
    //     }
    // }


    async function cadastrar(email: string, senha: string, nome: string, nick: string, dataDeNascimento: string | Timestamp, telefone: string, sexo: string) {
        try {
            setCarregando(true)
            const result = await createUserWithEmailAndPassword(auth, email, senha)
            const user = result.user

            await updateProfile(user, { displayName: nome })

            await setDoc(doc(db, "usuarios", user.uid), {
                id: user.uid,
                nome,
                email,
                nick,
                dataDeNascimento,
                telefone,
                imagemURL: sexo === 'masculino' ? '/default/default-masculino.png' : '/default/default-feminino.png',
                sexo,
                tipo: "usuario",
            })
            await configurarSessao(user)
            router.push('/perfil')
        } catch (error) {
            console.error("Erro ao cadastrar:", error)
            throw error
        } finally {
            setCarregando(false)
        }
    }

    useEffect(() => {
        const unsubscribe = auth.onIdTokenChanged(async (user) => {
            await configurarSessao(user);
        });

        return () => unsubscribe();
    }, []);


    return (
        <Auth.Provider
            value={{
                usuario,
                carregando,
                logout,
                login,
                cadastrar,
                loginGoogle
            }}
        >
            {children}
        </Auth.Provider>
    );

}

export default Auth;
