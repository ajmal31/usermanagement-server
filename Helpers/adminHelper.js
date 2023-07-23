 const adminSchema = require('../model/adminSchema')
const User=require('../model/userSchema')

module.exports={

    getAlluser:()=>{
        return new Promise((resolve,reject)=>{

            User.find().then((response)=>{
                if(response)
                {
                    console.log('get all user detail succesfull')
                    console.log(response)
                    resolve(response)
                }else{

                    console.log('get All users opertior failed');
                    console.log(response)

                }
            })
        })
    },
    postLogin:(data)=>{
        return new Promise((resolve,reject)=>{
            console.log('admin credentals',data)
          adminSchema.findOne({email:data.email,password:data.password}).then((response)=>{

            if(response!=null)
            {
              const result={
                   
                     response:response,
                     status:true
               }
               resolve(result)
            }else
            {
                
              const result={
                   
                response:response,
                status:false
          }
          resolve(result)
            }
           
          })

        })
    }

}