import {Field, Form, Formik} from "formik";
import style from "../AuthUser/AuthModal.module.sass";
import styles from "./SearchModal.module.sass"
import {Link} from "react-router-dom";
import axios, {AxiosResponse} from "axios";
import {useEffect, useState} from "react";
import {MangaTypes} from "../../../types/Manga.types.ts";

type Props = {
    props: () => void
}

export const SearchModal = ({props} : Props ) => {
    const [searchedMangas, setSearchedMangas] = useState([] as MangaTypes[])
    const [popular, setPopular] = useState([] as MangaTypes[]);
    const [search, setSearch] = useState('');

    const getMostPopularMangas = () =>{
        axios.get('http://localhost:4444/catalogue/mostPopular')
            .then((res) =>{
                setPopular(res.data.slice(1, 4));
            })
            .catch((err) =>{
                console.log(`Ошибка при получении манги: ${err}`);
            })
    }

    useEffect(()=>{
        getMostPopularMangas()
    }, [])

    const closeSearchModal = () =>{
        props(false)
    }

    return(
        <div className={styles.searchModalContainer}>
            <div className={style.searchBarContainer}>
                <Formik initialValues={{search: ''}}
                        onSubmit={(value) =>{
                            console.log(value);
                            setSearch(value.search)
                            axios.get(
                                `http://localhost:4444/catalogue/title/${value.search}`
                            ).then((res: AxiosResponse<MangaTypes[]>) => {
                                setSearchedMangas(res.data)
                            }).catch((err) => {/*
                                if (err.response.status === 500)
                                    return setRegisterStatusText("Аккаунт с такой почтой уже существует")

                                setRegisterStatusText("Ошибка валидации")*/
                            })
                        }}>
                    { ({setFieldValue}) =>
                    <Form className={styles.forms}>
                        <div className={styles.forms_container}>
                            <button className={style.searchButton}>
                                <img src="/src/assets/magnifying_glass.svg" alt="magnifying_glass" className={styles.searchLogo}/>
                            </button>
                            <Field className={style.formField} id="search" name="search" placeholder="Что ищем, манголюб?"/>
                        </div>
                        <button className={style.searchButton}>
                            <img src="/src/assets/cross.svg" alt="delete" className={styles.deleteButton} onClick={() => setFieldValue('search', '')}/>
                        </button>
                    </Form>
                    }
                </Formik>
            </div>

            <div className={styles.resultsContainer}>
                <div className={styles.resultList}>
                {
                    searchedMangas.slice(1,4).map((manga: MangaTypes, index) =>{
                        return(
                            <Link to={`/titles/${manga._id}`} className={styles.resultList__result} key={index}>
                                <img src={`${manga.picture_url}`} className={styles.resultImage} alt="manga-icon"/>
                                <span className={styles.result__title}>{manga.title}</span>
                            </Link>
                    )})
                }
                </div>
                {
                    (searchedMangas.length > 0) ?
                        <Link to={`/results/${search}`}  className={styles.linkToFullResults}>Показать больше</Link>:
                        <></>
                }

            </div>

            <div className={styles.mostSearchedContainer}>
                <h3 className={styles.mostSearchedContainer__title}>Часто ищут</h3>
                <div className={styles.mostSearched}>
                    {
                        popular.map((manga, index) =>{
                            return(
                                <Link to={`/titles/${manga._id}`} key={index}
                                      className={styles.mostSearched__result} onClick={closeSearchModal}>{manga.title}</Link>
                        )})
                    }
                </div>
            </div>
        </div>
    )
}