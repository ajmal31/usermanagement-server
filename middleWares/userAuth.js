const jwt=require('jsonwebtoken')
module.exports={

    userAuth:(req,res,next)=>{
        const authHeader=req.headers['authorization']
        const token=authHeader && authHeader.split(' ')
        if(token==null) return res.sendStatus(401)

        jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{

            if(err) return res.sendStatus(403)


            console.log('token user',user)
            req.user=user
            next()
        })
    }
}