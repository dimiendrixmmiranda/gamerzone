interface CaixaDeDialogoProps {
    frase: string;
}

export default function CaixaDeDialogo({ frase }: CaixaDeDialogoProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-black/60 absolute inset-0" />
            
            <div className="relative bg-zinc-900 text-white px-6 py-4 rounded-lg shadow-lg border border-zinc-700 animate-fade">
                <h2 className="text-xl font-bold text-center">{frase}</h2>
            </div>
        </div>
    );
}
