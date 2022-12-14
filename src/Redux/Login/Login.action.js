import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./Login.type";



export const existUser= JSON.parse(localStorage.getItem("userDetails"))||[];

export const login = (creds)=> (dispatch)=>{
    dispatch({type: LOGIN_LOADING});

    existUser.forEach((el)=>{
        if(el.email===creds.email && el.password===creds.password){
            return  dispatch({type:LOGIN_SUCCESS, payload:creds})
        }
    });

    dispatch({type:LOGIN_ERROR, payload:"wrong credentials! Please check your Email or Password"})

}

export const logout = () =>(dispatch)=>{
    dispatch({type:LOGOUT});
}