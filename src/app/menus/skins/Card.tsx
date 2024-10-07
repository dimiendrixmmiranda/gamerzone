import Image from "next/image";
import style from './style.module.css'


type PropsCard = {
    urlArma: string
    nomeArma: string
    click: () => void
}

export default function Card(props: PropsCard) {
    return (
        <li className={`w-36 h-[115px] bg-[--preto-skins] inline-block cursor-pointer mr-2 ${style.cardMenu}`} onClick={() => props.click()}>
            <div className="w-full h-full" style={{ display: 'grid', gridTemplateRows: '1fr 25px' }}>
                <div className="relative h-[55px] self-center">
                    <Image
                        src={props.urlArma}
                        alt={props.nomeArma}
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <h2 className="font-bold text-center">{props.nomeArma}</h2>
            </div>
        </li>
    )
}