import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {HomePage} from "../pages/HomePage.tsx";
import {Layout} from "../layout/Layout.tsx";
import {Catalogue} from "../components/Catalogue/Catalogue.tsx";
import {SearchResultsPage} from "../components/SeacrhResultsPage/SearchResultsPage.tsx";
import {TitlePage} from "../components/TitlePage/TitlePage.tsx";
import {Settings} from "../components/Settings/Settings.tsx";
import {UserCatalogue} from "../components/UserCatalogue/UserCatalogue.tsx";
import {MangaReaderPage} from "../components/MangaReaderPage/MangaReaderPage.tsx";
import {NotFoundPage} from "../components/NotFoundPage/NotFoundPage.tsx";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<HomePage/>}/>
            <Route element={<Layout/>}>
                <Route path='/catalogue' element={<Catalogue/>}/>
                <Route path='/results' element={<SearchResultsPage/>}/>
                <Route path='/titles/:id' element={<TitlePage/>}/>
                <Route path='/profile/settings' element={<Settings/>}/>
                <Route path='/profile/:userCatalogue' element={<UserCatalogue/>}/>
            </Route>
            <Route path='/titles/:id/:chapterId' element={<MangaReaderPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </>
    )
)