import User from "../models/User.js"

export const getuser=async(req,res)=>{
    try{
     const {id}=req.params;
     const user=await User.findById(id);
     res.status(200).json(user);
    }catch(err){
        res.status(404).json({error:err.message});
    }
}

export const getUserFriends=async(req,res)=>{
    try{
      const {id}=req.params;
      const user=await User.findById(id);
      const friends=await Promise.all(
        user.friends.map((id)=>User.findById(id))
      )
      const FormattedFriends=friends.map(
        ({_id,firstName,lastName,occupation,location,picPath})=>{
            return {_id,firstName,lastName,occupation,location,picPath};
        }
      );
      res.status(200).json(FormattedFriends);
    }catch(err){
        res.status(404).json({error:err.message});
    }
}

export const addRemoveFriend=async(req,res)=>{
    try{
        const {id,friendId}=req.params;
        const user= await User.findById(id);
        const friend=await User.findById(friendId);
        if(user.friends.includes(friendId)){
            user.friends=user.friends.filter((id)=>id!==friendId);
            friend.friends=friend.friends.filter((id)=>id!==id);
        }else{
            user.friends.push(friend);
            friend.friends.push(user);
        }
        await user.save();
        await friend.save();

        const friends=await Promise.all(
            user.friends.map((id)=>User.findById(id))
          )
          const FormattedFriends=friends.map(
            ({_id,firstName,lastName,occupation,location,picPath})=>{
                return {_id,firstName,lastName,occupation,location,picPath};
            }
          );
          res.status(200).json(FormattedFriends);

    }catch(err){
        res.status(404).json({error:err.message});
    }
}