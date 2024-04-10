import style from "../Header/Header.module.sass";
import textLogo from "../../assets/LOVEMANGA.svg";
import heartLogoMain from "../../assets/heart_logo_main.svg";
import styles from "./Footer.module.sass"

export const Footer = () =>{
    return(
        <footer className={styles.footer}>
            <div className={styles.footerLeftSide}>
                <div className={styles.logoContainer}>
                    <div className={style.logo}>
                        <img src={textLogo} className={style.textLogo} alt="textLogo"/>
                        <img src={heartLogoMain} className={style.heartLogo} alt="heartLogo"/>
                    </div>
                    <div className={styles.motoContainer}>
                        <span className="moto"> Love to read, </span>
                        <span className="moto">Love to fantasize</span>
                    </div>

                </div>
                <div className={styles.mailContacts}>
                    <span className="mailText">Почта для связи:</span>
                    <a href="#" className={styles.mailLink}>mechanical.deathtrap@yandex.ru</a>
                </div>
            </div>
            <div className={styles.footerRightSide}>
                <div className={styles.sectionContainer}>
                    <h3 className={styles.sectionTitle}>Разделы</h3>
                    <div className={styles.links}>
                        <a href="" className={styles.link}>Правила сайта</a>
                        <a href="" className={styles.link}>Авторские права</a>
                        <a href="" className={styles.link}>О нас</a>
                    </div>
                </div>
                <div className="info">
                    <div className={styles.sectionContainer}>
                        <h3 className={styles.sectionTitle}>Инфо</h3>
                        <div className={styles.links}>
                            <a href="" className={styles.link}>Пользовательское соглашение</a>
                            <a href="" className={styles.link}>Соглашение о конфиденциальности</a>
                        </div>
                    </div>
                </div>
                <div className="contacts">
                    <div className={styles.sectionContainer}>
                        <h3 className={styles.sectionTitle}>Контакты</h3>
                        <div className={styles.contactsLinks}>
                            <a href="">
                                <img src="/src/assets/vk.svg" alt="vk_logo"/>
                            </a>
                            <a href="">
                                <img src="/src/assets/watsup.svg" alt="watsup_logo"/>
                            </a>
                            <a href="">
                                <img src="/src/assets/tg.svg" alt="tg_logo"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}