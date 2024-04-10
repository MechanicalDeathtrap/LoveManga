import {Link, useParams} from "react-router-dom";
import borderStyle from "../Catalogue/Catalogue.module.sass";
import style from "./TitlePage.module.sass"
import {CommentsCollection} from "../CommentsCollection/CommentsCollection.tsx";

export const TitlePage = () =>{
    const {id} = useParams();

    return(
        <>
            <div className={borderStyle.border}></div>
            <div className={style.titleContainer}>
                <div className={style.asideContainer}>
                    <img src="/src/assets/placeholderImage.png" alt="title_image" className={style.titleImage}/>
                    <div className={style.titleButtons}>
                        <Link to='/titles/placeholder/placeholder' className={style.titleButton}>Читать</Link>
                        <button className={style.titleButton}>Добавить в избранное</button>
                    </div>
                </div>
                <div className={style.mainContainer}>
                    <div className={style.mainInfoContainer}>
                        <div className={style.titles}>
                            <h1 className={style.title}>Невероятные приключения ДжоДжо</h1>
                            <span className={style.englishTitle}>JoJo no Kimyou na Bouken</span>
                        </div>
                        <div className={style.smallInfo}>
                            <div className="rating">
                                <img src="/src/assets/Star.svg" alt="star" className={style.star}/>
                            </div>
                            <p className={style.description}>Эта история берет своё начало в XIX веке, рассказывая нам о двух
                                сводных братьях - Джонатане Джостаре и Дио Брандо...Конец девятнадцатого века. Как это часто бывало,
                                неосторожно завернув на повороте, повозка с молодой семьей разбилась. Случайно
                                оказавшийся там человек по имени Дарио Брандо, который не отличался хорошими манерами и
                                представлениями о жизни, решил обокрасть похожего на аристократа пострадавшего. Но, к его
                                сожалению, мужчина оказался жив. Поблагодарив Дарио за спасение жизни, сэр Джостар, как
                                истинный джентльмен, пообещал не остаться в долгу. Спустя двенадцать лет, умирая... Далее</p>
                        </div>
                    </div>
                    <div className={style.genres}>
                        <span className={style.genre}>Экшен</span>
                        <span className={style.genre}>Приключения</span>
                        <span className={style.genre}>Комедия</span>
                        <span className={style.genre}>Фэнтези</span>
                    </div>
                    <div className={style.commentsSection}>
                        <div className={style.topCommentsContainer}>
                            <h3 className={style.commentsTitle}>Комментарии 2</h3>
                            <div className={style.fieldContainer}>
                                <input name="" id=""  className={style.commentsField} placeholder="Оставьте свой отзыв..."></input>
                                <button className={style.commentButton}>
                                    <img src="/src/assets/arrowButton.svg" alt="arrow" className="arrow"/>
                                </button>
                            </div>

                            <div className={borderStyle.border}></div>
                        </div>
                        <div className={style.comments}>
                            <CommentsCollection/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}