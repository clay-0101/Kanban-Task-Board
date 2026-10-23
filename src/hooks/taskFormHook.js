import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../slices/taskSlice";
import { useForm } from "react-hook-form";
import { setDefaultValue, setIsFromOpen } from "../slices/formSlice";
import { useMemo } from "react";
const useTaskForm = () => {

    let isOpen = useSelector((state) => state.form.isOpen)
    let defaultValue = useSelector((state) => state.form.defaultValue)
    let { search, priority, status } = useSelector((state) => state.filter)

    let { register, handleSubmit, reset, formState: { errors } } = useForm(
        {
            mode: "onChange",
            values: defaultValue || {}
        }
    );

    let dispatch = useDispatch()
    let tasks = useSelector((state) => state.tasks.tasks)

    let addTaskHandle = (data) => {
        let addNewTask = [...tasks, { ...data, id: Date.now() }]

        if (defaultValue) {
            dispatch(updateTask({ id: defaultValue.id, data }))
            dispatch(setDefaultValue(null))
            dispatch(setIsFromOpen())

            return
        }
        dispatch(addTask(addNewTask))
        dispatch(setIsFromOpen())
        reset()
    }

    let filteredData = useMemo(() => {
        let data = tasks

        if (search !== "") {
            data = data.filter((task) => task.title.toLowerCase().startsWith(search.toLowerCase()))
        }

        if (status !== "All") {
            data = data.filter((task) => task.status === status)
        }

        if (priority !== "All") {
            data = data.filter((task) => task.priority === priority)
        }

        return data

    }, [search, priority, status, tasks])

    return {
        register, handleSubmit, errors,
        tasks, addTaskHandle, dispatch, isOpen, filteredData
    }
}

export default useTaskForm