import Clube from "@/interfaces/Clube"
import Footer from "./footer/Footer"
import Header from "./header/Header"

interface TemplateProps {
    children: React.ReactNode
    logo?: boolean
    textoLogo?: boolean
    clube?: Clube | null
    menuSuperior?: boolean
}
export default function Template({ children, logo, textoLogo, clube, menuSuperior }: TemplateProps) {
    return (
        <>
            <Header logo={logo} textoLogo={textoLogo} textoClube={clube?.nome} logoClube={clube?.enderecoImagem} menuSuperior={menuSuperior}/>
            <main className="bg-zinc-200 text-black">
                {
                    children
                }
            </main>
            <Footer />
        </>
    )
}