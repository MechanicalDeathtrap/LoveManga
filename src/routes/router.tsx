import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {HomePage} from "../pages/HomePage/HomePage.tsx";
import {Layout} from "../layout/Layout.tsx";
import {Catalogue} from "../components/Catalogue/Catalogue.tsx";
import {SearchResultsPage} from "../pages/SeacrhResultsPage/SearchResultsPage.tsx";
import {DetailedMangaPage} from "../pages/DetailedMangaPage/DetailedMangaPage.tsx";
import {SettingsProfilePage} from "../pages/SettingsProfilePage/SettingsProfilePage.tsx";
import {UserCatalogue} from "../components/UserCatalogue/UserCatalogue.tsx";
import {MangaReaderPage} from "../pages/MangaReaderPage/MangaReaderPage.tsx";
import {NotFoundPage} from "../pages/NotFoundPage/NotFoundPage.tsx";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<HomePage/>}/>
            <Route element={<Layout/>}>
                <Route path='/catalogue' element={<Catalogue/>}/>
                <Route path='/results/:search' element={<SearchResultsPage/>}/>
                <Route path='/titles/:id' element={<DetailedMangaPage/>}/>
                <Route path='/profile/settings' element={<SettingsProfilePage/>}/>
                <Route path='/profile/:userCatalogue' element={<UserCatalogue/>}/>
            </Route>
            <Route path='/titles/:id/:chapterId' element={<MangaReaderPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </>
    )
)