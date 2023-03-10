require('dotenv').config();
const jwt = require('jsonwebtoken');

const {sceretkey} = process.env;
const tokenCreator=(email, id, name)=>{
    let  token = jwt.sign({email: email, id: id, name:name} , sceretkey, {
       expiresIn : "24 hours"
    })
    return token
}

module.exports = tokenCreator;