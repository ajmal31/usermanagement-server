const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/React',{useNewUrlParser:true})

mongoose.connection.once('open',()=>console.log('database connection success')).on('error',error=>{
console.log(error);
})