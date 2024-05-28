import jwt from "jsonwebtoken";

export const verifytoken=(req,res,next)=>{
    try{
        let token=req.header("Authorization");
        if(!token){
            return res.status(403).send("Access Denied");
        }
        if(token.startsWith("Bearer ")){
            token=token.silce(7,token.length).trimleft();
        }
        const verified=jwt.verify(token,"ManchesterUnited");
        req.user=verified;
        next();
    }catch(err){
        res.status(500).json({error:err.message});
    }
}