import { createSlice } from "@reduxjs/toolkit";

let filterSlice = createSlice({
    name : "filter",
    initialState : {
        search : "",
        priority : "All",
        status : "All"
    },
    reducers : {
        setSearch : (state, action)=>{
            state.search = action.payload
        },
        setPriority : (state, action)=>{
            state.priority = action.payload
        },
        setStatus : (state, action)=>{
            state.status = action.payload
        }
    }
})

export const {setSearch , setPriority, setStatus} = filterSlice.actions
export default filterSlice.reducer