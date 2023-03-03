const { timeStamp } = require('console');
const mongoose=require('mongoose');

const taskSchema=new mongoose.Schema({
    title:{type:String,required:true,trim:true},
    link:{type:String,required:true,trim:true},
    iconUrl:{type:String,trim:true},
    date:{type:Date,default:Date.now}
});
const Task=mongoose.model("Task",taskSchema)
module.exports=Task