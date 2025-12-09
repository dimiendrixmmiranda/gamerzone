import {
    AiOutlineQuestionCircle,
    AiOutlineEye,
    AiOutlineSync,
    AiFillCheckCircle,
    AiFillCloseCircle
} from "react-icons/ai";
import { FaHands } from "react-icons/fa6";

export const identificarSituacaoTransferencia = (situacao: string) => {
    switch (situacao) {
        case 'rumor':
            return {
                cor: 'var(--laranja)',
                icone: <AiOutlineQuestionCircle />,
            }

        case 'interesse':
            return {
                cor: 'var(--amarelo)',
                icone: <AiOutlineEye />,
            }

        case 'negociando':
            return {
                cor: 'var(--amarelo)',
                icone: <AiOutlineSync />,
            }

        case 'fechado':
            return {
                cor: 'var(--verde)',
                icone: <AiFillCheckCircle />,
            }

        case 'melou':
            return {
                cor: 'var(--vermelho)',
                icone: <AiFillCloseCircle />,
            }
        case 'de-saida':
            return {
                cor: 'var(--vermelho)',
                icone: <FaHands />,
            }
    }
}
