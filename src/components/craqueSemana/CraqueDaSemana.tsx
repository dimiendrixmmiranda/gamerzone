export default function CraqueDaSemana(){
    return (
        <div className="bg-[#FF8400] w-[95%] mx-auto mt-6 p-2 h-fit" style={{boxShadow: '1px 1px 2px 2px black'}}>
            <h3 className="uppercase text-center font-black text-2xl leading-6 py-2 lg:mb-2 lg:text-3xl">Vote no Craque da Semana</h3>
            <form action="" className="flex flex-wrap gap-2 justify-center">
                <div className="max-w-[105px] bg-[--azul] relative flex flex-col justify-center items-center p-1 rounded-md md:max-w-[18%]">
                    <img src="./ks.png" alt="" />
                    <img className="absolute w-5 h-5 object-cover top-2 right-2" src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png" alt="" />
                    <h4 className="font-bold mt-1">KSCERATO</h4>
                    <input type="radio" name="craqueSemana" id="craqueSemana" className="cursor-pointer"/>
                </div>
                <div className="max-w-[105px] bg-[--azul] relative flex flex-col justify-center items-center p-1 rounded-md md:max-w-[18%]">
                    <img src="./ks.png" alt="" />
                    <img className="absolute w-5 h-5 object-cover top-2 right-2" src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png" alt="" />
                    <h4 className="font-bold mt-1">KSCERATO</h4>
                    <input type="radio" name="craqueSemana" id="craqueSemana" className="cursor-pointer"/>
                </div>
                <div className="max-w-[105px] bg-[--azul] relative flex flex-col justify-center items-center p-1 rounded-md md:max-w-[18%]">
                    <img src="./ks.png" alt="" />
                    <img className="absolute w-5 h-5 object-cover top-2 right-2" src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png" alt="" />
                    <h4 className="font-bold mt-1">KSCERATO</h4>
                    <input type="radio" name="craqueSemana" id="craqueSemana" className="cursor-pointer"/>
                </div>
                <div className="max-w-[105px] bg-[--azul] relative flex flex-col justify-center items-center p-1 rounded-md md:max-w-[18%]">
                    <img src="./ks.png" alt="" />
                    <img className="absolute w-5 h-5 object-cover top-2 right-2" src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png" alt="" />
                    <h4 className="font-bold mt-1">KSCERATO</h4>
                    <input type="radio" name="craqueSemana" id="craqueSemana" className="cursor-pointer"/>
                </div>
                <div className="max-w-[105px] bg-[--azul] relative flex flex-col justify-center items-center p-1 rounded-md md:max-w-[18%]">
                    <img src="./ks.png" alt="" />
                    <img className="absolute w-5 h-5 object-cover top-2 right-2" src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png" alt="" />
                    <h4 className="font-bold mt-1">KSCERATO</h4>
                    <input type="radio" name="craqueSemana" id="craqueSemana" className="cursor-pointer"/>
                </div>
                <button type="submit" className="w-full bg-[--azul] uppercase font-bold text-lg py-1 mt-2">Votar</button>
            </form>
        </div>
    )
}