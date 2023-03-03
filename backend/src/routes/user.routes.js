const { Router } = require("express");
const bcrypt = require('bcrypt');
const User = require("../model/user.schema");
const tokenCreator = require("../config/tokencreator");
require('dotenv').config();

const {saltRound} = process.env;
const userRouter = Router();
console.log(saltRound);
userRouter.get('/users',async(req,res)=>{
     const users = await User.find();
     res.status(200).send(users);
})

userRouter.post('/register',async(req,res)=>{
    const {name,email,password} = req.body;
    const user = await User.findOne({email});
    if(user){
        return res.status(409).send(`${email} already registerd`);
    }
    const newUser = new User({name,email,password})
    newUser.password = await bcrypt.hash(password, 10)
    await newUser.save();
    res.status(200).send(`${email} is registerded successfully`);
});

userRouter.post('/login',async(req,res)=>{
    const {email,password} = req.body;
    if(email && password){
      const user = await User.findOne({email});
      if(user){
        const result = await bcrypt.compare(password,user.password);
        if(result){
          const token = tokenCreator(user.email,user._id,user.name)
          res.status(200).send({message:'login successfully', token});
        }else{
          return res.status(400).send('credential error')
        }
      }else{
        return res.status(400).send(`${email} is not registerded with us`)
      } 
    }else{
        return res.status(400).send('provide the crediantial')
    }
    
})

module.exports = userRouter;