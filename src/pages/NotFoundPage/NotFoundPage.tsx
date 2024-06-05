import style from "./NotFoundPage.module.sass";
import {Header} from "../../components/Header/Header.tsx";
import {Footer} from "../../components/Footer/Footer.tsx";
import {Link} from "react-router-dom";


export const NotFoundPage = () =>{
    return(
        <>
            <Header/>
            <div className={style.border}></div>
            <div className={style.notFoundContainer}>
                <img src="/src/assets/404.svg" alt="404_logo" className="notFoundLogo"/>
                <p className={style.notFoundDescription}>Данная страница не нашла дорогу домой и пропала. Не гуляйте по
                    пустоте , возвращайтесь <Link to='/' className={style.homeLink}>домой</Link>!
                </p>
            </div>
            <Footer/>
        </>
    )
}