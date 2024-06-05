import borderStyle from "../../components/Catalogue/Catalogue.module.sass";
import style from "./SettingsProfilePage.module.sass"
import {useRef, useState} from "react";
import {Field, Form, Formik} from "formik";
import {UserTypes} from "../../types/User.types.ts";
import axios from "axios";

export const SettingsProfilePage = () =>{
    const [descriptionInputVisible, setDescriptionInputVisible] = useState(false);
    const [description, setDescription] = useState('Что-то о себе...');

    const uploadedImage = useRef(null);
    const imageUploader = useRef(null);
    const descriptionForm = useRef('');

    const handleImageUpload = (e : MouseEvent) => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const { current }  = uploadedImage;
            current.file = file;
            reader.onload = e => {
                current.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    const changeDescription = (setFiledValue) =>{
        const form = descriptionForm.current;
        setDescription(form["description"].value)
       setFiledValue('description', '');
    }

    const changeUserProfileInfo = async (value: UserTypes) =>{
        await axios.patch(
            'http://localhost:4444/profile/settings',
            {
                userDescription: value.name,
                avatarUrl: value.avatarUrl
            }
        ).then((res) =>{
            console.log(res);
        }).catch((err) =>{
            console.log(err);
        })
    }

    return(
        <>
            <div className={borderStyle.border}></div>
            <Formik initialValues={{description: '', imageInput: ''}}
                    onSubmit={(value) =>{
                        console.log(value);
                    }}>
                { ({setFieldValue}) =>
                <Form className={style.settingsContainer}>
                    <div className={style.asideContainer}>
                        <div className={style.photoContainer}>
                            <img ref={uploadedImage} alt="profile_photo" className={style.profilePhoto}/>
                        </div>
                        <div className="imageUploaderContainer" >
                            <input id='imageInput' name='imageInput' type="file" accept="image/*" onChange={handleImageUpload} ref={imageUploader} className={style.changePhotoField}/>
                            <button type='button' className={style.changePhotoButton} onClick={() => imageUploader?.current.click()}>Сменить фото</button>
                        </div>
                    </div>
                    <div className={style.mainContainer}>
                        <div className={style.topContainer}>
                            <div className={style.profileName}>
                                <span className={style.name}>NickName</span>
                                <button className={style.redoButton}>
                                    <img src="/src/assets/pencil-.svg" alt="redo_image" />
                                </button>
                            </div>
                            <div className={style.profileInfo}>
                                <span className={style.info}>0 Комментариев</span>
                                <span className={style.info}>0 В избранном</span>
                            </div>
                        </div>
                        <div className={style.profileDescription}>
                            <div className={style.descriptionTitleContainer}>
                                <span className={style.descriptionTitle}>О себе</span>
                                <button className={style.redoButton}>
                                    <img src="/src/assets/pencil-.svg" alt="redo_image" onClick={() => {setDescriptionInputVisible(!descriptionInputVisible)}}/>
                                </button>
                            </div>
                            <p className={style.description}>{description}</p>

                            { descriptionInputVisible?
                                    <div className={style.form} ref={descriptionForm}>
                                        <div className={style.form__inputContainer}>
                                            <Field id="description" name="description" className={style.descriptionInput}/>
                                            <img src="/src/assets/cross.svg" alt={style.delete_button} onClick={() => setFieldValue('description', '')}/>
                                        </div>
                                        <button type='button' className={style.form__submitButton} onClick={() => {changeDescription(setFieldValue)}}>Применить</button>
                                    </div>
                                 : <></> }

                        </div>
                        <button type='submit' className={style.submitChangesButton}>Сохранить изменения</button>
                    </div>
                </Form>
            }
            </Formik>
        </>
    )
}