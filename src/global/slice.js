import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
  name: 'app',
  initialState: {
    user: {},
    token: {}
  },
  reducers:{
    addUser: (state, {payload})=>{
      state.user = payload
    },
    userToken: (state, {payload})=>{
      state.token = payload
    }
  }
});
export const { addUser, userToken} = appSlice.actions;
export default appSlice.reducer;
