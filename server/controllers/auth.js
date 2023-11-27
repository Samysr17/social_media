import bycrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User"

//getting request in destructured and sending required response in saving user data
export const Signin=async(req,res)=>{
    try{
        const {
            firstName,
            lastName,
            email,
            password,
            picpath,
            friends,
            location,
            occupation
            }=req.body;
    
            const salt= await bycrypt.genSalt();
            const passwordhash= await bycrypt.hash(password,salt);
    
            const newuser=new User({
            firstName,
            lastName,
            email,
            password:passwordhash,
            picpath,
            friends,
            location,
            occupation,
            viewedProfile:Math.floor(Math.random()*100),
            impressions:Math.floor(Math.random()*10)
            })
            const saved_user=await newuser.save();//user saved succesfully
            res.status(201).json(saved_user);

    }catch(err){
       res.status(500).json({error:err.message});//saving failes
    }
    

}