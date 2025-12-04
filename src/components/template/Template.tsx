import Footer from "./footer/Footer";
import Header from "./header/Header";

interface TemplateProps {
    children: React.ReactNode
    paginaClube: boolean
}

export default function Template({ children, paginaClube }: TemplateProps) {
    return (
        <>
            <Header paginaClube={paginaClube}/>
            <main className="bg-zinc-200">
                <div className="max-w-[1440px] mx-auto">
                    {children}
                </div>
            </main>
            <Footer />
        </>
    )
}