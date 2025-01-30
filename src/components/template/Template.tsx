import { ReactNode } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";

interface TemplateProps{
    children: ReactNode
}

export default function Template({children}: TemplateProps) {
    return (
        <>
            <Header></Header>
            <Main>
                {children}
            </Main>
            <Footer></Footer>
        </>
    )
}