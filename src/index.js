const express=require('express');
require('./db/mongoose');
const cors=require('cors');
const Avatar=require('./model/avatarModel')
const app=express();
const port=process.env.PORT || 9000;
app.use(express.json());
app.use(cors());
// create avatar
app.post('/avatar',async(req,res)=>{
    const avatar=new Avatar(req.body);
    try{
        avatar.image=`https://avatars.dicebear.com/v2/avataaars/${avatar.name}.svg?options[mood][]=happy`;
      await avatar.save();
      res.status(201).json(avatar);
    }catch(e){res.status(501).json(e)}
})
// get avatar
app.get('/avatar',async(req,res)=>{
    try{
        const avatar=await Avatar.find({});
        res.status(200).json(avatar);
    }catch(e){res.status(500).send(e)}
})
    // task avatar 
    app.delete('/delete/:id',async(req,res)=>{
        try{
            const deleteAvatar=await Avatar.findByIdAndDelete(req.params.id);
            res.status(200).json(deleteAvatar);
        }catch(e){res.status(500).json(e)}
    })
app.listen(port,()=>console.log('server is running on port ',port))