export type AuthTypes = {
    isAuthorized: boolean,
    setAuth: (isAuth: boolean) => void
}

export type CheckAuthType = {
    login: string,
    password: string
}

export type RegistrationType = {
    name: string,
    mail: string,
    password: string
}