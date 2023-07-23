const mongoose=require('mongoose')
const schema=mongoose.Schema

const userSignup=new schema({
    userName:{type:String},
    email:{type:String},
    password:{type:String}
})

module.exports=mongoose.model('users',userSignup)