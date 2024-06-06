import bycrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.js"

//getting request in destructured and sending required response in saving user data
export const Signup=async(req,res)=>{
    try{
        const {
            Name,
            email,
            password, 
            // friends,
            }=req.body;
    
            const salt= await bycrypt.genSalt();
            const passwordhash= await bycrypt.hash(password,salt);
    
            const newuser=new User({
            Name,
            email,
            password:passwordhash,
           
            friends,
            viewedProfile:Math.floor(Math.random()*100),
            impressions:Math.floor(Math.random()*10)
            })
            const saved_user=await newuser.save();//user saved succesfully
            res.status(201).json(saved_user);

    }catch(err){
       res.status(500).json({error:err.message});//saving failes
    }
    
}

export const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email:email});
        if(!user) return res.status(400).json({msg:"User does not exist"});
        const same=await bycrypt.compare(password,user.password);
        if(!same) return res.status(400).json({msg:"Password is not same"});

        const token=jwt.sign({id:user._id},"ManchesterUnited");
        delete user.password;
        res.status(200).json({token,user});
    }catch(err){
        res.status(500).json({error:err.message});
    }
}