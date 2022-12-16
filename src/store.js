import {legacy_createStore , compose, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import { signupReducer } from "./Redux/Signup/Signup.reducer";
import { loginReducer } from "./Redux/Login/Login.reducer";

const rootReducer = combineReducers({
    signupManager: signupReducer,
    loginManager:loginReducer
})

const composer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
    rootReducer,composer(applyMiddleware(thunk))
)