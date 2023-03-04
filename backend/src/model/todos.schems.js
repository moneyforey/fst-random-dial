const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
    owner:{type:String},
    title:{type:String,required:true},
    description:{type:String,required:true},
    status:{type:Boolean,default:false},
    time:{type:Date,default:Date.now}
})

const Todo = model('todo',todoSchema);

module.exports = Todo;