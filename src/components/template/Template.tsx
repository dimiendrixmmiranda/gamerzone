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
            <Header logo={logo} textoLogo={textoLogo} menuSuperior={menuSuperior} clube={clube} />
            <main className="bg-zinc-200 text-black">
                <div className="max-w-[1440px] mx-auto">
                    {
                        children
                    }
                </div>
            </main>
            <Footer />
        </>
    )
}