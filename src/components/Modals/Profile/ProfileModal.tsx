import style from "./ProfileModal.module.sass"
import {Link} from "react-router-dom";
import {useAuthStore} from "../../../stores/AuthStore/AuthStore.ts";
import {UserTypes} from "../../../types/User.types.ts";

export const ProfileModal = () =>{

    const {isAuthorized ,setAuth} = useAuthStore();
    const logOutUser = () =>{
        console.log('im clean');
        setAuth(false);
        console.log(isAuthorized);
        localStorage.clear()
    }

    const checkUserImage = () => {
        const user: UserTypes = localStorage.getItem('user')
        return user.avatarUrl
    }

    return(
        <div className={style.profileModalContainer}>
            <Link to='/profile/settings' className={style.profileInfo}>
                {
                    checkUserImage() ?
                        <img src={checkUserImage()} alt="profile_photo" className="profileImage"/>
                        :
                        <img src="/src/assets/heart_logo.svg" alt="profile_photo" className="profileImage"/>
                }
                <span className={style.profileName}>Mechanical Deathtrap</span>
            </Link>
            <div className={style.profileButtons}>
                <Link to='/profile/favourites' className={style.menuItem}>
                    <img src="/src/assets/heart.svg" alt="favourites_logo"/>
                    <span>Избранное</span>
                </Link>
                <Link to='/profile/history' className={style.menuItem}>
                    <img src="/src/assets/clock.svg" alt="history_logo"/>
                    <span>История прочтений</span>
                </Link>
                <button type='submit' className={`${style.menuItem} ${style.logOutButton}`} onClick={() => logOutUser()}>
                    <img src="/src/assets/exit.svg" alt="logout_logo"/>
                    <span>Выйти</span>
                </button>
            </div>
        </div>
    )
}