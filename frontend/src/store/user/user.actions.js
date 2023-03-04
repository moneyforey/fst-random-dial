import { user_login, user_logout, user_signup } from "./user.types";
import axios from 'axios'

export const usersignupApi =(userdata)=>async(dispatch)=>{
       try{
           let res = await axios.post(`http://localhost:8080/register`,userdata);
           console.log(res.data);
           dispatch({type:user_signup});
       }catch(err){
          console.log(err);
       }
}

export const userloginApi =(userdata)=>async(dispatch)=>{
       console.log(userdata);
       try{
           let res = await axios.post(`http://localhost:8080/login`,userdata);
           dispatch({type:user_login,payload:res.data});
       }catch(err){
        console.log(err);
       }
}

export const userlogoutApi=()=>(dispatch)=>{
        return dispatch({type:user_logout});
}