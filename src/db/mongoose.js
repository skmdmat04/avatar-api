const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://suresh48:951Suresh@shoping-crud.42q7ak0.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log('connected'))
.catch(e=>console.log('error:',e))