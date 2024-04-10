import style from "./TitleCard.module.sass"
import {Link} from "react-router-dom";

export const TitleCard = () => {
    const placeholder = 'placeholder'

    return(
        <Link to={`/result/${placeholder}`} className={style.cardContainer}>
            <div className={style.shadowBlock}>
                <h6 className={style.titleName}>Невероятные приключения ДжоДжо</h6>
                <div className={style.descriptionContainer}>
                    <div className={style.titleScore}>
                        <span className={style.score}>8.8</span>
                        <img src="/src/assets/Star.svg" alt="star_score" className="star"/>
                    </div>
                    <div className={style.genres}>
                        <span className={style.genresName}>Экшен, приключения</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}