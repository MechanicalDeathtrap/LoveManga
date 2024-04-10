import style from "./Banner.module.sass"
import {PropsWithChildren} from "react";

export const Banner = (props : PropsWithChildren) =>{
    return(
        <div className={style.mainContainer}>

                {props.children}

            <div className={style.bannerText}>
                <div className={style.mainTextContainer}>
                    <h1 className={style.title}>Самый большой каталог манги</h1>
                    <h3 className={style.bannerMoto}>Love to read, love to fantasize</h3>
                    <a href="" className={style.catalogueLink}>Перейти к каталогу</a>
                </div>
                <div className={style.scrollContainer}>
                    <span className={style.scroll}>SCROLL</span>
                </div>
            </div>
            <div className={style.trapezoid}></div>
        </div>
    )
}