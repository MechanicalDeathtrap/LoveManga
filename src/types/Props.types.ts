import {MangaTypes} from "./Manga.types.ts";


export type PopularMangaPropsType = {
    mostPopularMangas: MangaTypes
}

export type VisibilityType = {
    isVisible: (isVisible: boolean) => void
}