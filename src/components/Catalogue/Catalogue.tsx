import style from "./Catalogue.module.sass"
import {CatalogueCardList} from "../CatalogueCardList/CatalogueCardList.tsx";

export const Catalogue = () =>{
    return(
        <>
            <div className={style.border}></div>
            <div className={style.catalogueContainer}>
                <aside className={style.filter}>
                    <div className={style.filterTitleContainer}>
                        <h3 className={style.filterTitle__title}>Фильтр</h3>
                        <img src="/src/assets/cross.svg" alt="cross" className={style.deleteFilters}/>
                    </div>
                    <div className={style.filters}>
                        <div className={style.filterBorder}>
                            <div className={style.filterBorderBackground}>
                                {/*TODO full sections*/}
                                <section className={style.filterSection}>Жанр</section>
                                <img src="/src/assets/arrow-right.svg" alt="arrow"/>
                            </div>
                        </div>
                        <div className={style.filterBorder}>
                            <div className={style.filterBorderBackground}>
                                {/*TODO full sections*/}
                                <section className={style.filterSection}>Теги</section>
                                <img src="/src/assets/arrow-right.svg" alt="arrow"/>
                            </div>
                        </div>
                        <div className={style.filterBorder}>
                            <div className={style.filterBorderBackground}>
                                {/*TODO full sections*/}
                                <section className={style.filterSection}>Рейтинг</section>
                                <img src="/src/assets/arrow-right.svg" alt="arrow"/>
                            </div>
                        </div>
                    </div>
                </aside>
                <div className={style.bottomLine}></div>
                <div className={style.catalogueCollection}>
                    <div className={style.catalogueTitle}>
                        <h3 className={style.catalogueTitle__title}>Каталог</h3>
                        <div className={style.filterContainer}>
                            <span className={style.ratingFilter}>По рейтингу</span>
                            <img src="/src/assets/filter.svg" alt="filter"/>
                        </div>
                    </div>
                    <CatalogueCardList/>

                </div>
            </div>
        </>
    )
}