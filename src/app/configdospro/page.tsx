import Template from "@/components/template/Template";

export default function Page() {
    return (
        <Template estiloContainer="max-w-full" paginaClube={false}>
            <div className="w-full bg-zinc-800">
                <div className="bg-zinc-800 min-h-[80vh] relative">
                    <div
                        className="absolute z-10 top-0 left-0 w-full h-full bg-cover bg-center blur-sm"
                        style={{ backgroundImage: "url('/default/cs2.png')" }}
                    >
                    </div>
                    <div className="relative z-20 p-4 text-white">
                        <h2 className="text-2xl font-bold text-center" style={{textShadow: '1px 1px 2px black'}}>Confira as configurações dos Pro Players de Counter Strike</h2>
                    </div>
                </div>
            </div>
        </Template>
    )
}