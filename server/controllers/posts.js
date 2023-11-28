import Post from "../models/Post.js";
import User from "../models/User.js";

export const createPost=async(req,res)=>{
    try{
     const {userId,description,picPath}=req.body;
     const user=await User.findById(userId);
     const newPost=new Post({
        userId,
        firstName:user.firstName,
        lastName:user.lastName,
        location:user.location,
        description,
        userPicPath:user.picPath,
        picPath,
        likes:{},
        comments:[],
     })
     await newPost.save();
     const post=await Post.find();
     res.status(201).json(post);

    }catch(err){
        res.status(409).json({error:err.message});
    }
}

export const getFeedPosts=async(req,res)=>{
    try{
        const post=await Post.find();
        res.status(200).json(post);

    }catch(err){
        res.status(404).json({error:err.message});
    }
}

export const getUserPosts=async(req,res)=>{
    try{
        const {userId}=req.params;
        const post=await Post.find({userId});
        res.status(200).json(post);

    }catch(err){
        res.status(404).json({error:err.message});
    }
}
export const likePost=async(req,res)=>{
    try{
        const {id}=req.params;
        const {userId}=req.body;
        const post=await Post.findById(id);
        const liked=await post.likes.get(userId);

        if(liked){
            post.likes.delete(userId);
        }else{
            post.likes.set(userId,true);
        }
        const updatedPost=await Post.findByIdAndUpdate(
            id,
            {likes:post.likes},
            {new:true}
        );
        res.status(200).json(updatedPost);
    }catch(err){
        res.status(404).json({error:err.message});
    }
}