const mongoose=require('mongoose')
const schema=mongoose.Schema

const adminSchema=new schema({

    email:{type:String},
    password:{type:String}
})

module.exports=mongoose.model('admin',adminSchema)