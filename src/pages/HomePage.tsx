import {Banner} from "../components/Banner/Banner.tsx";
import {Header} from "../components/Header/Header.tsx";
import {ScrollingLine} from "../components/ScrollingLine/ScrollingLine.tsx";
import {Collections} from "../components/Collections/Collections.tsx";
import {Footer} from "../components/Footer/Footer.tsx";

export const HomePage = () =>{
    return(
        <>
            <Banner>
                <Header/>
            </Banner>
            <ScrollingLine/>
            <Collections/>
            <Footer/>
        </>
    )
}