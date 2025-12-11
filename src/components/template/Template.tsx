import MenuInferior from "../menuInferior/MenuInferior";
import Footer from "./footer/Footer";
import Header from "./header/Header";

interface TemplateProps {
    children: React.ReactNode
    paginaClube: boolean
    estiloContainer?: string
}

export default function Template({ children, paginaClube, estiloContainer }: TemplateProps) {
    return (
        <div className="flex flex-col overflow-hidden">
            <Header paginaClube={paginaClube} />
            <main className="bg-zinc-200">
                <div className={`max-w-[1440px] mx-auto ${estiloContainer}`}>
                    {children}
                </div>
            </main>
            <Footer />
            <MenuInferior />
        </div>
    )
}