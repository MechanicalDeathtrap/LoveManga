import {useParams} from "react-router-dom";
import style from "./UserCatalogue.module.sass";
import {CatalogueCardList} from "../CatalogueCardList/CatalogueCardList.tsx";

export const UserCatalogue = () => {
    const {userCatalogue } = useParams();

    const setCatalogueName = () => {
        console.log(userCatalogue);
        return userCatalogue === "favourites" ? "Избранные тайтлы" : "История"
    }

    return(
        <>
            <div className={style.border}></div>
            <div className={style.catalogueContainer}>
                <h1 className={style.catalogueName}>{setCatalogueName()}</h1>
                <CatalogueCardList/>
            </div>
        </>
    )
}