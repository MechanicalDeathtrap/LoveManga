import style from "./MangaCompilationsSlider.module.sass"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {useNavigate} from "react-router-dom";

export const MangaCompilationsSlider = () => {
    const navigate = useNavigate();

    const handleCardClick = (tag: string) => {
        navigate(`/catalogue?tag=${tag}`);
    };

    return(
        <div className={style.collectionContainer}>
            <div className={style.titleContainer}>
                <h3 className={style.collectionTitle}>Подборки по категориям</h3>
                <div className={style.bottomLine}></div>
            </div>

            <div className={style.collectionCards} >
                <div className={style.cardBorder} onClick={() => handleCardClick('Drama')}>
                    <div className={style.card}>
                        <div className={style.textInformation}>
                            <h3 className={style.collectionTitle}>Какая драма!</h3>
                            <p className={style.info}>Здесь собраны только самые драматичные тайтлы, представленные на нашем сайте</p>
                        </div>
                        <img src="/src/assets/manga.png" alt="card_image" className={`${style.cardImage} ${style.loveCollectionImage}`}/>
                    </div>
                </div>
                <div className={style.cardBorder} onClick={() => handleCardClick('Supernatural')}>
                    <div className={style.card}>
                        <div className={style.textInformation}>
                            <h3 className={style.collectionTitle}>Абракадабра~</h3>
                            <p className={style.info}>Коллекция произведений, где каждый мир наполнен мистикой</p>
                        </div>
                        <img src="/src/assets/anime-green.png" alt="card_image" className={style.cardImage}/>
                    </div>
                </div>
{/*                <div className={style.cardBorder}>
                    <div className={style.card}>
                        <div className={style.textInformation}>
                            <h3 className={style.collectionTitle}>Абракадабра~</h3>
                            <p className={style.info}>Коллекция произведений, где каждый мир наполнен чудесами и магией</p>
                        </div>
                        <img src="/src/assets/anime-green.png" alt="card_image" className={style.cardImage}/>
                    </div>
                </div>*/}
            </div>

            <div className={`${style.arrowContainer} ${style.arrowLeft}`}>
                <img src="/src/assets/arrow.svg" alt="arrow" className={style.arrow}/>
            </div>
            <div className={`${style.arrowContainer} ${style.arrowRight}`}>
                <img src="/src/assets/arrow.svg" alt="arrow" className={style.arrow}/>
            </div>
        </div>
    )
}