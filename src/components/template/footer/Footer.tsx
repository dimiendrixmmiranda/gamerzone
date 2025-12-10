import Redes from "@/components/redes/Redes";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="pb-[60px] bg-azul-escuro xl:pb-0">
            <div className="xl:max-w-[1440px] xl:mx-auto">
                <div className="p-4 text-white flex flex-col gap-4 justify-center items-center md:grid md:grid-cols-3 md:gap-2 lg:grid-cols-4 lg:gap-4 xl:p-8 xl:pb-4">
                    <Link href={'/'} className="flex items-center">
                        <div className="relative w-12 h-12 md:w-20 md:h-20">
                            <Image alt="Logo GamerZone" src={'/logo/logo-gamer-zone.png'} fill className="object-cover" />
                        </div>
                        <div className="relative w-24 h-12 md:h-14 md:w-40">
                            <Image alt="Texto GamerZone" src={'/logo/texto-gamer-zone.png'} fill className="object-cover" />
                        </div>
                    </Link>
                    <div className="w-full md:text-[.9em]">
                        <p>Imprensa: dimiendrixmmiranda@gmail.com</p>
                        <p>Pauta: dimiendrixmmiranda@gmail.com</p>
                        <p>Contato: dimiendrixmmiranda@gmail.com</p>
                        <p>Comercial: dimiendrixmmiranda@gmail.com</p>
                    </div>
                    <div className="w-full md:text-sm xl:text-base">
                        <p>Sobre nós</p>
                        <p>Política de Privacidade</p>
                        <p>Trabalhe conosco</p>
                        <p>Anuncie no site</p>
                    </div>
                    <div className="w-full md:col-start-1 md:col-end-4 lg:col-start-4 lg:col-end-5">
                        <Redes
                            estilo="grid grid-cols-2 text-lg font-bold md:grid-cols-4 lg:grid-cols-2 lg:gap-4"
                            visibilidadeLabel={true}
                            linkInstagram="/"
                            linkFacebook="/"
                            linkEmail="/"
                            linkTiktok="/"
                        />
                    </div>
                    <div className="col-start-1 col-end-3 flex justify-center items-center mt-2 text-center md:col-end-4 lg:col-end-5 xl:col-end-6">
                        <span>© 2025 • Todos os direitos reservados</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}