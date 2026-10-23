import { createSlice } from "@reduxjs/toolkit";


let formSlice = createSlice({
    name : "form",
    initialState : {
        isOpen : false,
        defaultValue : null
    },
    reducers : {
        setIsFromOpen : (state)=>{
            state.isOpen = !state.isOpen
        },
        setDefaultValue : (state, action)=>{
            state.defaultValue = action.payload
        }
    }
})


export const {setIsFromOpen, setDefaultValue} = formSlice.actions
export default formSlice.reducer