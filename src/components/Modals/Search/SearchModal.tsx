import {Field, Form, Formik} from "formik";
import style from "../SignUser/SignModal.module.sass";
import styles from "./SearchModal.module.sass"
import {Link} from "react-router-dom";


export const SearchModal = () => {
    const placeholder = 'placeholder'

    return(
        <div className={styles.searchModalContainer}>
            <div className={style.searchBarContainer}>
                <Formik initialValues={{search: ''}}
                        onSubmit={(value) =>{
                            console.log(value);
                            /*TODO отправь на бэк*/
                        }}>
                    { ({setFieldValue}) =>
                    <Form className={styles.forms}>
                        <div className={styles.forms_container}>
                            <img src="/src/assets/magnifying_glass.svg" alt="magnifying_glass" className={styles.searchLogo}/>
                            <Field className={style.formField} id="search" name="search" placeholder="Что ищем, манголюб?"/>
                        </div>
                        <img src="/src/assets/cross.svg" alt="delete" className={styles.deleteButton} onClick={() => setFieldValue('search', '')}/>
                    </Form>
                    }
                </Formik>
            </div>
            {/*TODO результаты с бэка*/}
            <div className={styles.resultsContainer}>
                <div className={styles.resultList}>
                    <Link to={`/titles/${placeholder}`} className={styles.resultList__result}>
                        <img src="/src/assets/image7.png" alt="placeholder"/>
                        <span className={styles.result__title}>Бог знаний</span>
                    </Link>
                    <Link to={`/titles/${placeholder}`} className={styles.resultList__result}>
                        <img src="/src/assets/image7.png" alt="placeholder"/>
                        <span className={styles.result__title}>Знания о 300 демонах</span>
                    </Link>
                    <Link to={`/titles/${placeholder}`} className={styles.resultList__result}>
                        <img src="/src/assets/image7.png" alt="placeholder"/>
                        <span className={styles.result__title}>Принцесса, жаждущая знаний</span>
                    </Link>
                </div>
                <Link to="/results" className={styles.linkToFullResults}>Показать больше</Link>
            </div>
            <div className={styles.mostSearchedContainer}>
                <h3 className={styles.mostSearchedContainer__title}>Часто ищут</h3>
                <div className={styles.mostSearched}>
                    {/*TODO 3 most searched title from backend*/}
                    <Link to={`/titles/${placeholder}`} className={styles.mostSearched__result}>Регрессировавший младший сын герцога – убийца</Link>
                    <Link to={`/titles/${placeholder}`} className={styles.mostSearched__result}>Паладин превосходящий здравый смысл</Link>
                    <Link to={`/titles/${placeholder}`} className={styles.mostSearched__result}>Монолог фармацевта</Link>
                </div>
            </div>
        </div>
    )
}