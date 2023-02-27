const { Router } = require("express");
const User = require("../model/user.schema");

const userRouter = Router();

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
    await newUser.save();
    res.status(200).send(`${email} is registerded successfully`);
});

userRouter.post('/login',async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email,password});
    if(!user){
        return res.status(400).send('credential error')
    }
    res.status(200).send({message:'login successfully', token:`${user.name}:${Math.random()}:${email}`});
})


module.exports = userRouter;