// app/buscar/page.tsx
import { Suspense } from "react"
import Template from "@/components/template/Template"
import BuscarConteudo from "@/components/buscarConteudo/buscarConteudo"

export default function Page() {
    return (
        <Template logo={true} textoLogo={true} menuSuperior={true}>
            <div className="p-4 min-h-screen">
                <Suspense fallback={<p>Carregando busca...</p>}>
                    <BuscarConteudo />
                </Suspense>
            </div>
        </Template>
    )
}
