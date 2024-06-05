import style from "./SearchResultsPage.module.sass";
import {Field, Form, Formik} from "formik";
import styles from "../../components/Modals/Search/SearchModal.module.sass";
import borderStyle from "../../components/Catalogue/Catalogue.module.sass"
import {useParams} from "react-router-dom";
import axios, {AxiosResponse} from "axios";
import {MangaTypes} from "../../types/Manga.types.ts";
import {useEffect, useState} from "react";
import {SearchCardList} from "../../components/Modals/Search/SearchCardList.tsx";


export const SearchResultsPage = () =>{
    const {search} = useParams();
    const [searchResults, setSearchResults] = useState([] as MangaTypes[]);
    const [error, setError] = useState('');

    useEffect(() =>{
        axios.get(
            `http://localhost:4444/catalogue/title/${search}`
        ).then((res: AxiosResponse<MangaTypes[]>) => {
            setSearchResults(res.data)
        }).catch((err) => {
            if (err.response.status === 500)
                return setError("Не удалось получить мангу")
            setError("Манга не была найдена")
        })
    }, [])

    return(
        <>
            <div className={borderStyle.border}></div>
            <div className={style.resultsContainer}>
                <div className={style.formikContainer}>
                    <Formik initialValues={{search: ''}}
                            onSubmit={(value) =>{
                                console.log(value);

                            }}>
                        { ({setFieldValue}) =>
                            <Form className={style.forms}>
                                <div className={style.formContainer}>
                                    <img src="/src/assets/magnifying_glass.svg" alt="magnifying_glass" className={styles.searchLogo}/>
                                    <Field className={style.formField} id="search" name="search" placeholder="Введите названия тайтла..."/>
                                </div>
                                <img src="/src/assets/cross.svg" alt="delete" className={styles.deleteButton} onClick={() => setFieldValue('search', '')}/>
                            </Form>
                        }
                    </Formik>
                </div>
                <div className={style.resultsContainer__results}>
                    <h1 className={style.resultsContainer__title}>Результаты</h1>
                    {
                        error ? (
                            <h3 className={style.resultsContainer__title}>{error}</h3>
                        ) : <></>
                    }
                    <div className="resultsContainer__collection">
                        <SearchCardList searchResults={searchResults}/>
                    </div>
                </div>
            </div>
        </>
    )
}