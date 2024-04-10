import {Field, Form, Formik} from "formik";
import style from "./SignModal.module.sass"
import {useState} from "react";

export const SignModal = () =>{

    const [isSignInVisible, setSignInVisibility] = useState(true);

    return(
        <div className={style.modalContainer}>

            {isSignInVisible?
                <>
                    <h1 className={style.title}>Войти</h1>
                    <div className={style.mainContent}>
                        <Formik initialValues={{login: '', password: ''}}
                                onSubmit={(value) =>{
                                    console.log(value);
                                    /*TODO отправь на бэк*/
                                }}>
                            <Form className={style.forms}>
                                <div className={style.fields}>
                                    <Field className={style.formField} id="login" name="login" placeholder="Логин"/>
                                    <Field className={style.formField} id="password" name="password" placeholder="Пароль"/>
                                </div>
                                <div className={style.buttonContainer}>
                                    <button className={style.submitButton}>Войти</button>
                                </div>

                            </Form>
                        </Formik>
                        <div className={style.signUpInfo}>
                            <span>Нет аккаунта?</span>
                            {/*TODO link to sign up*/}
                            <span className={style.signUpLink} onClick={() => setSignInVisibility(!isSignInVisible)}>Зарегистрироваться</span>
                        </div>
                    </div>
                </>
                :
                <>
                    <h1 className={style.title}>Зарегистрироваться</h1>
                    <div className={style.mainContent}>
                        <Formik initialValues={{name:'',mail: '', password: ''}}
                                onSubmit={(value) =>{
                                    console.log(value);
                                    /*TODO отправь на бэк*/
                                }}>
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
                                        <p className={style.publicPrivacyText}>Регистрируясь на сайте, вы соглашаетесь с <a className={style.link}>Пользовательским соглашением</a> и подписываетесь на <a className={style.link}> рассылку</a></p>
                                    </div>
                                </div>
                                <div className={style.buttonContainer}>
                                    <button className={`${style.submitButton} ${style.signUpButton}`}>Зарегистрироваться</button>
                                </div>

                            </Form>
                        </Formik>
                        <div className={style.signUpInfo}>
                            <span>Уже есть аккаунт?</span>
                            {/*TODO link to sign up*/}
                            <span className={style.signUpLink} onClick={() => setSignInVisibility(!isSignInVisible)}>Войти</span>
                        </div>
                    </div>
                </>
}
        </div>

    )
}