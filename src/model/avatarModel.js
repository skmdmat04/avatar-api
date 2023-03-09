const mongoose=require('mongoose');

const avatarSchema=new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    email:{type:String,required:true,trim:true},
    phone:{type:Number,trim:true,required:true},
    website:{type:String,trim:true,required:true},
    image:{type:String}
});
const Avatar=mongoose.model("Avatar",avatarSchema)
module.exports=Avatar