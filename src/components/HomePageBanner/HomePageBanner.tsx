import style from "./HomePageBanner.module.sass"
import {PropsWithChildren} from "react";
import textLogo from "../../assets/LOVEMANGA.svg";
import heartLogoMain from "../../assets/heart_logo_main.svg";
import {Link} from "react-router-dom";

export const HomePageBanner = (props : PropsWithChildren) =>{
    return(
        <div className={style.mainContainer}>

                {props.children}
            <div className={style.logo}>
                    <img src={textLogo} className={style.textLogo} alt="textLogo"/>
                    <img src={heartLogoMain} className={style.heartLogo} alt="heartLogo"/>
            </div>
            <div className={style.bannerText}>
                <div className={style.mainTextContainer}>
                    <h1 className={style.title}>Самый большой каталог манги</h1>
                    <h3 className={style.bannerMoto}>Love to read, love to fantasize</h3>
                    <Link to='/catalogue' className={style.catalogueLink}>Перейти к каталогу</Link>
                </div>
                <div className={style.scrollContainer}>
                    <span className={style.scroll}>SCROLL</span>
                </div>
            </div>
            <div className={style.trapezoid}></div>
        </div>
    )
}