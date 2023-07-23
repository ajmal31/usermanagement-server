const { response } = require('express');
const User=require('../model/userSchema')
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports={

    signup:(data)=>{
        return new Promise(async(resolve,reject)=>{

            console.log(data.email)
            console.log(data.password)

            const hash = bcrypt.hashSync(data.password, saltRounds);
            console.log('hashed password',hash)
          
           const user=new User({
            userName:data?.userName,
            email:data?.email,
            password:hash
            
           })
           await user.save().then((response)=>{
            if(response)
            {
                console.log('use inserted succdssful')
                console.log(response)
                let status=true
                resolve(status)
            }else
            {
                
                let status=false
                console.log('use details is not inserted')
                resolve(status)
            }
           })

        })
    },
    login:(data)=>{
        return new Promise((resolve,reject)=>{

            email=data.email,
            
           
            User.findOne({email:email}).then((response)=>{
                
                if(response)
                {
                    console.log(response)
                    password=bcrypt.compareSync(data.password,response.password);
                    console.log('when login hashed password',password)
                    if(password)
                    {
                        console.log('login success')
                        const result={
                             status:true,
                             response:response

                        }
                       
                        resolve(result)
                    }else{
                        const result={
                            status:false,
                            response:response

                       }
                       console.log('login failed,  incorrect password')
                       resolve(result)
                        
                    }
                }else
                {

                    const result={
                        status:false,
                        response:response

                   }
                   console.log('user not exist')
                    resolve(result)
                   
                }
            })
        })
    },
    userDetails:(uid)=>{

        return new Promise((resolve,reject)=>{

            User.findOne({_id:uid}).then((response)=>{

                if(response)
                {
                    console.log('user detail find succesfully',response)
                }else
                {
                    console.log("did'nt get the user details",response)
                }
            })
        })
    },
    getAllUsers:()=>{
        return new Promise((resolve,reject)=>{
            User.find().then((response)=>{
                resolve(response)
            })
        })
    },
    getUser:(id)=>{
        return new Promise((resolve,reject)=>{
            User.findById({_id:id}).then((response)=>{
                resolve(response)
            })
        })
    },
    updateUser:(id,data)=>{
        return new Promise((resolve,reject)=>{

            User.updateOne({_id:id},{$set:{userName:data.userName,email:data.email}}).then((response)=>{
                console.log('userUpdated or not',response)
                resolve(response.acknowledged)
            })
        })
    },
    removeUser:(uid)=>{
        return new Promise((resolve,reject)=>{
            User.deleteOne({_id:uid}).then((response)=>{
                resolve(response)
            })
        })
    }
    
}