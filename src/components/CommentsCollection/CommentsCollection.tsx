import style from "./CommentsCollection.module.sass"

export const CommentsCollection = () =>{
    return(
        <>
            <div className={style.commentContainer}>
                <div className={style.slicedImage}>
                    <img src="/src/assets/imageComment.png" alt="profile_photo" className={style.creatorImage}/>
                </div>
                <div className={style.comment}>
                    <div className={style.topContainer}>
                        <span className={style.creatorName}>Эрланд</span>
                        <span className={style.createdDate}>4 недели назад</span>
                    </div>
                    <p className={style.commentText}>Это перевод? Очень странно оформлены абзацы и предложения. Некоторые повторяются.</p>
                </div>
            </div>
        </>

    )
}