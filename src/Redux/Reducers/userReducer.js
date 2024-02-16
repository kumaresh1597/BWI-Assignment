import { SET_USER,CLEAR_USER } from "../Actions/actionType";

const intialState = {
    user : null
}

function userReducer(state = intialState,actions){

    console.log(actions.payload)

    switch(actions.type){
        case SET_USER : return {...state, user : actions.payload}
        case CLEAR_USER: return {...state, user : null}
        default : return state
    }
}

export default userReducer;