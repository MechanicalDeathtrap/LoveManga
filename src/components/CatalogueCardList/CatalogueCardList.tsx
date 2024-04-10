import style from "./CatalogueCardList.module.sass"
import {Link} from "react-router-dom";

export const CatalogueCardList = () =>{
    const placeholder = 'placeholder'

    return(
        <ul className={style.listCard}>
            <Link to={`/titles/${placeholder}`} className={style.cardContainer}>
                <img src="/src/assets/placeholderImage.png" alt="title_image" className={style.cardImage}/>
                <div className={style.ratingContainer}>
                        <span className={style.score}>8.8</span>
                        <img src="/src/assets/Star.svg" alt="star_score" className={style.star}/>
                </div>
                <span className={style.cardTitle}>Невероятные приключения ДжоДжо</span>
            </Link>
        </ul>

    )
}