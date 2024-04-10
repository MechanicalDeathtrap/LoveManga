import style from "./Header.module.sass"
import textLogo from "../../assets/LOVEMANGA.svg"
import heartLogo from "../../assets/heart_logo.svg"
import heartLogoMain from "../../assets/heart_logo_main.svg"
import magnifyingGlass from "../../assets/magnifying_glass.svg"
import 'normalize.css'
import {SignModal} from "../Modals/SignUser/SignModal.tsx";
import {useEffect,useState} from "react";
import Modal from 'react-modal';
import styles from "../Modals/SignUser/SignModal.module.sass"
import {Link, useLocation} from "react-router-dom";
import {SearchModal} from "../Modals/Search/SearchModal.tsx";
import {ProfileModal} from "../Modals/Profile/ProfileModal.tsx";

export const Header = () =>{
/*НЕ ЗАКОНЧЕНО*/
    const [visible, setVisible] = useState(false)
    const [profileVisible, setProfileVisible] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false);
    const [path, setPath] = useState("None");

    const location = useLocation();
    const authorized = true;

    /*TODO     Modal.setAppElement("SignModal")???*/

    const customStyles = {
        overlay: {
            position: 'fixed',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            zIndex: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'rgba(12, 10, 38, 0.70)'
        },
        content: {
            zIndex: 12,
            background: '#18153A',
            padding: '36px 47px 33px 47px',
            borderRadius: '10px',
            position: 'relative',
            alignItems: 'flex-start',
            left: 0,
            top: -70,
            border: 'none'
},
    };

    const profileCustomStyles = {
        overlay: {
            position: 'fixed',
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'start' ,
            top: 70,
            right: 90,
            background: 'transparent'
        },
        content: {
            zIndex: 12,
            background: '#18153A',
            padding: '25px 23px 33px 20px',
            borderRadius: '10px',
            position: 'relative',
            alignItems: 'flex-start',
            border: 'none'
        },
    };


    useEffect(() =>{
        const currentPath = () => {
            if (location.pathname === "/catalogue") {
                setPath("Catalogue")
            }
            else setPath("None")
        }
        currentPath();
        console.log(path);
    }, [path, location])


    return(
        <header className={style.header}>
            <Link to='/' className={style.logo}>
                <img src={textLogo} className={style.textLogo} alt="textLogo"/>
                <img src={heartLogoMain} className={style.heartLogo} alt="heartLogo"/>
            </Link>
            <div className={style.navigationContainer}>
                <nav className={style.navigation}>
                    {/* TODO Link to POPULAR part of home page*/}
                    <a href="#" className={style.links} >Популярное</a>
                    <div className={style.searchContainer} onClick={() => {setSearchVisible(true)}}>
                        {/* TODO Link to search modal window*/}
                        <span className={style.links} >Поиск</span>
                        <img src={magnifyingGlass} alt=""/>
                    </div>
                    {/* TODO Link to catalogue page*/}
                    <div>
                        <Link to='/catalogue' className={style.links}>Каталог</Link>
                        {(path === "Catalogue") ?
                            <div className={style.bottomLine}></div> : <></>
                        }
                    </div>
                </nav>
                { authorized ?  (
                    <>
                        <button className={style.profileButton} onClick={() => {setVisible(true)}}>
                            <span className={style.buttonInsides}>
                                Войти
                                <img src={heartLogo} className={style.buttonLogo} alt="heartLogo"/>
                            </span>
                        </button>
                        <Modal isOpen={visible}
                               onRequestClose={() => {setVisible(true)}}
                               style={customStyles}>
                            <img src="/src/assets/cross.svg" alt="cross" className={styles.cross} onClick={() => {setVisible(false)}}/>
                            <SignModal/>
                        </Modal>
                    </>)

                    :

                    <>
                        <img src={heartLogo} alt="heart-logo" className="profilePhoto" onClick={() => {setProfileVisible(!profileVisible)}}/>
                        <Modal isOpen={profileVisible}
                               onRequestClose={() => {setProfileVisible(false)}}
                               style={profileCustomStyles}>

                            <ProfileModal/>
                        </Modal>
                    </>
                }
                <Modal isOpen={searchVisible}
                       onRequestClose={() => {setSearchVisible(false)}}
                       style={customStyles}>
                    <img src="/src/assets/cross.svg" alt="cross" className={styles.cross} onClick={() => {setSearchVisible(false)}}/>
                    <SearchModal/>
                </Modal>
            </div>
        </header>
    )
}

