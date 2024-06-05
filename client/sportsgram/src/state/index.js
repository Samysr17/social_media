import {createSlice} from 'react-redux'

const initialState={
    user:null,
    token:null,
    posts:[]
}

export const authSlice=({
    name:"auth",
    initialState,
    reducers:{
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
                console.error("User does not have friends");
            }
        },
        setPosts:(state,action)=>{
            state.posts=action.payload.posts;
        },
        setpost:(state,action)=>{
            const updatedPosts=state.posts.map((post=>{
                if(post._id===action.payload.post_id)return action.payload.post;
                return post;
            }));
            state.posts=updatedPosts;
        }
    }
})

export const {setLogin,setLogout,setFriends,setPosts,setpost}=authSlice.actions;
export default authSlice.reducers;