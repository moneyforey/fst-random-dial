const { Router } = require("express");
const Todo = require("../model/todos.schems");

const todoRouter = Router();
todoRouter.get('/',async(req,res)=>{
    const todos = await Todo.find();
    res.send(200,todos);
})

todoRouter.post('/post',async(req,res)=>{
    const todo = new Todo({...req.body});
    await todo.save();
    res.send(200,'todo added sucessfully');
})

todoRouter.get('/mytodos',async(req,res)=>{
    const {owner} = req.body;
    const todos = await Todo.find({owner});
    res.send(200,todos);
})

module.exports = todoRouter;