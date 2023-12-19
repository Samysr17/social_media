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
}
})

