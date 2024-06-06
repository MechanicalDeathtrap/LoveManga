import style from "../../CatalogueCardList/CatalogueCardList.module.sass";
import {MangaTypes} from "../../../types/Manga.types.ts";
import {Link} from "react-router-dom";

export const SearchCardList = ({searchResults} :  MangaTypes[]) =>{
    return(
        <ul className={style.listCard}>
            {
                searchResults.map((manga: MangaTypes, index: number) =>{
                    return(
                        <li key={index}>
                            <Link to={`/titles/${manga._id}`} className={style.cardContainer}>
                                <img src={manga.picture_url} loading="lazy" alt="title_image" className={style.cardImage}/>
                                <div className={style.ratingContainer}>
                                    <span className={style.score}>{manga.score}</span>
                                    <img src="/src/assets/Star.svg" alt="star_score" className={style.star}/>
                                </div>
                                <span className={style.cardTitle}>{manga.title}</span>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}