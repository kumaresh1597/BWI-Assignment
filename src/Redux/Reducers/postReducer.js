import { POST_SUCCESS_DATA,POST_REQUEST_START,POST_FAILURE_DATA } from "../Actions/actionType";

const initialState = {
    isLoading: false,
    data:[],
    error:""
}


function postReducer(state = initialState,actions){
    switch(actions.type){
        case POST_REQUEST_START : return {...state,isLoading:true}
        case POST_SUCCESS_DATA : return {
            ...state,isLoading: false,data:actions.payload,error:""
        }
        case POST_FAILURE_DATA : return {...state,isLoading: false,data:[],error:actions.payload}
        default : return state
    }
}

export default postReducer;