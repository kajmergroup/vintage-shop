
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching:false,
    error:false
  },
  reducers: {
    loginStart:(state)=>{
      state.isFetching=true
    },
    loginSuccess:(state,action)=>{
      state.isFetching=false;
      state.currentUser=action.payload
      window.localStorage.setItem('token',action.payload.accessToken)
      window.location.reload()
    },
    loginFailure:(state)=>{
      state.isFetching=false;
      state.error=true;
    },
    logOut:(state) => {
      state.currentUser= null;
      window.localStorage.removeItem('token')
    }
  },
});

export const {loginStart,loginSuccess,loginFailure,logOut} = userSlice.actions
export default userSlice.reducer  
