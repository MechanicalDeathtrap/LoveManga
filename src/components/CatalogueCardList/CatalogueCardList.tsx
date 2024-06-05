import style from "./CatalogueCardList.module.sass"
import {Link} from "react-router-dom";
import axios, {AxiosResponse} from "axios";
import {useEffect, useState} from "react";
import {MangaTypes} from "../../types/Manga.types.ts";
import {UserTypes} from "../../types/User.types.ts";

type PropsType = {
    isMostPopular?: boolean;
    isFavouritesPage: boolean;
    filteredManga?: MangaTypes[]
}

export const CatalogueCardList = ({isMostPopular, isFavouritesPage, filteredManga} : PropsType) =>{

    const [mangas, setMangas] = useState([] as MangaTypes[]);

    const user =  JSON.parse( localStorage.getItem('user') ) as UserTypes

    const headers = {
        'Authorization': user.token,
        'Content-Type': 'application/json'
    }

    const getMangas = () =>{
        axios.get('http://localhost:4444/catalogue')
            .then((res: AxiosResponse<MangaTypes[]>) =>{
                setMangas(res.data);
            })
            .catch((err) =>{
                console.log(`Ошибка при получении манги: ${err}`);
            })
    }

    const getFavourites = () =>{
        axios.get('http://localhost:4444/profile/favourites',
            {headers: headers})
            .then((res: AxiosResponse<MangaTypes[]>) => {
                setMangas(res.data)
            }).catch((err) =>{
            console.log(`Ошибка при получении манги: ${err}`);
        })
    }

    useEffect(() =>{
        console.log(filteredManga);
        console.log(isFavouritesPage);
        if(isFavouritesPage)
            getFavourites()
        if(filteredManga !== undefined){
            setMangas(filteredManga)
        }
        if (!isFavouritesPage){
            console.log('getManga');
            getMangas()
        }
    }, [])

    useEffect(()=>{
        setMangas(filteredManga as MangaTypes[]);
    },[filteredManga])

    useEffect(() =>{
        console.log('filter');
        console.log(isMostPopular);
        isMostPopular ?
            setMangas(mangas.sort((mangaOne: MangaTypes, mangaTwo: MangaTypes) => mangaTwo.score -  mangaOne.score ))
            :
            setMangas(mangas.sort((mangaOne: MangaTypes, mangaTwo: MangaTypes) => mangaOne.score - mangaTwo.score))
    }, [isMostPopular])


    return(
        <ul className={style.listCard}>
            {
                mangas.length > 0 ?
                mangas.map((manga: MangaTypes, index) =>{
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
                }) :
                    <div className={style.noCardsContainer}>
                        <h2 className={style.noCardsTitle}>Здесь нет ни одной манги :(</h2>
                    </div>
            }
        </ul>
    )
}