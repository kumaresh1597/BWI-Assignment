import { createStore,applyMiddleware,combineReducers} from "redux";
import postReducer from "./Reducers/postReducer";
import cartReducer from "./Reducers/cartReducer";
import userReducer from "./Reducers/userReducer";
import { thunk } from "redux-thunk";

const rootReducers = combineReducers({
    post : postReducer,
    cart : cartReducer,
    user : userReducer
})

const store = createStore(rootReducers,applyMiddleware(thunk));

export default store;