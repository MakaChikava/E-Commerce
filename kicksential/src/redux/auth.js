import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth_token: '',
    isAuthenticated: false
}

const authSlice ={
    name:"authentication",
    initialState,
    reducers: {
        setToken(state, token) {
            auth_token = token
            isAuthenticated = true
        },
        removeToken(state){
            auth_token = ''
            isAuthenticated = false
        }
    }

}


export default authSlice.reducer;