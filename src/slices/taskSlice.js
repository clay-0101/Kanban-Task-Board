import { createSlice } from "@reduxjs/toolkit";

let taskSlice = createSlice({
    name : "tasks",
    initialState : {
        tasks : JSON.parse(localStorage.getItem("Tasks") ) || [],
    },
    reducers : {
        addTask : (state, action)=>{
            state.tasks = action.payload
            localStorage.setItem("Tasks", JSON.stringify(action.payload))
        },
        deleteTask : (state , action) =>{
            state.tasks = state.tasks.filter((task)=> task.id !== action.payload.id)
            localStorage.setItem("Tasks",JSON.stringify(state.tasks))
        },
        updateTask : (state, action) =>{
            state.tasks = state.tasks.map((task)=>{
                return task.id === action.payload.id ? action.payload.data : task
            })
            localStorage.setItem("Tasks", JSON.stringify(state.tasks))
        }
    }
})

export const {addTask, deleteTask,updateTask} = taskSlice.actions
export default taskSlice.reducer