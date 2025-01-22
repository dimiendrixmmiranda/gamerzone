import Submenu from "./Submenu"

export default interface Menu {
    nome: string,
    icone: React.ReactElement
    linkMenu?: string
    submenu?: Submenu[]
}