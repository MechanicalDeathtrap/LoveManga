export type MangaTypes = {
    _id: string
    title: string,
    jp_title: string,
    synopsis: string,
    score: number,
    genres: GenreType[],
    themes: ThemeType[],
    demographic: DemographicType[],
    picture_url: string,
    pages: string[],
    comments: CommentsType[]
}


type GenreType = {
    name: string
}
type ThemeType = {
    name: string
}
type DemographicType = {
    name: string
}
export type CommentsType = {
    avatar_url: string,
    user_name: string,
    creation_date: string,
    comment: string
}

