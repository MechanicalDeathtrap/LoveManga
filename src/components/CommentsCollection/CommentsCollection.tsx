import style from "./CommentsCollection.module.sass"

export const CommentsCollection = (data) =>{ /*:CommentsType*/
    return(
        <>
            <div className={style.commentContainer}>
                <div className={style.slicedImage}>
                    <img src={data.avatar_url} alt="profile_photo" className={style.creatorImage}/>
                </div>
                <div className={style.comment}>
                    <div className={style.topContainer}>
                        <span className={style.creatorName}>{data.user_name}</span>
                        <span className={style.createdDate}>{data.creation_date}</span>
                    </div>
                    <p className={style.commentText}>{data.comment}</p>
                </div>
            </div>
        </>

    )
}