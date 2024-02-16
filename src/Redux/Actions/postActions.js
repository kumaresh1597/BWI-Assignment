import axios from "axios";
import { POST_SUCCESS_DATA,POST_FAILURE_DATA,POST_REQUEST_START } from "./actionType";

export const post_request_start = ()=>{
    return({
        type : POST_REQUEST_START
    })
}

export const post_success_data = (data)=>{

    return({
        type: POST_SUCCESS_DATA,
        payload:data
    })
}

export const post_failure_data = (error)=>{

    return({
        type: POST_FAILURE_DATA,
        payload:error
    })
}

export function postRequest(){

    return (dispatch)=>{
        dispatch(post_request_start());
         axios.get(`https://dummyjson.com/products`)
        .then(response=>dispatch(post_success_data(response.data)))
        .catch(err=>dispatch(post_failure_data(err.message)))
    }
}