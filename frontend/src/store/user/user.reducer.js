import { user_login, user_logout, user_signup } from "./user.types";
const token = localStorage.getItem('token') || null;

const initState ={
    message:'',
    userName:'',
    token: token,
    isAuth:false,
}

const userReducer = (state=initState,{type,payload})=>{
      switch (type) {
        case user_signup:{
            return {
                ...state,
                 message:'Register Successfully'
            }
        }
        case user_login:{
            localStorage.setItem('token',payload.token);
            return{
                ...state,
                message:'login successfully',
                userName:payload.name,
                token:payload,
                isAuth:true
            }
        }     
        case user_logout:{
            localStorage.removeItem('token');
            return{
                ...state,
                message:'logout successfully',
                token:null,
                isAuth:false
            }
        }
        default:{
            return state
        }
      }
}
export default userReducer