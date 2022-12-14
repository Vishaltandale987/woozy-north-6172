import { SIGNUP_EXISTING_USER, SIGNUP_LOADING, SIGNUP_SUCCESS } from "./Signup.type"

let existUser = JSON.parse(localStorage.getItem("userDetails"))||[];
const initialState={
    loading:false,
    existingUser:false,
    users:existUser,
}


export const signupReducer=(state=initialState,{type,payload})=>{
    
    switch(type){
        case SIGNUP_LOADING:{
            return{
                ...state,
                loading:true,
            }
        }
        case SIGNUP_EXISTING_USER:{
            return{
                ...state,
                loading:false,
                existingUser:true,
            }
        }
        case SIGNUP_SUCCESS:{
            localStorage.setItem("userDetails",JSON.stringify([...state.users,payload]));
            return{
                ...state,
                loading:false,
                existingUser:false,
                users:[...state.users,payload]
            }
            
        }
        default:{
            return state;
        }
    }
}