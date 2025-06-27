'use client'
import useAuth from "@/data/hooks/useAuth"

export default function Page(){
    const { logout } = useAuth()

    return (
        <div>
            Aqui
            <button onClick={logout}>Logaut</button>
        </div>
    )
}