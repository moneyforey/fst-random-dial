import { user_login, user_logout, user_signup } from "./user.types";

export const usersignupApi =(userdata)=>async(dispatch)=>{
       try{
           let res = await axios.post('',userdata);
           return dispatch({type:user_signup});
       }catch(err){
          console.log(err);
       }
}

export const userloginApi =(userdata)=>async(dispatch)=>{
       try{
           let res = await axios.post('',userdata);
           return dispatch({type:user_login,payload:res.data.token});
       }catch(err){
        console.log(err);
       }
}

export const userlogoutApi=()=>(dispatch)=>{
        return dispatch({type:user_logout});
}