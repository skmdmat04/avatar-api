const express=require('express');
require('./db/mongoose');
const cors=require('cors');
const Task=require('./model/taskModel')
const app=express();
const port=process.env.PORT || 9000;
app.use(express.json());
app.use(cors());
// create task
app.post('/task',async(req,res)=>{
    const task=new Task(req.body);
    try{
        task.iconUrl=`https://img.icons8.com/${task.title}`
      await task.save();
      res.status(201).json(task);
    }catch(e){res.status(501).json(e)}
})
// get task
app.get('/tasks',async(req,res)=>{
    try{
        const tasks=await Task.find({});
        res.status(200).json(tasks);
    }catch(e){res.status(500).send(e)}
})
// edit task
app.patch('/edit/:id',async(req,res)=>{
    console.log('helo')
    const update=Object.keys(req.body);
    try{
        console.log('hello1')
        const task=await Task.findById(req.params.id);
        console.log(task)
        update.forEach(value=>{
            if(value=='title'){
        task[value]=req.body.title;
        task.iconUrl=`https://img.icons8.com/${req.body.title}`
        }else task[value]=req.body[value]
           })
           await task.save();
           res.status(200).json(task);
    }catch(e){res.status(404).json(e)}
    });
    // task deletecd 
    app.delete('/delete/:id',async(req,res)=>{
        try{
            const deleteTask=await Task.findByIdAndDelete(req.params.id);
            res.status(200).json(deleteTask);
        }catch(e){res.status(500).json(e)}
    })
app.listen(port,()=>console.log('server is running on port ',port))