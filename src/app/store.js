import { configureStore } from "@reduxjs/toolkit"
import taskReducer from "../slices/taskSlice"
import formReducer from "../slices/formSlice"
import filterReducer from "../slices/filterSlice"
import userReducer from "../slices/userSlice"

export let store = configureStore({
    reducer : {
        tasks : taskReducer,
        form : formReducer,
        filter : filterReducer,
        user : userReducer
    }
})