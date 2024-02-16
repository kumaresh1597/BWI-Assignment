import { ADD_CART, GET_DATA,REMOVE_CART } from "../Actions/actionType";

const myCart = [];

function cartReducer(state = myCart,actions){
    console.log("inside getData reducer");
    switch(actions.type){
        case ADD_CART : return [...state,actions.payload]
        case GET_DATA : return state
        case REMOVE_CART : return state.filter((item)=> item !== actions.payload)
        default : return state
    }
}

export default cartReducer;