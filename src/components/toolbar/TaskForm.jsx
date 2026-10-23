import { X } from "lucide-react";
import useTaskForm from "../../hooks/taskFormHook";
import { useDispatch, useSelector } from "react-redux";
import { setDefaultValue, setIsFromOpen } from "../../slices/formSlice";

const TaskForm = ({ heading = "Add task" }) => {
  let { register, handleSubmit, errors, addTaskHandle } = useTaskForm();
  let isOpen = useSelector((state) => state.form.isOpen);
  let dispatch = useDispatch();

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`}>
      <div
        onClick={() => {
          dispatch(setDefaultValue(null))
          dispatch(setIsFromOpen())
        }}
        className={`absolute inset-0 bg-black/60 transition-opacity duration-200 ${isOpen ? "opacity-100" : "opacity-0"
          }`}
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full flex-col border-l border-white/5 bg-[#101010] transition-transform duration-200 sm:w-[420px] ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
          <h2 className="text-lg font-medium">{heading}</h2>
          <button
            onClick={() => {
              dispatch(setDefaultValue(null))
              dispatch(setIsFromOpen())
            }}
            className="grid h-9 w-9 place-items-center rounded-lg text-neutral-400 hover:bg-white/5 hover:text-white"
            aria-label="Close form"
          >
            <X size={18} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit(addTaskHandle)}
          className="flex flex-1 flex-col overflow-y-auto"
        >
          <div className="flex flex-1 flex-col gap-5 p-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="task-title" className="text-sm text-neutral-300">
                Title
              </label>
              <input
                {...register("title", {
                  required: "Title is required",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 letters required",
                  },
                  maxLength: {
                    value: 50,
                    message: "Maximum 50 letters allowed",
                  },
                })}
                id="task-title"
                type="text"
                placeholder="Enter task title"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-neutral-200 placeholder:text-neutral-500 outline-none focus:border-blue-500 [color-scheme:dark]"
              />
              {errors.title && (
                <p className="text-[12px] text-red-500">{errors.title.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="task-description" className="text-sm text-neutral-300">
                Description
              </label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                  minLength: {
                    value: 10,
                    message: "Minimum 10 letters required",
                  },
                  maxLength: {
                    value: 500,
                    message: "Maximum 500 letters allowed",
                  },
                })}
                id="task-description"
                rows={4}
                placeholder="Write a short description"
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-neutral-200 placeholder:text-neutral-500 outline-none focus:border-blue-500 [color-scheme:dark]"
              />
              {errors.description && (
                <p className="text-[12px] text-red-500">{errors.description.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="task-status" className="text-sm text-neutral-300">
                Status
              </label>
              <select
                {...register("status", {
                  required: "Status is required",
                })}
                id="task-status"
                defaultValue="todo"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-neutral-200 outline-none focus:border-blue-500 [color-scheme:dark]"
              >
                <option className="bg-[#161616] text-neutral-200" value="todo">
                  To Do
                </option>
                <option className="bg-[#161616] text-neutral-200" value="in-progress">
                  In Progress
                </option>
                <option className="bg-[#161616] text-neutral-200" value="completed">
                  Completed
                </option>
              </select>
              {errors.status && (
                <p className="text-[12px] text-red-500">{errors.status.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="task-priority" className="text-sm text-neutral-300">
                Priority
              </label>
              <select
                {...register("priority", {
                  required: "Priority is required",
                })}
                id="task-priority"
                defaultValue="medium"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-neutral-200 outline-none focus:border-blue-500 [color-scheme:dark]"
              >
                <option className="bg-[#161616] text-neutral-200" value="Low">
                  Low
                </option>
                <option className="bg-[#161616] text-neutral-200" value="Medium">
                  Medium
                </option>
                <option className="bg-[#161616] text-neutral-200" value="High">
                  High
                </option>
              </select>
              {errors.priority && (
                <p className="text-[12px] text-red-500">{errors.priority.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="task-due-date" className="text-sm text-neutral-300">
                Due date
              </label>
              <input
                {...register("dueDate", {
                  required: "Due date is required",
                })}
                id="task-due-date"
                type="date"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-neutral-200 outline-none focus:border-blue-500 [color-scheme:dark]"
              />
              {errors.dueDate && (
                <p className="text-[12px] text-red-500">{errors.dueDate.message}</p>
              )}
            </div>
          </div>

          <div className="flex gap-3 border-t border-white/5 p-5">
            <button
              type="button"
              onClick={() => {
                dispatch(setDefaultValue(null))
                dispatch(setIsFromOpen())
              }}
              className="flex-1 rounded-xl border border-white/10 px-4 py-2.5 text-sm text-neutral-300 hover:bg-white/5"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black hover:bg-neutral-200"
            >
              Save task
            </button>
          </div>
        </form>
      </aside>
    </div>
  );
};

export default TaskForm;