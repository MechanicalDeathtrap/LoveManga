import {Header} from "../components/Header/Header.tsx";
import {Footer} from "../components/Footer/Footer.tsx";
import {Outlet} from "react-router-dom";

export const Layout = () =>{
    return(
        <main >
            <Header/>
            <Outlet/>
            <Footer/>
        </main>
    )
}