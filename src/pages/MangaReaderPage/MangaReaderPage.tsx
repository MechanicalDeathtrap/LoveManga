import textLogo from "../../assets/LOVEMANGA.svg"
import heartLogoMain from "../../assets/heart_logo_main.svg"
import {Link, useParams} from "react-router-dom";
import style from "./MangaReaderPage.module.sass";
import {useEffect, useState} from "react";
import axios from "axios";
import {MangaTypes} from "../../types/Manga.types.ts";

export const MangaReaderPage = () =>{

    const {id} = useParams();
    const [isRed, setIsRed] = useState(false);
    const [mangaDetails, setMangaDetails] = useState({} as MangaTypes)
    const pagesNumber = mangaDetails.pages? mangaDetails.pages.length : 0

    const getMangaDetails = async () =>{
        await axios.get(`http://localhost:4444/catalogue/id/${id}`)
            .then((res) =>{
                setMangaDetails(res.data)
            })
            .catch((err) =>{
                console.log(`Не получить информацию о манге: ${err}`);
            })
    }

    useEffect(() =>{
        getMangaDetails();
    }, [id])

    const changeColor = () =>{
        return isRed ? "#FF0000" : 'white'
    }

    return(
        <div className={style.readerPageContainer}>
            <header className={style.readerHeader}>
                <Link to='/' className={style.logo}>
                    <img src={textLogo} className={style.textLogo} alt="textLogo"/>
                    <img src={heartLogoMain} className={style.heartLogo} alt="heartLogo"/>
                </Link>
                <div className={style.smallHeaderInfo}>
                    <span className="mangaName">{mangaDetails.title}</span>
                    <div className={style.chapterButton}>
                        <img src="/src/assets/arrow.svg" alt="arrow" className={style.arrow}/>
                        <span className="chapterNumber">1 / {pagesNumber}</span>
                        <img src="/src/assets/arrow.svg" alt="arrow" className={style.rightArrow}/>
                    </div>
                </div>
            </header>
            <div className={style.mainContent}>
                <ul className="pagesList">
                    {
                        mangaDetails.pages ?
                        mangaDetails.pages.map((page, index) =>{
                            return(
                                <li className={style.pagelist} key={index}>
                                    <img src={page} loading="lazy" alt="manga_page" className={style.page}/>
                                </li>
                            )
                        }) : <></>
                    }
                </ul>
                <div className={style.controlPanel}>
                    <img src="/src/assets/list.svg" alt="list_logo" className={style.controlButton}/>
                    <img src="/src/assets/message.svg" alt="message_logo" className={style.controlButton}/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className={style.heartButton} onClick={() => {setIsRed(!isRed)}}>
                        <path d="M29.04 5.0708C28.2336 4.33903 27.2837 3.78327 26.2506 3.43893C25.2176 3.09458 24.1242 2.96921 23.04 3.07079C21.7622 3.12881 20.5156 3.48496 19.4 4.1108C18.3038 4.65902
                        17.2653 5.31563 16.3 6.0708C15.3731 5.31013 14.3752 4.64038 13.32 4.0708C12.2417 3.44236 11.0268 3.08545 9.78 3.0308C8.65282 2.93247 7.51752 3.07021 6.44656 3.43524C5.3756 3.80026 4.3925 4.38454 3.56 5.1508C2.7557
                        5.89671 2.1134 6.80006 1.67301 7.80472C1.23261 8.80937 1.00353 9.89386 1 10.9908C1.05111 12.6968 1.67055 14.3369 2.76 15.6508C6.02931 20.2423 9.85891 24.4078 14.16 28.0508L14.94 27.0708L14.18 28.0508C14.7662
                        28.5708 15.5167 28.8682 16.3 28.8908C17.0958 28.8707 17.8597 28.5737 18.46 28.0508C23.03 24.0714 27.0998 19.5516 30.58 14.5908C31.1918 13.5327 31.5158 12.333 31.52 11.1108C31.5546 9.98624 31.3516 8.86704
                        30.9242 7.82627C30.4969 6.7855 29.8549 5.84657 29.04 5.0708ZM28.52 13.1908C25.1661 17.9377 21.266 22.2741 16.9 26.1108C16.7414 26.2482 16.5473 26.3383 16.34 26.3708C16.1215 26.3426 15.918 26.2443 15.76
                        26.0908C11.6235 22.5994 7.93537 18.609 4.78 14.2108C4.01629 13.3042 3.56716 12.1743 3.5 10.9908C3.50448 10.2392 3.66296 9.49646 3.96567 8.80849C4.26838 8.12052 4.70889 7.50189 5.26 6.9908C5.83835 6.46053
                        6.52204 6.0582 7.26642 5.81007C8.01081 5.56194 8.79916 5.47359 9.58 5.5508H9.78C10.6214 5.61678 11.4361 5.87692 12.16 6.3108C13.0734 6.79062 13.9493 7.33885 14.78 7.9508L16.3 9.2108L17.82 7.9508C18.6608 7.29941
                        19.5576 6.72383 20.5 6.2308C21.2692 5.78135 22.1314 5.51449 23.02 5.4508H23.22C23.9668 5.37494 24.7213 5.4568 25.4344 5.69109C26.1476 5.92537 26.8036 6.30684 27.36 6.8108C27.9047 7.3258 28.3396 7.94564 28.6386
                        8.63303C28.9377 9.32043 29.0946 10.0612 29.1 10.8108C29.1381 11.6433 28.9368 12.4692 28.52 13.1908Z" fill={changeColor()}/>
                    </svg>

                </div>
            </div>
        </div>
    )
}