import {Link, useParams} from "react-router-dom";
import borderStyle from "../../components/Catalogue/Catalogue.module.sass";
import style from "./DetailedMangaPage.module.sass"
import {CommentsCollection} from "../../components/CommentsCollection/CommentsCollection.tsx";
import axios from "axios";
import {useEffect, useState} from "react";
import {MangaTypes} from "../../types/Manga.types.ts";
import {UserTypes} from "../../types/User.types.ts";

export const DetailedMangaPage = () =>{
    const {id} = useParams();
    const [mangaDetails, setMangaDetails] = useState({} as MangaTypes)
    const commentsNumber = mangaDetails.comments ? mangaDetails.comments.length : 0;
    const [favouriteButtonText, setFavouriteButtonText] = useState('Добавить в избранное')
    const [favouriteMangaMethod, setFavouriteMangaMethod] = useState('add')
    const [error, setError] = useState('')
    const [isFavourite, setIsFavourite] = useState(false)

    const user =  JSON.parse( localStorage.getItem('user') ) as UserTypes

    const headers = {
        'Authorization': user.token,
        'Content-Type': 'application/json'
    }
    const addFavourite = async () =>{
        console.log(user.token);
        await axios.post(
            `http://localhost:4444/manga/add/${id}`,

            {
                id: id
            },{headers: headers}
        ).then(() =>{
            console.log('add');
            setFavouriteMangaMethod('delete')
            setFavouriteButtonText("В избранном")
        }).catch((err) => {
            if (err.response.status === 403)
                setError("Сначала вам нужно авторизоваться!")
            console.log(err);
        })
    }
    const deleteFavourite = async () =>{
        await axios.delete(
            `http://localhost:4444/manga/${id}`,
            {headers: headers}
        ).then(() => {
            console.log("delete");
            setFavouriteMangaMethod('add')
            setFavouriteButtonText("Добавить в избранное")
        }).catch(() => {
        })
    }

    const isFavouriteAlready = async () =>{
        await axios.get(
            `http://localhost:4444/favourite/manga/${id}`,
            {headers: headers})
            .then(() =>{
                setFavouriteMangaMethod('delete')
                setFavouriteButtonText('В избранном')
                setIsFavourite(true);
            }).catch(() =>{
                console.log('HERERRE');
                setFavouriteButtonText("Добавить в избранное")
                setFavouriteMangaMethod("add")
                setIsFavourite(false)
            })
    }

    useEffect(() =>{
        isFavouriteAlready()
    }, [])

    const handleFavouriteMethod = () =>{
        console.log("handleFav");
        if(favouriteMangaMethod === 'add'){
            addFavourite()
        }
        deleteFavourite()
    }

    const getMangaDetails = async () =>{
        await axios.get(`http://localhost:4444/catalogue/id/${id}`)
            .then((res) =>{
                setMangaDetails(res.data)
            })
            .catch((err) =>{
                console.log(`Не получить информацию о манге: ${err}`);
            })
    }

    const getScoreStars = () =>{
        const starsHtml = []
        for (let i =0; i < Math.round(mangaDetails.score); i++){
            starsHtml.push(
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height='18' className={style.star}>
                    <path d="M8.10445 0.802444C8.47215 0.0623875 9.52785 0.0623896 9.89555 0.802446L11.7183 4.47096C11.8639
                     4.76403 12.1437 4.9673 12.4674 5.01522L16.5196 5.6151C17.3371 5.73611 17.6633 6.74014 17.0731
                     7.31854L14.1474 10.1857C13.9136 10.4147 13.8068 10.7436 13.8612 11.0663L14.5429 15.1056C14.6804
                     15.9204 13.8264 16.5409 13.0939 16.1584L9.46298 14.2618C9.17292 14.1103 8.82708 14.1103 8.53702
                     14.2618L4.90611 16.1584C4.17364 16.5409 3.31956 15.9204 3.45708 15.1056L4.13877 11.0663C4.19323
                     10.7436 4.08636 10.4147 3.85264 10.1857L0.92692 7.31854C0.336711 6.74014 0.662943 5.73611 1.4804
                     5.6151L5.53262 5.01522C5.85634 4.9673 6.13612 4.76403 6.28173 4.47096L8.10445 0.802444Z" fill="#4C42BB"/>
                </svg>)
        }
        for (let i =0; i < 10 - Math.round(mangaDetails.score); i++){
            starsHtml.push(
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height='18' className={style.star}>
                    <path d="M8.10445 0.802444C8.47215 0.0623875 9.52785 0.0623896 9.89555 0.802446L11.7183 4.47096C11.8639
                     4.76403 12.1437 4.9673 12.4674 5.01522L16.5196 5.6151C17.3371 5.73611 17.6633 6.74014 17.0731
                     7.31854L14.1474 10.1857C13.9136 10.4147 13.8068 10.7436 13.8612 11.0663L14.5429 15.1056C14.6804
                     15.9204 13.8264 16.5409 13.0939 16.1584L9.46298 14.2618C9.17292 14.1103 8.82708 14.1103 8.53702
                     14.2618L4.90611 16.1584C4.17364 16.5409 3.31956 15.9204 3.45708 15.1056L4.13877 11.0663C4.19323
                     10.7436 4.08636 10.4147 3.85264 10.1857L0.92692 7.31854C0.336711 6.74014 0.662943 5.73611 1.4804
                     5.6151L5.53262 5.01522C5.85634 4.9673 6.13612 4.76403 6.28173 4.47096L8.10445 0.802444Z" fill="#272727"/>
                </svg>)
        }
        return starsHtml
    }

    useEffect(() =>{
        getMangaDetails();
    }, [id])



    return(
        <>
            <div className={borderStyle.border}></div>
            <div className={style.titleContainer}>
                <div className={style.asideContainer}>
                    <img src={mangaDetails.picture_url} alt="title_image" className={style.titleImage}/>
                    <div className={style.titleButtons}>
                        <Link to={`/titles/${id}/pages`} className={style.titleButton}>Читать</Link>
                        <button className={style.titleButton} onClick={handleFavouriteMethod}>{favouriteButtonText}</button>
                        {
                            error !== ''?
                                <span className={style.errorMessage}>{error}</span> : <></>
                        }
                    </div>
                </div>
                <div className={style.mainContainer}>
                    <div className={style.mainInfoContainer}>
                        <div className={style.titles}>
                            <h1 className={style.title}>{mangaDetails.title}</h1>
                            <span className={style.englishTitle}>{mangaDetails.jp_title}</span>
                        </div>
                        <div className={style.smallInfo}>
                            <div className="rating">
                                { getScoreStars()}
                            </div>
                            <p className={style.description}>{mangaDetails.synopsis}</p>
                        </div>
                    </div>
                    <div className='genresContainer'>
                        <ul className={style.genres}>
                            {
                                (mangaDetails.genres !== undefined)?
                                    (mangaDetails.genres).map((genre, index) =>{
                                        return(
                                            <li className={style.genre} key={index}>{genre.name}</li>
                                        )
                                    })
                                    : <></>
                            }
                            {   (mangaDetails.themes !== undefined)?
                                    (mangaDetails.themes).map((theme, index) =>{
                                        return(
                                                <li className={style.genre} key={index}>{theme.name}</li>
                                            )}
                                    ): <></>
                            }
                            {   (mangaDetails.demographic !== undefined)?
                                    (mangaDetails.demographic).map((demographic, index) =>{
                                        return(
                                                <li className={style.genre} key={index}>{demographic.name}</li>
                                            )}
                                    ): <></>
                            }
                        </ul>
                    </div>
                    <div className={style.commentsSection}>
                        <div className={style.topCommentsContainer}>
                            <h3 className={style.commentsTitle}>Комментарии {commentsNumber}</h3>
                            <div className={style.fieldContainer}>
                                <input name="" id=""  className={style.commentsField} placeholder="Оставьте свой отзыв..."></input>
                                <button className={style.commentButton}>
                                    <img src="/src/assets/arrowButton.svg" alt="arrow" className="arrow"/>
                                </button>
                            </div>

                            <div className={borderStyle.border}></div>
                        </div>
                        {
                            (commentsNumber) ?
                                <div className={`${style.comments} ${commentsNumber ? style.notDisplayed : ''}`}>
                                    <CommentsCollection data={mangaDetails.comments}/>
                                </div>
                                : <></>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}