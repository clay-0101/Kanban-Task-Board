import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
    name : "user",
    initialState : {
        user : JSON.parse(localStorage.getItem("User")) || "User"
    },
    reducers : {
        setUser : (state , action) => {
            state.user = action.payload
            localStorage.setItem("User", JSON.stringify(action.payload))
        }
    }
})

export const {setUser} = userSlice.actions
export default userSlice.reducer