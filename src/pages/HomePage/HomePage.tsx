import {HomePageBanner} from "../../components/HomePageBanner/HomePageBanner.tsx";
import {Header} from "../../components/Header/Header.tsx";
import {PopularMangasSlider} from "../../components/PopularMangasSlider/PopularMangasSlider.tsx";
import {MangaCompilationsSlider} from "../../components/MangaCompilationsSlider/MangaCompilationsSlider.tsx";
import {Footer} from "../../components/Footer/Footer.tsx";

export const HomePage = () =>{
    return(
        <>
            <HomePageBanner>
                <Header/>
            </HomePageBanner>
            <PopularMangasSlider/>
            <MangaCompilationsSlider/>
            <Footer/>
        </>
    )
}