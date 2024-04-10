import style from "./Collections.module.sass"

export const Collections = () => {
    return(
        <div className={style.collectionContainer}>
            <div className={style.titleContainer}>
                <h3 className={style.collectionTitle}>Подборки по категориям</h3>
                <div className={style.bottomLine}></div>
            </div>

            <div className={style.collectionCards}>
                <div className={style.cardBorder}>
                    <div className={style.card}>
                        <div className={style.textInformation}>
                            <h3 className={style.collectionTitle}>У нас любовь!</h3>
                            <p className={style.info}>Здесь собраны только самые романтичные тайтлы, представленные на нашем сайте</p>
                        </div>
                        <img src="/src/assets/manga.png" alt="card_image" className={style.cardImage}/>
                    </div>
                </div>
                <div className={style.cardBorder}>
                    <div className={style.card}>
                        <div className={style.textInformation}>
                            <h3 className={style.collectionTitle}>Абракадабра~</h3>
                            <p className={style.info}>Коллекция произведений, где каждый мир наполнен чудесами и магией</p>
                        </div>
                        <img src="/src/assets/anime-green.png" alt="card_image" className={style.cardImage}/>
                    </div>
                </div>
                <div className={style.cardBorder}>
                    <div className={style.card}>
                        <div className={style.textInformation}>
                            <h3 className={style.collectionTitle}>Абракадабра~</h3>
                            <p className={style.info}>Коллекция произведений, где каждый мир наполнен чудесами и магией</p>
                        </div>
                        <img src="/src/assets/anime-green.png" alt="card_image" className={style.cardImage}/>
                    </div>
                </div>
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