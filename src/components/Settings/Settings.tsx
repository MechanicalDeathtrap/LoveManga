import borderStyle from "../Catalogue/Catalogue.module.sass";
import style from "./Settings.module.sass"
import {useRef, useState} from "react";
import {Field, Form, Formik} from "formik";

export const Settings = () =>{
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

    return(
        <>
            <div className={borderStyle.border}></div>
            <div className={style.settingsContainer}>
                <div className={style.asideContainer}>
                    <div className={style.photoContainer}>
                        <img ref={uploadedImage} alt="profile_photo" className={style.profilePhoto}/>
                    </div>
                    <div className="imageUploaderContainer" >
                        <input type="file" accept="image/*" onChange={handleImageUpload} ref={imageUploader} className={style.changePhotoField}/>
                        <button className={style.changePhotoButton} onClick={() => imageUploader.current.click()}>Сменить фото</button>
                    </div>
                </div>
                <div className={style.mainContainer}>
                    <div className={style.topContainer}>
                        <div className={style.profileName}>
                            <span className={style.name}>Mechanical Deathtrap</span>
                            <img src="/src/assets/pencil-.svg" alt="redo_image" />
                        </div>
                        <div className={style.profileInfo}>
                            <span className={style.info}>0 Комментариев</span>
                            <span className={style.info}>0 В избранном</span>
                        </div>
                    </div>
                    <div className={style.profileDescription}>
                        <div className={style.descriptionTitleContainer}>
                            <span className={style.descriptionTitle}>О себе</span>
                            <img src="/src/assets/pencil-.svg" alt="redo_image" onClick={() => {setDescriptionInputVisible(!descriptionInputVisible)}}/>
                        </div>
                        <p className={style.description}>{description}</p>

                        { descriptionInputVisible?
                            <Formik initialValues={{description: ''}} onSubmit={() => console.log('')}>
                                { ({setFieldValue}) =>
                                <Form className={style.form} ref={descriptionForm}>
                                    <div className={style.form__inputContainer}>
                                        <Field id="description" name="description" className={style.descriptionInput}/>
                                        <img src="/src/assets/cross.svg" alt={style.delete_button} onClick={() => setFieldValue('description', '')}/>
                                    </div>
                                    <button type='button' className={style.form__submitButton} onClick={() => {changeDescription(setFieldValue)}}>Применить</button>
                                </Form>
                                }
                            </Formik>
                             : <></> }

                    </div>
                    <button className={style.submitChangesButton}>Сохранить изменения</button>
                </div>
            </div>
        </>
    )
}