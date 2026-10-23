import { configureStore } from "@reduxjs/toolkit"
import taskReducer from "../slices/taskSlice"
import formReducer from "../slices/formSlice"
import filterReducer from "../slices/filterSlice"

export let store = configureStore({
    reducer : {
        tasks : taskReducer,
        form : formReducer,
        filter : filterReducer
    }
})