import style from "./MangaCard.module.sass"
import {Link} from "react-router-dom";
import {PopularMangaPropsType} from "../../types/Props.types.ts";

export const MangaCard = ({mostPopularMangas}: PopularMangaPropsType) => {
    return(
        <>
            {mostPopularMangas?
                <Link to={`/result/${mostPopularMangas._id}`} className={style.cardContainer}>
                    <div className={style.shadowBlock}>
                        <h6 className={style.titleName}>{mostPopularMangas.title}</h6>
                        <div className={style.descriptionContainer}>
                            <div className={style.titleScore}>
                                <span className={style.score}>{mostPopularMangas.score}</span>
                                <img src="/src/assets/Star.svg" alt="star_score" className="star"/>
                            </div>
                            <div className={style.genres}>
                        <span className={style.genresName}>
                            {mostPopularMangas.genres ?
                                mostPopularMangas.genres[0] ? mostPopularMangas.genres[0].name : 'no genre' : 'no genre'
                            }
                            {mostPopularMangas.genres ?
                                mostPopularMangas.genres[1] ? ', ' + mostPopularMangas.genres[1].name : ', no genre' : ', no genre'
                            }
                        </span>
                            </div>
                        </div>
                    </div>
                    <div className={style.imageContainer}>
                        <img src={mostPopularMangas.picture_url} alt="manga_image" className={style.titleImage}/>
                    </div>
                </Link>
                :
                <></>
            }
        </>

    )
}