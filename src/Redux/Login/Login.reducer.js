import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./Login.type"

const initialState={
    loading:false,
    error:false,
    existingUser:false,
    user:{},
}

export const loginReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case LOGIN_LOADING:{
            return{
                ...state,
                loading:true,
            }
        }
        case LOGIN_SUCCESS:{
            return{
                ...state,
                loading:false,
                existingUser:true,
                user:payload,
            }
        }
        case LOGIN_ERROR:{
            return{
                ...state,
                loading:false,
                error:true,
                existingUser:false,
            }
        }
        case LOGOUT:{
            return{
                ...state,
                loading:false,
                error:false,
                existingUser:false,
                user:{}
            }
        }
        default:{
            return state;
        }
    }
}