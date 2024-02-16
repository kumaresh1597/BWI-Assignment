import { SET_USER,CLEAR_USER } from "./actionType";

export const setUser = (user)=>{
    console.log(user)
    return {
        type : SET_USER,
        payload : user
    }
}

export const clearUser = ()=>{
    return {
        type : CLEAR_USER
    }
}