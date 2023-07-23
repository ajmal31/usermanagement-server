const adminHelper=require('../Helpers/adminHelper')
module.exports={

    getAllusers:(req,res)=>{

         adminHelper.getAlluser().then((Response)=>{

            console.log('successs');
         })
    },
    postLogin:(req,res)=>{

        console.log('reached admin side');
        const data=req.body
        adminHelper.postLogin(data).then((response)=>{

            res.json(response)

        })
    }
}