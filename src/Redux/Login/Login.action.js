import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./Login.type";


export const login = (creds)=> (dispatch)=>{
    let flag=false;
 const existUser= JSON.parse(localStorage.getItem("userDetails"))||[];
    dispatch({type: LOGIN_LOADING});

    existUser.map((el)=>{
        if(el.email===creds.email && el.password===creds.password){
            return  flag=true;
        }
    });
    if(flag){
        dispatch({type:LOGIN_SUCCESS,payload:creds});
    }
    else{
        dispatch({type:LOGIN_ERROR, payload:"wrong credentials! Please check your Email or Password"});
    }
    
}

export const logout = () =>(dispatch)=>{
    dispatch({type:LOGOUT});
}