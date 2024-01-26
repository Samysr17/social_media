import {createSlice} from "@reduxjs/toolkit"
const initialState={
 mode:"light",
 user:null,
 token:null,
 posts:[]
}

export const authslice=createSlice({
name:"auth",
initialState,
reducers:{
    setmode:(state)=>{
        state=state.mode==="light"?"dark":"light";
    },
    setLogin:(state,action)=>{
     state.user=action.payload.user;
     state.token=action.payload.token;
    },
    setLogout:(state)=>{
        state.user=null;
        state.token=null;
    },
    setFriends:(state,action)=>{
        if(state.user){
            state.user.friends=action.payload.friends;
        }else{
            console.error("No user friends");
        }
    },
    setPosts:(state,action)=>{
        state.posts=action.payload.posts;
    },
    setPost:(state,action)=>{
        const updated=state.posts.map((post)=>{
            if(post._id===action.payload.post_id)return action.payload.post;
            return post;
        })
        state.posts=updated;
    }
}
});

export const {setmode,setLogin,setLogout,setFriends,setPost,setPosts}=authslice.actions;
export default authslice.reducer;

