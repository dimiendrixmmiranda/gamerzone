import { Suspense } from "react";
import BuscaContent from "./BuscaContent";

export default function Page() {
    return (
        <Suspense fallback={<p className="text-2xl w-screen h-screen flex justify-center items-center">Carregando...</p>}>
            <BuscaContent />
        </Suspense>
    );
}