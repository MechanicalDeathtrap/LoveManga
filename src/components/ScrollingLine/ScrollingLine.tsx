import style from "./ScrollingLine.module.sass"
import {TitleCard} from "../TitleCard/TitleCard.tsx";

export const ScrollingLine = () =>{
    return(
        <div className={style.scrollContainer}>
            <div className={style.border}></div>
            <div className={style.containerBorder}>
                <div className={style.scrollInsides}>
                    <div className={`${style.popularText} ${style.left}`}>POPULAR</div>
                    {/*TODO Типа карточки популярных */}
                    <div className={style.cards}>
                        <TitleCard/>
                        <TitleCard/>
                        <TitleCard/>
                    </div>
                    <div className={`${style.popularText} ${style.right}`}>POPULAR</div>
                </div>
                <div className={style.scrollDots}>
                    <div className={style.dot}></div>
                    <div className={style.dot}></div>
                    <div className={style.dot}></div>
                </div>
            </div>
            <div className={style.border}></div>
        </div>
    )
}