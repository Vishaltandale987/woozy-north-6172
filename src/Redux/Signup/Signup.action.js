import { SIGNUP_EXISTING_USER, SIGNUP_LOADING, SIGNUP_SUCCESS } from "./Signup.type";




export const signup = (creds)=> (dispatch)=>{
    const existUser= JSON.parse(localStorage.getItem("userDetails"))||[];
    let flag=false;
    dispatch({type: SIGNUP_LOADING});

    existUser.map((el)=>{if(el.email===creds.email){
      return flag=true;
    }})

    if(flag===false){
        dispatch({type:SIGNUP_SUCCESS,payload:creds})
    }
    else{
        dispatch({type:SIGNUP_EXISTING_USER,payload:"User already exist!"})
    }
   
 
}