import {Field, Form, Formik} from "formik";
import style from "./AuthModal.module.sass"
import {useState} from "react";
import axios from "axios";
import {useAuthStore} from "../../../stores/AuthStore/AuthStore.ts";
import {VisibilityType} from "../../../types/Props.types.ts";
import {UserTypes} from "../../../types/User.types.ts";
import {CheckAuthType, RegistrationType} from "../../../types/Auth.types.ts";

export const AuthModal = ({isVisible} : VisibilityType) =>{

    const [isSignInVisible, setSignInVisibility] = useState(true);
    const [authStatusText, setAuthStatusText] = useState('')
    const [registerStatusText, setRegisterStatusText] = useState('')
    const {setAuth} = useAuthStore();

    const saveUserInLocalStorage = (user: UserTypes) =>{
        localStorage.setItem('user', JSON.stringify(user))
    }

    const authorizeUser = async (value: CheckAuthType) =>{
        await axios.post(
            'http://localhost:4444/auth/login',
            {
                email: value.login,
                password: value.password
            }
        ).then((res) =>{
            isVisible(false)
            setAuth(true)
            setAuthStatusText('')

            saveUserInLocalStorage(res.data)
        }).catch((err) =>{
            console.log(err.response.status);
            if (err.response.status === 404)
                return setAuthStatusText("Пользователь не найден")

            setAuthStatusText("Неверный логин или пароль")
        })

    }

    const registerUser = async (value: RegistrationType) => {
        await axios.post(
            'http://localhost:4444/auth/register',
            {
                name: value.name,
                email: value.mail,
                password: value.password,
                isAdmin: false
            }
        ).then((res) => {
            isVisible(false)
            setAuth(true)
            setRegisterStatusText('')
            saveUserInLocalStorage(res.data)
        }).catch((err) => {
            if (err.response.status === 500)
                return setRegisterStatusText("Аккаунт с такой почтой уже существует")

            setRegisterStatusText("Ошибка валидации")
        })
    }

    return(
        <div className={style.modalContainer}>
            {isSignInVisible?
                <>
                    <h1 className={style.title}>Войти</h1>
                    <div className={`${style.signErrorContainer} ${authStatusText === '' ? style.nonActive : ''}`}>
                        <span className="error">{authStatusText}</span>
                    </div>
                    <div className={style.mainContent}>
                        <Formik initialValues={{login: '', password: ''}}
                                onSubmit={ (value) => authorizeUser(value)}>

                            <Form className={style.forms}>
                                <div className={style.fields}>
                                    <Field className={style.formField} id="login" name="login" placeholder="Логин"/>
                                    <Field className={style.formField} id="password" name="password" placeholder="Пароль"/>
                                </div>
                                <div className={style.buttonContainer}>
                                    <button type='submit' className={style.submitButton}>Войти</button>
                                </div>
                            </Form>
                        </Formik>
                        <div className={style.signUpInfo}>
                            <span>Нет аккаунта?</span>
                            <span className={style.signUpLink} onClick={() => setSignInVisibility(!isSignInVisible)}>Зарегистрироваться</span>
                        </div>
                    </div>
                </>
                :
                <>
                    <h1 className={style.title}>Зарегистрироваться</h1>
                    <div className={`${style.signErrorContainer} ${registerStatusText === '' ? style.nonActive : ''}`}>
                        <span className="error">{registerStatusText}</span>
                    </div>
                    <div className={style.mainContent}>
                        <Formik initialValues={{name:'',mail: '', password: ''}}
                                onSubmit={ (value) => registerUser(value)}>
                            <Form className={style.forms}>
                                <div className={style.fields}>
                                    <Field className={style.formField} id="name" name="name" placeholder="Имя"/>
                                    <Field className={style.formField} id="mail" name="mail" placeholder="Почта"/>
                                    <Field className={style.formField} id="password" name="password" placeholder="Пароль"/>
                                    <div className={style.publicPrivacyContainer}>
                                        <div className={style.customCheckboxContainer}>
                                            <input type={"checkbox"}  id="customCheckbox" className={style.checkbox}/>
                                            <label htmlFor="customCheckbox" className={style.label}></label>
                                        </div>
                                        <p className={style.publicPrivacyText}>Регистрируясь на сайте, вы соглашаетесь с
                                            <a className={style.link}>Пользовательским соглашением</a>
                                            и подписываетесь на <a className={style.link}> рассылку</a>
                                        </p>
                                    </div>
                                </div>
                                <div className={style.buttonContainer}>
                                    <button type='submit' className={`${style.submitButton} ${style.signUpButton}`}>Зарегистрироваться</button>
                                </div>

                            </Form>
                        </Formik>
                        <div className={style.signUpInfo}>
                            <span>Уже есть аккаунт?</span>
                            <span className={style.signUpLink} onClick={() => setSignInVisibility(!isSignInVisible)}>Войти</span>
                        </div>
                    </div>
                </>
}
        </div>

    )
}