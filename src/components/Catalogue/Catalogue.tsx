import style from "./Catalogue.module.sass"
import {CatalogueCardList} from "../CatalogueCardList/CatalogueCardList.tsx";
import {useState} from "react";
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import axios from "axios";
import {MangaTypes} from "../../types/Manga.types.ts";

const AccordionItem = ({ header, ...rest }) => (
    <Item
        {...rest}
        header={
            <div className={style.accordionHeader}>
                {header}
                <img className={style.chevron} src="/src/assets/arrow-right.svg"  alt="Chevron Down" />
            </div>
        }
        className={style.item}
        buttonProps={{
            className: ({ isEnter }) =>
                `${style.itemBtn} ${isEnter && style.itemBtnExpanded}`,
        }}
        contentProps={{ className: style.itemContent }}
        panelProps={{ className: style.itemPanel }}
    />
);
export const Catalogue = () =>{
    const [isMostPopular, setMostPopular] = useState(false)

    const [genres, setGenres] = useState<string[]>([]);
    const [themes, setThemes] = useState<string[]>([]);
    const [demographic, setDemographic] = useState<string[]>([]);
    const [rating, setRating] = useState<number | null>(null);
    const [filteredManga, setFilteredManga] = useState([] as MangaTypes[]);
    const [openItems, setOpenItems] = useState<string | null>(null);

    const handleSearch = async () => {
            await axios.post('http://localhost:4444/manga/search', {
                genres,
                themes,
                demographic,
                rating
            }).then((res) =>{
                console.log(res.data);
                setFilteredManga(res.data)
            }).catch ((err) => {
            console.error("Ошибка поиска манги:", err)
        })
    };

    const handleSelect = (type: string, value: string | number) => {
        switch (type) {
            case 'genre':
                setGenres([...genres, value as string]);
                break;
            case 'theme':
                setThemes([...themes, value as string]);
                break;
            case 'demographic':
                setDemographic([...demographic, value as string]);
                break;
            case 'rating':
                setRating(value as number);
                break;
            default:
                break;
        }
        setOpenItems(null); // Close the accordion
    };

    const renderOptions = (type: string, options: string[] | number[]) => (
        <div className={style.optionsContainer}>
            {options.map(option => (
                <option
                    key={option.toString()}
                    value={option}
                    onClick={() => handleSelect(type, option)}
                >
                    {option}
                </option>
            ))}
        </div>
    );

    const сlearFilters = () => {
        setGenres([]);
        setThemes([]);
        setDemographic([]);
        setRating(null);
    };

    return (
        <>
            <div className={style.border}></div>
            <div className={style.catalogueContainer}>
                <aside className={style.filter}>
                    <div className={style.filterTitleContainer}>
                        <h3 className={style.filterTitle__title}>Фильтр</h3>
                        <button className={style.clearButton} onClick={сlearFilters}>
                            <img src="/src/assets/cross.svg" alt="cross" className={style.deleteFilters} />
                        </button>
                    </div>
                    <Accordion className={style.filters} openItems={openItems}>
                        <div className={style.filterBorder}>
                            <div className={style.filterBorderBackground}>
                                <AccordionItem
                                    header={`Жанр${genres.length ? `: ${genres.join(', ')}` : ''}`}
                                    className={style.filterSection}
                                    onClick={() => setOpenItems(openItems === 'genre' ? null : 'genre')}
                                >
                                    {renderOptions('genre', ["Action", "Adventure", "Award Winning", "Drama", "Fantasy", "Horror", "Supernatural", "Slice of life", "Suspense", "Sci-Fi", "Comedy"])}
                                </AccordionItem>
                            </div>
                        </div>
                        <div className={style.filterBorder}>
                            <div className={style.filterBorderBackground}>
                                <AccordionItem
                                    header={`Теги${themes.length ? `: ${themes.join(', ')}` : ''}`}
                                    className={style.filterSection}
                                    onClick={() => setOpenItems(openItems === 'theme' ? null : 'theme')}
                                >
                                    {renderOptions('theme', ["Gore", "Military", "Mythology", "Psychological", "Survival", "Historical", "Samurai", "Super power", "Parody", "Horror"])}
                                </AccordionItem>
                            </div>
                        </div>
                        <div className={style.filterBorder}>
                            <div className={style.filterBorderBackground}>
                                <AccordionItem
                                    header={`Рейтинг${rating ? `: ${rating}` : ''}`}
                                    className={style.filterSection}
                                    onClick={() => setOpenItems(openItems === 'rating' ? null : 'rating')}
                                >
                                    {renderOptions('rating', [9, 8, 7, 6, 5, 4, 3, 2, 1])}
                                </AccordionItem>
                            </div>
                        </div>
                    </Accordion>
                    <button type="button" onClick={handleSearch} className={style.searchButton}>Поиск</button>
                </aside>
                <div className={style.bottomLine}></div>
                <div className={style.catalogueCollection}>
                    <div className={style.catalogueTitle}>
                        <h3 className={style.catalogueTitle__title}>Каталог</h3>
                        <div className={style.filterContainer}>
                            <button type="button" className={style.ratingFilter} onClick={() => setMostPopular((prevState) => !prevState)}>По рейтингу</button>
                            <img src="/src/assets/filter.svg" alt="filter" />
                        </div>
                    </div>
                    <CatalogueCardList isFavouritesPage={false} isMostPopular={isMostPopular} filteredManga={filteredManga} />
                </div>
            </div>
        </>
    );

/*    return(
        <>
            <div className={style.border}></div>
            <div className={style.catalogueContainer}>
                <aside className={style.filter}>
                    <div className={style.filterTitleContainer}>
                        <h3 className={style.filterTitle__title}>Фильтр</h3>
                        <img src="/src/assets/cross.svg" alt="cross" className={style.deleteFilters}/>
                    </div>
                    <Accordion className={style.filters}>
                        <div className={style.filterBorder}>
                            <div className={style.filterBorderBackground}>
                                {/!*TODO full sections*!/}
                                <AccordionItem header='Жанр' className={style.filterSection}>
                                    <div className={style.optionsContainer}>
                                        <option value="Action">Action</option>
                                        <option value="Adventure">Adventure</option>
                                        <option value="Award Winning">Award Winning</option>
                                        <option value="Drama">Drama</option>
                                        <option value="Fantasy">Fantasy</option>
                                        <option value="Horror">Horror</option>
                                        <option value="Supernatural">Supernatural</option>
                                        <option value="Slice of life">Slice of life</option>
                                        <option value="Suspense">Suspense</option>
                                        <option value="Sci-Fi">Sci-Fi</option>
                                        <option value="Comedy">Comedy</option>
                                    </div>
                                </AccordionItem>
                            </div>
                        </div>
                        <div className={style.filterBorder}>
                            <div className={style.filterBorderBackground}>
                                {/!*TODO full sections*!/}
                                <AccordionItem header='Теги' className={style.filterSection}>
                                    <div className={style.optionsContainer}>
                                        <option value="Gore">Gore</option>
                                        <option value="Military">Military</option>
                                        <option value="Mythology">Mythology</option>
                                        <option value="Psychological">Psychological</option>
                                        <option value="Seinen">Seinen</option>
                                        <option value="Shounen">Shounen</option>
                                        <option value="Survival">Survival</option>
                                        <option value="Historical">Historical</option>
                                        <option value="Samurai">Samurai</option>
                                        <option value="Super power">Super power</option>
                                        <option value="Parody">Parody</option>
                                        <option value="Horror">Horror</option>
                                    </div>
                                </AccordionItem>
                            </div>
                        </div>
                        <div className={style.filterBorder}>
                            <div className={style.filterBorderBackground}>
                                {/!*TODO full sections*!/}
                                <AccordionItem header='Рейтинг' className={style.filterSection}>
                                    <div className={style.optionsContainer}>
                                        <span>
                                            9
                                            <img src="/src/assets/Star.svg" alt="star_score" className={style.star}/>
                                        </span>
                                        <span>
                                            8
                                            <img src="/src/assets/Star.svg" alt="star_score" className={style.star}/>
                                        </span>
                                        <span>
                                            7
                                            <img src="/src/assets/Star.svg" alt="star_score" className={style.star}/>
                                        </span>
                                        <span>
                                            6
                                            <img src="/src/assets/Star.svg" alt="star_score" className={style.star}/>
                                        </span>
                                        <span>
                                            5
                                            <img src="/src/assets/Star.svg" alt="star_score" className={style.star}/>
                                        </span>
                                        <span>
                                            4
                                            <img src="/src/assets/Star.svg" alt="star_score" className={style.star}/>
                                        </span>
                                        <span>
                                            3
                                            <img src="/src/assets/Star.svg" alt="star_score" className={style.star}/>
                                        </span>
                                        <span>
                                            2
                                            <img src="/src/assets/Star.svg" alt="star_score" className={style.star}/>
                                        </span>
                                        <span>
                                            1
                                            <img src="/src/assets/Star.svg" alt="star_score" className={style.star}/>
                                        </span>
                                    </div>
                                </AccordionItem>
                            </div>
                        </div>
                    </Accordion>
                </aside>
                <div className={style.bottomLine}></div>
                <div className={style.catalogueCollection}>
                    <div className={style.catalogueTitle}>
                        <h3 className={style.catalogueTitle__title}>Каталог</h3>
                        <div className={style.filterContainer}>
                            <button type='button' className={style.ratingFilter}
                                    onClick={() =>{setMostPopular((prevState) => !prevState)}}>По рейтингу</button>
                            <img src="/src/assets/filter.svg" alt="filter"/>
                        </div>
                    </div>
                    <CatalogueCardList isFavouritesPage={false} isMostPopular={isMostPopular}/>

                </div>
            </div>
        </>
    )*/
}