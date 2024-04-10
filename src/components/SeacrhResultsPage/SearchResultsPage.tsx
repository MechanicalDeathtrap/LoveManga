import style from "./SearchResultsPage.module.sass";
import {Field, Form, Formik} from "formik";
import styles from "../Modals/Search/SearchModal.module.sass";
import borderStyle from "../Catalogue/Catalogue.module.sass"
import {CatalogueCardList} from "../CatalogueCardList/CatalogueCardList.tsx";


export const SearchResultsPage = () =>{
    return(
        <>
            <div className={borderStyle.border}></div>
            <div className={style.resultsContainer}>
                <div className={style.formikContainer}>
                    <Formik initialValues={{search: ''}}
                            onSubmit={(value) =>{
                                console.log(value);
                                /*TODO отправь на бэк*/
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
                    <div className="resultsContainer__collection">
                        <CatalogueCardList/>
                    </div>
                </div>
            </div>
        </>
    )
}