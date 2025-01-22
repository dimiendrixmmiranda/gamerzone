import { ReactNode } from "react"

interface MainProps{
    children: ReactNode
}

export default function Main({children}: MainProps){
    return (
        <main className="bg-[--cinza] min-h-[100vh] md:pb-4">
            {children}
        </main>
    )
}