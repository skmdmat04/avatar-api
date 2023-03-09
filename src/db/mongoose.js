const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://avatar:951Suresh@cluster0.3bg1qmu.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log('connected'))
.catch(e=>console.log('error:',e))