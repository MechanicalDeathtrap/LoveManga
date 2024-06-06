import {create} from "zustand";
import {AuthTypes} from "../../types/Auth.types.ts";

export const useAuthStore = create<AuthTypes>((set) =>({
    isAuthorized: false,
    setAuth: (isAuth) =>{
        set(() => ({
            isAuthorized: isAuth
        }))
    }
}))