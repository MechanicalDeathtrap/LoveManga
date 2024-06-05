import style from "./PopularMangasSlider.module.sass"
import {MangaCard} from "../MangaCard/MangaCard.tsx";
import axios from "axios";
import {useEffect, useState} from "react";

export const PopularMangasSlider = () =>{
    const [popularManga, setPopularManga] = useState([]);
    const [slideIndex, setSlideIndex] = useState(1)

    const getMostPopularMangas = () =>{
        axios.get('http://localhost:4444/catalogue/mostPopular')
            .then((res) =>{
                setPopularManga(res.data);
            })
            .catch((err) =>{
                console.log(`Ошибка при получении манги: ${err}`);
            })
    }

    useEffect(() =>{
        getMostPopularMangas();
    }, [])

    const handleIndex = (index: number) => {
        setSlideIndex(index)
    }

    return(
        <div className={style.mainContainer}>
            <div className={style.border}></div>
            <div  className={style.containerBorder} id='popularContainer'>
                <div className={style.scrollInsides}>
                    <div className={`${style.popularText} ${style.left}`}>POPULAR</div>
                    {/*TODO Типа карточки популярных */}
                    <div className={style.sliderContainer}>
                        <ul className={style.carouselContainer}>
                            <li className={`${style.cards} ${(slideIndex !== 1 ? style.disableSlide : '')}`}>
                                <MangaCard mostPopularMangas={popularManga[0]}/>
                                <MangaCard mostPopularMangas={popularManga[1]}/>
                                <MangaCard mostPopularMangas={popularManga[2]}/>
                            </li>
                            <li className={`${style.cards} ${(slideIndex !== 2 ? style.disableSlide : '')}`}>
                                <MangaCard mostPopularMangas={popularManga[3]}/>
                                <MangaCard mostPopularMangas={popularManga[4]}/>
                                <MangaCard mostPopularMangas={popularManga[5]}/>
                            </li>
                            <li className={`${style.cards} ${(slideIndex !== 3 ? style.disableSlide : '')}`}>
                                <MangaCard mostPopularMangas={popularManga[6]}/>
                                <MangaCard mostPopularMangas={popularManga[7]}/>
                                <MangaCard mostPopularMangas={popularManga[8]}/>
                            </li>
                        </ul>
                        <div className={style.scrollDots}>
                            <button type='button' className={(slideIndex === 1 ? `${style.dot} ${style.chosenDot}` : style.dot)}
                                 onClick={() => handleIndex(1)}/>
                            <button type='button' className={(slideIndex === 2 ? `${style.dot} ${style.chosenDot}` : style.dot)}
                                 onClick={() => handleIndex(2)}/>
                            <button type='button' className={(slideIndex === 3 ? `${style.dot} ${style.chosenDot}` : style.dot)}
                                 onClick={() => handleIndex(3)}/>
                        </div>
                    </div>

                    <div className={`${style.popularText} ${style.right}`}>POPULAR</div>
                </div>

            </div>
            <div className={style.border} ></div>
        </div>
    )
}