
import { ADD_CART, GET_DATA,REMOVE_CART } from "./actionType";

export const addCart = (product)=>{
    console.log(product);
    return {
        type : ADD_CART,
        payload : product
    }
}

export const getData = ()=>{
    console.log("inside getData action");
    return {
        type : GET_DATA
    }
}

export const removeCart = (product)=>{
    return {
        type : REMOVE_CART,
        payload : product
    }
}