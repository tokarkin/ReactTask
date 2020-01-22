import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from  "redux-thunk"
import {reducer as formReducer} from "redux-form";
import postReducer from "./posts-reducer";

let reducerItems = combineReducers({
    form:formReducer,
    posts:postReducer,
});

let store = createStore(reducerItems, applyMiddleware(thunkMiddleWare));
window.store = store;
export default store;