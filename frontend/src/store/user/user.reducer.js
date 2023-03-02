
const token = localStorage.getItem('token') || null

const initState ={
    token: token,
    isAuth:false,
    
}
const userReducer = (state=initState,{type,payload})=>{
      switch (type) {
        case value:
            
            break;
      
        default:
            break;
      }
}

export default userReducer