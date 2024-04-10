import style from "./ProfileModal.module.sass"
import {Link} from "react-router-dom";

export const ProfileModal = () =>{
    return(
        <div className={style.profileModalContainer}>
            <Link to='/profile/settings' className={style.profileInfo}>
                <img src="/src/assets/heart_logo.svg" alt="profile_photo" className="profileImage"/>
                <span className={style.profileName}>Mechanical Deathtrap</span>
            </Link>
            <div className={style.profileButtons}>
                <Link to='/profile/favourites' className={style.favouritesContainer}>
                    <img src="/src/assets/heart.svg" alt="favourites_logo"/>
                    <span>Избранное</span>
                </Link>
                <Link to='/profile/history' className={style.favouritesContainer}>
                    <img src="/src/assets/clock.svg" alt="history_logo"/>
                    <span>История прочтений</span>
                </Link>
                <Link to='' className={style.favouritesContainer}>
                    <img src="/src/assets/exit.svg" alt="logout_logo"/>
                    <span>Выйти</span>
                </Link>
            </div>
        </div>
    )
}