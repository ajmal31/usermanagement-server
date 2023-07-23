const userHelper=require('../Helpers/userHelper')
const jwt=require('jsonwebtoken')
module.exports={
    signup:(req,res)=>{

        console.log('helo etheeee')
        console.log(req.body)
        const data=req.body
       userHelper.signup(data).then((response)=>{
        res.json(response)

       })


    },
    login:(req,res)=>{
        console.log('login details',req.body)
        userHelper.login(req.body).then((response)=>{
            console.log('helo1');
             if(response.status)
             {
                const data = JSON.parse(JSON.stringify(response.response));
                const authtoken = jwt.sign(data, process.env.SECRET_TOKEN);
                
                console.log('jwt tokn',authtoken)
                response.token=authtoken
             }
            res.json(response)
         
        })
    },
    userDetails:(req,res)=>{
         const uid=req.params.id
        userHelper.userDetails(uid).then((response)=>{


        })
    },
   
    getAllUsers:(req,res)=>{

        userHelper.getAllUsers().then((response)=>{

            console.log('all users',response)
            res.json(response)
        })
    },
    getUser:(req,res)=>{
        const uid=req.params.id
        userHelper.getUser(uid).then((response)=>{
              res.json(response)
        })
    },
    updateUser:(req,res)=>{
       
        const uid=req.params.id
        const data=req.body
      
        userHelper.updateUser(uid,data).then((response)=>{
            res.json(response)
        })
    },
    removeUser:(req,res)=>{
     
        const uid=req.params.id
        userHelper.removeUser(uid).then((response)=>{
           res.json(response)
        })
    }
}